'use client'
import { easeInOut, motion, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import image from '../../public/assets/model1.jpeg'
import Image from 'next/image'

export default function Paragraph({ value }) {
  const elements = useRef(null);
  const { scrollYProgress } = useScroll({
    target: elements,
    offset: ['start 0.9', 'start 0.25']
  });
  const x = useTransform(scrollYProgress, [0, 1], ['10%', '0%']); // Paragraph slides in from right

 
  const y = useTransform(scrollYProgress, [1, 0], ['-20rem', '90rem'], { ease: easeInOut } );

  
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);




  const words = value.split(' ');
  return (
    <div className={styles.container}>
      
      <motion.h1   
      style={{ x, opacity }}
      className={styles.head}>About US</motion.h1>
      <motion.div className={styles.paragraph} style={{ x }} ref={elements}>
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + (1 / words.length);
          console.log(start, end);
          return (
            <span key={i}>
              <Word className={styles.twodiv} range={[start, end]} progress={scrollYProgress}>
                {word}
              </Word>
            </span>
          );
        })}
      </motion.div>
      <motion.div style={{y}} className={styles.image}>
        <Image  src={image} alt="model" />
      </motion.div>
    </div>
  );
}

const Word = ({ children, range, progress, className }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className={`${styles.word} ${className}`}>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{ opacity }}>
        {children}
      </motion.span>
    </span>
  );
}
