import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { motion } from "motion/react"

function Skill() {
    return (
        <div className=' my-10 lg:px-80 px-10'>
            <motion.h1 
             initial={{y:-20,opacity:0}}
             whileInView={{opacity:1,y:0}}
             transition={{duration:0.5,delay:0.5}}
            className='text-4xl text-center'>Technologies</motion.h1>
            <div className='text-2xl lg:flex my-10'>
                <motion.h2 
                initial={{x:-20,opacity:0}}
                whileInView={{opacity:1,x:0}}
                transition={{duration:1,delay:1}}
                className='font-thin text-center mb-4'>Frontend</motion.h2>
                <motion.div 
                initial={{x:20,opacity:0}}
                whileInView={{opacity:1,x:0}}
                transition={{duration:1,delay:1.1}}
                className=' lg:w-2/3 lg:ms-20 flex mx-10   justify-between  text-center'>
                    <FaHtml5   />
                    <FaCss3Alt   />
                    <FaNodeJs />
                    <FaReact />
                    <FaBootstrap />
                    <RiTailwindCssFill />
                </motion.div>
            </div>
            <motion.hr
            initial={{y:-10,opacity:0}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:1,delay:0.3}}
            ></motion.hr>
            <div className='text-2xl lg:flex my-10'>
                <motion.h2
                initial={{x:-20,opacity:0}}
                whileInView={{opacity:1,x:0}}
                transition={{duration:1,delay:1}}
                className='font-thin text-center  '>Backend</motion.h2>
                <motion.span
                initial={{x:20,opacity:0}}
                whileInView={{opacity:1,x:0}}
                transition={{duration:1,delay:1.1}}
                className='lg:w-1/3 lg:ms-20 mx-10 flex justify-around '>
                    <SiExpress className='mt-4 ' />
                    <DiNodejs className='text-6xl ' />
                </motion.span>
            </div>
            <motion.hr
            initial={{y:-10,opacity:0}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:1,delay:0.3}}
            ></motion.hr>

            <div className='text-2xl lg:flex my-10'>
                <motion.h2
                initial={{x:-20,opacity:0}}
                whileInView={{opacity:1,x:0}}
                transition={{duration:1,delay:1}}
                className='font-thin text-center mb-4'>Database</motion.h2>
                <motion.span
                initial={{x:20,opacity:0}}
                whileInView={{opacity:1,x:0}}
                transition={{duration:1,delay:1.1}}
                className='lg:w-1/3 lg:ms-20 mx-10 flex justify-around '>
                <SiMysql className='text-4xl  ' />
                <SiMongodb className='mt-2  ' />   
                </motion.span>
            </div>

        </div>
    );
}

export default Skill;