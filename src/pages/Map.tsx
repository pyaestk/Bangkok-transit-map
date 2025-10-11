import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useEffect, useRef } from "react";
import FiltersCard from "../component/mappage/FiltersCard";

export default function Map() {
  const wrapperRef = useRef<any>(null);

  // 🧭 This ensures same view as "reset" on first render
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (wrapperRef.current) {
        const { setTransform, centerView } = wrapperRef.current;
        setTransform(0, 0, 0.5); // zoom out level
        centerView(0.5); // center nicely at same scale
      }
    }, 100); // short delay to ensure image is rendered
    return () => clearTimeout(timeout);
  }, []);

  const handleReset = () => {
    if (wrapperRef.current) {
      const { setTransform, centerView } = wrapperRef.current;
      setTransform(0, 0, 0.5);
      centerView(0.07);
    }
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
          <TransformWrapper
            ref={wrapperRef}
            initialScale={1} // start neutral, we’ll set 0.5 via useEffect
            minScale={0.07}
            maxScale={1}
            centerOnInit={true}
            limitToBounds={false}
            wheel={{ step: 0.5 }}
            doubleClick={{ disabled: true }}
          >
            {({ zoomIn, zoomOut }) => (
              <>
                <TransformComponent>
                  <img
                    src="/images/BangkokTransitMap.png"
                    alt="Bangkok Metro Map"
                    className="max-w-none select-none"
                  />
                </TransformComponent>

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
                    onClick={handleReset}
                    className="px-3 py-2 rounded-lg bg-black/60 text-white hover:bg-black/80"
                  >
                    ⟳
                  </button>
                </div>
              </>
            )}
          </TransformWrapper>
        </div>
      </div>
    </div>
  );
}
