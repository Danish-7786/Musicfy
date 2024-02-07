import React from 'react'

export const LoginInput = ({type,htmlFor,Label}) => {
  return (
    <div className='flex flex-col w-80 gap-2'>
    <label htmlFor={htmlFor} className='font-semibold text-sm'>{Label}</label>
    <input placeholder={Label} type={type} id={htmlFor} className='bg-transparent border-2 rounded-sm font-semibold  text-sm px-2 py-3   border-neutral-700'/>
    </div>
  )
}
