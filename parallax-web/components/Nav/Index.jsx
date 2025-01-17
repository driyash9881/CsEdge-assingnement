'use client';
import React from 'react';
import styles from './styles.module.scss';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Index = () => {
  // Declare items as a constant inside the component
  const items = [
    {
      title: 'Home',
      href: "#home"
    },
    {
      title: 'Image Gallery',
      href: "#image-gallery"
    },
    {
      title: 'About Us',
      href: "#about-us"
    },
    {
      title: 'Our Work',
      href: "#our-work"
    }
  ];
  
  const perspective = {
    initial: {
      opacity: 0,
      rotateX: 90,
      translateY: 80,
      translateX: -20,
    },
    enter: (i) => ({
      opacity: 1,
      rotateX: 0,
      translateY: 0,
      translateX: 0,
      transition: {
        duration: 0.65, 
        delay: 0.5 + (i * 0.1), 
        ease: [.215, .61, .355, 1],
        opacity: { duration: 0.35 }
      }
    }),
    exit: {
      opacity: 0,
      transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] }
    }
  }

  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {items.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={perspective}
            animate="enter"
            exit="exit"
            initial="initial"
          >
            <Link href={item.href} className={styles.linkContainer}>{item.title}</Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Index;
