import { Box, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const FloatingCard = ({
  children,
  variant = 'glass',
  delay = 0,
  hover = true,
  ...props
}) => {
  const glassLight = {
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(10px) saturate(180%)',
    WebkitBackdropFilter: 'blur(10px) saturate(180%)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
  }

  const glassDark = {
    background: 'rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(10px) saturate(180%)',
    WebkitBackdropFilter: 'blur(10px) saturate(180%)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
  }

  const elevatedLight = {
    background: '#ffffff',
    boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(0, 0, 0, 0.05)'
  }

  const elevatedDark = {
    background: '#1a1a1a',
    boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.5)',
    border: '1px solid rgba(255, 255, 255, 0.05)'
  }

  const cardStyle = useColorModeValue(
    variant === 'glass' ? glassLight : elevatedLight,
    variant === 'glass' ? glassDark : elevatedDark
  )

  const hoverStyle = hover
    ? {
        transform: 'translateY(-4px)',
        boxShadow: useColorModeValue(
          variant === 'glass'
            ? '0 12px 40px 0 rgba(31, 38, 135, 0.25)'
            : '0 20px 50px -10px rgba(0, 0, 0, 0.15)',
          variant === 'glass'
            ? '0 12px 40px 0 rgba(0, 0, 0, 0.5)'
            : '0 20px 50px -10px rgba(0, 0, 0, 0.7)'
        )
      }
    : {}

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? hoverStyle : {}}
      borderRadius="xl"
      p={6}
      sx={{
        ...cardStyle,
        transition: 'all 0.3s ease-in-out'
      }}
      {...props}
    >
      {children}
    </MotionBox>
  )
}

export default FloatingCard
