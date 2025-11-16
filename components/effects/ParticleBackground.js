import { useEffect, useRef } from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'

const ParticleBackground = ({
  particleCount = 100,
  particleColor,
  particleSize = 2,
  speed = 0.5,
  interactive = true,
  connectionDistance = 150,
  showConnections = true
}) => {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef(null)

  const defaultColor = useColorModeValue('99, 102, 241', '167, 139, 250')
  const color = particleColor || defaultColor

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let width = window.innerWidth
    let height = window.innerHeight

    canvas.width = width
    canvas.height = height

    // Initialize particles
    class Particle {
      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.vx = (Math.random() - 0.5) * speed
        this.vy = (Math.random() - 0.5) * speed
        this.radius = Math.random() * particleSize + 1
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx *= -1
        if (this.y < 0 || this.y > height) this.vy *= -1

        // Keep within bounds
        this.x = Math.max(0, Math.min(width, this.x))
        this.y = Math.max(0, Math.min(height, this.y))

        // Mouse interaction
        if (interactive) {
          const dx = mouseRef.current.x - this.x
          const dy = mouseRef.current.y - this.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            const force = (100 - distance) / 100
            this.vx -= (dx / distance) * force * 0.2
            this.vy -= (dy / distance) * force * 0.2
          }
        }
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color}, ${0.6})`
        ctx.fill()
      }
    }

    // Create particles
    particlesRef.current = []
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new Particle())
    }

    // Draw connections
    const drawConnections = () => {
      if (!showConnections) return

      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x
          const dy = particlesRef.current[i].y - particlesRef.current[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.3
            ctx.strokeStyle = `rgba(${color}, ${opacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y)
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y)
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.update()
        particle.draw()
      })

      // Draw connections
      drawConnections()

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Mouse move handler
    const handleMouseMove = e => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    // Resize handler
    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [particleCount, color, particleSize, speed, interactive, connectionDistance, showConnections])

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      height="100vh"
      zIndex={0}
      pointerEvents="none"
    >
      <canvas ref={canvasRef} style={{ display: 'block' }} />
    </Box>
  )
}

export default ParticleBackground
