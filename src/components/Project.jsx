import React from 'react'
import project from '../assets/project.png'

const Project = () => {
    const projects = [
        {
            id: 1,
            title: "Project 1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            image: project,
        },
        {
            id: 1,
            title: "Project 1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            image: project,
        },
        {
            id: 1,
            title: "Project 1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            image: project,
        },
    ]
    return (
        <div className='p-10 flex flex-col gap-4  '>
            <h1 className='text-4xl font-spectral font-bold text-center sticky top-24 text-slate-100'>Projects</h1>
            <div className=' gap-6  flex  flex-col items-center justify-center '>
                {projects.map((project, index) => (
                    <div key={project.id} className={`  w-2/3 flex  bg-slate-700 sticky top-36 items-center justify-center border border-neutral-800 rounded-xl  `}>
                        <div className='w-1/2 p-8 flex flex-col gap-4'>
                            <div className='flex flex-col  '>
                                <h1 className='text-2xl font-bold text-slate-100'>{project.title}</h1>
                                <p className='text-neutral-500 mt-2'>{project.description}</p>
                            </div>
                            <div className='flex gap-4'>
                                <button className='bg-neutral-800 text-white px-4 py-2 rounded-md'>View</button>
                                <button className='bg-neutral-800 text-white px-4 py-2 rounded-md'>Github</button>
                            </div>
                        </div>
                        <div className='w-1/2  overflow-hidden rounded-tl-xl rounded-tr-xl '>
                            <img className='   mt-12 rounded-tl-xl  ' src={project.image} alt={project.title} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project