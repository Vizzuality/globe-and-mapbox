'use client'

import { useRadius } from "@/hooks/constants";
import { useEffect, useMemo, useRef } from "react"
import { Mesh, Vector3 } from "three";

export default function Marker({ lat = 0, lng = 0 }) {
  const markerRef = useRef<Mesh>(null);

  const radius = useRadius();

  const position = useMemo(() => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);

    return new Vector3(
      -((Math.sin(phi) * Math.cos(theta)) * radius),
      ((Math.cos(phi)) * radius),
      ((Math.sin(phi) * Math.sin(theta)) * radius),
    )
  }, [lat, lng, radius]);

  useEffect(() => {
    if (!markerRef.current) return;

    markerRef.current.lookAt(0, 0, 0);
  }, []);

  return (
    <mesh ref={markerRef} position={position}>
      <torusGeometry args={[0.02, 0.01, 64, 64]} />
      <meshStandardMaterial color="red" />
    </mesh>
  )
}