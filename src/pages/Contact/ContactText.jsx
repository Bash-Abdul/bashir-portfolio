import React from 'react'

const ContactText = () => {
  return (
    <div className='w-full flex flex-col gap-4 mb-10'>
      <p className='text-[2rem] sm:text-[2.5rem] md:text-[3.2rem] w-full md:w-[90%] font-semibold'>
        Want to work with me?
      </p>
      <p className='text-[1.8rem] sm:text-[2.2rem] md:text-[2.5rem] font-semibold'>
        Let's Connect
      </p>
      <p className='text-base sm:text-lg'>
        I am open to remote and onsite full-time, part-time, <br className="hidden sm:block" /> and contract frontend web development jobs.
      </p>
    </div>
  )
}

export default ContactText
