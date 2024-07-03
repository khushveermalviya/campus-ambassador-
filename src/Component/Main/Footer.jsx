import React from 'react'

import { IoEarthOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";  
import { FaLinkedin } from "react-icons/fa6";
import './index.css'; // Adjust the path according to your file structure
export default function Footer() {
  return (
<div className='flex items-center flex-col w-full h-full bg-hack footer-list mt-10'>
<ul className="hidden items-center gap-10 text-2xl flex-col lg:flex-row footer-list lg:flex  mt-10" >
    <li className='cursor-pointer font-bold hover:text-violet-700 ease-in duration-300'>Home</li>
    <li className='cursor-pointer font-bold hover:text-violet-700 ease-in duration-300'>About</li>
    <li className='cursor-pointer font-bold hover:text-violet-700 ease-in duration-300'>Timeline</li>
    <li className='cursor-pointer font-bold hover:text-violet-700 ease-in duration-300'>Team</li>
    <li className='cursor-pointer font-bold hover:text-violet-700 ease-in duration-300'>Campus Ambassado</li>
    <li className='cursor-pointer font-bold hover:text-violet-700 ease-in duration-300'>Gallery</li>
    <li className='cursor-pointer font-bold hover:text-violet-700 ease-in duration-300'>Contact Us</li>
    <li className='cursor-pointer font-bold hover:text-violet-700 ease-in duration-300'>FAQ</li>
</ul>
  <img className='w-40 h-32' src="/HackX.png" alt="logo" />
    <div className='flex items-center gap-3 mb-5 footer-list '>
    <IoEarthOutline />
    <FaInstagram />
    <FaLinkedin />
    </div>
<p className='flex footer-list m-6 text-center gap-3'> ©2024 MUJHackX, All rights reserved.</p>


</div>


  
  )
}
