import React from 'react'
export default function ButtonHover() {
  return (
    <div className='flex justify-center mt-10'>
      <button  className='bg-sky-400 text-white px-10 py-4 rounded-full hover:bg-sky-700 transition-colors duration-200'>
        Button
      </button>
    </div>
  )
}
