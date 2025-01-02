import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='flex my-10 mx-10'>
      <div className=' w-4/5' >Harsh Dagar</div>
      <div className='flex space-x-4 text-xl'>
       <a  className='hover:text-2xl hover:ease-in duration-100' href='https://www.linkedin.com/in/harsh-dagar-716125256/'><FaLinkedin  /> </a> 
       <a  className='hover:text-2xl hover:ease-in duration-100' href='https://github.com/harshdagar0' ><FaGithub /></a>
       <a  className='hover:text-2xl hover:ease-in duration-100' href='https://www.instagram.com/harshdagar_0/'><FaInstagram /></a>
      </div>
    </div>
  )
}

export default Navbar



