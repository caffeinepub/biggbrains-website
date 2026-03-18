import { Float } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import type * as THREE from "three";

const CYAN = "#00d4ff";
const VIOLET = "#a855f7";

function FloatingShape({
  position,
  color,
  geometry,
  floatSpeed = 1,
  floatIntensity = 0.5,
  opacity = 0.18,
}: {
  position: [number, number, number];
  color: string;
  geometry: "icosahedron" | "torusKnot" | "octahedron" | "dodecahedron";
  floatSpeed?: number;
  floatIntensity?: number;
  opacity?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  const GeomComponent = () => {
    switch (geometry) {
      case "icosahedron":
        return <icosahedronGeometry args={[1, 0]} />;
      case "torusKnot":
        return <torusKnotGeometry args={[0.6, 0.2, 64, 8]} />;
      case "octahedron":
        return <octahedronGeometry args={[1, 0]} />;
      case "dodecahedron":
        return <dodecahedronGeometry args={[1, 0]} />;
    }
  };

  return (
    <Float
      speed={floatSpeed}
      floatIntensity={floatIntensity}
      rotationIntensity={0.3}
    >
      <group position={position}>
        {/* Solid semi-transparent mesh */}
        <mesh ref={meshRef}>
          <GeomComponent />
          <meshStandardMaterial
            color={color}
            transparent
            opacity={opacity}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
        {/* Wireframe overlay */}
        <mesh>
          <GeomComponent />
          <meshBasicMaterial
            color={color}
            wireframe
            transparent
            opacity={0.35}
          />
        </mesh>
      </group>
    </Float>
  );
}

const PARTICLE_COUNT = 90;
const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  id: i,
  x: (Math.random() - 0.5) * 16,
  y: Math.random() * 8 - 3,
  z: (Math.random() - 0.5) * 16,
  r: 0.02 + Math.random() * 0.03,
}));

function ParticleCloud() {
  return (
    <group>
      {particles.map((p) => (
        <mesh key={p.id} position={[p.x, p.y, p.z]}>
          <sphereGeometry args={[p.r, 6, 6]} />
          <meshBasicMaterial color={CYAN} transparent opacity={0.4} />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const targetRot = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    targetRot.current.x +=
      (mouse.current.y * 0.15 - targetRot.current.x) * 0.05;
    targetRot.current.y += (mouse.current.x * 0.2 - targetRot.current.y) * 0.05;
    if (groupRef.current) {
      groupRef.current.rotation.x = targetRot.current.x;
      groupRef.current.rotation.y = targetRot.current.y;
    }
  });

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} color={CYAN} />
      <pointLight position={[-5, -3, 2]} intensity={0.8} color={VIOLET} />

      <group ref={groupRef}>
        <FloatingShape
          position={[-4, 2, -2]}
          color={CYAN}
          geometry="icosahedron"
          floatSpeed={1.2}
          floatIntensity={0.6}
          opacity={0.2}
        />
        <FloatingShape
          position={[4, 1.5, -3]}
          color={VIOLET}
          geometry="torusKnot"
          floatSpeed={0.8}
          floatIntensity={0.4}
          opacity={0.15}
        />
        <FloatingShape
          position={[-2.5, -2, -1]}
          color={VIOLET}
          geometry="octahedron"
          floatSpeed={1.5}
          floatIntensity={0.7}
          opacity={0.22}
        />
        <FloatingShape
          position={[3, -1.5, -2]}
          color={CYAN}
          geometry="dodecahedron"
          floatSpeed={0.9}
          floatIntensity={0.5}
          opacity={0.18}
        />
        <FloatingShape
          position={[0.5, 2.5, -4]}
          color={CYAN}
          geometry="icosahedron"
          floatSpeed={1.1}
          floatIntensity={0.45}
          opacity={0.14}
        />
        <FloatingShape
          position={[-3.5, -0.5, -3]}
          color={VIOLET}
          geometry="dodecahedron"
          floatSpeed={1.3}
          floatIntensity={0.55}
          opacity={0.16}
        />
        <FloatingShape
          position={[2, 0, -1]}
          color={VIOLET}
          geometry="octahedron"
          floatSpeed={0.7}
          floatIntensity={0.35}
          opacity={0.12}
        />

        <ParticleCloud />
      </group>
    </>
  );
}

export default function Hero3DScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 12], fov: 60 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent" }}
      dpr={[1, 1.5]}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
