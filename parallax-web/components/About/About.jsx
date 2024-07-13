'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { motion } from 'framer-motion';
import useMousePosition from './useMousePosition';

const About = () => {
  const textRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className={styles.main}>
      <motion.div 
        className={styles.mask}
        style={{
          maskPosition: `${x - (size / 2)}px ${y - (size / 2)}px`,
          maskSize: `${size}px`,
        }}
        animate={{
          maskPosition: `${x - (size / 2)}px ${y - (size / 2)}px`,
          maskSize: `${size}px`,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
      >
        <p 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}
        >
          A visual designer - with skills that haven't been replaced by A.I (yet) - making good shit only if the paycheck is equally good.
        </p>
      </motion.div>

      <div className={styles.body}>
        <p ref={textRef} className="reveal-type" data-bg-color="black" data-fg-color="white">
          Systematically ushering in a new generation of amazing designers from across the globe
          <br />
          <br />
          designers from across the globe
        </p>
      </div>
    </main>
  );
};

export default About;
