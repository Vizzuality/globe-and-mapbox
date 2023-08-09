'use client'

import Marker from "@/containers/globe/markers/marker"
import { markers } from "@/containers/globe/markers/constants"


export default function Markers() {
  return (
    <>
      {markers.features.map((marker, i) => {
        return <Marker key={i} {...marker} />
      })}
    </>
  )
}