import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='flex items-center justify-between text-white py-[3rem]'>
            <h1 className='text-lg'><Link to={'/'}>BT.</Link></h1>

            <ul className='flex items-center gap-[2.5rem]'>
                <li className='text-sm '> <Link to={'/'}>About</Link> </li>
                {/* <a href="/" target='_blank' rel='noopener noreferrer'> About</a> */}
                <li> <Link to={'/skills'}>Skills</Link> </li>
                <li> <Link to={'/projects'}>Project</Link> </li>
                <li> <Link to={'/contact'}>Contact</Link> </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar