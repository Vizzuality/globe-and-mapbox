'use client'

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Earth from "@/containers/globe/earth";
import Satellites from "@/containers/globe/satellites";

export default function Globe() {
  return (
    <div className="w-screen h-screen bg-gradient-radial from-sky-950 to-black">
      <Canvas shadows>
        <ambientLight intensity={0.25} />
        <directionalLight
          position={[10, 10, 10]}
          intensity={3}
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

        <Satellites />

        <OrbitControls
          minDistance={5}
          maxDistance={7}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5} />
      </Canvas>
    </div>
  )
}