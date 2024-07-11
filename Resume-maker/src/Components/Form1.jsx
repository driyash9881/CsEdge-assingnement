import React from 'react'


//name // email // summmary // Position // Intern //  

const Form1 = ({onSubmit , heading , ...props}) => {

  return (
    <div className='w-100% h-100%'>
      <h1 className='text-4xl text-gray-600 text-center'>
        {heading}
      </h1>
      <form
       onSubmit={onSubmit}
       className='w-100% h-100% flex flex-col justify-center items-center border-2 border-black p-5'
      >
       
      </form>
    </div>
  )
}

export default Form1