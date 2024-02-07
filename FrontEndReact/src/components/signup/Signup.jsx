import React from 'react'
import { Link } from 'react-router-dom';
import { LoginInput } from '../Login/LoginInput';
const Signup = () => {
  return (
    <div className=' bg-gradient-to-b from-neutral-900 to-neutral-950 h-full w-full flex flex-col gap-0 md:gap-8 items-center overflow-hidden overflow-y-auto'>
      <div className='bg-black/80  text-white p-8 w-full'>
        <img src="spotify.svg" alt="" className ="h-10" />
      </div>

      <div className=' bg-gradient-to-b from-black/40 to-black/30 m-0 md:m-16 h-fit w-full p-4 text-white flex flex-col items-center md:rounded-lg  md:w-[45rem]'>

         <h1 className='text-white mt-14 text-4xl font-bold'>Sign up to Spotify</h1>

         <form action='' className='p-16 flex flex-col gap-8'>
          <LoginInput htmlFor="username" type="text" Label="Username" />
          <LoginInput htmlFor="email" type="email" Label="Email" />
          <LoginInput htmlFor="password" type="password" Label="Password"/>
          <LoginInput htmlFor="image" type="file" Label="Upload Your Profile Image" />
          
          <LoginInput htmlFor="Coverimage" type="file" Label="Upload Your Cover Image" />
      
           <button type="submit" className='bg-green-500 text-black font-semibold py-2 rounded-sm hover:scale-105 transition'>Sign up</button>
         </form>
         <div className='flex flex-col items-center'>
          <p className='text-neutral-600 font-medium'>Already have an account? </p>
           <Link to="/login" className='underline'>Log in for Spotify</Link>
         </div>
      </div>
    </div>
  )
}
export default Signup;