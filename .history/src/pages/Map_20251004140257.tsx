import FiltersCard from "../component/mappage/FiltersCard";

export default function Map() {
  return (
    <div className="flex gap-x-5 min-h-screen text-white">
      {/* Sidebar - Filters */}
      <div className="w-80 flex-shrink-0">
        <FiltersCard />
      </div>

      {/* Main*/}
      <div className="border border-white/10 flex-1 overflow-auto px-5 py-5 rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-800 shadow-lg w-80 text-white">
          <div className="bg-white rounded-lg">
            <img
              src="/images/BangkokTransitMap.png"
              alt="Bangkok Metro Map"
              className=""
            />
          </div>
      </div>
    </div>
  );
}
