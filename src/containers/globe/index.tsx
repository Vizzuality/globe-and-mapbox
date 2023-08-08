'use client'

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Earth from "@/containers/globe/earth";
import Satellites from "@/containers/globe/satellites";
import Marker from "@/containers/globe/marker";
import Atmosphere from "@/containers/globe/earth/atmosphere";

export default function Globe() {
  return (
    <div className="w-screen h-screen bg-gradient-radial from-sky-950 to-black">
      <Canvas shadows>
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 10]}
          intensity={2}
          castShadow
          shadow-mapSize-width={1920}
          shadow-mapSize-height={1920}
          shadow-camera-far={500}
          shadow-camera-left={-5}
          shadow-camera-right={5}
          shadow-camera-top={5}
          shadow-camera-bottom={-5}
        />

        <Earth />
        <Atmosphere />

        <Satellites />

        <Marker lat={40.4168} lng={-3.7038} />
        <Marker lat={-23.5505} lng={-46.6333} />
        <Marker lat={-19.9167} lng={-43.9333} />
        <Marker lat={-33.8688} lng={151.2093} />
        <Marker lat={-22.9068} lng={-43.1729} />
        <Marker lat={-34.6037} lng={-58.3816} />
        <Marker lat={-12.0464} lng={-77.0428} />
        <Marker lat={-33.4489} lng={-70.6693} />
        …

        <OrbitControls
          minDistance={5}
          maxDistance={7}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5} />
      </Canvas>
    </div>
  )
}