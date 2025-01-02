import React from 'react';
import { motion } from "motion/react"

const container = (delay)=>({
  hidden:{x:-100,opacity:0},
  show:{x:0,opacity:1,
    transition:{
        duration:1,
        delay:delay
  }}

})

function Hero() {
  return (
    <div className='lg:mx-12 mb-10 lg:my-20 lg:flex'>
      <div className='lg:w-1/2 '>
        <motion.h1
        variants={container(0)}  
        initial="hidden"
        animate="show"
        className='font-thin text-4xl lg:text-7xl ms-10 lg:ms-16 pt-16'>Harsh Dagar</motion.h1>
        <motion.h2 
        variants={container(0.5)}  
        initial="hidden"
        animate="show"
        className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent
         bg-clip-text ms-10 lg:ms-16 mt-2 lg:mt-4 text-2xl lg:text-4'>Full Stack Developer</motion.h2>
        <motion.p 
        variants={container(1)}  
        initial="hidden"
        animate="show"
        className='mx-10  lg:mx-16 mt-2'>  I am pursuing BCA from trinity Institute of professional studies.
          I am skilled in MERN stack and have good knowledge of other programming languages like c++,js.
          Last summer i interned in go business india company as a frontend intern and i really enjoyed
          my experience there.  Currently exploring DSA and working on some minor projects.
        </motion.p>
      </div>
      <div className=' lg:w-1/2'>
        <motion.img 
        initial ={{x:100,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:1.2,delay:1.2}}
        className='lg:ms-36 mx-auto w-40 lg:w-1/2 lg:my-auto' src='/image/avatar.png' alt='avtar'></motion.img>
      </div>
    </div>
  );
}

export default Hero; 