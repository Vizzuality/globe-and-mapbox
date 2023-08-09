'use client'

import { useTexture } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

import CustomShaderMaterial from 'three-custom-shader-material'

import VERTEX from './vertex.glsl';
import FRAGMENT from './fragment.glsl';

import { useMemo, useRef } from "react";
import { useGlobeStore } from "@/store";
import { useMotionValueEvent } from "framer-motion";
import { useP } from "@/hooks/animations";

export default function EarthMaterial() {
  const story = useGlobeStore(state => state.story);
  const pMotion = useP(story ? 1 : 0);

  const materialRef = useRef<any>(null); // TODO: type

  // Textures
  const texture = useTexture({
    map: '/earth/1_earth_2k.jpg',
    displacementMap: '/earth/8081_earthbump2k.jpg',
    specularMap: '/earth/8081_earthspec2k.jpg',
  });

  const uniforms = useMemo(() => ({
    u_progress: { value: 0 },
    u_time: { value: 0 },
    u_texture: { value: texture.map },
  }), [texture.map]);


  useMotionValueEvent(pMotion, 'change', (v) => {
    if (!materialRef.current) return;

    materialRef.current.uniforms.u_progress.value = v;
  });

  return (
    <CustomShaderMaterial
      ref={materialRef}
      baseMaterial={MeshStandardMaterial}
      vertexShader={VERTEX}
      fragmentShader={FRAGMENT}
      uniforms={uniforms}
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