"use client";
import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";
import { useScroll, useTransform, useSpring } from "framer-motion";

export default function ThreeCube() {
  const container = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const progress = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const smoothProgress = useSpring(progress, { damping: 20 });

  return (
    <div ref={container as any} className="w-full h-full">
      <div className="w-full h-full max-h-[70vh]">
        <Canvas camera={{ position: [0, 0, 6] }}>
          <OrbitControls enableZoom={false} enablePan={false} />
          <ambientLight intensity={1.5} />
          <directionalLight position={[2, 1, 1]} />
          <Cube progress={smoothProgress} />
        </Canvas>
      </div>
    </div>
  );
}

function Cube({ progress }: { progress: any }) {
  const mesh = useRef<any>(null);

  const texture_1 = useLoader(TextureLoader, "/box2.jpg");
  const texture_2 = useLoader(TextureLoader, "/box3.jpg");
  const texture_3 = useLoader(TextureLoader, "/box4.jpg");
  const texture_4 = useLoader(TextureLoader, "/box5.jpg");
  const texture_5 = useLoader(TextureLoader, "/box6.jpg");
  const texture_6 = useLoader(TextureLoader, "/box1.jpg");

  // Use useFrame to drive the mesh rotation from the framer MotionValue `progress`.
  useFrame(() => {
    const target = typeof (progress?.get) === "function" ? progress.get() : 0;
    if (mesh.current) {
      // Smoothly approach the target rotation value
      mesh.current.rotation.y += (target - mesh.current.rotation.y) * 0.08;
      mesh.current.rotation.x += (target - mesh.current.rotation.x) * 0.08;
    }
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial map={texture_1} attach="material-0" />
      <meshStandardMaterial map={texture_2} attach="material-1" />
      <meshStandardMaterial map={texture_3} attach="material-2" />
      <meshStandardMaterial map={texture_4} attach="material-3" />
      <meshStandardMaterial map={texture_5} attach="material-4" />
      <meshStandardMaterial map={texture_6} attach="material-5" />
    </mesh>
  );
}
