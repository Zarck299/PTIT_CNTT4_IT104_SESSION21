import React from 'react'

export default function Position() {
  return (
    <div className='flex items-center justify-center '>
      <div className='relative w-64 h-48 bg-sky-200 rounded-lg p-4'>
        <span className='text-sky-700 font-semibold'>Relative parent</span>
        <button className="absolute bottom-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-full">
            Absolute child
        </button>
      </div>
    </div>
  )
}