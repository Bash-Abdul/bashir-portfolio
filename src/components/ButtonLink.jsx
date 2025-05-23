import { motion } from "framer-motion";
import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from 'react';
// import { sanityClient } from '../../sanityClient';
import { sanityClient } from "../sanityClient";

const ButtonLink = ({button_title}) => {

    const [resume, setResume] = useState([]);
    const [isHovered, setIsHovered] = useState(false);
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
            {resume.map((resume) => (
        <motion.a
          href={resume.resume_link}
          target="_blank"
          rel="noopener noreferrer"
          download
          key={resume.resume_link}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex items-center gap-2 mt-6 py-4 px-5 bg-white text-black shadow-md hover:shadow-lg transition-shadow duration-300 font-medium tracking-wide"
        >
          {button_title}
          <motion.span
            animate={{ rotate: isHovered ? -90 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="inline-block text-xs"
          >
            <FaArrowRight />
          </motion.span>
        </motion.a>
      ))}
        </div>
    )
}

export default ButtonLink