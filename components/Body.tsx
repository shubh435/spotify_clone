import React, { useState } from 'react'
import Search from './Search'

const Body = () => {
  const [search, setsearch] = useState('')
  return (
    <section
      className="ml-24 flex-grow space-y-8 
    bg-black py-4 md:mr-2.5 md:max-w-6xl"
    >
      <Search search={search} setsearch={setsearch} />
    </section>
  )
}

export default Body
