import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const AnimatedText = ({
  children,
  variant = 'wordByWord',
  delay = 0,
  duration = 0.05,
  as = 'p',
  ...props
}) => {
  const text = typeof children === 'string' ? children : ''
  const MotionComponent = motion[as] || motion.p

  // Typewriter effect
  if (variant === 'typewriter') {
    const [displayText, setDisplayText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText(prev => prev + text[currentIndex])
          setCurrentIndex(prev => prev + 1)
        }, duration * 1000)
        return () => clearTimeout(timeout)
      }
    }, [currentIndex, text, duration])

    return (
      <MotionComponent
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay }}
        {...props}
      >
        {displayText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          |
        </motion.span>
      </MotionComponent>
    )
  }

  // Character by character fade
  if (variant === 'charByChar') {
    const characters = text.split('')
    return (
      <MotionComponent {...props}>
        {characters.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: delay + index * duration,
              duration: 0.3
            }}
            style={{ display: 'inline-block', whiteSpace: 'pre' }}
          >
            {char}
          </motion.span>
        ))}
      </MotionComponent>
    )
  }

  // Word by word reveal (default)
  const words = text.split(' ')
  return (
    <MotionComponent {...props}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay + index * duration,
            duration: 0.5,
            ease: [0.6, -0.05, 0.01, 0.99]
          }}
          style={{ display: 'inline-block', marginRight: '0.3em' }}
        >
          {word}
        </motion.span>
      ))}
    </MotionComponent>
  )
}

export default AnimatedText
