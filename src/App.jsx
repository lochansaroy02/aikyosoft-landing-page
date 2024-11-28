import React from 'react'
import Contact from './components/Contact'
import { Hero } from './components/Hero'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Service from './components/Service'
import Testimonial from './components/Testimonial'
import Tech from './components/Tech'
const App = () => {
  return (
    <div className='overflow-x-clip  '>
      <Navbar />
      <div className='relative   bg-transparent h-[120vh]'>
        <Hero />
        <Service />
      </div>
      <Project />
      <Testimonial />
      <Tech />
      <Contact />
    </div>
  )
}

export default App