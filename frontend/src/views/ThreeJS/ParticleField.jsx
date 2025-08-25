import { useRef, useMemo } from "react";
import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const ParticleField = ({ count = 2000 }) => {
  const points = useRef(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
      colors[i] = Math.random();
    }
    return positions;
  }, [count]);

  useFrame(() => {
    if (points.current) {
      points.current.rotation.x += 0.0005;
      points.current.rotation.y += 0.001;
    }
  });

  return (
    <Points ref={points} positions={particles}>
      <PointMaterial
        size={0.03}
        sizeAttenuation
        color="#7033ff"
        transparent
        opacity={0.8}
      />
    </Points>
  );
};

export default ParticleField;
