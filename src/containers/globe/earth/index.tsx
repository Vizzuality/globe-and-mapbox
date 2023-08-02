'use client'

import { useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber"

export default function Earth() {
  // Textures
  const texture = useTexture({
    map: '/earth/8081_earthmap2k.jpg',
    displacementMap: '/earth/8081_earthbump2k.jpg',
    specularMap: '/earth/8081_earthspec2k.jpg',
  });



  // Radius
  const { viewport } = useThree();
  const size = Math.min(viewport.width, viewport.height);
  const radius = size / 3;

  return (
    <mesh>
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