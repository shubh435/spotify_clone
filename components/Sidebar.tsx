import Image from 'next/image'
import React from 'react'

const Sidebar = () => {
  return (
    <section className="fixed top-0 left-0 z-40 flex 
    h-screen w-[90px] flex-col items-center space-y-8 
    bg-black  p-4">
      <Image
        src="https://rb.gy/xkacau"
        alt="image"
        width={56}
        height={56}
        objectFit="contain"
      />
      <div className="text-white">
          
          
      </div>
    </section>
  )
}

export default Sidebar
