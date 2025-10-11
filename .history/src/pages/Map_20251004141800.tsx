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
      <div className="border border-white/10 flex-1 overflow-auto px-5 py-5 rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg text-white">
        <div className="bg-white rounded-lg flex items-center justify-center">
          <TransformWrapper
            initialScale={1}
            minScale={0.5}
            maxScale={5}
            centerOnInit
          >
            <TransformComponent>
              <img
                src="/images/BangkokTransitMap.png"
                alt="Bangkok Metro Map"
                className="max-w-none"
              />
            </TransformComponent>
          </TransformWrapper>
        </div>
      </div>
    </div>
  );
}
