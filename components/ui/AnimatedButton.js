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
  const gradientLight = 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
  const gradientDark = 'linear-gradient(135deg, #a78bfa 0%, #ec4899 100%)'
  const gradient = useColorModeValue(gradientLight, gradientDark)

  const variants = {
    gradient: {
      background: gradient,
      color: 'white',
      _hover: {
        transform: 'translateY(-2px)',
        boxShadow: useColorModeValue(
          '0 10px 25px -5px rgba(99, 102, 241, 0.4)',
          '0 10px 25px -5px rgba(167, 139, 250, 0.4)'
        )
      }
    },
    glass: {
      background: useColorModeValue(
        'rgba(255, 255, 255, 0.1)',
        'rgba(0, 0, 0, 0.2)'
      ),
      backdropFilter: 'blur(10px) saturate(180%)',
      WebkitBackdropFilter: 'blur(10px) saturate(180%)',
      border: useColorModeValue(
        '1px solid rgba(255, 255, 255, 0.2)',
        '1px solid rgba(255, 255, 255, 0.1)'
      ),
      color: useColorModeValue('#0f172a', '#f8fafc'),
      _hover: {
        background: useColorModeValue(
          'rgba(255, 255, 255, 0.2)',
          'rgba(255, 255, 255, 0.1)'
        ),
        transform: 'translateY(-2px)'
      }
    },
    neon: {
      background: 'transparent',
      color: useColorModeValue('#6366f1', '#a78bfa'),
      border: '2px solid',
      borderColor: useColorModeValue('#6366f1', '#a78bfa'),
      _hover: {
        boxShadow: useColorModeValue(
          '0 0 20px rgba(99, 102, 241, 0.5)',
          '0 0 20px rgba(167, 139, 250, 0.6)'
        ),
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
