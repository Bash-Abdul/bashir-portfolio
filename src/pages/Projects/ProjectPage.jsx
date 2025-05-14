import React from 'react'
import Projects from './Projects'

const ProjectPage = () => {
  return (
    <div>
      <div className='flex items-center justify-between cursor pointer font-semibold'>
        <h1>Projects</h1>
        <button className='py-4 px-5 text-black bg-white text-sm'>View Github</button>
      </div>


      <Projects />
    </div>
  )
}

export default ProjectPage