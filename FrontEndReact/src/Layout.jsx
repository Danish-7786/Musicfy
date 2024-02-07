import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';

export const Layout = () => {
  const location = useLocation();
  const isLoginRoute = location.pathname === '/login';
  const isSignupRoute = location.pathname === "/signup";

  return (
    <>
      <div className='bg-black w-screen h-screen flex p-2 gap-2'>
        {!(isLoginRoute || isSignupRoute) && (
          <div className='min-w-40 resize-x max-w-72 cursor-pointer'>
            <Sidebar/>
          </div>
        )}
        <main className='w-full'>
          <Outlet/>
        </main>
      </div>
    </>
  );
};
