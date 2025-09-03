import React from 'react'
import {Button} from 'antd'
export default function ButtonHover() {
  return (
    <div>
      <Button className='bg-sky-400 text-white px-4 py-2 rounded-full hover:bg-sky-700 transition-colors duration-200'></Button>
    </div>
  )
}
