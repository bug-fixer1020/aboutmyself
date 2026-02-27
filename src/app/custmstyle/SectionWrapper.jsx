'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function SectionWrapper({ children, id }) {
  const ref = useRef(null)

  // Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Create smooth transforms for opacity and blur
  // - 0 to 0.2: Fading in and un-blurring as it enters from bottom
  // - 0.2 to 0.8: Fully visible and clear in the middle
  // - 0.8 to 1: Fading out and blurring as it exits to top
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const blur = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    ['blur(10px)', 'blur(0px)', 'blur(0px)', 'blur(10px)'],
  )
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.95, 1, 1, 0.95],
  )

  return (
    <motion.section
      ref={ref}
      id={id}
      style={{
        opacity,
        filter: blur,
        scale,
      }}
      className="w-full transition-all duration-300 ease-out will-change-[opacity,filter,transform]"
    >
      {children}
    </motion.section>
  )
}
