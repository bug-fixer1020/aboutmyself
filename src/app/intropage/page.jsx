'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiSearch } from 'react-icons/fi'

export default function IntroPage({ onUnlock }) {
  const [searchValue, setSearchValue] = useState('')
  const targetText = 'www.opubarman.com'

  useEffect(() => {
    let index = 0
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (index <= targetText.length) {
          setSearchValue(targetText.slice(0, index))
          index++
        } else {
          clearInterval(interval)
          // Small delay after typing finishes before unlocking
          setTimeout(onUnlock, 1000)
        }
      }, 50) // Typing speed
      return () => clearInterval(interval)
    }, 1000) // Initial delay before typing starts

    return () => clearTimeout(timeout)
  }, [onUnlock])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="fixed inset-0 z-100 bg-[#07070a] flex items-center justify-center p-4 overflow-hidden"
    >
      {/* Background Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="luxury-mesh"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="w-full max-w-2xl text-center space-y-12 relative z-10"
      >
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-5xl md:text-8xl font-bold bg-linear-to-r from-pink-500 via-red-500 to-orange-400 bg-clip-text text-transparent italic"
          >
            Opu Barman
          </motion.h1>
          <p className="text-white/40 text-lg md:text-xl tracking-widest uppercase font-light">
            Digital Experience Portal
          </p>
        </div>

        <div className="relative max-w-lg mx-auto w-full px-4">
          <div className="relative group block">
            <div className="absolute -inset-1 bg-linear-to-r from-pink-500 to-orange-500 rounded-full blur-md opacity-25 transition duration-500"></div>
            <div className="relative">
              <div className="w-full bg-black/40 border-2 border-white/10 rounded-full py-5 px-14 text-white placeholder:text-white/20 outline-hidden transition-all duration-300 backdrop-blur-2xl text-lg md:text-xl font-light shadow-2xl flex items-center min-h-[70px]">
                {searchValue}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-1 w-0.5 h-6 bg-pink-500"
                />
              </div>
              <FiSearch
                className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30"
                size={24}
              />
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="pt-12"
        >
          <p className="text-white text-xs tracking-[0.3em] uppercase animate-pulse">
            Initializing Secure Access...
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
