import React from 'react'
import { RiPlayListFill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";

const Playlist = () => {
  return (
    <div className='bg-neutral-900 h-full rounded-md'>
        <div className='flex items-center p-4 justify-between text-white/80 hover:text-white '>

        <div className='flex gap-2 '>

     <RiPlayListFill size={20}/>
     
     <p>Your Library</p>
        </div>
        
       <button className='hover:bg-black hover:text-white rounded-full p-1'>
        <FaPlus/>
       </button>

        
        </div>
    </div>
  )
}

export default Playlist