import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoEarthOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";  
import { FaLinkedin } from "react-icons/fa6";
import './index.css'; // Adjust the path according to your file structure
export default function Footer() {
  return (
<div className='flex items-center flex-col w-full h-full bg-hack footer-list'>
<ul className="flex items-center gap-3 text-2xl flex-col lg:flex-row footer-list" >
    <li >Home</li>
    <li>About</li>
    <li>Timeline</li>
    <li>Team</li>
    <li>Campus Ambassado</li>
    <li>Gallery</li>
    <li>Contact Us</li>
    <li>FAQ</li>
</ul>
  <img className='w-40 h-32' src="/HackX.png" alt="logo" />
    <div className='flex items-center gap-3 mb-5 footer-list '>
    <IoEarthOutline />
    <FaInstagram />
    <FaLinkedin />
    </div>
<p className='flex footer-list m-6 text-center gap-3'> <span className='mt-1'><CiLocationOn /></span>Manipal University Jaipur, Jaipur-Ajmer Express Highway, Dehmi Kalan, Near GVK Toll Plaza, Jaipur, Rajasthan 303007</p>


</div>


  
  )
}
