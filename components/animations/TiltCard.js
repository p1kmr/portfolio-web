import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Box, useColorModeValue } from '@chakra-ui/react'

const TiltCard = ({
  children,
  maxTilt = 15,
  perspective = 1000,
  shine = true,
  ...props
}) => {
  const ref = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [shine360, setShine] = useState({ x: 50, y: 50 })

  const handleMouseMove = e => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const tiltX = ((y - centerY) / centerY) * maxTilt
    const tiltY = ((centerX - x) / centerX) * maxTilt

    setTilt({ x: tiltX, y: tiltY })
    setShine({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setShine({ x: 50, y: 50 })
  }

  const shineGradient = useColorModeValue(
    'radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255,255,255,0.4) 0%, transparent 50%)',
    'radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255,255,255,0.1) 0%, transparent 50%)'
  )

  return (
    <Box
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective }}
      {...props}
    >
      <motion.div
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 30
        }}
        style={{
          transformStyle: 'preserve-3d',
          position: 'relative'
        }}
      >
        {children}
        {shine && (
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            borderRadius="inherit"
            pointerEvents="none"
            style={{
              background: `radial-gradient(circle at ${shine360.x}% ${shine360.y}%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
              opacity: tilt.x !== 0 || tilt.y !== 0 ? 1 : 0,
              transition: 'opacity 0.3s ease'
            }}
          />
        )}
      </motion.div>
    </Box>
  )
}

export default TiltCard
