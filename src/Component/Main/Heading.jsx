import React from 'react'
import RotatingText from 'react-rotating-text';
export default function Heading() {
    const words = ["Win from the Biggest Prize Pool of ₹5,00,000/-","Registrations open till 14th August, 2024 11:59 PM"];
  return (
    <div>
           <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/bg.png')" }}>
  <p className="text-red text-lg sm:text-xl lg:text-2xl mb-8">
          <RotatingText items={words} /> 
        </p>
<h1>MUJ HACK 2.0</h1>
<p>Join the ultimate tech showdown: a hackathon where your ideas ignite, your code transforms, and your innovations shine!</p>
<button>sdfgsdfg</button>
<p> sdfgsd    </p>
<p>   sdfgsdfg  </p>    
</section>
    </div>

  )
}
