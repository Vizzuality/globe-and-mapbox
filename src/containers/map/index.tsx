'use client'

import { motion } from "framer-motion";

import MapMapbox from "@/components/map";
import { useGlobeStore } from "@/store";
import { useMemo } from "react";
import { markers } from "@/constants/markers";
import { MapProvider } from "react-map-gl";

export default function Map() {
  const story = useGlobeStore(state => state.story);
  const setStory = useGlobeStore(state => state.setStory);


  const bounds = useMemo(() => {
    if (!story) return undefined;

    const m = markers.features.find(({ id }) => id === story);

    if (!m) return undefined;

    return {
      bbox: m.geometry.bbox,
      options: {
        padding: 100,
        duration: 0,
      },
    }
  }, [story]);

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full z-20"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: story ? 1 : 0,
      }}
      style={{
        pointerEvents: story ? 'all' : 'none',
      }}
      transition={{
        duration: 1.5,
        delay: story ? 0.75 : 0,
      }}
    >
      <button
        className="top-0 left-0 absolute z-30 p-4 text-white bg-black bg-opacity-50"
        onClick={() => setStory(null)}
      >
        Back
      </button>

      <MapProvider>
        <MapMapbox
          id="default"
          initialViewState={{
            latitude: -20,
            longitude: -50,
            zoom: 10,
          }}
          bounds={bounds}
          mapStyle="mapbox://styles/mapbox/satellite-v9"
          terrain={{ source: 'mapbox-dem', exaggeration: 2 }}
        />
      </MapProvider>
    </motion.div>
  )
}