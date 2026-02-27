'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FaUser,
  FaCode,
  FaCheckCircle,
  FaBolt,
  FaPlusCircle,
  FaBook,
} from 'react-icons/fa'

const messages = [
  {
    role: 'user',
    content: 'Why we should choice you?',
    icon: <FaUser className="text-white/40" />,
    align: 'left',
  },
  {
    role: 'me',
    content:
      "It's your opinion. I just work like other developers, nothing special. But my strength is thinking — like this website, it's built on my thinking.",
    icon: <FaCode className="text-pink-500" />,
    align: 'right',
  },
]

const strengths = [
  { icon: <FaBolt />, text: 'Fastest delivery' },
  { icon: <FaPlusCircle />, text: 'Continuous feature additions as you wish' },
  { icon: <FaCheckCircle />, text: 'Proper testing' },
  { icon: <FaBook />, text: 'Complete tutorial for maintenance' },
]

export default function WhyChooseUs() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section
      ref={containerRef}
      className="w-full py-24 px-6 md:px-12 lg:px-24 bg-transparent relative"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-outfit text-white/40 tracking-widest uppercase text-sm font-bold">
            The Philosophy
          </h2>
          <h1 className="font-outfit text-4xl md:text-5xl font-bold text-white">
            Beyond Just <span className="text-pink-500 italic">Coding</span>
          </h1>
        </div>

        {/* Chat Dialog */}
        <div className="space-y-8">
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: msg.align === 'left' ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: idx * 0.8, duration: 0.8, ease: 'easeOut' }}
              className={`flex items-end gap-4 ${msg.align === 'right' ? 'flex-row-reverse' : ''}`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border border-white/10 backdrop-blur-md ${msg.align === 'right' ? 'bg-pink-500/20' : 'bg-white/5'}`}
              >
                {msg.icon}
              </div>
              <div
                className={`max-w-[85%] md:max-w-[80%] p-6 rounded-3xl backdrop-blur-2xl border border-white/10 shadow-2xl ${msg.align === 'right' ? 'bg-linear-to-br from-pink-500/10 to-transparent rounded-br-none' : 'bg-white/5 rounded-bl-none'}`}
              >
                <p className="font-outfit text-lg text-white/90 leading-relaxed italic">
                  &quot;{msg.content}&quot;
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Strength Cards */}
        <div className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          {strengths.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 2 + idx * 0.2, duration: 0.5 }}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-pink-500/30 transition-colors group"
            >
              <span className="text-pink-500 text-xl group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              <span className="text-white/70 font-outfit text-sm md:text-base">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Final Punchline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 3.5, duration: 1 }}
          className="text-center text-white/40 italic font-light pt-8"
        >
          You don&apos;t need an extra developer. You need a partner who thinks.
        </motion.p>
      </div>
    </section>
  )
}
