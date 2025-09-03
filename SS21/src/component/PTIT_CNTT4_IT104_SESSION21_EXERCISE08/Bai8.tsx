import React from 'react'

export default function Flex() {
  return (
    <div className='space-y-12 p-8'>
        {/* Hình 1.1: Các phần tử nằm bên trái */}
      <div>
        <div className="flex justify-start border rounded-lg p-4 space-x-2">
          <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-md shadow-md">01</div>
          <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-md shadow-md">02</div>
          <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-md shadow-md">03</div>
        </div>
        <p className="italic text-center mt-2">Hình 1.1. Các phần tử nằm bên trái</p>
      </div>
        {/* Hình 1.2: Các phần tử nằm bên phải */}
      <div>
        <div className="flex justify-end border rounded-lg p-4 space-x-2">
          <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-md shadow-md">01</div>
          <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-md shadow-md">02</div>
          <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-md shadow-md">03</div>
        </div>
        <p className="italic text-center mt-2">Hình 1.2. Các phần tử nằm bên phải</p>
      </div>
        {/* Hình 1.3: Các phần tử nằm ở giữa */}
      <div>
        <div className="flex justify-center border rounded-lg p-4 space-x-2">
          <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-md shadow-md">01</div>
          <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-md shadow-md">02</div>
          <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-md shadow-md">03</div>
        </div>
        <p className="italic text-center mt-2">Hình 1.3. Các phần tử nằm ở giữa</p>
      </div>
        {/* Hình 1.4: Các phần tử nằm giãn ra 2 bên */}
      <div>
        <div className="flex justify-between border rounded-lg p-4 space-x-2">
          <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-md shadow-md">01</div>
          <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-md shadow-md">02</div>
          <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-md shadow-md">03</div>
        </div>
        <p className="italic text-center mt-2">Hình 1.4. Các phần tử nằm giãn ra 2 bên</p>
      </div>
        {/* Hình 1.5: Các phần tử nằm cách đều 2 bên */}
      <div>
        <div className="flex justify-around border rounded-lg p-4 space-x-2">
          <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-md shadow-md">01</div>
          <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-md shadow-md">02</div>
          <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-md shadow-md">03</div>
        </div>
        <p className="italic text-center mt-2">Hình 1.5. Các phần tử nằm cách đều 2 bên</p>
      </div>
      {/* Hình 1.6: Các phần tử nằm giữa đều */}
      <div>
        <div className="flex justify-evenly border rounded-lg p-4 space-x-2">
          <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-md shadow-md">01</div>
          <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-md shadow-md">02</div>
          <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-md shadow-md">03</div>
        </div>
        <p className="italic text-center mt-2">Hình 1.6. Các phần tử nằm giữa đều</p>
      </div>
    </div>
  )
}
