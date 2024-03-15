"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  in: {
    opacity: 1,
    scale: 1,
  },
  out: {
    opacity: 0,
    scale: 1.05,
  },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.2, // Adjusted duration for optimal effect
};

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import LevitatingBackground from "./levitating-background";

gsap.registerPlugin(ScrollTrigger);


const AnimatedPage = ({ children }) => {
  // <motion.div
  //   // initial={{
  //   //   x: "95vw", // set 100vw to 95vw
  //   // }}
  //   animate="in"
  //   exit="out"
  //   variants={pageVariants}
  //   transition={pageTransition}
  // >
  // useEffect(() => {
  //   gsap.to('.levitating-background', {
  //     scrollTrigger: {
  //       trigger: '.content', // This should be the class of the content that scrolls over the background
  //       start: 'top top', // Start the animation when the top of the content hits the top of the viewport
  //       end: 'bottom top', // End when the bottom of the content hits the top of the viewport
  //       scrub: true, // Smooth scrubbing effect tied to scroll position
  //     },
  //     y: '30%', // Adjust the levitation height as needed
  //     ease: 'none'
  //   });
  // }, []);

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: '.content',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    })
    .fromTo('.levitating-background', 
      { 
        
        // rotation: 3, 
        scale: 1.1, 
        opacity: .1, 
        ease: 'none' 
      },
      { 
        y: '-30%', 
        opacity: 1 // Fade in effect as you scroll down
      });
  }, []);
  



  return <div>
  <LevitatingBackground className="levitating-background" style={{ backgroundImage: `url('img/Heado.png')` }} />
    <div className="content">{children}</div>
  </div>
};

export default AnimatedPage;
