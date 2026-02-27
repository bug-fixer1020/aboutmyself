'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import IntroPage from './intropage/page'
import HeroSection from './herosection/page'
import SkilesPage from './skiles/page'
import Works from './works/page'
import WhyChooseUs from './reasontochose/page'
import ContactSection from './contact/page'

export default function Home() {
  const [isUnlocked, setIsUnlocked] = useState(false)

  // Check if already unlocked in session
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const unlocked = sessionStorage.getItem('site_unlocked')
      if (unlocked === 'true') {
        setIsUnlocked(true)
      }
    }
  }, [])

  const handleUnlock = () => {
    setIsUnlocked(true)
    sessionStorage.setItem('site_unlocked', 'true')
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {!isUnlocked && <IntroPage key="intro" onUnlock={handleUnlock} />}
      </AnimatePresence>

      <main
        className={`min-h-screen w-full px-4 py-8 md:px-8 lg:px-12 2xl:px-20 2xl:py-12 transition-opacity duration-1000 ${isUnlocked ? 'opacity-100' : 'opacity-0'}`}
      >
        <section id="herosection">
          <HeroSection />
        </section>
        <section id="skiles">
          <SkilesPage />
        </section>
        <section id="works">
          <Works />
        </section>
        <section id="reasontochose">
          <WhyChooseUs />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </>
  )
}
