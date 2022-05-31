import React, { useState } from 'react'
import Search from './Search'

const Body = () => {
  const [search, setsearch] = useState('')
  const [searchResult, setSearchResult] = useState([])
  return (
    <section
      className="ml-24 flex-grow space-y-8 
    bg-black py-4 md:mr-2.5 md:max-w-6xl"
    >
      <Search search={search} setsearch={setsearch} />
      <section
        className="grid h-96  grid-cols-2 
        gap-x-4 gap-y-8 overflow-y-scroll p-4 py-4  scrollbar-hide  lg:grid-cols-3   
        xl:grid-cols-4"
      ></section>
    </section>
  )
}

export default Body
