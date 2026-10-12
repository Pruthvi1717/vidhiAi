import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";

type RingProps = {
  count: number;
  len: number;
  width: number;
  tilt: number;
  color: string;
  offset?: number;
};

function PetalRing({ count, len, width, tilt, color, offset = 0 }: RingProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <group key={i} rotation={[0, offset + (i / count) * Math.PI * 2, 0]}>
          <group rotation={[0, 0, tilt]}>
            <mesh position={[len, 0, 0]} scale={[len, 0.06, width]}>
              <sphereGeometry args={[1, 24, 16]} />
              <meshStandardMaterial color={color} transparent opacity={0.07} />
            </mesh>
          </group>
        </group>
      ))}
    </>
  );
}

function Lotus() {
  const spin = useRef<Group>(null);
  const rings = useRef<Group>(null);

  useFrame((_, delta) => {
    if (spin.current) spin.current.rotation.y += delta * 0.25;
    if (rings.current) rings.current.rotation.z -= delta * 0.15;
  });

  return (
    <group scale={1.3}>
      {/* Lotus */}
      <group rotation={[0.9, 0, 0]}>
        <group ref={spin}>
          <PetalRing count={12} len={1.1} width={0.3} tilt={0.2} color="#f0a35e" />
          <PetalRing count={10} len={0.9} width={0.28} tilt={0.55} color="#e8730c" offset={0.3} />
          <PetalRing count={8} len={0.7} width={0.25} tilt={0.9} color="#6b1d1d" />
          <mesh position={[0, 0.1, 0]}>
            <sphereGeometry args={[0.25, 32, 32]} />
            <meshStandardMaterial color="#c7ac54" />
          </mesh>
        </group>
      </group>

      {/* Gold rings */}
      <group ref={rings}>
        <mesh>
          <torusGeometry args={[2.7, 0.015, 16, 120]} />
          <meshBasicMaterial color="#c9a227" />
        </mesh>
        <mesh>
          <torusGeometry args={[3.1, 0.01, 16, 120]} />
          <meshBasicMaterial color="#c9a227" transparent opacity={0.6} />
        </mesh>
      </group>
    </group>
  );
}

function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[3, 5, 5]} intensity={1.2} />
      <Lotus />
    </Canvas>
  );
}

export default HeroScene;