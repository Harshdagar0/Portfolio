import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { PiReadCvLogoFill } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className='sticky top-4 z-20 mt-6'>
      <div className='flex items-center justify-between rounded-2xl border border-zinc-800/80 bg-zinc-900/70 px-5 py-3 backdrop-blur'>
        <div className='text-lg font-semibold tracking-wide'>Harsh Dagar</div>
        <div className='flex gap-2 text-xl'>
          <a
            className='rounded-lg border border-transparent p-2 transition duration-200 hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-800/80'
            href='https://www.linkedin.com/in/harsh-dagar-716125256/'
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            className='rounded-lg border border-transparent p-2 transition duration-200 hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-800/80'
            href='https://github.com/harshdagar0'
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            className='rounded-lg border border-transparent p-2 transition duration-200 hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-800/80'
            href='https://www.instagram.com/harshdagar_0/'
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            className='rounded-lg border border-transparent p-2 transition duration-200 hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-800/80'
            href='/Harsh_Resume.pdf'
            target="_blank"
            rel="noreferrer"
            aria-label="Resume"
          >
            <PiReadCvLogoFill />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
