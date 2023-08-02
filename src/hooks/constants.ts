import { useThree } from "@react-three/fiber";

export const useRadius = () => {
  // Radius
  const { viewport } = useThree();
  const size = Math.min(viewport.width, viewport.height);
  const radius = size / 3;
  return radius;
};