import React from 'react'

export default function Page() {
  return (
    <div  className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/bgm.png')" }}>
        <div className='flex items-center justify-start h-full flex-col mb-50'>
            <div className='w-70 h-45 md:w-100 mb-4 mt-40'>
            <h1 className='mt-10 z-1 hover:scale-125 transition-transform font-extrabold font-mono bg-gradient-to-r from-violet-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent  text-6xl md:text-8xl'>MujHackx</h1>
            </div>
            <p className='z-1 font-mono text-2xl md:text-5xl bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent'>400 year hackthone</p>
            <button className='text-2xl mt-3    bg-white rounded w-50'>Apply Now</button>
            <h2 className='z-1 font-mono text-5xl md:text-5xl mt-5 bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent'> Manipal University Jaipur,Rajasthan</h2>
            </div >

    </div>
  )
}
