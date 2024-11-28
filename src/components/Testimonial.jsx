import React from 'react'

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
        <div className='flex  gap-4 p-10 justify-center mx-28 '>
            {testimonials.map((testimonial) => (
                <div className='border-neutral-800 border p-4 rounded-xl flex flex-col gap-4 items-center pb-8' key={testimonial.id}>
                    <img className='w-28 h-28 rounded-full' src={testimonial.image} alt={testimonial.name} />
                    <h3 className='text-neutral-900 text-2xl font-semibold'>{testimonial.name}</h3>
                    <p className='text-neutral-800 mx-4 text-justify leading-tight'>{testimonial.review}</p>
                </div>
            ))}
        </div>
    )
}

export default Testimonial