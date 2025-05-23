// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <div>
//         <div className='flex items-center justify-between text-white py-[3rem]'>
//             <h1 className='text-lg'><Link to={'/'}>BT.</Link></h1>

//             <ul className='flex items-center gap-[2.5rem]'>
//                 <li className='text-sm '> <Link to={'/'}>About</Link> </li>
//                 {/* <a href="/" target='_blank' rel='noopener noreferrer'> About</a> */}
//                 <li> <Link to={'/skills'}>Skills</Link> </li>
//                 <li> <Link to={'/projects'}>Project</Link> </li>
//                 <li> <Link to={'/contact'}>Contact</Link> </li>
//             </ul>
//         </div>
//     </div>
//   )
// }

// export default Navbar

// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const navLinkClasses = ({ isActive }) =>
//   `relative group text-sm transition-all duration-300
//    after:content-[''] after:absolute after:bottom-[-4px] after:left-0
//    after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300
//    group-hover:after:w-full ${isActive ? 'after:w-full' : ''}`;

// const Navbar = () => {
//   return (
//     <div>
//       <div className="flex items-center justify-between text-white py-[3rem]">
//         <h1 className="text-lg">
//           <NavLink to="/">BT.</NavLink>
//         </h1>

//         <ul className="flex items-center gap-[2.5rem]">
//           <li>
//             <NavLink to="/" className={navLinkClasses}>
//               About
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/skills" className={navLinkClasses}>
//               Skills
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/projects" className={navLinkClasses}>
//               Project
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/contact" className={navLinkClasses}>
//               Contact
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // <-- Add this

const navLinkClasses = ({ isActive }) =>
  `relative group text-sm transition-all duration-300
   after:content-[''] after:absolute after:bottom-[-4px] after:left-0
   after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300
   group-hover:after:w-full ${isActive ? 'after:w-full' : ''}`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // <-- Add state

  return (
    <div>
      <div className="flex items-center justify-between text-white py-[3rem] relative">
        <h1 className="text-lg">
          <NavLink to="/">BT.</NavLink>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-[2.5rem]">
          <li><NavLink to="/" className={navLinkClasses}>About</NavLink></li>
          <li><NavLink to="/skills" className={navLinkClasses}>Skills</NavLink></li>
          <li><NavLink to="/projects" className={navLinkClasses}>Project</NavLink></li>
          <li><NavLink to="/contact" className={navLinkClasses}>Contact</NavLink></li>
        </ul>

        {/* Hamburger Menu Icon */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden z-50">
            {!isMenuOpen && <FaBars size={22} />}
          </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="background text-white fixed w-screen h-screen flex flex-col items-center justify-center z-[100000] gap-3 px-2 bg-red-500 top-0 left-0 md:hidden">
          <button className='fixed right-[5%] top-[6.5%]' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {
              isMenuOpen && <FaTimes size={22} />
            }
          
          </button>
          <li className='py-3'><NavLink onClick={() => setIsMenuOpen(false)} to="/" className={navLinkClasses}>About</NavLink></li>
          <li className='py-3'><NavLink onClick={() => setIsMenuOpen(false)} to="/skills" className={navLinkClasses}>Skills</NavLink></li>
          <li className='py-3'><NavLink onClick={() => setIsMenuOpen(false)} to="/projects" className={navLinkClasses}>Project</NavLink></li>
          <li className='py-3'><NavLink onClick={() => setIsMenuOpen(false)} to="/contact" className={navLinkClasses}>Contact</NavLink></li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;




