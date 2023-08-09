'use client'

import { useRadius } from "@/hooks/constants";
import { AdditiveBlending, BackSide, Vector3 } from "three";

import VERTEX from './vertex.glsl';
import FRAGMENT from './fragment.glsl';
import { useGlobeStore } from "@/store";
import { useP } from "@/hooks/animations";
import { useMotionValueEvent } from "framer-motion";
import { useMemo, useRef } from "react";

export default function Atmosphere() {
  const materialRef = useRef<any>(null); // TODO: type

  const radius = useRadius();
  const r = radius + (radius * 0.025);

  const story = useGlobeStore(state => state.story);
  const pMotion = useP(story ? 1 : 0, 0.25, story ? 0 : 0.75);

  const uniforms = useMemo(() => ({
    u_progress: { value: 0 },
    u_radius: { value: r },
  }), [r]);

  useMotionValueEvent(pMotion, 'change', (v) => {
    if (!materialRef.current) return;

    materialRef.current.uniforms.u_progress.value = v;
  });

  return (
    <mesh receiveShadow>
      <sphereGeometry args={[r, 64, 64]} />

      <shaderMaterial
        ref={materialRef}
        vertexShader={VERTEX}
        fragmentShader={FRAGMENT}
        uniforms={uniforms}
        transparent
        blending={AdditiveBlending}
        side={BackSide}
      />
    </mesh>

  )
}