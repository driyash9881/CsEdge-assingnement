import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='flex w-[100%] flex-wrap gap-[75%] border-t-2 justify-around text-gray-400 p-2'>
      <div className='flex gap-3'> 
        <img className='w-11 h-11' src={'https://resume-builder-yt.web.app/static/media/logo.b4de7abd75ff493930c7.png'} alt="logo" />
        <span className='p-1 uppercase text-lg'>Resume Maker</span>
      </div>
      <div className='flex justify-end gap-5 text-base cursor-pointer text-blue-500 font-sans '>
        <Link to={'/'}>Home</Link>
        <Link to={'/'}>Contact</Link>
        <Link to={'/'}>Policy</Link>
      </div>
    </div>
  )
}

export default Footer