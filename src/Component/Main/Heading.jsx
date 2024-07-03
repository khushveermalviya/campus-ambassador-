import React from 'react'
import RotatingText from 'react-rotating-text';
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import Count from './Count';
export default function Heading() {
    const words = [`Win from the Biggest Prize Pool of ₹5,00,000/-`,"Registrations open till 14th August, 2024 11:59 PM"];
  
  
    return (
    <div>
<section className="relative bg-cover bg-center h-full flex flex-col pt-40" style={{ backgroundImage: "url('/bg.png')", backgroundSize: 'cover' }}>
           <div className=" inset-0 bg-black bg-opacity-50 "></div>
      <div className="relative z-10 flex items-center justify-center  h-full gap-7">
        <div className="text-center px-4 sm:px-6 lg:px-8 w-full lg:w-1/2 gap-6 ">
        <p className=" hidden text-xl w-full text-white sm:text-xl lg:text-2xl mb-8 lg:block bg-slate-500 rounded-full border-2 border-yellow-300">
  <RotatingText items={words} /> 
</p>
        <h1 className="text-white text-6xl sm:text-4xl lg:text-8xl mb-4 bg-gradient-to-r from-amber-200 via-amber-200 to-amber-400 bg-clip-text text-transparent" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.8)' }}>
  MUJ <span className='font-bold'>HACK</span> <span className='bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent'>2.0</span>
</h1>
<p className='text-2xl text-white mb-7 w-full '>Join the ultimate tech showdown: a hackathon where your ideas ignite, your code transforms, and your innovations shine!</p>
         
         
         <a className="  mb-7 bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-300 mt-6 mb-4"
   href="https://forms.gle/WgQjJWdB7bgGH6fw5"
   role="button"
   >Apply Now</a>
   <p className='text-2xl text-white mt-6'> Registrations open till 14th August, 2024 11:59 PM </p>
   
   <div>

   </div>
        </div>
         </div>
         <div className="flex items-center justify-center w-full mt-6 gap-5">
        <p className='text-white'>Powered By</p>
        <img className='w-20 h-10 bg-white rounded-lg p-2' src="/sponsor-6.png" alt="logo" />
</div>
<Count/>
      </section>

    </div>


  
  )
}
