import FiltersCard from "../component/mappage/FiltersCard"

export default function Map() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar - Filters */}
      <div className="w-80 flex-shrink-0">
        <FiltersCard />
      </div>

      {/* Main - Scrollable Map */}
      <div className="flex-1 overflow-auto p-4">
        <div className="min-w-[1200px] min-h-[1200px]">
          <img
            src="/images/map.png"   // ✅ served from public folder
            alt="Bangkok Metro Map"
            className="max-w-none"
          />
        </div>
      </div>
    </div>
  )
}
