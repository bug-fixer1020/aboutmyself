// 'use client'

// import { motion } from 'framer-motion'
// import { useEffect, useState } from 'react'
// import { Playfair_Display, Caveat } from 'next/font/google'
// import Image from 'next/image'

// const caveat = Caveat({
//   subsets: ['latin'],
//   weight: ['400'],
// })

// export default function HeroSection() {
//   const fullText = 'MERN Stack Developer'
//   const [typedText, setTypedText] = useState('')

//   // Typing Effect
//   useEffect(() => {
//     let index = 0
//     const interval = setInterval(() => {
//       setTypedText(fullText.slice(0, index + 1))
//       index++
//       if (index === fullText.length) clearInterval(interval)
//     }, 80)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <section className="min-h-screen flex items-center px-4 py-16 sm:px-6 md:px-10 lg:px-14 2xl:px-20 relative overflow-hidden">
//       <div className="max-w-7xl 2xl:max-w-368 mx-auto w-full flex flex-col md:grid md:grid-cols-2 items-center gap-10 sm:gap-12 lg:gap-16">
//         {/* Profile Image (Moved up for mobile) */}
//         <div className="flex justify-center items-center relative order-1 md:order-2">
//           {/* Rotating Animated Circle */}
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
//             className="absolute w-[200px] h-[200px] sm:w-[480px] sm:h-[480px] lg:w-[630px] lg:h-[630px] 2xl:w-[780px] 2xl:h-[780px] border-2 border-dashed border-pink-500/30 rounded-full"
//           ></motion.div>

//           {/* Decorative Glow Blob (Responsive) */}
//           <div className="absolute w-[180px] h-[180px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] 2xl:w-[750px] 2xl:h-[750px] bg-pink-500/20 rounded-full blur-2xl sm:blur-[120px] animate-pulse"></div>

//           <motion.div
//             initial={{ opacity: 0, y: 30, scale: 0.8 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{ duration: 1.2, ease: 'easeOut' }}
//             className="relative z-10"
//           >
//             <motion.div
//               animate={{ y: [0, -15, 0] }}
//               transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
//               className="relative p-1 rounded-[24px] sm:rounded-[40px] border border-white/20 bg-linear-to-b from-white/10 to-transparent backdrop-blur-md shadow-2xl overflow-hidden group"
//             >
//               {/* Animated Stroke/Glow Effect */}
//               <div className="absolute inset-0 rounded-[24px] sm:rounded-[40px] border border-pink-500/30 blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//               <Image
//                 src="/myself.png"
//                 alt="myself"
//                 width={700}
//                 height={700}
//                 className="w-[140px] h-auto sm:w-[380px] md:w-[450px] lg:w-[550px] 2xl:w-[700px] rounded-[20px] sm:rounded-[32px] object-cover transition-all duration-700 group-hover:scale-[1.02]"
//                 priority
//               />
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Text Content */}
//         <div className="space-y-4 sm:space-y-7 md:space-y-8 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
//           {/* Animated Heading */}
//           <motion.h1
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className={`${caveat.className} text-2xl sm:text-5xl md:text-7xl lg:text-8xl 2xl:text-9xl font-bold italic leading-tight`}
//           >
//             Hi, I&apos;m{' '}
//             <span className="bg-linear-to-r from-pink-500 via-red-500 to-orange-400 bg-clip-text text-transparent relative">
//               Opu
//               <span className="absolute left-0 -bottom-1 w-full h-1 bg-linear-to-r from-pink-500 to-orange-400 blur-md opacity-70"></span>
//             </span>
//           </motion.h1>

//           {/* Typing Effect */}
//           <motion.h2
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className={`${caveat.className} text-sm sm:text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl font-semibold text-white/80`}
//           >
//             {typedText}
//             <span className="animate-pulse">|</span>
//           </motion.h2>

//           {/* Description */}
//           <motion.p
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//             className="text-[10px] sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-white/70 max-w-[150px] sm:max-w-lg lg:max-w-xl 2xl:max-w-2xl leading-relaxed"
//           >
//             I transform your ideas into powerful digital experiences —
//             <span className="font-bold italic text-white">
//               {' '}
//               enhanced with AI.
//             </span>
//           </motion.p>

//           {/* Scroll Indicator (Hidden on small mobile) */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.2, duration: 1 }}
//             className="hidden sm:block pt-4 md:pt-10 lg:pt-14 2xl:pt-16"
//           >
//             <div className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center">
//               <div className="w-0.5 h-1.5 bg-white rounded-full animate-bounce mt-1.5"></div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }
'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Caveat } from 'next/font/google'
import Image from 'next/image'

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400'],
})

export default function HeroSection() {
  const fullText = 'MERN Stack Developer'
  const [typedText, setTypedText] = useState('')

  // Typing Effect
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1))
      index++
      if (index === fullText.length) clearInterval(interval)
    }, 80)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex items-center px-6 py-20 sm:px-6 md:px-10 lg:px-14 2xl:px-20 relative overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-368 mx-auto w-full flex flex-col md:grid md:grid-cols-2 items-center gap-12 lg:gap-16">
        {/* ========== IMAGE SECTION ========== */}
        <div className="flex justify-center items-center relative order-1 md:order-2">
          {/* Rotating Circle */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[260px] h-[260px] sm:w-[480px] sm:h-[480px] lg:w-[630px] lg:h-[630px] 2xl:w-[780px] 2xl:h-[780px] border-2 border-dashed border-pink-500/30 rounded-full"
          />

          {/* Glow Blob */}
          <div className="absolute w-[240px] h-[240px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] 2xl:w-[750px] 2xl:h-[750px] bg-pink-500/20 rounded-full blur-2xl sm:blur-[120px] animate-pulse"></div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="relative z-10"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative p-1 rounded-[24px] sm:rounded-[40px] border border-white/20 bg-linear-to-b from-white/10 to-transparent backdrop-blur-md shadow-2xl overflow-hidden group"
            >
              <div className="absolute inset-0 rounded-[24px] sm:rounded-[40px] border border-pink-500/30 blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <Image
                src="/myself.png"
                alt="myself"
                width={700}
                height={700}
                priority
                className="w-[220px] h-auto sm:w-[380px] md:w-[450px] lg:w-[550px] 2xl:w-[700px] rounded-[20px] sm:rounded-[32px] object-cover transition-all duration-700 group-hover:scale-[1.02]"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* ========== TEXT SECTION ========== */}
        <div className="space-y-6 md:space-y-8 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`${caveat.className} text-4xl sm:text-5xl md:text-7xl lg:text-8xl 2xl:text-9xl font-bold italic leading-tight`}
          >
            Hi, I&apos;m{' '}
            <span className="bg-linear-to-r from-pink-500 via-red-500 to-orange-400 bg-clip-text text-transparent relative">
              Opu
              <span className="absolute left-0 -bottom-1 w-full h-1 bg-linear-to-r from-pink-500 to-orange-400 blur-md opacity-70"></span>
            </span>
          </motion.h1>

          {/* Typing Effect */}
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={`${caveat.className} text-xl sm:text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl font-semibold text-white/80`}
          >
            {typedText}
            <span className="animate-pulse">|</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-white/70 max-w-xs sm:max-w-lg lg:max-w-xl 2xl:max-w-2xl leading-relaxed"
          >
            I transform your ideas into powerful digital experiences —
            <span className="font-bold italic text-white">
              {' '}
              enhanced with AI.
            </span>
          </motion.p>

          {/* Mobile Scroll Text */}
          <div className="sm:hidden mt-6 text-white/60 text-sm tracking-widest animate-pulse">
            ↓ Scroll Down ↓
          </div>

          {/* Desktop Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="hidden sm:block pt-6 md:pt-10 lg:pt-14 2xl:pt-16"
          >
            <div className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center">
              <div className="w-0.5 h-1.5 bg-white rounded-full animate-bounce mt-1.5"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
