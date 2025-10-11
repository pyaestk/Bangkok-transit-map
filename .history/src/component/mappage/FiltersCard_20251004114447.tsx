import { useState } from "react"
import LinesDropdown from "./LinesDropdown"

export default function FiltersCard() {
  const [selectedLine, setSelectedLine] = useState("All")

  const handleLineChange = (line) => {
    console.log("Selected line:", line)
    setSelectedLine(line)
  }

  return (
    <div className="p-4 rounded-2xl bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800 shadow-lg w-80 text-white">
      <h2 className="text-lg font-bold mb-4 mx-1">Filters</h2>

      {/* Lines */}
      <label className="block mb-2 mx-1 my-4">Lines</label>
      <LinesDropdown onSelect={handleLineChange} />

      {/* Search station */}
      <label className="block my-4 mx-1">Search station</label>
      <input
        type="text"
        placeholder="Type a station…"
        className="w-full text-sm px-3 py-2 rounded-lg bg-black/30 border border-white/10 placeholder-gray-400 focus:outline-none"
      />

      {/* Buttons */}
      <div className="flex flex-col space-y-4 mt-4">
        <button className="px-4 py-2 rounded-lg bg-[#151922] text-white hover:bg-white/10">
          Apply
        </button>
        <button className="px-4 py-2 rounded-lg bg-[#151922] text-white hover:bg-white/10">
          Show In Planner
        </button>
      </div>

      {/* Example: show selected line */}
      <p className="mt-4 text-sm text-gray-400">
        Current Line: <span className="text-white">{selectedLine}</span>
      </p>
    </div>
  )
}
