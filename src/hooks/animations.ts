import { animate, useMotionValue } from "framer-motion";
import { useMemo } from "react";

export function useP(to: number, duration: number = 1, delay: number = 0) {
  const p = useMotionValue(0);

  useMemo(() => {
    animate(p, to, {
      duration,
      delay,
    })
  }, [p, to, duration, delay]);


  return p;
}
