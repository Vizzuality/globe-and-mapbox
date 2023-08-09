'use client'

import Marker from "@/containers/globe/markers/marker"
import { markers } from "@/constants/markers"


export default function Markers() {
  return (
    <>
      {markers.features.map((marker, i) => {
        return <Marker key={i} {...marker} />
      })}
    </>
  )
}