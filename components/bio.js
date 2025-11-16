import { Box, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

export const BioSection = ({ children, index, ...props }) => {
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200')
  const dotBg = useColorModeValue('white', '#1a1a1a')
  const dotBorder = useColorModeValue('brand.500', 'brand.400')
  const hoverBg = useColorModeValue('gray.50', 'whiteAlpha.50')

  return (
    <MotionBox
      position="relative"
      pl={8}
      pb={6}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.6, -0.05, 0.01, 0.99]
      }}
      _hover={{
        '& .bio-dot': {
          transform: 'scale(1.3)',
          boxShadow: useColorModeValue(
            '0 0 20px rgba(99, 102, 241, 0.5)',
            '0 0 20px rgba(167, 139, 250, 0.5)'
          )
        }
      }}
      {...props}
    >
      {/* Timeline Line */}
      <Box
        position="absolute"
        left="11px"
        top="8px"
        bottom="-6px"
        width="2px"
        bg={borderColor}
        opacity={0.3}
      />

      {/* Timeline Dot */}
      <Box
        className="bio-dot"
        position="absolute"
        left="4px"
        top="4px"
        width="16px"
        height="16px"
        borderRadius="full"
        bg={dotBg}
        border="3px solid"
        borderColor={dotBorder}
        transition="all 0.3s ease"
        zIndex={1}
      />

      {/* Content */}
      <MotionBox
        p={4}
        borderRadius="lg"
        transition="all 0.3s ease"
        _hover={{
          bg: hoverBg
        }}
      >
        {children}
      </MotionBox>
    </MotionBox>
  )
}

export const BioYear = ({ children, ...props }) => {
  const gradientText = useColorModeValue(
    'linear(to-r, brand.600, accent.600)',
    'linear(to-r, brand.400, accent.400)'
  )

  return (
    <Box
      fontWeight="bold"
      fontSize="sm"
      bgGradient={gradientText}
      bgClip="text"
      mb={2}
      letterSpacing="wide"
      textTransform="uppercase"
      {...props}
    >
      {children}
    </Box>
  )
}

export const BioDetails = ({ children, ...props }) => {
  const textColor = useColorModeValue('gray.700', 'gray.300')

  return (
    <Box
      fontSize="md"
      color={textColor}
      lineHeight="1.7"
      {...props}
    >
      {children}
    </Box>
  )
}

