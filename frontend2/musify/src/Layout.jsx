import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './components/User/Sidebar/Sidebar';
import {useDispatch} from 'react-redux'
import MusicPlayer from './components/User/MusicPlayer/MusicPlayer';
export const Layout = () => {
  const location = useLocation();
  const isLoginRoute = location.pathname === '/login';
  const isSignupRoute = location.pathname === "/signup";
  const isAdminRoute = location.pathname === "/admin";

  const [loading,setLoading] = useState(true)
  // useEffect is working
  const dispatch = useDispatch() 
  useEffect(()=> {
    
   },[]
  )

  return (
    <>
      <div className='relative bg-black w-screen h-screen flex p-2  overflow-hidden gap-2'>
        {!(isLoginRoute || isSignupRoute || isAdminRoute) && (
          <div className='resize-x hidden w-72 cursor-pointer md:block '>
            <Sidebar/>
          </div>
        )}
        <main className='w-full '>
          <Outlet/>
        </main>
        <div className='absolute block bottom-0 w-full bg-neutral-900'>
          <MusicPlayer/>
          </div>
      </div>
    </>

  );
};
