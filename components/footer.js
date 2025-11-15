import { Box, Text, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const Footer = () => {
  const borderColor = useColorModeValue(
    'rgba(99, 102, 241, 0.1)',
    'rgba(167, 139, 250, 0.1)'
  )

  const gradientText = useColorModeValue(
    'linear-gradient(135deg, #6366f1 0%, #14b8a6 100%)',
    'linear-gradient(135deg, #a78bfa 0%, #2dd4bf 100%)'
  )

  return (
    <MotionBox
      as="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      mt={16}
      mb={8}
      pt={8}
      borderTop="2px solid"
      borderColor={borderColor}
    >
      <Box textAlign="center">
        <Text
          fontSize="sm"
          fontWeight="medium"
          bgGradient={gradientText}
          bgClip="text"
          sx={{
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          © {new Date().getFullYear()} Pawan Kumar. All Rights Reserved.
        </Text>
        <Text
          fontSize="xs"
          mt={2}
          color={useColorModeValue('gray.500', 'gray.500')}
        >
          Built with Next.js, Chakra UI & Three.js
        </Text>
      </Box>
    </MotionBox>
  )
}

export default Footer
