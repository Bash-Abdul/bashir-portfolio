import { motion } from "framer-motion";
import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Button = ({button_title}) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className='flex items-center gap-2 mt-6 py-4 px-5 bg-white text-black shadow-md hover:shadow-lg transition-shadow duration-300 font-medium tracking-wide'
        >
            {button_title} <FaArrowRight className="text-xs" />
        </motion.button>
    )
}

export default Button