import React from 'react'

export default function Position() {
  return (
    <div className='flex items-center justify-center'>
      <div className='relative w-96 h-72 rounded-lg  bg-sky-200 p-6'>
        <span className='text-sky-700 font-semibold w-88 h-64'>Relative parent</span>
        <button className="absolute bottom-4 left-4 bg-blue-500 text-white px-6 py-3 rounded-full">
            Absolute child
        </button>
      </div>
    </div>
  )
}