import React from 'react'
import background from '../assets/bg.jpg'
export const Hero = () => {
    return (
        <div className='flex relative  justify-center w-screen h-screen mt-12 items-center'>
            <div className='absolute w-full -z-10 h-full object-cover bg-neutral-800'>
                <img src={background} alt="background" className='absolute w-full blur-sm opacity-15 -z-10 h-full object-cover' />
            </div>
            <div className='flex flex-col gap-4 items-center   text-neutral-200 justify-center mt-12  p-10'>
                <h1 className='text-6xl   font-spectral font-bold motion-preset-slide-right motion-duration-2000  '>
                    Your Vision, Our Innovation
                </h1>
                <p className='text-2xl  font-faculty  motion-preset-slide-left motion-duration-2000  '>Design. Develop. Deliver. Digitally Perfect.</p>
                {/* <button className='bg-neutral-800 text-xl hover:bg-neutral-900 hover:transition-all duration-300 mt-8  motion-preset-slide-up motion-duration-1000 text-white px-6 py-3 rounded-xl  '>
                    <a to="/">
                        Get Started
                    </a>
                    
                </button> */}


                <a href="#_" class="rounded-full relative inline-flex group items-center justify-center  py-3 px-6  m-1 cursor-pointer border-b-4 border-l-2 active:border-slate-600   bg-gradient-to-tr from-slate-600 to-slate-500 border-slate-700 text-white overflow-hidden">
                    <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                    <span class="relative font-poppins text-lg">
                        Get Started
                    </span>
                </a>
            </div>



        </div>
    )
}
