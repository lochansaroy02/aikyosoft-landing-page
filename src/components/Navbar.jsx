import React from 'react'
import logo from '../assets/logo.png'
import { motion } from "motion/react"
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
const Navbar = () => {
    const [open, setOpen] = useState(false)

    const element = ["Home", "About", "Services", "Contact"]
    return (
        <div className=' flex fixed  backdrop-blur-lg   bg-opacity-50   top-0 w-screen border-b z-40  bg-slate-800 border-slate-400 justify-between items-center p-4'>
            <div className='w-48 h-fit'>
                <img className='object-cover  w-[75%] h-[75%]' src={logo} alt="logo" />
            </div>
            <div className={`gap-4 lg:translate-x-full lg:flex border-t border-l text-xl absolute h-screen first-letter: top-16 right-0 bg-slate-800 lg:border-b border-neutral-400 px-12 py-2  w-fit  ${open ? "translate-x-0" : "translate-x-full"} transition-transform
                duration-300 ease-in-out`}>
                {
                    element.map((item, index) => (
                        <li initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className='hover:bg-slate-500 hover:text-slate-200  active:bg-slate-500 font-poppins active:text-white ease-in-out duration-300 px-2 py-1 rounded-md  text-slate-300  text-sm list-none cursor-pointer' key={index}>{item}</li>
                    ))
                }
            </div>
            <div onClick={() => setOpen(!open)} className='mr-4  flex md:hidden'>
                <div className='flex flex-col gap-2'>
                    <FaBars className='text-slate-300' />
                </div>
            </div>
        </div>
    )
}

export default Navbar