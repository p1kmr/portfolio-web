import { Heading, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionHeading = motion(Heading)

const GradientHeading = ({ children, delay = 0, ...props }) => {
  const gradient = useColorModeValue(
    'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    'linear-gradient(135deg, #a78bfa 0%, #ec4899 100%)'
  )

  return (
    <MotionHeading
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      bgGradient={gradient}
      bgClip="text"
      sx={{
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}
      fontWeight="extrabold"
      {...props}
    >
      {children}
    </MotionHeading>
  )
}

export default GradientHeading
