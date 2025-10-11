import { useState } from "react";
import { MapInteractionCSS } from 'react-map-interaction';
import FiltersCard from "../component/mappage/FiltersCard";

export default function Map() {
  const [value, setValue] = useState({
    scale: 0.5,
    translation: { x: 0, y: 0 },
  });

  type MapValue = {
    scale: number;
    translation: { x: number; y: number };
  };

  const resetView = () => {
    setValue({
      scale: 0.1, // fully zoomed out
      translation: { x: 0, y: 0 }, // reset to center-ish
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-5 text-white">
      {/* Sidebar */}
      <div className="w-full md:w-80">
        <FiltersCard />
      </div>

      {/* Main */}
      <div className="relative border border-white/10 h-full flex-1 overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg text-white">
        <div className="bg-white rounded-lg h-[80vh] flex items-center justify-center overflow-hidden relative">
          <MapInteractionCSS
            value={value}
            onChange={(val: MapValue) => setValue(val)}
            minScale={0.1}
            maxScale={1}
          >
            <img
              src="/images/BangkokTransitMap.png"
              alt="Bangkok Metro Map"
              className="max-w-none"
            />
          </MapInteractionCSS>

          {/* Zoom Controls */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 z-20">
            <button
              onClick={() =>
                setValue((prev) => ({
                  ...prev,
                  scale: Math.min(prev.scale + 0.1, 1),
                }))
              }
              className="px-3 py-2 rounded-lg bg-black/60 text-white hover:bg-black/80"
            >
              +
            </button>
            <button
              onClick={() =>
                setValue((prev) => ({
                  ...prev,
                  scale: Math.max(prev.scale - 0.1, 0.1),
                }))
              }
              className="px-3 py-2 rounded-lg bg-black/60 text-white hover:bg-black/80"
            >
              -
            </button>
            <button
              onClick={resetView}
              className="px-3 py-2 rounded-lg bg-black/60 text-white hover:bg-black/80"
            >
              ⟳
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
