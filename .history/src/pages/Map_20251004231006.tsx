import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import FiltersCard from "../component/mappage/FiltersCard";

export default function Map() {
  return (
    <div className="flex flex-col md:flex-row gap-5 min-h-screen text-white">
      {/* Sidebar */}
      <div className="w-full md:w-80">
        <FiltersCard />
      </div>

      {/* Main */}
      <div className="relative border border-white/10 h-full flex-1 overflow-hidden px-5 py-5 rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg text-white">
        <div className="bg-white rounded-lg h-[80vh] flex items-center justify-start overflow-hidden relative">
          <TransformWrapper
            initialScale={1}
            minScale={0.3}
            maxScale={0.5}
            wheel={{ step: 0.1 }}
            doubleClick={{ mode: "zoomIn" }}
            pinch={{ step: 20 }}
            centerOnInit={false}
            limitToBounds={false}
          >
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                {/* Zoom Controls */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 z-20">
                  <button
                    onClick={() => zoomIn()}
                    className="px-3 py-2 rounded-lg bg-black/60 text-white hover:bg-black/80"
                  >
                    +
                  </button>
                  <button
                    onClick={() => zoomOut()}
                    className="px-3 py-2 rounded-lg bg-black/60 text-white hover:bg-black/80"
                  >
                    -
                  </button>
                  <button
                    onClick={() => resetTransform()}
                    className="px-3 py-2 rounded-lg bg-black/60 text-white hover:bg-black/80"
                  >
                    ⟳
                  </button>
                </div>

                {/* Map Image */}
                <TransformComponent wrapperClass="w-full h-full">
                  <img
                    src="/images/BangkokTransitMap.png"
                    alt="Bangkok Metro Map"
                    className="max-w-none select-none"
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
