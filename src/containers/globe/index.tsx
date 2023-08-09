'use client'

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Earth from "@/containers/globe/earth";
import Atmosphere from "@/containers/globe/earth/atmosphere";
import Satellites from "@/containers/globe/satellites";
import Markers from "@/containers/globe/markers";

export default function Globe() {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen z-10">
      <Canvas
        shadows
        camera={{ position: [0, 0, 4] }}
      >
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

        <Markers />

        <OrbitControls
          minDistance={4}
          maxDistance={4}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5} />
      </Canvas>
    </div>
  )
}