import { Button, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ChevronRightIcon } from '@chakra-ui/icons'

const MotionButton = motion(Button)

const AnimatedButton = ({
  children,
  variant = 'gradient',
  showIcon = false,
  ...props
}) => {
  // All hook calls at the top level
  const gradientBg = useColorModeValue(
    'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    'linear-gradient(135deg, #a78bfa 0%, #ec4899 100%)'
  )

  const gradientShadow = useColorModeValue(
    '0 10px 25px -5px rgba(99, 102, 241, 0.4)',
    '0 10px 25px -5px rgba(167, 139, 250, 0.4)'
  )

  const glassBg = useColorModeValue(
    'rgba(255, 255, 255, 0.1)',
    'rgba(0, 0, 0, 0.2)'
  )

  const glassHoverBg = useColorModeValue(
    'rgba(255, 255, 255, 0.2)',
    'rgba(255, 255, 255, 0.1)'
  )

  const glassBorder = useColorModeValue(
    '1px solid rgba(255, 255, 255, 0.2)',
    '1px solid rgba(255, 255, 255, 0.1)'
  )

  const glassColor = useColorModeValue('#0f172a', '#f8fafc')

  const neonColor = useColorModeValue('#6366f1', '#a78bfa')

  const neonShadow = useColorModeValue(
    '0 0 20px rgba(99, 102, 241, 0.5)',
    '0 0 20px rgba(167, 139, 250, 0.6)'
  )

  const variants = {
    gradient: {
      background: gradientBg,
      color: 'white',
      _hover: {
        transform: 'translateY(-2px)',
        boxShadow: gradientShadow
      }
    },
    glass: {
      background: glassBg,
      backdropFilter: 'blur(10px) saturate(180%)',
      WebkitBackdropFilter: 'blur(10px) saturate(180%)',
      border: glassBorder,
      color: glassColor,
      _hover: {
        background: glassHoverBg,
        transform: 'translateY(-2px)'
      }
    },
    neon: {
      background: 'transparent',
      color: neonColor,
      border: '2px solid',
      borderColor: neonColor,
      _hover: {
        boxShadow: neonShadow,
        transform: 'translateY(-2px)'
      }
    }
  }

  return (
    <MotionButton
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      borderRadius="lg"
      fontWeight="semibold"
      sx={variants[variant]}
      rightIcon={showIcon ? <ChevronRightIcon /> : undefined}
      {...props}
    >
      {children}
    </MotionButton>
  )
}

export default AnimatedButton
