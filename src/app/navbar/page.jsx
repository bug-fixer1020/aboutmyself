'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX, HiArrowUp } from 'react-icons/hi'

const navLinks = [
  { name: 'Skills', href: '#skiles' },
  { name: 'Works', href: '#works' },
  { name: 'Why Me?', href: '#reasontochose' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const handleNavClick = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const elem = document.getElementById(targetId)
    if (elem) {
      elem.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* --- TOP FLOATING NAVBAR POD --- */}
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[95%] transition-all duration-500 ${scrolled ? 'top-4' : 'top-8'}`}
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-3xl sm:rounded-full shadow-2xl flex items-center justify-between"
        >
          {/* Logo / Name (Always on the Left) */}
          <a
            href="#herosection"
            onClick={(e) => handleNavClick(e, '#herosection')}
            className="font-outfit font-bold text-2xl tracking-tighter bg-linear-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            OPU.
          </a>

          {/* Desktop Links (Visible on md+) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-outfit text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Menu Toggle (Visible ONLY on Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-3xl text-white/80 hover:text-pink-500 transition-colors cursor-pointer z-60"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </motion.div>

        {/* --- SLIDE-IN SIDE MENU (Right to Left) --- */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Dark Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-md z-55 h-screen w-screen -left-[5%] md:-left-[2.5%]"
              />

              {/* Side drawer */}
              <motion.div
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-screen w-[80%] sm:w-[50%] md:w-[35%] lg:w-[25%] bg-black/40 backdrop-blur-3xl border-l border-white/10 p-12 pt-32 shadow-2xl z-58"
              >
                <div className="flex flex-col gap-10">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * idx }}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="font-outfit text-3xl font-bold text-white/60 hover:text-white transition-all relative group flex items-center gap-4"
                    >
                      <span className="text-pink-500 text-sm font-mono opacity-50">
                        0{idx + 1}
                      </span>
                      {link.name}
                      <motion.span className="absolute -left-4 w-1 h-full bg-pink-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* --- SCROLL TO TOP BUTTON --- */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 rounded-2xl bg-pink-500 text-white shadow-[0_0_20px_rgba(236,72,153,0.5)] cursor-pointer backdrop-blur-md border border-white/20 hover:bg-pink-600 transition-all"
          >
            <HiArrowUp className="text-2xl" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
