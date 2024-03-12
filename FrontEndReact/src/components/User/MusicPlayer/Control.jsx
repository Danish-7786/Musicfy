import React, { useState } from 'react'
import { FaPlay } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";
import { IoPlayOutline } from "react-icons/io5";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForwardSharp } from "react-icons/io5";
import { IoPause } from "react-icons/io5";
import { IoShuffle } from "react-icons/io5";
import { RxLoop } from "react-icons/rx";
import { FaVolumeOff } from "react-icons/fa";
import { FaVolumeLow } from "react-icons/fa6";
import { FaVolumeXmark } from "react-icons/fa6";
import { FaVolumeHigh } from "react-icons/fa6";



const Control = ({progressBarRef,audioRef,timeProgress,setTimeProgress,duration,setDuration,songUrl}) => {
  const [time ,setTime] = useState(0)
  const onLoadedMetadata = ()=> {
   var audioTime = audioRef.current.duration;
   setTime(audioTime)
    setDuration(formatTime(audioTime));
  }
  const formatTime = (time)=> {
    if(time && !isNaN(time)){
      const minutes = Math.floor(time/60);
      const formatMinutes = minutes<10 ? `0${minutes}`:`${minutes}`;
      const seconds = Math.floor(time%60);
      const formatSeconds = seconds<10? `0${seconds}`: `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`
    }
    return `00:00`;
  }
  const handleProgressChange = (e)=> {
const progress = progressBarRef.current.value;
setTimeProgress(formatTime((progress*time)/100))
  }
  return (
    <div className='flex '>
         <audio src= {songUrl|| "./public/L.mp3"} onLoadedMetadata={onLoadedMetadata} ref={audioRef}/>

        <div className='flex justify-center flex-col md:w-[24rem] gap-2'>
            
        <div className='flex gap-4 items-center md:gap-8 justify-center'>
            <IoShuffle size={20}/>
            <IoPlaySkipBackSharp size={24}/>
  <button className='bg-white flex justify-center text-black rounded-full p-2'>
      <FaPlay size={20}/>
  </button>
      <IoPlaySkipForwardSharp size={24}/>
      <RxLoop/>
        </div>
        {/* Progress Bar */}
        <div className='flex gap-1'>
            <span> {timeProgress} </span>
            <input 
            type="range"  
            ref= {progressBarRef}
            min = {0}
            max = {duration}
            className='bg-neutral-800 text-white w-full' 
            onChange={handleProgressChange}
            />
            <span>{duration}</span>
        </div>
        </div>


      
      
        </div>
  )
}

export default Control