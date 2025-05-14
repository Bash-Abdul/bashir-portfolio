import React from 'react'

const Header = ({title}) => {
  return (
    <div className='text-3xl flex items-center justify-start w-full'>
        {title}
    </div>
  )
}

export default Header