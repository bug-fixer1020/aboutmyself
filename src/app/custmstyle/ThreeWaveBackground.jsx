// components/ThreeWaveBackground.jsx
'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ThreeWaveBackground() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mountNode = mountRef.current
    if (!mountNode) return

    const isSmallScreen = window.innerWidth < 768

    // Scene + Camera + Renderer
    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x050509, 0.11)

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100,
    )
    camera.position.set(0, 0, 12)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    const dpr = Math.min(window.devicePixelRatio || 1, isSmallScreen ? 1.5 : 2)
    renderer.setPixelRatio(dpr)
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    mountNode.appendChild(renderer.domElement)

    // Multicolor vertical line group
    const lines = []
    const numLines = isSmallScreen ? 12 : 18
    const lineHeight = 16
    const segments = isSmallScreen ? 70 : 90

    for (let i = 0; i < numLines; i++) {
      const x = (i - numLines / 2) * 0.45

      const color = new THREE.Color()
      color.setHSL((i / numLines) * 0.85, 0.85, 0.6)

      const points = []
      for (let j = 0; j < segments; j++) {
        const t = j / (segments - 1)
        const y = t * lineHeight - lineHeight / 2
        const waveOffset = Math.sin(t * Math.PI * 2 + i * 0.45) * 0.35
        points.push(new THREE.Vector3(x + waveOffset, y, 0))
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      const material = new THREE.LineBasicMaterial({
        color,
        transparent: true,
        opacity: 0.35,
      })

      const line = new THREE.Line(geometry, material)
      line.scale.y = 0
      scene.add(line)
      lines.push(line)
    }

    // Scroll-driven growth using GSAP + ScrollTrigger
    const scrollProxy = { progress: 0 }

    const scrollTween = gsap.to(scrollProxy, {
      progress: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    })

    let frame = 0
    let animationFrameId

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      frame += 0.01

      const p = scrollProxy.progress

      lines.forEach((line, index) => {
        const baseScale = 0.3 + (index / numLines) * 0.9
        line.scale.y = 0.1 + p * baseScale

        line.position.y = (p - 0.5) * 2.2

        line.rotation.z = Math.sin(frame + index * 0.18) * 0.12 * (0.4 + p)

        line.material.opacity = 0.15 + p * 0.75
      })

      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight)
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId)

      scrollTween.scrollTrigger?.kill()
      scrollTween.kill()

      window.removeEventListener('resize', handleResize)

      if (mountNode.contains(renderer.domElement)) {
        mountNode.removeChild(renderer.domElement)
      }

      renderer.dispose()
      lines.forEach((line) => {
        line.geometry.dispose()
        line.material.dispose()
      })
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  )
}
