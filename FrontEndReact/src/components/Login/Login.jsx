import React from 'react'
import { Link } from 'react-router-dom';
import { LoginInput } from './LoginInput';
const Login = () => {
  return (
    <div className=' bg-gradient-to-b from-neutral-900 to-neutral-950 h-full w-full flex flex-col gap-0 md:gap-8 items-center overflow-hidden overflow-y-auto'>
      <div className='bg-black/80  text-white p-8 w-full'>
        <img src="spotify.svg" alt="" className ="h-10" />
      </div>

      <div className=' bg-gradient-to-b from-black/40 to-black/30 m-0 md:m-16 h-full md:h-fit w-full p-4 text-white flex flex-col items-center md:rounded-lg  md:w-[45rem]'>
         <h1 className='text-white mt-14 text-4xl font-bold'>Log in to Spotify</h1>
         <form action='' className='p-16 flex flex-col gap-8'>
         <LoginInput htmlFor="email" type="text" Label="Email or Username" />
          <LoginInput htmlFor="password" type="password" Label="Password"/>
           <button type="submit" className='bg-green-500 text-black font-semibold py-2 rounded-sm transition hover:scale-105'>Log in</button>
         </form>
         <div className='flex flex-col items-center'>
          <p className='text-neutral-600 font-medium'>Don't have an account? </p>
           <Link to="/signup" className='underline'>Sign up for Spotify</Link>
         </div>
      </div>
    </div>
  )
}
export default Login;