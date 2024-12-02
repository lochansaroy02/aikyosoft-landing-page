import React from 'react'
import logo from '../assets/logo.png'
import { motion } from "motion/react"
const Navbar = () => {

    const element = ["Home", "About", "Services", "Contact"]
    return (
        <div className=' flex fixed top-0 w-screen border-b z-40  bg-slate-900 border-neutral-800 justify-between items-center p-4'>
            <div className='w-48 h-fit'>
                <img className='object-cover  w-[75%] h-[75%]' src={logo} alt="logo" />
            </div>
            <div className='flex gap-4 mr-12  '>
                {
                    element.map((item, index) => (
                        <li initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className='hover:bg-slate-500 hover:text-slate-200 active:bg-slate-500 font-poppins active:text-white ease-in-out duration-300 px-2 py-1 rounded-md  text-slate-300  text-sm list-none cursor-pointer' key={index}>{item}</li>
                    ))
                }
            </div>
        </div>
    )
}

export default Navbar