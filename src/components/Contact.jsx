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
        <div className='p-10 flex  flex-col gap-8 justify-center  '>
            <h1 className='text-4xl font-bold text-center'>Contact</h1>
            <div className='flex gap-4 border border-neutral-800  p-4 rounded-xl'>


                <div className='w-1/2 p-4 flex flex-col justify-between gap-4'>
                    <div className='flex flex-col gap-4  '>
                        {data.map((item) => (
                            <div key={item.id} className='flex gap-4 items-center '>

                                <Icon className='size-8' icon={item.icon} />
                                <div>
                                    <h1 className='text-neutral-900 text-xl font-semibold'>{item.title}</h1>
                                    <p className='text-neutral-800'>{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex gap-4 border w-3/4 border-neutral-800 p-4 rounded-xl justify-around  '>
                        {social.map((item) => (
                            <div key={item.id} className='flex items-center gap-4'>
                                <a className='' href={item.value} key={item.id}>
                                    <Icon className='size-8' icon={item.icon} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='w-1/2 p-4 flex flex-col gap-4 '>

                    <div className='flex flex-col gap-4  '>
                        <label htmlFor="name" className='text-neutral-900 font-semibold'>Name</label>
                        <input type="text" placeholder='Name' className='p-2 rounded-md border border-neutral-800' />
                        <label htmlFor="email" className='text-neutral-900 font-semibold'>Email</label>
                        <input type="email" placeholder='Email' className='p-2 rounded-md border border-neutral-800' />
                        <label htmlFor="message" className='text-neutral-900 font-semibold'>Message</label>
                        <textarea placeholder='Message' className='p-2 rounded-md border border-neutral-800' />
                    </div >
                    <div className='flex justify-center'>

                        <button className='bg-neutral-800 w-3/4 text-white p-2 rounded-md'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact