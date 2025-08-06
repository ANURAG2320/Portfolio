'use client';

import { color, motion, useMotionTemplate } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const projects = [
  {
    title: 'Furniro',
    description:
      'A full-stack furniture e-commerce app with Next.js, Clerk, and Tailwind. Pixel-perfect Figma design implementation.',
    tags: ['Next.js', 'Tailwind CSS', 'Clerk'],
  },
  {
    title: 'Hospital Management System',
    description:
      'Role-based Angular + Spring Boot web app to manage doctors, patients, appointments, and medicine inventory.',
    tags: ['Angular', 'Spring Boot', 'MySQL'],
  },
  {
    title: 'TravelPix',
    description:
      'MERN stack platform to create and manage personal travel logs with image uploads and JWT-based authentication.',
    tags: ['React.js', 'Node.js', 'MongoDB'],
    
  },
];

export default function FeaturedProjects() {
  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mt-50 text-center max-w-7xl mx-auto h-full px-4"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        <span className="text-white  font-bold">
          Featured Projects
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div className="bg-white/10 border border-white/50 backdrop-blur rounded-lg p-6 hover:shadow-2xl hover:border-red-500/50 transition-shadow h-full">
              <div className="h-1 w-10 bg-gradient-to-r from-blue-600 to-red-400 mb-4 rounded"></div>
              <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
              <p className="text-white/80 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-white-400 text-xs font-medium px-2 py-1 rounded border border-white/20 "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            
              
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
    
        
          </>
  );
}
