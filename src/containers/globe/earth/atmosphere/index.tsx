'use client'

import { useRadius } from "@/hooks/constants";
import { AdditiveBlending, BackSide, Vector3 } from "three";

import VERTEX from './vertex.glsl';
import FRAGMENT from './fragment.glsl';
import { useControls } from "leva";

export default function Atmosphere() {
  const radius = useRadius();

  const {
    progress,
  } = useControls({
    progress: {
      value: 0,
      min: 0,
      max: 1,
      step: 0.01,
    }
  });

  // clamp between 0 and 1
  const s = Math.max(0, Math.min(1, 1 - (progress * 3)));

  return (
    <mesh receiveShadow scale={new Vector3(s, s, s)}>
      <sphereGeometry args={[radius + (radius * 0.025), 64, 64]} />

      <shaderMaterial
        vertexShader={VERTEX}
        fragmentShader={FRAGMENT}
        transparent
        blending={AdditiveBlending}
        side={BackSide}
        uniforms={{
          u_progress: { value: progress },
        }}
      />
    </mesh>

  )
}