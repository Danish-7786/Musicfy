import React from 'react'

function SongCard({songCover,songName,artist="Danish",songFile}) {
  return (
    <div className='p-4 bg-neutral-700 rounded-md'>
        <div className='h-20 w-10 rounded-md'>
            <img src={songCover} alt="" />
        </div>
        
        <div className=''>
            <p>{songName}</p>
            <p>{artist}</p>
        </div>
        <audio src={songFile} controls className='w-full'>
          
        </audio>
        
    </div>
  )
}

export default SongCard