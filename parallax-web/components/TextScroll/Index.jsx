  'use client'
  import { useRef, useEffect, useState } from 'react';
  import styles from './styles.module.scss'
  import image from  '../../public/image.jpg'
  import Image from 'next/image'
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/all';
  import Header from '../Header/Index'
  
  const Index = () => {
    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
    let xPercent = 0;
    let direction = -1;

    useEffect( () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.25,
          start: 0,
          end: window.innerHeight,
          onUpdate: e => direction = e.direction * -1
        },
        x: "-500px",
      })
      requestAnimationFrame(animate);
    }, [])

    const animate = () => {
      if(xPercent < -100){
        xPercent = 1;
      }
      else if(xPercent > 0){
        xPercent = -100;
      }
      gsap.set(firstText.current, {xPercent: xPercent})
      gsap.set(secondText.current, {xPercent: xPercent})
      requestAnimationFrame(animate);
      xPercent += 0.1 * direction;
    }

    return (
      <main className={styles.main} id='home'>

        <Image 
          src={image}
          fill={true}
          alt="background"
        />
          <Header />
        <div className={styles.sliderContainer}>
       
          <div ref={slider} className={styles.slider}>
            <p ref={firstText}>See. Click. Admire. See. Click. Admire.</p>
            <p ref={secondText}>See. Click. Admire. See. Click. Admire.</p>
          </div>
        </div>
      </main>
    )
  }

  export default Index