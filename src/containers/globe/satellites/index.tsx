'use client'

import Satellite from "@/containers/globe/satellites/satellite"
import { useMemo } from "react"

export default function Satellites() {
  const SATELLITES = useMemo(() => {
    return Array.from(Array(10).keys()).map((i) => {
      const scale = Math.random() * 0.25 + 0.75;
      const speed = Math.random() * 0.25 + 0.75;
      const rotateX = Math.random() * Math.PI;
      const rotateY = Math.random() * Math.PI;

      return (
        <Satellite
          key={i}
          scale={scale}
          rotateX={rotateX}
          rotateY={rotateY}
          speed={speed}
        />
      )
    })

  }, []);

  return (
    <group>
      {SATELLITES}
    </group>
  )
}