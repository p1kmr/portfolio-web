import { useEffect, useRef } from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'

const MeshGradient = ({
  colors,
  speed = 0.0005,
  complexity = 3,
  ...props
}) => {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const timeRef = useRef(0)

  const defaultColorsLight = [
    { r: 99, g: 102, b: 241 },   // brand
    { r: 20, g: 184, b: 166 },   // accent
    { r: 236, g: 72, b: 153 },   // highlight
    { r: 168, g: 85, b: 247 }    // purple
  ]

  const defaultColorsDark = [
    { r: 167, g: 139, b: 250 },  // brand light
    { r: 45, g: 212, b: 191 },   // accent light
    { r: 251, g: 113, b: 133 },  // highlight light
    { r: 192, g: 132, b: 252 }   // purple light
  ]

  const gradientColors = colors || useColorModeValue(defaultColorsLight, defaultColorsDark)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let width = window.innerWidth
    let height = window.innerHeight

    canvas.width = width
    canvas.height = height

    const animate = () => {
      timeRef.current += speed

      // Create gradient mesh
      const imageData = ctx.createImageData(width, height)
      const data = imageData.data

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const index = (y * width + x) * 4

          let r = 0, g = 0, b = 0

          // Generate color based on position and time
          for (let i = 0; i < complexity; i++) {
            const angle = timeRef.current + (i * Math.PI * 2) / complexity
            const distance = Math.sqrt(
              Math.pow(x - width / 2, 2) + Math.pow(y - height / 2, 2)
            )

            const wave =
              Math.sin(x * 0.003 + timeRef.current * (i + 1)) *
              Math.cos(y * 0.003 + timeRef.current * (i + 1)) *
              Math.sin(distance * 0.002 + angle)

            const colorIndex = i % gradientColors.length
            const color = gradientColors[colorIndex]

            r += color.r * (wave + 1) / 2
            g += color.g * (wave + 1) / 2
            b += color.b * (wave + 1) / 2
          }

          data[index] = r / complexity
          data[index + 1] = g / complexity
          data[index + 2] = b / complexity
          data[index + 3] = 50 // Low opacity for subtle effect
        }
      }

      ctx.putImageData(imageData, 0, 0)
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener('resize', handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [gradientColors, speed, complexity])

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      height="100vh"
      zIndex={0}
      pointerEvents="none"
      {...props}
    >
      <canvas ref={canvasRef} style={{ display: 'block', opacity: 0.3 }} />
    </Box>
  )
}

export default MeshGradient
