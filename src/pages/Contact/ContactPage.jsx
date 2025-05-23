import React from 'react'
import ContactForm from './ContactForm'
import ContactText from './ContactText'

const ContactPage = () => {
  return (
    // <div className='grid grid-cols-2 place-items-center h-full gap-10'>
    <div className='grid grid-cols-1 md:grid-cols-2 place-items-center gap-10 py-10'>
      {/* <p>text</p> */}
      <ContactText/>

      <ContactForm/>
    </div>
  )
}

export default ContactPage