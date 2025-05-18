import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  return (
    <a href='https://wa.me/+2348178864574' target='_blank' className='fixed bottom-[3rem] right-[6%] text-white text-3xl animation-style cursor-pointer bg-black p-2 rounded-full z-[10000]
    '>
    <FaWhatsapp className='cursor-[inherit]' />
    </a>
  )
}

export default WhatsApp