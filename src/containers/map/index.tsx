'use client'

import { useControls } from "leva";

import MapMapbox from "@/components/map";

export default function Map() {
  const { progress } = useControls({
    progress: {
      value: 0,
      min: 0,
      max: 1,
      step: 0.01,
    }
  })

  return (
    <div
      className="absolute top-0 left-0 w-full h-full z-20"
      style={{
        opacity: progress,
        visibility: progress === 0 ? 'hidden' : 'visible',
      }}
    >
      <MapMapbox
        id="default"
        initialViewState={{
          latitude: -20,
          longitude: -40,
          zoom: 5,
        }}
        mapStyle="mapbox://styles/mapbox/satellite-v9"
      />
    </div>
  )
}