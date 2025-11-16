import { useRef, useEffect } from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'

const RippleEffect = ({ ...props }) => {
  const canvasRef = useRef(null)
  const ripplesRef = useRef([])
  const animationRef = useRef(null)

  const rippleColor = useColorModeValue('99, 102, 241', '167, 139, 250')

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let width = window.innerWidth
    let height = window.innerHeight

    canvas.width = width
    canvas.height = height

    class Ripple {
      constructor(x, y) {
        this.x = x
        this.y = y
        this.radius = 0
        this.maxRadius = 150
        this.speed = 2
        this.opacity = 1
      }

      update() {
        this.radius += this.speed
        this.opacity = 1 - this.radius / this.maxRadius

        return this.radius < this.maxRadius
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(${rippleColor}, ${this.opacity * 0.5})`
        ctx.lineWidth = 2
        ctx.stroke()
      }
    }

    const handleClick = e => {
      ripplesRef.current.push(new Ripple(e.clientX, e.clientY))
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      // Update and draw ripples
      ripplesRef.current = ripplesRef.current.filter(ripple => {
        const alive = ripple.update()
        if (alive) ripple.draw()
        return alive
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener('click', handleClick)
    window.addEventListener('resize', handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('click', handleClick)
      window.removeEventListener('resize', handleResize)
    }
  }, [rippleColor])

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      height="100vh"
      zIndex={1}
      pointerEvents="none"
      {...props}
    >
      <canvas ref={canvasRef} style={{ display: 'block' }} />
    </Box>
  )
}

export default RippleEffect
