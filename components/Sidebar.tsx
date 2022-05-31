import Image from 'next/image'
import React from 'react'
import { FaMicrophoneAlt } from 'react-icons/fa'
import { RiCompassFill } from 'react-icons/ri'
import { HiHome, HiChartBar, HiClock, HiDotsHorizontal } from 'react-icons/hi'

const Sidebar = () => {
  return (
    <aside
      className="fixed top-0 left-0 z-40 flex 
    h-screen w-[90px] flex-col items-center space-y-8 
    bg-black  p-4"
    >
      <Image
        src="https://rb.gy/xkacau"
        alt="image"
        width={56}
        height={56}
        objectFit="contain"
      />
      <div className="flex flex-col  space-y-8 items-center">
        <HiHome className="sidebarIcon  text-2xl text-white opacity-[0.85]" />
        <RiCompassFill className="sidebarIcon text-2xl" />

        <FaMicrophoneAlt className="sidebarIcon ml-1" />
        <HiChartBar className="sidebarIcon" />
        <HiClock className="sidebarIcon" />
        <HiDotsHorizontal className="sidebarIcon" />
      </div>
    </aside>
  )
}

export default Sidebar
