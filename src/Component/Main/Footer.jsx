import React from 'react'

import { IoEarthOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";  
import { FaLinkedin } from "react-icons/fa6";
import './index.css'; // Adjust the path according to your file structure
export default function Footer() {
  return (
<div className='flex items-center flex-col w-full h-full bg-hack footer-list mt-10 border-t-4 border-white'>
<ul className="hidden items-center gap-10 text-xl flex-col lg:flex-row footer-list lg:flex  mt-10" >
    <li className='cursor-pointer font-bold   '>Home</li>
    <li className='cursor-pointer font-bold   '>About</li>
    <li className='cursor-pointer font-bold   '>Timeline</li>
    <li className='cursor-pointer font-bold   '>Team</li>
    <li className='cursor-pointer font-bold   '>Campus Ambassador</li>
    <li className='cursor-pointer font-bold   '>Gallery</li>
    <li className='cursor-pointer font-bold   '>Contact Us</li>
    <li className='cursor-pointer font-bold   '>FAQ</li>
</ul>
  <img className='w-64 h-28 cursor-pointer pt-9' src="/logo.svg" alt="logo" />
  <div className='flex items-center gap-3 mb-5 footer-list mt-4'>

<a className='cursor-pointer'><IoEarthOutline size="24px" /></a>  
<a className='cursor-pointer'><FaInstagram size="24px" /></a>   
<a className='cursor-pointer'><FaLinkedin size="24px" /></a>

</div>
     
<p className='flex footer-list m-6 text-center gap-3'> ©2024 MUJHackX, All rights reserved.</p>


</div>


  
  )
}
