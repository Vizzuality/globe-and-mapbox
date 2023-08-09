'use client'

import { useRadius } from "@/hooks/constants";
import { useGlobeStore } from "@/store";
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Mesh, Vector3 } from "three";

import { motion } from 'framer-motion-3d';

export default function Marker({ id, geometry: { coordinates: [lng, lat] } }: GeoJSON.Feature<GeoJSON.Point, { name: string }>) {
  const story = useGlobeStore(state => state.story);
  const setStory = useGlobeStore(state => state.setStory);
  const [hovered, setHovered] = useState(false);
  const markerRef = useRef<any>(null);

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

  const handleClick = useCallback(() => {
    setStory(id)
  }, [id, setStory]);

  const handleEnter = useCallback(() => {
    setHovered(true);
  }, []);

  const handleLeave = useCallback(() => {
    setHovered(false);
  }, []);

  return (
    <motion.mesh
      ref={markerRef}
      position={position}
      initial={{
        scale: 0,
      }}
      animate={{
        scale: story ? 0 : 1,
      }}
      onClick={handleClick}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
      transition={{
        duration: 0.25,
        delay: story ? 0 : 1
      }}
    >
      <torusGeometry args={[0.02, 0.01, 64, 64]} />
      <meshStandardMaterial color={hovered ? 'red' : 'white'} />
    </motion.mesh>
  )
}