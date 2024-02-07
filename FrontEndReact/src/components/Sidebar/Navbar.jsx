import React from 'react'
import { IoMdHome } from "react-icons/io";
import {FaSearch} from "react-icons/fa"
import NavbarButton from './NavbarButton.jsx';
const Navbar = () => {
  return (
    <>

    <div className='h-28 bg-neutral-900 rounded-lg'>
      <div className='flex flex-col gap-6 p-4'>

   <NavbarButton title = "Home" navbarIcon={<IoMdHome size ={22}/>}/>
    <NavbarButton title="Search" navbarIcon={<FaSearch size={18} />}/>
    </div>

    </div>
    </>
  )
}

export default Navbar