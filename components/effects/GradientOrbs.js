import { Box, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const GradientOrbs = ({ count = 3, ...props }) => {
  const orbs = Array.from({ length: count }, (_, i) => i)

  const gradients = useColorModeValue(
    [
      'radial-gradient(circle, rgba(99,102,241,0.4) 0%, rgba(99,102,241,0) 70%)',
      'radial-gradient(circle, rgba(20,184,166,0.4) 0%, rgba(20,184,166,0) 70%)',
      'radial-gradient(circle, rgba(236,72,153,0.4) 0%, rgba(236,72,153,0) 70%)',
      'radial-gradient(circle, rgba(168,85,247,0.4) 0%, rgba(168,85,247,0) 70%)'
    ],
    [
      'radial-gradient(circle, rgba(167,139,250,0.3) 0%, rgba(167,139,250,0) 70%)',
      'radial-gradient(circle, rgba(45,212,191,0.3) 0%, rgba(45,212,191,0) 70%)',
      'radial-gradient(circle, rgba(251,113,133,0.3) 0%, rgba(251,113,133,0) 70%)',
      'radial-gradient(circle, rgba(192,132,252,0.3) 0%, rgba(192,132,252,0) 70%)'
    ]
  )

  const positions = [
    { top: '10%', left: '20%', size: 600 },
    { top: '60%', right: '15%', size: 500 },
    { bottom: '15%', left: '10%', size: 550 }
  ]

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      height="100vh"
      overflow="hidden"
      zIndex={0}
      pointerEvents="none"
      {...props}
    >
      {orbs.map((orb, index) => {
        const pos = positions[index] || positions[0]
        const gradient = gradients[index % gradients.length]

        return (
          <motion.div
            key={orb}
            style={{
              position: 'absolute',
              width: `${pos.size}px`,
              height: `${pos.size}px`,
              background: gradient,
              borderRadius: '50%',
              filter: 'blur(60px)',
              ...pos
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.6, 0.4],
              x: [0, 20, 0],
              y: [0, 30, 0]
            }}
            transition={{
              duration: 15 + index * 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        )
      })}
    </Box>
  )
}

export default GradientOrbs
