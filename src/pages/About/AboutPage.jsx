import React from 'react'
import Header from '../../components/Header'
import bash from './bash.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { sanityClient } from '../../sanityClient';

const AboutPage = () => {
  const [resume, setResume] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "resume"]{
       resume_link
      }`
      )
      .then((data) => setResume(data))

      .catch(console.error);
  }, []);
  return (

    

    <div className='h-full w-full grid grid-cols-2 gap-[10rem] place-items-center'>
      <div className=''>
        <h1 className='text-[3rem]'>Hello 👋🏼, I'm <br /> Bashir Abdulah</h1>

        <p className='py-[2rem] leading-[2rem] text-sm text-[#B2B2B3]'>I am a <span className='text-white'>frontend developer</span> I have a strong background in creating visually appealing and <span className='text-white'>user-friendly web experiences</span>. I am motivated to find a role where I can challenge myself <span className='text-white'>and provide value to website users</span>. I am excited to bring my knowledge and experience to a team and contribute to a company's success.</p>

        <div className='flex items-center gap-6 cursor-pointer py-2'>
        <FaLinkedin />
        <FaGithub />
        <SiGmail />
        <FaTwitter />
        </div>

        <div className='flex items-center gap-4'>
        {/* <button className='mt-6 py-4 px-5 bg-white text-black text-sm'>View Resume</button> */}
        {
          resume.map((resume) => (
            <a href={resume.resume_link} target='_blank' download={'link'} key={resume.resume_link} className='mt-6 py-4 px-5 bg-white text-black text-sm'>View Resume</a>
          ))
        }
        <button className='mt-6 py-4 px-5 bg-white text-black text-sm'>Contact Me</button>
        </div>
      </div>
      <div className=''>
        <img src={bash} alt="bash image" className='object-contain w-[36.5vw]' loading='lazy' />
      </div>
    </div>
  )
}

export default AboutPage