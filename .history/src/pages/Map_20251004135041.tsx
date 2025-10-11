import FiltersCard from "../component/mappage/FiltersCard";

export default function Map() {
  return (
    <div className="flex min-h-screen text-white">
      {/* Sidebar - Filters */}
      <div className="w-80 flex-shrink-0">
        <FiltersCard />
      </div>

      {/* Main*/}
      <div className="flex-1 overflow-auto p-4 rounded-2xl bg-white text-white">
          <div>
            <img
              src="/images/BangkokTransitMap.png"
              alt="Bangkok Metro Map"
              className="max-w-none"
            />
          </div>
      </div>
    </div>
  );
}
