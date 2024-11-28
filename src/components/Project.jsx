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
            <h1 className='text-4xl font-bold text-center'>Projects</h1>
            <div className='grid grid-cols-3 gap-6  p items-center justify-center'>
                {projects.map((project) => (
                    <div key={project.id} className=' p-4 '>
                        <img className='rounded-lg' src={project.image} alt={project.title} />
                        <h1>{project.title}</h1>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project