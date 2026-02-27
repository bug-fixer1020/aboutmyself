'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleHireMeClick = (e) => {
    e.preventDefault()
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
      color: 'hover:text-[#0077b5]',
    },
    {
      icon: <FaGithub />,
      href: 'https://github.com',
      label: 'GitHub',
      color: 'hover:text-[#333]',
    },
    {
      icon: <FaInstagram />,
      href: 'https://instagram.com',
      label: 'Instagram',
      color: 'hover:text-[#e4405f]',
    },
    {
      icon: <FaWhatsapp />,
      href: 'https://wa.me/yournumber',
      label: 'WhatsApp',
      color: 'hover:text-[#25d366]',
    },
  ]

  const navLinks = [
    { name: 'Home', href: '#herosection' },
    { name: 'Skills', href: '#skiles' },
    { name: 'Works', href: '#works' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="relative pt-24 pb-12 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        {/* Brand Section */}
        <div className="md:col-span-2 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-outfit text-3xl font-bold tracking-tighter bg-linear-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              OPU BARMAN
            </h2>
            <p className="text-white/50 font-medium mt-1 uppercase tracking-widest text-sm">
              MERN Stack Developer & UI Enthusiast
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-md leading-relaxed"
          >
            I build high-performance, visually stunning web applications using
            the MERN stack. Let's turn your vision into reality with clean code
            and modern aesthetics.
          </motion.p>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h3 className="text-white font-bold text-lg font-outfit">
            Quick Navigation
          </h3>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-white/50 hover:text-pink-500 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 h-px bg-pink-500 group-hover:w-4 transition-all duration-300"></span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hire Me CTA & Socials */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg font-outfit">
              Ready to Start?
            </h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleHireMeClick}
              className="flex items-center gap-3 px-8 py-3 bg-linear-to-r from-pink-600 to-orange-500 text-white font-bold rounded-2xl shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all group cursor-pointer"
            >
              Hire Me
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.2 }}
                className={`w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-white/70 ${social.color} backdrop-blur-sm transition-all shadow-xl hover:shadow-[0_0_15px_rgba(236,72,153,0.2)]`}
                aria-label={social.label}
              >
                <span className="text-xl">{social.icon}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
        <p>© {currentYear} Opu Barman. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>
      </div>

      {/* Decorative Glow Blobs */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-pink-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none"></div>
    </footer>
  )
}
