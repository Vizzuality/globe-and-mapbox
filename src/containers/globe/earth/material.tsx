'use client'

import { useTexture } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

import CustomShaderMaterial from 'three-custom-shader-material'

import VERTEX from './vertex.glsl';
import FRAGMENT from './fragment.glsl';

import { useRef } from "react";
import { useControls } from "leva";

export default function EarthMaterial() {
  const materialRef = useRef<any>(null); // TODO: type

  // Textures
  const texture = useTexture({
    map: '/earth/1_earth_8k.jpeg',
    displacementMap: '/earth/8081_earthbump2k.jpg',
    specularMap: '/earth/8081_earthspec2k.jpg',
  });

  useControls({
    progress: {
      value: 0,
      min: 0,
      max: 1,
      step: 0.01,
      onChange: (value) => {
        if (!materialRef.current) return;

        materialRef.current.uniforms.u_progress.value = value;
      }
    }
  })

  // useFrame(({ clock }) => {
  //   if (!materialRef.current) return;

  //   materialRef.current.uniforms.u_time.value = clock.getElapsedTime();
  // });


  return (
    <CustomShaderMaterial
      ref={materialRef}
      baseMaterial={MeshStandardMaterial}
      vertexShader={VERTEX}
      fragmentShader={FRAGMENT}
      uniforms={{
        u_progress: { value: 0 },
        u_time: { value: 0 },
        u_texture: { value: texture.map },
      }}
      flatShading
      map={texture.map}
      displacementMap={texture.displacementMap}
      displacementScale={0.1}
      bumpMap={texture.displacementMap}
      bumpScale={0.75}
      roughnessMap={texture.specularMap}
      roughness={0}
      metalness={0.5}
      transparent
    />
  )
}