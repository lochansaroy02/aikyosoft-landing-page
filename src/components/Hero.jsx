import React from 'react'
import background from '../assets/bg.jpg'
export const Hero = () => {
    return (
        <div className='flex relative  w-screen h-screen mt-12 items-center'>
            <div className='absolute w-full -z-10 h-full object-cover bg-neutral-800'>
                <img src={background} alt="background" className='absolute w-full blur-sm opacity-15 -z-10 h-full object-cover' />
            </div>
            <div className='flex flex-col gap-4 items-center   text-neutral-200 justify-center mt-12  p-10'>
                <h1 className='text-[5rem]  font-bold  '>
                    This is heading
                </h1>
                <p className='text-xl  w-3/4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odit? Modi harum distinctio tenetur eaque? Repudiandae facere optio quis, unde ipsum repellendus reprehenderit omnis itaque? Similique itaque dolorem excepturi possimus.</p>
                <button className='bg-neutral-800 text-xl  text-white px-8 py-4 rounded-full'>
                    <a to="/">
                        Get Started
                    </a>
                </button>
            </div>



        </div>
    )
}
