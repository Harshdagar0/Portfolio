import React from 'react';
import ContactForm from './ContactForm';
import { motion } from "motion/react";

function Contact() {
  return (
    <div id="contact" className='my-16 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 px-6 py-10 lg:px-10'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: -10, opacity: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.35, delay: 0.05 }}
        className='text-center text-4xl'
      >
        Contact
      </motion.h1>
      <div className='mb-10 mt-8 gap-8 rounded-xl border border-zinc-800 bg-zinc-900/70 p-5 lg:flex'>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: -10, opacity: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className='lg:w-1/2 lg:border-r lg:border-zinc-800 lg:pr-8'
        >
          <ContactForm />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: 10, opacity: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className='mt-6 space-y-3 text-zinc-300 lg:mt-0 lg:w-1/2 lg:pl-2'
        >
          <p>Email: <span className='text-zinc-400'>dagarh89@gmail.com</span></p>
          <p>Phone: +91 9990728546</p>
          <p>Address: H.No 383, Near Baba Haridas, Jharoda Kalan, Najafgarh, New Delhi - 110072</p>
        </motion.div>
      </div>
      <hr className="border-zinc-800/70"></hr>
      <div className='mt-4 text-center text-sm text-zinc-500'>
        (c) 2026 Portfolio
      </div>
    </div>
  );
}

export default Contact;
