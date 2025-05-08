import React from 'react'
import SkillsText from './SkillsText'
import Skills from './Skills'

const SkillsPage = () => {
  return (
    <div className='flex items-center justify-center h-full gap-7'>
      <SkillsText />
      <Skills />
    </div>
  )
}

export default SkillsPage