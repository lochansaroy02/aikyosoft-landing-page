import React from 'react'
import pearls from '../assets/projects/pearls.png'
const Project = () => {
    const projects = [
        {
            id: 1,
            title: "Pearls of Grains",
            description: "Pearls of grans is a website for a client who sells grains and pulses. It is a static website built using React and Tailwind CSS.",
            image: pearls,
            link: "https://pearlsofgrains.com/",
        },
        {
            id: 2,
            title: "Project 2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            image: pearls,
            link: "https://www.google.com",
        },
        {
            id: 3,
            title: "Project 3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            image: pearls,
            link: "https://www.google.com",
        },
    ]


    return (
        <div className='p-10 mt-24 flex flex-col gap-4  '>
            <h1 className='text-4xl font-spectral font-bold text-center sticky top-24 text-slate-100'>Projects</h1>
            <div className=' gap-6  flex lg:mt-0 mt-8   flex-col items-center justify-center '>
                {projects.map((project, index) => (
                    <div className={`  lg:w-2/3  flex lg:flex-row flex-col  lg:h-80 bg-slate-800 sticky top-36  justify-center border border-slate-400 rounded-xl  `}>
                        <div className='lg:w-1/2   justify-center p-8 flex flex-col gap-4'>
                            <div className='flex flex-col  '>
                                <h1 className=' text-2xl  font-bold font-spectral text-slate-200'>{project.title}</h1>
                                <p className= 'text-justify  text-slate-200 mt-2 font-poppins'>{project.description}</p>
                            </div>
                            <div className='flex lg:justify-start justify-center gap-4'>
                                <button onClick={() => {
                                    window.open(project.link, '_blank');
                                }} className='bg-slate-700 border border-slate-800 text-white px-4 py-2 rounded-md'>View</button>
                            </div>
                        </div>
                        <div className='lg:w-3/4  p-2  relative rounded-lg  overflow-hidden lg:rounded-xl lg:rounded-bl-none lg:rounded-tr-xl '>
                            <img className='  lg:absolute bottom-0 rounded-xl lg:rounded-tl-xl lg:rounded-bl-none ' src={project.image} alt={project.title} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project