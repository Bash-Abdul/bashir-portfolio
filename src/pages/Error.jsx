import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='flex items-center justify-center flex-col h-screen text-white gap-3'>
      <h1>404 Page</h1>
      <p>oops.. Page doesn't exist 😑</p>
      <Link className='bg-red-400 py-3 px-5 text-white text-sm' to={'/'}>Return to Main</Link>
    </div>
  )
}

export default Error