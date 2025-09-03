import React from 'react'

export default function Circle() {
  return (
    <div className='flex items-center justify-center space-x-[8px]'>
      <div className='bg-blue-500 size-[50px] rounded-full'></div>
      <div className='bg-red-500 size-[50px] rounded-full'></div>
      <div className='bg-green-500 size-[50px] rounded-full'></div>
    </div>
  )
}
