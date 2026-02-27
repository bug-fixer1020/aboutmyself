'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiFirebase,
} from 'react-icons/si'
import { IoChatbubblesOutline } from 'react-icons/io5'
import { FaLock, FaCreditCard, FaGithub } from 'react-icons/fa6'

gsap.registerPlugin(ScrollTrigger)

const skillGroups = [
  {
    title: 'Core Frontend',
    caption: 'Pixel-perfect, responsive, accessible UIs',
    skills: [
      { name: 'HTML5', Icon: SiHtml5 },
      { name: 'CSS3', Icon: SiCss3 },
      { name: 'JavaScript (ES6+)', Icon: SiJavascript },
    ],
  },
  {
    title: 'Modern UI Stack',
    caption: 'Fast, component-driven frontends',
    skills: [
      { name: 'Tailwind CSS', Icon: SiTailwindcss },
      { name: 'React', Icon: SiReact },
      { name: 'Next.js', Icon: SiNextdotjs },
    ],
  },
  {
    title: 'Auth & Security',
    caption: 'Secure, production-ready authentication',
    skills: [
      { name: 'Firebase Auth', Icon: SiFirebase },
      { name: 'NextAuth', Icon: FaLock },
    ],
  },
  {
    title: 'Payments & DevOps',
    caption: 'Real-world commerce & collaboration',
    skills: [
      { name: 'SSLCommerz Gateway', Icon: FaCreditCard },
      { name: 'Git & GitHub', Icon: FaGithub },
    ],
  },
  {
    title: 'Modern Tech',
    caption: 'moder Helpers',
    skills: [
      { name: 'Chatgpt', Icon: IoChatbubblesOutline },
      { name: 'CursorSi', Icon: IoChatbubblesOutline },
      { name: 'Google Antygravity', Icon: IoChatbubblesOutline },
      { name: 'Visual Code Studio', Icon: IoChatbubblesOutline },
    ],
  },
]

export default function SkillsTimeline() {
  const rootRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const section = rootRef.current
    const line = lineRef.current

    const ctx = gsap.context(() => {
      // Animate middle line
      // gsap.to(line, {
      //   scaleY: 1.14,
      //   transformOrigin: 'top center',
      //   ease: 'none',
      //   scrollTrigger: {
      //     trigger: section,
      //     start: 'top bottom',
      //     end: 'bottom bottom',
      //     scrub: 1.2,
      //   },
      // })
      gsap.to(line, {
        scaleY: 1,
        transformOrigin: 'top center',
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom center',
          scrub: true,
        },
      })
      // Animate each card
      gsap.utils.toArray('.skill-card').forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 30,
          scale: 0.95,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        })
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={rootRef}
      className="relative w-full max-w-6xl lg:max-w-7xl 2xl:max-w-368 mx-auto py-20 sm:py-24 md:py-32 lg:py-40 2xl:py-48 px-4 sm:px-6 md:px-12 lg:px-16 2xl:px-24"
    >
      {/* Vertical timeline line */}
      <div
        ref={lineRef}
        id="timeline-line"
        className="absolute top-[calc(20px+1rem)] md:top-[calc(5rem)] left-4 sm:left-6 md:left-1/2 md:-translate-x-1/2 h-[calc(100%-4rem)] w-1.5 md:w-2 lg:w-2.5 2xl:w-3 bg-linear-to-b from-amber-400 via-pink-500 to-sky-400 origin-top scale-y-0 rounded-full shadow-[0_0_40px_rgba(248,250,252,0.35)]"
      ></div>

      {/* We expart in */}

      {/* Skills items */}
      <div className="space-y-16 sm:space-y-20 md:space-y-28 lg:space-y-36 2xl:space-y-44">
        {skillGroups.map((group, idx) => (
          <div key={group.title} className="skill-row relative w-full">
            {/* Connector circle */}
            <div className="absolute top-20 left-4 sm:left-6 md:left-1/2 md:-translate-x-1/2 w-4 h-4 md:w-5 md:h-5 rounded-full bg-amber-400 shadow-[0_0_25px_rgba(251,191,36,0.55)]"></div>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div
                className={`pl-10 sm:pl-12 md:pl-0 ${
                  idx % 2 === 0
                    ? 'md:pr-14 md:justify-self-end'
                    : 'md:col-start-2 md:pl-14 md:justify-self-start'
                }`}
              >
                {/* Card */}
                <article className="skill-card relative flex min-h-[300px] w-full max-w-[450px] lg:max-w-[550px] 2xl:max-w-[650px] flex-col justify-center gap-4 lg:gap-6 rounded-3xl border border-white/10 bg-black/40 p-6 lg:p-10 2xl:p-12 shadow-[0_24px_70px_rgba(0,0,0,0.9)] backdrop-blur-2xl transition-transform hover:scale-[1.03] hover:shadow-[0_32px_90px_rgba(0,0,0,1)]">
                  <div>
                    <h3 className="text-xl md:text-2xl lg:text-4xl 2xl:text-5xl font-semibold text-white">
                      {group.title}
                    </h3>
                    <p className="mt-2 text-sm md:text-base lg:text-lg 2xl:text-xl text-zinc-400 leading-snug">
                      {group.caption}
                    </p>
                  </div>

                  <ul className="mt-4 space-y-2 lg:space-y-4 text-sm md:text-base lg:text-lg 2xl:text-xl text-zinc-200">
                    {group.skills.map(({ name, Icon }) => (
                      <li key={name} className="flex items-center gap-2.5">
                        <span className="grid h-6 w-6 lg:h-8 lg:w-8 2xl:h-10 2xl:w-10 place-items-center rounded-full bg-black/60 text-base lg:text-xl 2xl:text-2xl text-amber-300">
                          <Icon />
                        </span>
                        <span>{name}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
