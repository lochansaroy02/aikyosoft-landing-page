import React from 'react'
import { motion } from "motion/react"

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            image: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png'
        },
        {
            id: 1,
            name: "John Doe",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            image: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png'
        },
        {
            id: 1,
            name: "John Doe",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            image: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png'
        },

    ]
    return (
        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className='flex  gap-4 p-10 justify-center mx-28 '>
            {testimonials.map((testimonial) => (
                <div className='bg-slate-700 border border-slate-300 p-4 rounded-xl flex flex-col gap-4 items-center pb-8' key={testimonial.id}>
                    <img className='w-28 h-28 rounded-full' src={testimonial.image} alt={testimonial.name} />
                    <h3 className='text-slate-100 text-2xl font-semibold'>{testimonial.name}</h3>
                    <p className='text-slate-100 mx-4 text-justify leading-tight'>{testimonial.review}</p>
                </div>
            ))}
        </motion.div>
    )
}

export default Testimonial