import React from 'react'
import { motion } from "framer-motion";

const ContactText = () => {
  return (
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   transition={{ duration: 1.4 }}
    //   className='w-full flex flex-col gap-4 mb-10 text-[#B2B2B3]'>
    //   <p className='text-[2rem] sm:text-[2.5rem] md:text-[3.2rem] w-full md:w-[90%] font-semibold'>
    //     Want to work with me?
    //   </p>
    //   <p className='text-[1.8rem] text-white sm:text-[2.2rem] md:text-[2.5rem] font-semibold'>
    //     Let's Connect
    //   </p>
    //   <p className='text-base sm:text-lg'>
    //     I am open to <span className='text-white'>remote</span> and onsite <span className='text-white'>full-time, part-time,</span> <br className="hidden sm:block" /> and <span className='text-white'>contract</span> frontend web development jobs.
    //   </p>
    // </motion.div>

    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.4 }}
  className='w-full flex flex-col gap-4 mb-10 text-[#B2B2B3]'>
  
  <p className='text-[2rem] sm:text-[2.5rem] md:text-[3.2rem] w-full md:w-[90%] font-semibold'>
    Let's build <span className='text-white'>something great.</span>
  </p>

  {/* <p className='text-[1.8rem] text-white sm:text-[2.2rem] md:text-[2.5rem] font-semibold'>
    Get in Touch
  </p> */}

  <p className='text-base sm:text-lg'>
    I'm currently <span className='text-white'>available for freelance, contract,</span> or<br className="hidden sm:block" />
    full-time opportunities. Whether it's a new idea,<br className="hidden sm:block" />
    a project rescue, or an upgrade — <span className='text-white'>let’s talk.</span>
  </p>

  <p className='text-base sm:text-lg mt-4'>
    <span className='text-white'>Email:</span> bashirtaiwo59@gmail.com<br />
    <span className='text-white'>Phone:</span> (+44)07546416788
  </p>

  <p className='text-base sm:text-lg mt-4'>
    Feel free to reach out via the <span className='text-white'>form</span> or directly through <span className='text-white'>email.</span>
  </p>
</motion.div>

  )
}

export default ContactText
