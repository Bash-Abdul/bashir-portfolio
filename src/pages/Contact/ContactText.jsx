import React from 'react'

const ContactText = () => {
  return (
    <div className='w-full flex flex-col gap-4 mb-10 text-[#B2B2B3]'>
      <p className='text-[2rem] sm:text-[2.5rem] md:text-[3.2rem] w-full md:w-[90%] font-semibold'>
        Want to work with me?
      </p>
      <p className='text-[1.8rem] text-white sm:text-[2.2rem] md:text-[2.5rem] font-semibold'>
        Let's Connect
      </p>
      <p className='text-base sm:text-lg'>
        I am open to <span className='text-white'>remote</span> and onsite <span className='text-white'>full-time, part-time,</span> <br className="hidden sm:block" /> and <span className='text-white'>contract</span> frontend web development jobs.
      </p>
    </div>
  )
}

export default ContactText
