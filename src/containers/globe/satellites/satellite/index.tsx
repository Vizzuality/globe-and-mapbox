'use client'

import { useRadius } from "@/hooks/constants";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { CurvePath, LineCurve3, Mesh, RingGeometry, Vector3 } from "three";
import { motion } from "framer-motion-3d";
import { useGlobeStore } from "@/store";

export default function Satellite({
  speed = 1,
  scale = 1,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
}) {
  const story = useGlobeStore(state => state.story);
  const satelliteRef = useRef<any>(null);


  const radius = useRadius();
  const radiusOffset = 0.5 * scale;
  const v_center = new Vector3(0, 0, 0);


  const initialTime = useMemo(() => {
    return Math.random() * 100;
  }, []);

  const ringGeometry = useMemo(() => {
    const g = new RingGeometry((radius + radiusOffset), radius + radiusOffset + 0.01, 32, 32);

    g.rotateX(rotateX);
    g.rotateY(rotateY);
    g.rotateZ(rotateZ);

    return g;
  }, [radius, radiusOffset, rotateX, rotateY, rotateZ]);

  const path = useMemo(() => {
    const curve = new CurvePath<Vector3>();
    // generate the curve following the center of the ringGeometry
    // (the curve will be used to move the satellite around the ring)

    for (let i = 0; i < ringGeometry.attributes.position.count - 1; i++) {
      const c = new LineCurve3(
        new Vector3().fromBufferAttribute(ringGeometry.attributes.position, i),
        new Vector3().fromBufferAttribute(ringGeometry.attributes.position, i + 1)
      )

      curve.add(c);
    }

    return curve;
  }, [ringGeometry]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime() * 0.25 + initialTime;
    const t = (time * 0.005 * speed * scale) % 1;

    if (!satelliteRef.current) return;

    satelliteRef.current.position.copy(path.getPoint(t));

    satelliteRef.current.lookAt(v_center);
  });

  return (
    <>
      <motion.mesh
        ref={satelliteRef}
        initial={{
          scale: 0,
        }}
        animate={{
          scale: story ? 0 : scale/3,
        }}
        castShadow
        transition={{
          duration: 0.5,
          delay: story ? 0 : 1
        }}
      >
        <sphereGeometry args={[0.05, 64, 64]} />
        <meshStandardMaterial color="white" side={2} />
      </motion.mesh>

      {/* <mesh geometry={ringGeometry}>
        <meshStandardMaterial color="white" side={2} />
      </mesh> */}
    </>
  )
}