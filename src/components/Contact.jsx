import React from 'react'
import { Icon } from '@iconify/react';
const Contact = () => {
    const social = [
        {
            id: 1,
            title: 'Facebook',
            value: 'https://www.facebook.com/example',
            icon: 'mdi:facebook'
        },
        {
            id: 2,
            title: 'Instagram',
            value: 'https://www.instagram.com/example',
            icon: 'mdi:instagram'
        },
        {
            id: 3,
            title: 'LinkedIn',
            value: 'https://www.linkedin.com/example',
            icon: 'mdi:linkedin'
        },
        {
            id: 4,
            title: 'Twitter',
            value: 'https://www.twitter.com/example',
            icon: 'mdi:twitter'
        },
    ]
    const data = [
        {
            id: 1,
            title: 'Email',
            value: 'example@example.com',
            icon: 'mdi:email'
        },
        {
            id: 2,
            title: 'Phone',
            value: '+91 9876543210',
            icon: 'mdi:phone'
        },
        {
            id: 3,
            title: 'Address',
            value: '123 Main Street, Anytown, USA',
            icon: 'mdi:map-marker'
        },
    ]
    return (
        <div id='contact' className='lg:p-10 flex  p-8 flex-col gap-8 justify-center  '>
            <h1 className='lg:text-4xl text-2xl font-spectral font-bold text-center'>Contact</h1>



            <div className='flex lg:flex-row flex-col gap-4 border border-slate-700  p-4 rounded-xl'>


                <div className='lg:w-1/2 p-4 flex flex-col justify-between gap-4'>
                    <div className='flex flex-col gap-4  '>
                        {data.map((item) => (
                            <div key={item.id} className='flex lg:gap-4 gap-2  items-center '>

                                <Icon className='lg:size-8 size-6 ' icon={item.icon} />
                                <div>
                                    <h1 className='text-slate-100 font-poppins text-sm lg:text-xl font-semibold'>{item.title}</h1>
                                    <p className='text-slate-200 lg:text-lg text-lg font-poppins'>{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex gap-4 border lg:w-3/4 border-slate-800 p-4 rounded-xl justify-around  '>
                        {social.map((item) => (
                            <div key={item.id} className='flex items-center gap-4'>
                                <a className='' href={item.value} key={item.id}>
                                    <Icon className='size-8' icon={item.icon} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='lg:w-1/2 p-4 flex flex-col gap-4 '>

                    <div className='flex flex-col gap-4  '>
                        <label htmlFor="name" className='font-poppins text-slate-100 font-semibold'>Name</label>
                        <input type="text" placeholder='Name' className='p-2 rounded-md border border-neutral-800' />
                        <label htmlFor="email" className='font-poppins text-slate-100 font-semibold'>Email</label>
                        <input type="email" placeholder='Email' className='p-2 rounded-md border border-neutral-800' />
                        <label htmlFor="message" className='font-poppins text-slate-100 font-semibold'>Message</label>
                        <textarea placeholder='Message' className='p-2 rounded-md border border-neutral-800' />
                    </div >
                    <div className='flex justify-center'>

                        <button className='bg-slate-700 w-3/4 text-white p-2 rounded-md'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact