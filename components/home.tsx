"use client"
import { Canvas } from "@react-three/fiber";
import { FC } from "react";

export const Home: FC = () => {
  return (
    <div>
      <Canvas>
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color="blue" />
        </mesh>
      </Canvas>
    </div>
  );
};
