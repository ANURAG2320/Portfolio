"use client";

import { Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import * as THREE from "three";
import Link from "next/link";
import FeaturedProjects from "./featured-projects";
import TechStack from "./tech";
import { Globe } from "lucide-react";





const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

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

export const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center mt-0"
      >
        <div className="relative z-10  flex flex-col items-center mt-20">
          <h1 className="  relative z-10 mx-auto w-fit text-center text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold   leading-tight sm:leading-snug md:leading-normal space-y-4">
            <div className="whitespace-nowrap">
              {"Transforming ideas into code".split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  className="inline-block mr-1 sm:mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </div>

            <div className="whitespace-nowrap">
              {"and code into seamless interfaces."
                .split(" ")
                .map((word, index) => (
                  <motion.span
                    key={`line2-${index}`}
                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.7 + index * 0.1,
                      ease: "easeInOut",
                    }}
                    className="inline-block mr-1 sm:mr-2"
                  >
                    {word}
                  </motion.span>
                ))}
            </div>
          </h1>

          <p className="my-6 mt-10 mb-20 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
            Always learning. Always building. <br />
            Code. Solve. Deploy. Repeat.
          </p>
        </div>

        <div className="flex items-center justify-center mt-6 z-10 relative">
          <Link href="/projects" passHref>
            <motion.button
              style={{
                border,
                boxShadow,
              }}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
            >
              Explore my work
              <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* about me section */}
      <div className="mt-15">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 text-center max-w-4xl mx-auto h-full"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 ">
            <span className="text-white ">About Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6">
            I'm a full-stack developer passionate about building responsive,
            scalable web apps using modern tools like React, Next.js, Spring
            Boot, and MongoDB. I turn Figma designs into pixel-perfect
            interfaces and enjoy crafting clean, maintainable code that solves
            real-world problems.
          </p>
          <div className="flex items-center justify-center mt-20 z-10 relative">
            <Link href="/about" passHref>
              <motion.button
                style={{
                  border,
                  boxShadow,
                }}
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
              >
                More about me
                <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>



<FeaturedProjects />
<TechStack />  

      <div className="absolute inset-0 z-0">
        <Canvas>
          <TwinklingStars />
        </Canvas>
      </div>
    </motion.section>
  );
};
