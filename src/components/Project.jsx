import React from 'react';
import { motion } from "motion/react";
import { Link } from 'react-router-dom';

function Project() {
    return (
        <div className='my-20 '>
            < motion.h1 
            initial={{y:-20,opacity:0}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.5,delay:0.5}}className='text-4xl text-center mb-10'>Project</motion.h1>
            <marquee className='my-2'>Click on Project name to see project</marquee>
            <div className='lg:flex py-10'>
                <motion.div 
                 initial={{x:-20,opacity:0}}
                 whileInView={{opacity:1,x:0}}
                 transition={{duration:1,delay:0.6}}
                 className='lg:w-1/2 text-2xl text-center pt-4 pb-2'>
                    <a href='https://doctor-appointment-sigma-ruby.vercel.app/'  target="_blank"> Book Appointment  </a>
                </motion.div>
                <div className='lg:w-1/2 lg:pe-20'>
                     
                    <motion.p
                     whileInView={{opacity:1,x:0}}
                     initial={{x:5,opacity:0}}
                     transition={{duration:1,delay:0.6}}
                    className='text-slate-400 px-4 lg:px-0 text-center lg:text-start mb-3'>Actively building a comprehensive online doctor appointment application leveraging the MERN stack. The platform allows patients to easily search for and book appointments with doctors based on their specialization and availability. Simultaneously, it offers a dedicated portal for doctors to register their profiles and clinic details, streamlining their online presence and appointment management.</motion.p>
                    <motion.div 
                    whileInView={{opacity:1,y:0}}
                    initial={{y:10,opacity:0}}
                    transition={{duration:1,delay:0.6}}
                    className='text-center lg:text-start'>
                        <span className='border py-1 px-2 rounded text-purple-800 bg-neutral-900 mx-2 '>React</span>
                        <span className='border py-1 px-2 rounded text-purple-800 bg-neutral-900 mx-2 '>Tailwind CSS</span>
                        <span className='border py-1 px-2 rounded text-purple-800 bg-neutral-900 mx-2 '>Javascript</span><br></br><br></br>
                        <span className='border py-1 px-2 rounded text-purple-800 bg-neutral-900 mx-2 '>Node</span>
                        <span className='border py-1 px-2 rounded text-purple-800 bg-neutral-900 mx-2 '>Express</span>
                        <span className='border py-1 px-2 rounded text-purple-800 bg-neutral-900 mx-2 '>MongoDB</span>
                    </motion.div>
                </div>
            </div>
            <div className='lg:flex'>
                <motion.div 
                 initial={{x:-20,opacity:0}}
                 whileInView={{opacity:1,x:0}}
                 transition={{duration:1,delay:0.3}}
                 className='lg:w-1/2 text-2xl text-center pt-4 pb-2'>
                   <a href='https://e-commerce1-woad.vercel.app/'  target="_blank">E-commerce</a> 
                </motion.div>
                <div className='lg:w-1/2 lg:pe-20'>
                    <motion.p
                     whileInView={{opacity:1,x:0}}
                     initial={{x:10,opacity:0}}
                     transition={{duration:1,delay:0.6}}
                    className='text-slate-400 px-4 lg:px-0 text-center lg:text-start mb-3'>I have created an
                     e-commerce website that includes a login and logout feature. After logging in, users can
                      purchase any product. Purchased products will be displayed on the cart page. The website
                       is fully responsive, and I have used Bootstrap to make it responsive.In this, only one 
                       account can be created with a single email ID.After logging in, we will be able to access
                        the cart page. If we try to access the cart page without logging in, it will redirect us
                         to the login page .</motion.p>
                    <motion.div 
                     initial={{y:20,opacity:0}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:1,delay:0.6}}                    
                    className='text-center lg:text-start'>
                        <span className='border py-1 px-2 rounded text-purple-800 bg-neutral-900 mx-2 '>React</span>
                        <span className='border py-1 px-2 rounded text-purple-800 bg-neutral-900 mx-2 '>Bootstrap</span>
                        <span className='border py-1 px-2 rounded text-purple-800 bg-neutral-900 mx-2 '>Javascript</span>
                        <span className='border py-1 px-2 rounded text-purple-800 bg-neutral-900 mx-2 '>Node</span><br></br><br></br>
                        <span className='border py-1 px-2 rounded text-purple-800 bg-neutral-900 mx-2 '>Express</span>
                        <span className='border py-1 px-2 rounded text-purple-800 bg-neutral-900 mx-2 '>MongoDb</span>
                    </motion.div>
                </div>
            </div>

            <div className='lg:flex pt-10'>
                <motion.div 
                 initial={{x:-20,opacity:0}}
                 whileInView={{opacity:1,x:0}}
                 transition={{duration:1,delay:0.6}}
                 className='lg:w-1/2 text-2xl text-center pt-4 pb-2'>
                    <a href='https://student-guidance.onrender.com/home'  target="_blank"> Student Guidance </a>
                </motion.div>
                <div className='lg:w-1/2 lg:pe-20'>
                     
                    <motion.p
                     whileInView={{opacity:1,x:0}}
                     initial={{x:5,opacity:0}}
                     transition={{duration:1,delay:0.6}}
                    className='text-slate-400 px-4 lg:px-0 text-center lg:text-start mb-3'>In this project I 
                    have used EJS (Embedded JavaScript) templates. It is a templating language that allows 
                    developers to create HTML markup using JavaScript. This project is a completely frontend
                     website</motion.p>
                    <motion.div 
                    whileInView={{opacity:1,y:0}}
                    initial={{y:10,opacity:0}}
                    transition={{duration:1,delay:0.6}}
                    className='text-center lg:text-start'>
                        <span className='border py-1 px-2 rounded text-purple-800 bg-neutral-900 mx-2 '>EJS</span>
                        <span className='border py-1 px-2 rounded text-purple-800 bg-neutral-900 mx-2 '>CSS</span>
                        <span className='border py-1 px-2 rounded text-purple-800 bg-neutral-900 mx-2 '>Bootstrap</span>
                        <span className='border py-1 px-2 rounded text-purple-800 bg-neutral-900 mx-2 '>Javascript</span><br></br><br></br>
                        <span className='border py-1 px-2 rounded text-purple-800 bg-neutral-900 mx-2 '>Node</span>
                        <span className='border py-1 px-2 rounded text-purple-800 bg-neutral-900 mx-2 '>Express</span>
                    </motion.div>
                </div>
            </div>
            


        </div>
    );
}

export default Project;