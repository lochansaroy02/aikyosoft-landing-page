import React from 'react'
import background from '../assets/bg.jpg'
export const Hero = () => {
    return (
        <div id='home' className='flex relative  w-full h-1/2   justify-center lg:w-screen lg:h-screen mt-12 items-center'>
            <div className='absolute lg:w-full w-full h-full  -z-10 lg:h-full object-cover bg-neutral-800'>
                <img src={background} alt="background" className='absolute w-full blur-sm opacity-15 -z-10 h-full object-cover' />
            </div>
            <div className='flex flex-col gap-4 items-center h-screen    text-neutral-200 lg:justify-center justify-center  p-10'>
                <h1 className='lg:text-6xl flex flex-col items-center lg:gap-2 lg:flex-row  text-4xl font-spectral font-bold motion-preset-slide-right motion-duration-2000  '>
                    <span>Your Vision,
                        </span>
                        
                        <span>
                            Our Innovation
                            </span>
                </h1>
                <p className='lg:text-2xl    font-faculty  motion-preset-slide-left motion-duration-2000  '>Design. Develop. Deliver. Digitally Perfect.</p>
          


                <button href="#_" class="rounded-full relative inline-flex group items-center justify-center  py-3 px-6  m-1 cursor-pointer border-b-4 border-l-2 active:border-slate-600   bg-gradient-to-tr from-slate-600 to-slate-500 border-slate-700 text-white overflow-hidden">
                    <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                    <span class="relative font-poppins text-sm lg:text-lg">
                        Get Started
                    </span>
                </button>
            </div>



        </div>
    )
}
