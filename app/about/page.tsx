"use client";

import { Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import * as THREE from "three";
import React from "react";


function TwinklingStars() {
  const starsRef = React.useRef<THREE.Group>(null);

  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      starsRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
    }
  });

  return (
    <group ref={starsRef}>
      <Stars radius={50} count={2500} factor={4} fade speed={4} depth={50} />
    </group>
  );
}

export default function AboutPage() {
  return (
    <div className="relative bg-background text-foreground overflow-hidden">

      <div className="absolute inset-0 -z-10 pointer-events-none">
       
        <Canvas>
          <TwinklingStars />
        </Canvas>

        
        
      </div>

      {/* === Main Content === */}
      <main className="min-h-screen px-6 py-20 flex items-start justify-center">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mt-10">Who is Anurag?</h2>

          <p className="mb-6 text-lg text-muted-foreground">
            I&apos;m a full-stack developer with a frontend-first mindset and a love for clean, scalable interfaces.
            I build real-world projects that blend{" "}
            <span className="text-blue-500 font-medium">design, performance, and usability</span>.
          </p>

          <p className="mb-6 text-lg text-muted-foreground">
            I&apos;ve built products in <span className="font-medium">web development</span>{" "}
            (React, Next.js, Angular), <span className="font-medium">backend APIs</span> (Spring Boot, Node.js), and{" "}
            <span className="font-medium">databases</span> (MongoDB, MySQL). My stack also includes TypeScript, Firebase, and Tailwind — and I&apos;m obsessed with shipping fast, accessible UIs.
          </p>

          <p className="mb-6 text-lg text-muted-foreground">
            Right now, I&apos;m working on <span className="font-semibold">Furniro</span> (a full-stack furniture e-commerce site)
            <br />
            <span className="text-blue-500 font-medium">
              I love turning complex requirements into smooth, intuitive products.
            </span>
          </p>

          <p className="text-lg text-muted-foreground">
            I&apos;m the kind of dev who blends{" "}
            <span className="italic">code + creativity + clean UX</span>. If it&apos;s fast, responsive, and solves a real problem —
            I&apos;m building it.
          </p>
        </motion.section>
      </main>
    </div>
  );
}
