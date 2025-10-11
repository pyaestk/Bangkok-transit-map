export default function FiltersCard() {
  return (
    <div className="p-4 rounded-2xl bg-[linear-gradient(180deg,rgba(14,17,22,1)_0%,rgba(15,20,32,1)_100%)] border border-white/10 shadow-lg w-80 text-white">
      <h2 className="text-lg font-bold mb-4">Filters</h2>

      {/* Lines */}
      <label className="block text-sm my-4 mx-1">Lines</label>
      <select className="w-full px-3 py-2 rounded-lg bg-black/30 border border-white/10 focus:outline-none">
        <option>All</option>
        <option>Blue</option>
        <option>Red</option>
        <option>Yellow</option>
      </select>

      {/* Search station */}
      <label className="block text-sm my-4 mx-1">Search station</label>
      <input
        type="text"
        placeholder="Type a station…"
        className="w-full px-3 py-2 pr-8 rounded-lg bg-black/30 border border-white/10 placeholder-gray-400 focus:outline-none"
      />

      {/* Buttons */}
      <div className="flex space-x-2 mt-4">
        <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm">Apply</button>
        <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm">Show In Planner</button>
      </div>

      {/* Line Pills */}
      <div className="flex flex-wrap gap-2 mt-4 text-sm">
        <span className="flex items-center px-3 py-1 rounded-full bg-white/10">
          <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span> 
          Blue
        </span>
        <span className="flex items-center px-3 py-1 rounded-full bg-white/10">
          <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span> 
          Sukhumvit
        </span>
        <span className="flex items-center px-3 py-1 rounded-full bg-white/10">
          <span className="w-3 h-3 rounded-full bg-green-700 mr-2"></span> 
          Silom
        </span>
        <span className="flex items-center px-3 py-1 rounded-full bg-white/10">
            <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span> Red
        </span>
        <span className="flex items-center px-3 py-1 rounded-full bg-white/10">
            <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span> Yellow
        </span>
        <span className="flex items-center px-3 py-1 rounded-full bg-white/10">
            <span className="w-3 h-3 rounded-full bg-pink-400 mr-2"></span> Pink
        </span>
      </div>
    </div>
  )
}
