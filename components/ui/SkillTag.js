import { Badge, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBadge = motion(Badge)

const SkillTag = ({ children, colorScheme = 'brand', delay = 0, ...props }) => {
  const colorMap = {
    brand: {
      light: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      dark: 'linear-gradient(135deg, #a78bfa 0%, #ec4899 100%)'
    },
    accent: {
      light: 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)',
      dark: 'linear-gradient(135deg, #2dd4bf 0%, #22d3ee 100%)'
    },
    highlight: {
      light: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
      dark: 'linear-gradient(135deg, #fb7185 0%, #f59e0b 100%)'
    },
    purple: {
      light: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
      dark: 'linear-gradient(135deg, #c084fc 0%, #f472b6 100%)'
    }
  }

  const gradient = useColorModeValue(
    colorMap[colorScheme]?.light || colorMap.brand.light,
    colorMap[colorScheme]?.dark || colorMap.brand.dark
  )

  return (
    <MotionBadge
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1, y: -2 }}
      transition={{ duration: 0.3, delay }}
      borderRadius="full"
      px={3}
      py={1}
      fontWeight="semibold"
      fontSize="sm"
      sx={{
        background: gradient,
        color: 'white',
        cursor: 'default',
        boxShadow: 'sm'
      }}
      {...props}
    >
      {children}
    </MotionBadge>
  )
}

export default SkillTag
