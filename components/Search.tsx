import * as React from 'react'
import { MdOutlineShortText } from 'react-icons/md'
interface searchProps {
  search: string;
 setsearch: React.Dispatch<React.SetStateAction<string>>
}
const Search = ({ search, setsearch }: searchProps) => {
  return (
    <article
      className="flex max-w-[1150px] items-center overflow-hidden  rounded-full border-2 
    border-[#333333] bg-[#1a1a1a] p-1.5 px-5 pr-8"
    >
      <div
        className="h-4 w-4 flex-shrink-0  animate-pulse
        rounded-full border-2  "
      ></div>
      <input
        type="text"
        value={search}
        placeholder="Search..."
        onChange={(e) => setsearch(e.target.value)}
        className="border-none bg-[#1a1a1a] text-xs text-white placeholder-[#fafafa]
        outline-none focus:ring-0 lg:w-full"
      />
      <section className="flex items-center divide-x-2 divide-dotted divide-[#333] pl-4">
        <div className="flex space-x-2 pr-5">
          <button className="tag">Minimal</button>
          <button className="tag">House</button>
          <button className="tag">Minimal</button>
        </div>

        <div className="flex items-center space-x-1.5 pl-4 text-[#cecece]">
          <MdOutlineShortText className="animate-pulse text-2xl" />
          <span className="text-sm  font-medium">Filter</span>
        </div>
      </section>
    </article>
  )
}

export default Search
