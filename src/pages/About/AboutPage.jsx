import React from 'react'
import Header from '../../components/Header'
import bash from './bash.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { sanityClient } from '../../sanityClient';
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import Button from '../../components/Button';
import ButtonLink from '../../components/ButtonLink';
import AboutImage from './AboutImage';

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



    <div>


      {/* <div className='h-full w-full grid grid-cols-2 gap-[10rem] place-items-center'>
        <Helmet>
          <title>Bashir Abdulah | React Frontend Developer - Modern Web and App Interfaces</title>
          <meta
            name="description"
            content="Welcome to the portfolio of Bashir Abdulah, a React frontend developer crafting modern, responsive websites and mobile apps with clean UI/UX design and scalable performance."
          />
          <meta name="keywords" content="React, Frontend Developer, Bashir Abdulah, Web Developer, UI/UX, Portfolio" />
          <meta name="author" content="Bashir Abdulah" />

          Social Sharing (Optional but recommended)
          <meta property="og:title" content="Bashir Abdulah | React Frontend Developer" />
          <meta property="og:description" content="React frontend developer crafting responsive websites and mobile apps." />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:image" content="https://yourdomain.com/banner.png" />
          <meta name="twitter:image" content="https://yourdomain.com/banner.png" />

        </Helmet>
        <div className=''>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-[3rem] text-[#B2B2B3]'>Hello 👋🏼, I'm <br /> <span className='text-white'> Bashir Abdulah</span></h1>
          </motion.div>

          <p className='py-[2rem] leading-[2rem] text-sm text-[#B2B2B3]'>I am a <span className='text-white'>frontend developer</span> I have a strong background in creating visually appealing and <span className='text-white'>user-friendly web experiences</span>. I am motivated to find a role where I can challenge myself <span className='text-white'>and provide value to website users</span>. I am excited to bring my knowledge and experience to a team and contribute to a company's success.</p>

          <div className='flex items-center gap-8 cursor-pointer py-2'>
            <FaLinkedin />
            <FaGithub />
            <SiGmail />
            <FaTwitter />
          </div>

          <div className='flex items-center gap-4'>
            <ButtonLink button_title={'View Resume'} />
            <Button button_title={'Contact Me'} />
          </div>
        </div>

        <AboutImage />
      </div> */}

      <div className="w-full h-full flex flex-col lg:grid lg:grid-cols-2 lg:gap-[10rem] place-items-center">
      <Helmet>
          <title>Bashir Abdulah | React Frontend Developer - Modern Web and App Interfaces</title>
          <meta
            name="description"
            content="Welcome to the portfolio of Bashir Abdulah, a React frontend developer crafting modern, responsive websites and mobile apps with clean UI/UX design and scalable performance."
          />
          <meta name="keywords" content="React, Frontend Developer, Bashir Abdulah, Web Developer, UI/UX, Portfolio" />
          <meta name="author" content="Bashir Abdulah" />

          {/* Social Sharing (Optional but recommended) */}
          <meta property="og:title" content="Bashir Abdulah | React Frontend Developer" />
          <meta property="og:description" content="React frontend developer crafting responsive websites and mobile apps." />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:image" content="https://yourdomain.com/banner.png" />
          <meta name="twitter:image" content="https://yourdomain.com/banner.png" />

        </Helmet>

        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[2.2rem] sm:text-[2.5rem] lg:text-[3rem] text-[#B2B2B3]">
              Hello 👋🏼, I'm <br />
              <span className="text-white">Bashir Abdulah</span>
            </h1>
          </motion.div>

          <p className="py-6 leading-7 text-sm sm:text-base text-[#B2B2B3]">
            I am a <span className="text-white">frontend developer</span> with a strong background in creating visually appealing and{" "}
            <span className="text-white">user-friendly web experiences</span>. I’m motivated to find a role where I can challenge myself{" "}
            <span className="text-white">and provide value to website users</span>. I am excited to bring my knowledge and experience to a team and contribute to a company's success.
          </p>

          <div className="flex justify-center lg:justify-start items-center gap-8 py-2">
            <FaLinkedin />
            <FaGithub />
            <SiGmail />
            <FaTwitter />
          </div>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 mt-4">
            <ButtonLink button_title={'View Resume'} />
            <Button button_title={'Contact Me'} />
          </div>
        </div>

        <AboutImage />
      </div>

    </div>
  )
}

export default AboutPage