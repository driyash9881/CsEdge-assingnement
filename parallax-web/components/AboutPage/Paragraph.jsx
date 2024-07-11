'use client';
import React, { useEffect, useRef } from "react";
import styles from './styles.module.scss'
import { motion, useScroll } from "framer-motion";

export default function Word({value}){ 
  const element = useRef(null);
  const {scrollYProgress} = useScroll({
    target: element,
    offset:['start 0.9' , 'start 0.25']
 
  })

  useEffect(()=>{
    scrollYProgress.on('change' , e=> console.log(e))
  },[])
  return(
    <motion.p className={styles.p}
    ref={element}
    style={{opacity:scrollYProgress}}
    >
      {value}
    </motion.p>
  )
}