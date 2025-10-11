import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import FiltersCard from "../component/mappage/FiltersCard";

export default function Map() {
  return (
    <div className="flex gap-x-5 min-h-screen text-white">
      {/* Sidebar */}
      <div className="w-80">
        <FiltersCard />
      </div>

      {/* Main */}
      <div className="border border-white/10 flex-1 overflow-hidden px-5 py-5 rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg text-white">
        <div className="bg-white rounded-lg h-[100vh] flex items-center justify-center overflow-hidden">
          <TransformWrapper
            initialScale={1}
            minScale={0.5}
            maxScale={5}
            wheel={{ step: 0.2 }} // smoother zoom with mouse wheel
            doubleClick={{ mode: "zoomIn" }} // double-click to zoom
            pinch={{ step: 5 }} // mobile pinch gesture
            centerOnInit={true}
          >
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                {/* Optional controls */}
                <div className="absolute top-4 right-4 flex gap-2 z-10">
                  <button
                    onClick={() => zoomIn()}
                    className="px-3 py-1 rounded bg-black/60 text-white"
                  >
                    +
                  </button>
                  <button
                    onClick={() => zoomOut()}
                    className="px-3 py-1 rounded bg-black/60 text-white"
                  >
                    -
                  </button>
                  <button
                    onClick={() => resetTransform()}
                    className="px-3 py-1 rounded bg-black/60 text-white"
                  >
                    Reset
                  </button>
                </div>

                <TransformComponent>
                  <img
                    src="/images/BangkokTransitMap.png"
                    alt="Bangkok Metro Map"
                    className="max-w-none" // prevents auto-resizing
                  />
                </TransformComponent>
              </>
            )}
          </TransformWrapper>
        </div>
      </div>
    </div>
  );
}
