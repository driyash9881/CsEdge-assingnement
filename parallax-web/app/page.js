'use client'
import Image from "next/image";
import styles from "./page.module.css";
import ZoomParallax from '../components/ZoomParallax/Index'
import TextScroll from '../components/TextScroll/Index'
import Word from "@/components/AboutPage/Word";
import AboutPage from "@/components/AboutPage/Paragraph";
import OurModels from '../components/AboutPage/Paragraph'
import ImageStragger from '../components/ImageStragger/Index'
import Lenis from 'lenis'
import { useEffect } from "react";
import Footer from "./Footer";

const paragraph = 'Lorem ipsum is placeholder Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'

export default function Home() {
  useEffect( () => {
    const lenis = new Lenis()
    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)

    }
    requestAnimationFrame(raf)
  }, [])
  return (
  <main className={styles.main}>
     {/* HomeScreen */}
    <TextScroll/> 

    {/* Image Gallery     */}
    <ZoomParallax/>

    {/* About US */}
    <div style={{height:'10vh'}}></div>
    <Word value={paragraph} />
    <div style={{height:'20vh'}}></div>

    {/* What we do */}
    <ImageStragger/>
    <Footer/>
  </main>

  );
}
