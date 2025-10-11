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
      <div className="border border-white/10 h-full flex-1 overflow-hidden px-5 py-5 rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg text-white">
        <div className="bg-white rounded-lg h-[80vh] flex justify-center overflow-hidden">
          <TransformWrapper
            initialScale={0.7}
            minScale={0.3}
            maxScale={5}
            wheel={{ step: 0.2 }}
            doubleClick={{ mode: "zoomIn" }}
            pinch={{ step: 10 }}
            centerOnInit={true}
            limitToBounds={false} 
          >
            <TransformComponent wrapperClass="w-full h-full">
              <img
                src="/images/BangkokTransitMap.png"
                alt="Bangkok Metro Map"
                className="max-w-none select-none" // prevent browser image drag
              />
            </TransformComponent>
          </TransformWrapper>
        </div>
      </div>
    </div>
  );
}
