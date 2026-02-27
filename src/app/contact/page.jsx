'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaPaperPlane,
} from 'react-icons/fa'
import toast from 'react-hot-toast'

gsap.registerPlugin(ScrollTrigger)

export default function ContactSection() {
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const socialRef = useRef(null)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      return toast.error('Please fill in all fields')
    }

    setIsSubmitting(true)
    const loadingToast = toast.loading('Sending your message...')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success('Thenks for your concern', { id: loadingToast })
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.', {
        id: loadingToast,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main Section Reveal
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      })

      // Header Stagger
      gsap.from('.contact-header-item', {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })

      // Form Stagger
      gsap.from('.contact-input', {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 95%',
        },
      })

      // Optimized Social Section Animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: socialRef.current,
          start: 'top 90%',
        },
      })

      tl.from('.social-icon-card', {
        opacity: 0,
        scale: 0.9,
        y: 40,
        stagger: 0.12,
        duration: 1,
        ease: 'power4.out',
        clearProps: 'all', // Cleanup to prevent style conflicts
      })

      // Start floating ONLY after cards have arrived
      tl.to(
        '.social-icon-float',
        {
          y: -10,
          duration: 2,
          repeat: -1,
          yoyo: true,
          stagger: {
            each: 0.2,
            from: 'random',
          },
          ease: 'sine.inOut',
        },
        '-=0.5',
      ) // Slight overlap for smoothness
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const socialLinks = [
    {
      icon: <FaWhatsapp />,
      name: 'WhatsApp',
      color: 'hover:text-green-500',
      href: 'https://wa.me/8801620885976?text=Hello%20Opu!%20I%20want%20to%20contact%20you',
    },
    {
      icon: <FaFacebookF />,
      name: 'Facebook',
      color: 'hover:text-blue-600',
      href: 'https://www.facebook.com/opuifnwhy',
    },
    {
      icon: <FaInstagram />,
      name: 'Instagram',
      color: 'hover:text-pink-500',
      href: 'https://www.instagram.com/opu_bm01/',
    },
    {
      icon: <FaEnvelope />,
      name: 'Email',
      color: 'hover:text-red-500',
      href: 'mailto:hibarmanda@gmail.com?subject=Hello&body=Hi%20Opu,%20I%20want%20to%20contact%20you',
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 px-6 md:px-12 lg:px-24 bg-transparent relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Form */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="contact-header-item font-outfit text-pink-500 tracking-widest uppercase text-sm font-bold">
              Get in Touch
            </h2>
            <h1 className="contact-header-item font-outfit text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Send us a <br />
              <span className="bg-linear-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent italic">
                Message
              </span>
            </h1>
            <p className="contact-header-item text-white/60 text-lg max-w-md font-light">
              Have a project in mind? We&apos;d love to hear from you. Fill out
              the form and we&apos;ll get back to you shortly.
            </p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="contact-input space-y-2">
                <label className="text-white/40 text-xs font-bold uppercase tracking-wider ml-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-hidden focus:border-pink-500/50 transition-all backdrop-blur-md"
                  required
                />
              </div>
              <div className="contact-input space-y-2">
                <label className="text-white/40 text-xs font-bold uppercase tracking-wider ml-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-hidden focus:border-pink-500/50 transition-all backdrop-blur-md"
                  required
                />
              </div>
            </div>
            <div className="contact-input space-y-2">
              <label className="text-white/40 text-xs font-bold uppercase tracking-wider ml-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                placeholder="Tell us about your project..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-hidden focus:border-pink-500/50 transition-all backdrop-blur-md resize-none"
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`contact-input group relative flex items-center justify-center gap-3 w-full md:w-auto px-10 py-5 bg-linear-to-r from-pink-500 to-orange-400 text-white rounded-2xl font-bold overflow-hidden shadow-lg shadow-pink-500/20 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              <span className="relative z-10">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </span>
              {!isSubmitting && (
                <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
              )}
            </motion.button>
          </form>
        </div>

        {/* Right Side: Socials */}
        <div className="lg:pl-12 space-y-12">
          <div className="space-y-8">
            <h3 className="font-outfit text-2xl font-bold text-white">
              Connect with us
            </h3>
            <div
              ref={socialRef}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  className={`social-icon-card group flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-lg transition-all hover:bg-white/10 ${social.color} will-change-transform will-change-opacity`}
                >
                  <span className="social-icon-float text-3xl transition-transform group-hover:scale-110 will-change-transform">
                    {social.icon}
                  </span>
                  <span className="text-white/80 font-medium group-hover:text-white transition-colors">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Additional Info / CTA */}
          <div className="p-8 bg-linear-to-br from-white/5 to-transparent border border-white/10 rounded-4xl space-y-4">
            <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-pink-500 animate-pulse"></div>
            </div>
            <h4 className="text-white font-bold text-xl leading-relaxed">
              Available for new <br /> opportunities in 2026.
            </h4>
            <p className="text-white/40 font-light italic">
              &quot;Turning coffee into clean code and high-converting
              designs.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
