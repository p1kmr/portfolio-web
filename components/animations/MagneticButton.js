import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Box } from '@chakra-ui/react'

const MagneticButton = ({
  children,
  strength = 0.3,
  radius = 100,
  ...props
}) => {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = e => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)

    if (distance < radius) {
      setPosition({
        x: distanceX * strength,
        y: distanceY * strength
      })
    } else {
      setPosition({ x: 0, y: 0 })
    }
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <Box
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      display="inline-block"
      {...props}
    >
      <motion.div
        ref={ref}
        animate={{
          x: position.x,
          y: position.y
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.1
        }}
      >
        {children}
      </motion.div>
    </Box>
  )
}

export default MagneticButton
