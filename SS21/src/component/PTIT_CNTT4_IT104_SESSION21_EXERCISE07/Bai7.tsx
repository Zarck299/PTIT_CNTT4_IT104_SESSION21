import React from 'react'

export default function GridBoxes() {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='grid grid-cols-3 gap-6'>
        {Array.from({length: 9}, (_, i) =>(
            <div key={i}
                 className="w-32 h-12 flex items-center justify-center 
                       rounded-lg text-white font-bold"
                 style={{ backgroundColor: "rgb(217, 70, 239)" }}>
                    0{i+1}
            </div>
        ))}
      </div>
    </div>
  )
}
