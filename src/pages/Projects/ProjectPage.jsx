import React from 'react'
import Projects from './Projects'
import Button from '../../components/Button'

const ProjectPage = () => {
  return (
    <div>
      <div className='flex items-center justify-between cursor pointer font-semibold'>
        <h1>Projects</h1>
        {/* <button className='py-4 px-5 text-black bg-white text-sm'>View Github</button> */}
        <a href={'https://github.com/Bash-Abdul'} target="_blank" rel="noopener noreferrer" className="py-4 px-5 text-black bg-white text-sm">View Github</a>
      </div>


      <Projects />
    </div>
  )
}

export default ProjectPage