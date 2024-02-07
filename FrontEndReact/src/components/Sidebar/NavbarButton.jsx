import React from 'react'
import { IoMdHome } from "react-icons/io";
import {FaSearch} from "react-icons/fa"
const NavbarButton = ({title,navbarIcon}) => {
  return (
    <div className='text-white/70 hover:text-white'>
        <button className='flex gap-2 items-center '>
            {navbarIcon}
          <p className='font-medium text-base'>{title}</p>   
        </button>
    </div>
  )
}

export default NavbarButton