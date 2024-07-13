import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import { motion, useMotionValue } from 'framer-motion';
import styles from './styles.module.scss';

export default function Index() {
  const canvasRef = useRef(null);
  const cursorX = useMotionValue(-100); // Initial off-screen position for the custom cursor
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    const Engine = Matter.Engine;
    const World = Matter.World;
    const Bodies = Matter.Bodies;
    const Body = Matter.Body;

    const engine = Engine.create();
    engine.world.gravity.y = 0;

    const items = [];
    let lastMouseX = -1;
    let lastMouseY = -1;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    function createCanvas(width, height) {
      canvas.width = width;
      canvas.height = height;
    }

    function addBoundaries() {
      const thickness = 50;
      const width = canvas.width;
      const height = canvas.height;

      World.add(engine.world, [
        Bodies.rectangle(width / 2, height - thickness / 2, width, thickness, {
          isStatic: true,
        }),
        Bodies.rectangle(width / 2, thickness / 2, width, thickness, {
          isStatic: true,
        }),
        Bodies.rectangle(thickness / 2, height / 2, thickness, height, {
          isStatic: true,
        }),
        Bodies.rectangle(width - thickness / 2, height / 2, thickness, height, {
          isStatic: true,
        }),
      ]);
    }

    class Item {
      constructor(x, y, imagePath) {
        const options = {
          frictionAir: 0.075,
          restitution: 0.25,
          density: 0.002,
          angle: Math.random() * Math.PI * 2,
        };
        this.body = Bodies.rectangle(x, y, 220, 250, options);
        World.add(engine.world, this.body);

        this.image = new Image();
        this.image.src = imagePath;
        this.image.onload = () => {
          this.loaded = true;
          this.render();
        };
      }

      render() {
        if (!this.loaded) return;
        context.save();
        context.translate(this.body.position.x, this.body.position.y);
        context.rotate(this.body.angle);
        context.drawImage(this.image, -75, -75, 220, 260);
        context.restore();
      }

      update() {
        this.render();
      }
    }

    function setup() {
      createCanvas(window.innerWidth, window.innerHeight); // Initialize canvas with full window size
      addBoundaries();

      for (let i = 0; i < 12; i++) {
        const x = Math.random() * (canvas.width - 200) + 100;
        const y = Math.random() * (canvas.height - 200) + 100;
        items.push(new Item(x, y, `/assets/model${i + 1}.jpeg`));
      }
    }

    function draw() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      Engine.update(engine);
      items.forEach((item) => item.update());
    }

    function mouseMoved(event) {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      cursorX.set(mouseX); // Update custom cursor position
      cursorY.set(mouseY);

      if (Math.hypot(mouseX - lastMouseX, mouseY - lastMouseY) > 10) {
        lastMouseX = mouseX;
        lastMouseY = mouseY;

        items.forEach((item) => {
          if (Math.hypot(mouseX - item.body.position.x, mouseY - item.body.position.y) < 150) {
            const forceMagnitude = 0.05;
            Body.applyForce(item.body, item.body.position, {
              x: (mouseX - item.body.position.x) * -forceMagnitude,
              y: (mouseY - item.body.position.y) * -forceMagnitude,
            });
          }
        });
      }
    }

    function handleResize() {
      // Update canvas dimensions based on window inner dimensions
      const width = window.innerWidth;
      const height = window.innerHeight;
      createCanvas(width, height);

      // Adjust Matter.js boundaries accordingly
      Matter.Events.on(engine, 'beforeUpdate', () => {
        items.forEach((item) => {
          const { x, y } = item.body.position;
          const halfWidth = 75;
          const halfHeight = 75;

          if (x - halfWidth < 0) {
            Body.setPosition(item.body, { x: halfWidth, y });
          } else if (x + halfWidth > width) {
            Body.setPosition(item.body, { x: width - halfWidth, y });
          }

          if (y - halfHeight < 0) {
            Body.setPosition(item.body, { x, y: halfHeight });
          } else if (y + halfHeight > height) {
            Body.setPosition(item.body, { x, y: height - halfHeight });
          }
        });
      });
    }

    setup();
    handleResize();

    function animate() {
      draw();
      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('mousemove', mouseMoved);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', mouseMoved);
      window.removeEventListener('resize', handleResize);
      Matter.Engine.clear(engine);
      Matter.World.clear(engine.world, false);
    };
  }, []);

  return (
    <div className={styles.body} id='our-work'>
      <motion.h1 className={styles.head}>Check our latest Work!</motion.h1>
      <canvas ref={canvasRef} style={{ marginTop: '-32rem' }}></canvas>
    </div>
  );
}
