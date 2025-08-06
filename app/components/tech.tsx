'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const techStack = [
  { name: 'Java', icon: '/tech-icons/java-icon.svg' },
  { name: 'JavaScript', icon: '/tech-icons/javascript-icon.svg' },
  { name: 'HTML5', icon: '/tech-icons/w3_html5-icon.svg' },
  { name: 'Tailwind CSS', icon: '/tech-icons/tailwindcss-icon.svg' },
  { name: 'React.js', icon: '/tech-icons/reactjs-icon.svg' },
  { name: 'Next.js', icon: '/tech-icons/nextjs-icon.svg' },
  { name: 'Spring Boot', icon: '/tech-icons/springio-icon.svg' },
  { name: 'Firebase', icon: '/tech-icons/firebase-icon.svg' },
  { name: 'MongoDB', icon: '/tech-icons/mongodb-icon.svg' },
  { name: 'MySQL', icon: '/tech-icons/mysql-icon.svg' },
  { name: 'GitHub', icon: '/tech-icons/git-scm-icon.svg' },
  { name: 'Figma', icon: '/tech-icons/figma-icon.svg' },
  { name: 'Postman', icon: '/tech-icons/getpostman-icon.svg' },
];

export default function TechStack() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="py-20 max-w-6xl mx-auto px-4"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        <span className="bg-gradient-to-r from-blue-400 via-white to-purple-500 bg-clip-text text-transparent">
          Tech Stack
        </span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-20 place-items-center">
        {techStack.map((tech) => (
          <motion.div
            key={tech.name}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center text-center"
          >
            <Image
              src={tech.icon}
              alt={tech.name}
              width={64}
              height={64}
              className="w-16 h-16 mb-2"
            />
            <span className="text-base font-medium text-muted-foreground">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
