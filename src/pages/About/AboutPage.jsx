import React from 'react'
import Header from '../../components/Header'
import bash from './bash.png'

const AboutPage = () => {
  return (
    // <div className='bg-red-600'>
    //   {/* <Header title='About'/> */}
    //   <div className='w-full grid grid-cols-2 w-full'>
    //     <div className='bg-red-400 w-full h-full'></div>
    //     <div className='bg-blue-400 w-full h-full'></div>
    //   </div>
    // </div>

    <div className='h-full w-full grid grid-cols-2 gap-[10rem] place-items-center'>
      <div className=''>
        <h1 className='text-[3.5rem]'>Hello, I'm <br /> Bashir Abdulah</h1>

        <p className='py-[2.5rem] leading-[2rem] text-sm text-[#B2B2B3]'>I am a <span className='text-white'>frontend developer</span> I have a strong background in creating visually appealing and user-friendly web experiences. I am motivated to find a role where I can challenge myself and provide value to website users. I am excited to bring my knowledge and experience to a team and contribute to a company's success.</p>

        <button className='py-4 px-5 bg-white text-black text-sm'>View Resume</button>
      </div>
      <div className=''>
        <img src={bash} alt="bash image" className='object-contain w-[36.5vw]' />
      </div>
    </div>
  )
}

export default AboutPage