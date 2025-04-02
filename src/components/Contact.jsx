import React from 'react';
import ContactForm from './ContactForm';
import { motion } from "motion/react";

function Contact() {
    return (
        <div className='my-10'>
            <motion.h1 
            whileInView={{opacity:1,y:0}}
            initial={{y:-10,opacity:0}}
            transition={{duration:1,delay:0.3}}
            className='text-4xl text-center '>Contact</motion.h1>
            <div 
             className='lg:flex mt-10 mb-10'>
                <motion.div
                 whileInView={{opacity:1,x:0}}
                 initial={{x:-10,opacity:0}}
                 transition={{duration:1,delay:0.3}} 
                className='lg:w-1/2 justify-items-center  lg:border-e mt-4'>
                    <ContactForm />
                </motion.div>
                <motion.div 
                 whileInView={{opacity:1,x:0}}
                 initial={{x:10,opacity:0}}
                 transition={{duration:1,delay:0.3}} 
                 className='lg:px-20 lg:w-1/2 text-center px-4 pt-4 lg:text-start'>
                    <p>Email : <span className='text-slate-400'>dagarh89@gmail.com</span></p>
                    <p>Phone no : +91 9990728546</p>
                    <p>Address : H.No 383,Near baba Haridas,Jharoda Kalan,Najafgarh,New Delhi - 110072</p>
                </motion.div>

            </div>
            <hr className="opacity-20"></hr>
        <div className='my-4 text-center'>
        © 2024 Portfolio
        </div>


        </div>
        
    );
}

export default Contact;