'use client'

import Earth from "@/containers/globe/earth";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Globe() {
  return (
    <div className="w-screen h-screen bg-gradient-radial from-sky-950 to-black">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        <Earth />

        <OrbitControls
          minDistance={5}
          maxDistance={7}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2} />
      </Canvas>
    </div>
  )
}