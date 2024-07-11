import React from 'react'
import Footer from '../Containers/Footer'
import { FaGoogle , FaGithub } from "react-icons/fa";
import '../App.css'
import AuthButtonProvider from '../Components/AuthButtonProvider';
const Authentication = () => {
  return (
    <div className='auhenticate flex flex-col  w-full h-[100vh] '>
      <div className='p-5'>
      {/* Header section */}
      <img className='w-11 h-11 ' src={'https://resume-builder-yt.web.app/static/media/logo.b4de7abd75ff493930c7.png'} alt="logo" />
      </div>
      <div className='text-center  h-[65%] flex gap-2 flex-col mt-32 '>
        {/* Middle Section */}
        <h1 className='lg:text-[2.3em] text-2xl text-blue-600'>Welcome to Resume-Maker</h1>
        <p className='text-base text-gray-400'>express way to create resume</p>

        <h2 className='lg:text-3xl text-xl  text-gray-500 mt-7 '>Authenticate</h2>
        <div className='w-72 h-1 gap-11 lg:ml-[42%] ml-[20%]  mt-32 flex flex-col justify-center'>
           <AuthButtonProvider
            Icon={FaGoogle}
            label={'SignIn with Google'}
            provider={'GoogleAuthProvder'}
           />
           <AuthButtonProvider
            Icon={FaGithub}
            label={'SignIn with GitHub'}
            provider={'GitHubAuthProvder'}
           />
        </div>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Authentication