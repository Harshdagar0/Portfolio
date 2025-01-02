import React from 'react';
import { motion } from "motion/react";


function About() {
    return (
        <div className='container mb-10 mt-20 px-7'>
            <motion.h1 
            initial={{y:-20,opacity:0}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.5,delay:0.3}}
            className='text-center  text-4xl'>About <span className='text-slate-400'>Me</span></motion.h1>
            <div className='lg:flex mt-5'>
                <div className='lg:w-1/2 px-5 lg:py-14'>
                    <motion.p
                      initial={{x:-20,opacity:0}}
                      whileInView={{opacity:1,x:0}}
                      transition={{duration:1,delay:0.6}}>
                        Hi, I am Harsh Dagar. I am specialize in MERN stack and have good knowledge of other programming
                        languages ​​like c++,JS. I am pursuing BCA from Trinity Institute of Professional Studies. I have
                        worked as a frontend intern at Business India Company.I love playing video games like BGMI.
                        Let's connect and create something extraordinary together feel free to check out my portfolio or get in touch!
                    </motion.p>
                </div>
                <motion.div
                  initial={{x:20,opacity:0}}
                  whileInView={{opacity:1,x:0}}
                  transition={{duration:1,delay:0.6}}
                className='px-5'>
                  <h2 className='text-center mx-auto text-2xl mt-2'>Education</h2>
                   <h3 className=' mt-1'>Bachelor of Computer Applications</h3>
                   <span className='font-thin'>Trinity Institute of Professional Studies  -Sector 9, Dwarka,New Delhi, Delhi 110075  -2025</span>
                   <h3 className=' mt-1'>Diploma in Computer Applications</h3>
                   <span className='font-thin'>Gro Tech Learn Foundation  -Najafgarh, New Delhi, Delhi, 110043  -2022</span>
                   <h3 className=' mt-1'>10<sup>th</sup> and 12<sup>th</sup></h3>
                   <span className='font-thin'> Navyug Convent Sr. Sec. School  -Sainik Enclave 2, Najafgarh, Delhi, 110072  -2021</span>

                </motion.div>
            </div>



        </div>
    );
}

export default About;