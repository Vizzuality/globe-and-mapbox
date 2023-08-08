'use client'

import { useRadius } from "@/hooks/constants";
import { BufferAttribute, BufferGeometry, IcosahedronGeometry, MeshStandardMaterial, SphereGeometry } from "three";


import { useMemo, useRef } from "react";
import EarthMaterial from "@/containers/globe/earth/material";

export default function Earth() {
  const geometryRef = useRef<BufferGeometry>(null);

  const radius = useRadius();

  const NON_INDEXED_GEOMETRY = useMemo(() => {
    const geometry = new IcosahedronGeometry(radius, 64);
    // const geometry = new BoxGeometry(1, 1, 1, 100, 100, 100);
    // const geometry = new SphereGeometry(1, 100, 100);
    // const geometry = new PlaneGeometry(1, 1, 100, 100);
    // const nonIndexedGeometry = geometry.toNonIndexed();

    let count = geometry.attributes.position.count || 0;
    let randoms = new Float32Array(count * 3);

    for (let i = 0; i < count; i+=3) {
      const r = Math.random();
      randoms[i] = r;
      randoms[i+1] = r;
      randoms[i+2] = r;
    }

    geometry.setAttribute('a_random', new BufferAttribute(randoms, 1));

    return geometry;

  }, [radius]);

  return (
    <mesh receiveShadow rotation={[0, Math.PI, 0]}>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach={'attributes-position'}
          count={NON_INDEXED_GEOMETRY.attributes.position.count}
          array={NON_INDEXED_GEOMETRY.attributes.position.array}
          itemSize={NON_INDEXED_GEOMETRY.attributes.position.itemSize}
        />
        <bufferAttribute
          attach={'attributes-normal'}
          count={NON_INDEXED_GEOMETRY.attributes.normal.count}
          array={NON_INDEXED_GEOMETRY.attributes.normal.array}
          itemSize={NON_INDEXED_GEOMETRY.attributes.normal.itemSize}
        />
        <bufferAttribute
          attach={'attributes-a_random'}
          count={NON_INDEXED_GEOMETRY.attributes.a_random.count}
          array={NON_INDEXED_GEOMETRY.attributes.a_random.array}
          itemSize={NON_INDEXED_GEOMETRY.attributes.a_random.itemSize}
        />
        <bufferAttribute
          attach={'attributes-uv'}
          count={NON_INDEXED_GEOMETRY.attributes.uv.count}
          array={NON_INDEXED_GEOMETRY.attributes.uv.array}
          itemSize={NON_INDEXED_GEOMETRY.attributes.uv.itemSize}
        />
      </bufferGeometry>

      <EarthMaterial />
    </mesh>
  )
}