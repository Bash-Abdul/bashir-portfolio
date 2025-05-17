// import React from 'react'
// import { motion } from "framer-motion";
// import bash from './bash.png'

// const AboutImage = () => {
//   return (
//     <div className=''>
//           {/* <img src={bash} alt="bash image" className='home-image object-contain w-[36.5vw]' loading='lazy' /> */}
//           <motion.img
//             src={bash}
//             alt="about image"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className='home-image object-contain w-[36.5vw]' loading='lazy'
//           />
//         </div>
//   )
// }

// export default AboutImage


import React from 'react'
import { motion } from "framer-motion";
import bash from './bash.png'

const AboutImage = () => {
  return (
    <motion.img
      src={bash}
      alt="about image"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="w-[70%] sm:w-[50%] md:w-[40%] lg:w-[36.5vw] object-contain mt-10 lg:mt-0 home-image"
      loading="lazy"
    />
  );
};

export default AboutImage;
