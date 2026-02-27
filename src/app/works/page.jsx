'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const projects = [
  {
    title: 'E-commerce Revolution',
    category: 'Full Stack Development',
    description:
      'A premium shopping experience with seamless payments and real-time inventory.',
    color: 'from-pink-500 to-orange-400',
  },
  {
    title: 'AI Portfolio Engine',
    category: 'Machine Learning UI',
    description:
      'Smart content generation and dynamic layout systems for modern creators.',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'Luxe Branding Site',
    category: 'Design & Interaction',
    description:
      'High-end visual storytelling with smooth GSAP animations and 3D elements.',
    color: 'from-purple-500 to-indigo-400',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Myworks() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center py-24 px-6 md:px-12 lg:px-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl w-full"
      >
        <motion.div
          variants={itemVariants}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="font-outfit text-white/60 tracking-widest uppercase text-sm font-semibold">
            Featured Projects
          </h2>
          <h1 className="font-outfit text-5xl md:text-7xl font-bold bg-linear-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent">
            Crafting Digital <br />
            <span className="bg-linear-to-r from-pink-500 via-red-500 to-orange-400 bg-clip-text text-transparent italic">
              Masterpieces
            </span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:bg-white/10 transition-colors cursor-pointer overflow-hidden"
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${project.color} blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity`}
              />

              <div className="relative z-10 space-y-6">
                <div className="space-y-2">
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full bg-linear-to-r ${project.color} text-white`}
                  >
                    {project.category}
                  </span>
                  <h3 className="font-outfit text-2xl font-bold text-white group-hover:text-pink-400 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-white/60 font-light leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all tracking-wide text-sm">
                  VIEW PROJECT <FaArrowRight className="text-pink-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="mt-20 text-center">
          <a
            href="#"
            className="group font-outfit text-lg text-white/80 hover:text-white transition-colors flex items-center justify-center gap-3"
          >
            Explore all works
            <div className="w-12 h-px bg-white/20 group-hover:w-20 group-hover:bg-pink-500 transition-all" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
