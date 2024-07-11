import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
const AuthButtonProvider = ({Icon , label , provider}) => {
    
  return (
    <div className=' w-full px-2 font-sans flex gap-2  py-3 rounded-md border-2 border-blue-700 items-center text-center justify-evenly group cursor-pointer hover:shadow-md active:scale-95 duration-150 hover:bg-blue-700 '>
     <Icon className='text-txtPrimary text-xl group-hover:text-white ' />
    <p className='text-txtPrimary text-lg group-hover:text-white'>{label} </p>
    <FaChevronRight className='text-txtPrimary text-base group-hover:text-white' />
  
    </div>
  )
}

export default AuthButtonProvider