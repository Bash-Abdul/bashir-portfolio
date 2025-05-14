import React from 'react'
import project from './page.png'
import clabed from './clabed.png'
import bloggle from './bloggle.png'


const projectData =[
  {
    id:1,
    image: project,
    name: 'iRefer',
    subtext: 'Connecting You to Quality Services, Products, and Solutions.',
    technology: 'Nextjs + Tailwind + Sanity(CMS) + Typescript'
  },
  {
    id:1,
    image: clabed,
    name: 'Clabed Autos',
    subtext: 'Connecting You to Quality Services, Products, and Solutions.',
    technology: 'React + CSS + Node +   MongoDB'
  },
  {
    id:1,
    image: bloggle,
    name: 'Bloggle',
    subtext: 'Blog about your favorite things and explore loads of content.',
    technology: 'React + Tailwind + Node +   MongoDB'
  },
  {
    id:1,
    image: project,
    name: 'Kulture Kaps',
    subtext: 'Connecting You to Quality Services, Products, and Solutions.',
    technology: 'Nextjs + Tailwind + Sanity(CMS) + Typescript'
  }
]

const ProjectPage = () => {
  return (
    <div>
      <div className='flex items-center justify-between cursor pointer font-semibold'>
        <h1>Projects</h1>
        <button className='py-4 px-5 text-black bg-white text-sm'>View Github</button>
      </div>


      <div className='mt-[3rem] grid grid-cols-3 gap-[2rem]'>

        {
          projectData.map((project) => (
            <div className='shadow-xl'>
          <img src={project.image} alt="gym image"/>
          <div className='text-white py-10 px-5 flex gap-4 flex-col'>
            <h1>{project.name}</h1>

            <p className='text-[#B2B2B3]'> {project.subtext} </p>

            <p className=''>{project.technology} </p>

            <div className='flex items-center justify-start gap-6 text-sm text-[#B2B2B3] cursor-pointer'>
              <p className='hover:scale-[1.1]'>Code</p>
              <p className='hover:scale-[1.1]'>View live</p>
            </div>
          </div>
        </div>
          ))
        }

        {/* <div className='shadow-xl'>
          <img src={project} alt="gym image"/>
          <div className='text-white py-10 px-5 flex gap-4 flex-col'>
            <h1>iRefer</h1>

            <p className='text-[#B2B2B3]'>Connecting You to Quality Services, Products, and Solutions.</p>

            <p className=''>Nextjs + Tailwind + Sanity(CMS) + Typescript</p>

            <div className='flex items-center justify-start gap-6 text-sm text-[#B2B2B3]'>
              <p>Code</p>
              <p>View live</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default ProjectPage