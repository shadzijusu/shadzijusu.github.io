import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

interface StarsProps {
  [key: string]: any;
}

export const StarsScene: React.FC<StarsProps> = (props) => {
  const ref = useRef<THREE.Group>(null);

  const [sphere] = useState<Float32Array>(() => {
    const points = new Float32Array(5000);
    for (let i = 0; i < points.length; i += 3) {
      let x, y, z, length;
      do {
        x = Math.random() * 2 - 1;
        y = Math.random() * 2 - 1;
        z = Math.random() * 2 - 1;
        length = Math.sqrt(x * x + y * y + z * z);
      } while (length > 1);

      points[i] = x * 1.5;
      points[i + 1] = y * 1.5;
      points[i + 2] = z * 1.5;
    }
    return points;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
      <Points positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};
