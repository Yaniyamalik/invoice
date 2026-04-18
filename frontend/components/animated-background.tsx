"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const isDark = resolvedTheme === "dark"

    interface Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      hue: number
    }

    interface Orb {
      x: number
      y: number
      radius: number
      speedX: number
      speedY: number
      hue: number
    }

    const particles: Particle[] = []
    const particleCount = 60
    const orbs: Orb[] = []
    const orbCount = 3

    // Create floating orbs
    for (let i = 0; i < orbCount; i++) {
      orbs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 200 + 150,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        hue: i === 0 ? 265 : i === 1 ? 180 : 320,
      })
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.4 + 0.1,
        hue: Math.random() * 60 + 240,
      })
    }

    let animationId: number
    let time = 0

    const animate = () => {
      time += 0.01
      
      // Clear with fade effect
      ctx.fillStyle = isDark ? "rgba(18, 16, 26, 0.08)" : "rgba(252, 252, 253, 0.08)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw gradient orbs
      orbs.forEach((orb) => {
        orb.x += orb.speedX
        orb.y += orb.speedY

        // Bounce off edges
        if (orb.x < -orb.radius || orb.x > canvas.width + orb.radius) orb.speedX *= -1
        if (orb.y < -orb.radius || orb.y > canvas.height + orb.radius) orb.speedY *= -1

        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius)
        const baseOpacity = isDark ? 0.15 : 0.08
        gradient.addColorStop(0, `hsla(${orb.hue}, 70%, ${isDark ? 50 : 60}%, ${baseOpacity})`)
        gradient.addColorStop(0.5, `hsla(${orb.hue}, 70%, ${isDark ? 50 : 60}%, ${baseOpacity * 0.5})`)
        gradient.addColorStop(1, "transparent")

        ctx.beginPath()
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      })

      // Draw flowing grid lines
      const gridSpacing = 80
      const waveAmplitude = 8
      ctx.strokeStyle = isDark ? "rgba(139, 92, 246, 0.04)" : "rgba(139, 92, 246, 0.03)"
      ctx.lineWidth = 1

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSpacing) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        for (let x = 0; x < canvas.width; x += 10) {
          const wave = Math.sin((x + time * 50) * 0.01) * waveAmplitude
          ctx.lineTo(x, y + wave)
        }
        ctx.stroke()
      }

      // Draw particles
      particles.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        // Pulsing effect
        const pulse = Math.sin(time * 2 + particle.x * 0.01) * 0.3 + 0.7

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * pulse, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${particle.hue}, 70%, ${isDark ? 60 : 50}%, ${particle.opacity * pulse})`
        ctx.fill()
      })

      // Connect nearby particles with gradient lines
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.15
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y)
            gradient.addColorStop(0, `hsla(${p1.hue}, 70%, 60%, ${opacity})`)
            gradient.addColorStop(1, `hsla(${p2.hue}, 70%, 60%, ${opacity})`)
            
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = gradient
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [resolvedTheme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ background: "transparent" }}
    />
  )
}
