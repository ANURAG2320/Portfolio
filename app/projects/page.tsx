'use client';

import { motion } from 'framer-motion';
import { Stars } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React from 'react';
import * as THREE from 'three';

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

const projects = [
  {
    title: 'Furniro – E-Commerce Platform',
    description:
      'A full-stack furniture e-commerce app with Next.js, Clerk, and Tailwind. Pixel-perfect Figma design implementation, dynamic routing, and cart functionality.',
    link: 'https://github.com/ANURAG2320/furnio-website',
    color: 'text-rose-500',
    image: '/images/Ecommerce.svg',
    imageClass: 'max-h-60 rotate-3',
  },
  {
    title: 'Hospital Management System',
    description:
      'A role-based Angular + Spring Boot system to manage appointments, prescriptions, and medicine inventory with secure access and dashboards.',
    link: 'https://github.com/ANURAG2320/hospital-management-system',
    color: 'text-emerald-500',
    image: '/images/HMS.svg',
    imageClass: 'rotate-1',
  },
  {
    title: 'TravelPix – Travel Diary App',
    description:
      'MERN stack travel log app where users can upload photos, log journeys, and manage entries. Includes JWT auth and MongoDB for persistence.',
    link: 'https://github.com/ANURAG2320/TravelPix',
    color: 'text-indigo-500',
    image: '/images/TravelPix.svg',
    imageClass: 'rotate-2',
  },
  {
    title: 'NextGen AI Summit – Landing Page',
    description:
      'A high-performance, mobile-first conference website built with Next.js (App Router) and TypeScript. Optimized for SEO, featuring hero banners, speaker cards, and registration CTA.',
    link: 'https://github.com/ANURAG2320',
    color: 'text-yellow-400',
    image: '/images/Nexus.svg',
    imageClass: 'rotate-2 max-h-60',
  },
];

export default function ProjectPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-transparent">
      {/* Absolute Canvas Background with Pointer Ignored */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Canvas>
          <TwinklingStars />
        </Canvas>
      </div>

      {/* Foreground Project Section */}
      <main className="relative z-10 px-6 py-20 flex items-start justify-center text-neutral-100">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="max-w-5xl w-full"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-extrabold mb-16 text-center text-white"
          >
            My Projects
          </motion.h2>

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-16 flex flex-col sm:flex-row items-center bg-black/70 backdrop-blur-md rounded-2xl shadow-xl p-8"
            >
              <div className="sm:w-1/2">
                <h3 className={`text-3xl font-bold ${project.color}`}>
                  {project.title}
                </h3>
                <p className="mt-4 text-lg text-neutral-300 leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className={`mt-6 inline-block ${project.color} font-medium hover:underline`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub →
                </a>
              </div>

              <motion.div className="sm:w-1/2 mt-8 sm:mt-0 flex justify-center">
                <motion.img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className={`max-w-full h-full rounded-lg shadow-lg transform ${project.imageClass} transition-all duration-500 ease-in-out`}
                  style={{ objectFit: 'cover' }}
                  whileHover={{
                    scale: 1.15,
                    rotateY: 8,
                    rotateX: 2,
                    zIndex: 10,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.section>
      </main>
    </div>
  );
}
