'use client'

import { useRadius } from "@/hooks/constants";
import { useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber"

export default function Earth() {
  // Textures
  const texture = useTexture({
    map: '/earth/8081_earthmap2k.jpg',
    displacementMap: '/earth/8081_earthbump2k.jpg',
    specularMap: '/earth/8081_earthspec2k.jpg',
  });

  const radius = useRadius();

  return (
    <mesh receiveShadow>
      <sphereGeometry args={[radius, 64, 64]} />
      <meshStandardMaterial
        map={texture.map}
        displacementMap={texture.displacementMap}
        displacementScale={0.1}
        bumpMap={texture.displacementMap}
        bumpScale={0.5}
        roughnessMap={texture.specularMap}
        roughness={0}
        metalness={0.5}
        transparent
      />
    </mesh>
  )
}