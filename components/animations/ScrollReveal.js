import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const ScrollReveal = ({
  children,
  variant = 'slideUp',
  delay = 0,
  duration = 0.6,
  once = true,
  ...props
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-100px' })

  const variants = {
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    },
    slideDown: {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 }
    },
    slideLeft: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 }
    },
    slideRight: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 }
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    },
    blur: {
      hidden: { opacity: 0, filter: 'blur(10px)' },
      visible: { opacity: 1, filter: 'blur(0px)' }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants[variant]}
      transition={{
        duration,
        delay,
        ease: [0.6, -0.05, 0.01, 0.99]
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal
