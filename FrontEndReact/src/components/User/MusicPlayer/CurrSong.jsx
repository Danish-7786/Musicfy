import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
const CurrSong = ({artist,audioRef,songName,songCover}) => {
const onLoadedMetadata = (e)=> {
  // console.log(e.target.duration);
  // here we are using ref to get access of the element in parent component so we can use this 
  // direct target method to get duration'
  console.log(audioRef.current.duration);

}
  return (
    <div className='flex gap-4 items-center'>

        <div className='w-14 overflow-hidden h-14 rounded-md'>
        <img src={songCover||"./public/Talha-Anjum.jpg"} alt=""  />
        
        </div>
        <div className='flex flex-col gap-2'>
        <Link to="/artist">
        <div className='w-40 overflow-hidden h-5 whitespace-nowrap md:w-60 cursor-pointer' >
          <p className='hover:underline transition-all'>{songName|| "Downers at dusk hasisnbs"}</p>
        </div>
        </Link>
        <Link>
        <div className=''>
            <p className='hover:underline transition-all'>{artist||"Talha Anjum"}</p>
        </div>
        </Link>

        </div>
        <div>
            <IoIosHeartEmpty size={20} />
        </div>

    </div>
  )
}

export default CurrSong