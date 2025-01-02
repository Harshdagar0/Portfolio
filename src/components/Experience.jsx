import React from 'react';
import { motion } from "motion/react";

function Experience() {
    return (
        <div className='my-20 '>
            <motion.h1 
            initial={{y:-10,opacity:0}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.5,delay:0.3}}
             className='text-4xl text-center mb-10'>Experience</motion.h1>
            <div className='lg:flex'>
                <motion.div
                initial={{x:-20,opacity:0}}
                whileInView={{opacity:1,x:0}}
                transition={{duration:1,delay:0.6}}
                className='lg:w-1/2 text-center pt-4 pb-2'>
                    June 2024 - July 2024
                </motion.div>
                <div className='lg:w-1/2 lg:pe-20 '>
                    <motion.h1 
                      initial={{x:20,opacity:0}}
                      whileInView={{opacity:1,x:0}}
                      transition={{duration:1,delay:0.6}}
                     className='lg:text-xl text-center lg:text-start'>Front-end Developer(Intern)  -GO BUSINESS INDIA</motion.h1>
                    <motion.p 
                     initial={{x:20,opacity:0}}
                     whileInView={{opacity:1,x:0}}
                     transition={{duration:1,delay:0.6}}
                    
                     className='text-slate-400 px-4 lg:px-0 text-center lg:text-start mb-3'>In Go business india, I worked on 3 projects, one was their
                      client's project and other two was clone of Myntra and MakeMyTrip</motion.p>
                    <motion.div
                     initial={{y:10,opacity:0}}
                     whileInView={{opacity:1,y:0}}
                     transition={{duration:1,delay:0.6}}
                      className='text-center lg:text-start pt-4'>
                        <span className='border py-1 px-2 rounded text-purple-800 bg-neutral-900 mx-2 '>HTML</span>
                        <span className='border py-1 px-2 rounded text-purple-800 bg-neutral-900 mx-2 '>CSS</span>
                        <span className='border py-1 px-2 rounded text-purple-800 bg-neutral-900 mx-2 '>Javascript</span>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Experience;