// Gradient utility functions and presets for the portfolio

// Gradient presets
export const gradients = {
  // Primary gradients
  hero: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  heroDark: 'linear-gradient(135deg, #a78bfa 0%, #ec4899 100%)',

  // Accent gradients
  neon: 'linear-gradient(90deg, #6366f1 0%, #14b8a6 100%)',
  neonDark: 'linear-gradient(90deg, #818cf8 0%, #2dd4bf 100%)',

  // Sunset/warm gradients
  sunset: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  sunsetDark: 'linear-gradient(135deg, #fb7185 0%, #f59e0b 100%)',

  // Cool/tech gradients
  tech: 'linear-gradient(120deg, #2dd4bf 0%, #6366f1 50%, #ec4899 100%)',
  techDark: 'linear-gradient(120deg, #14b8a6 0%, #8b5cf6 50%, #f43f5e 100%)',

  // Mesh gradients (multi-stop)
  mesh: 'radial-gradient(at 40% 20%, #667eea 0px, transparent 50%), radial-gradient(at 80% 0%, #14b8a6 0px, transparent 50%), radial-gradient(at 0% 50%, #ec4899 0px, transparent 50%)',

  // Glass effect backgrounds
  glass: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
  glassDark: 'linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 100%)',

  // Card gradients
  card: 'linear-gradient(145deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.05) 100%)',
  cardDark: 'linear-gradient(145deg, rgba(167,139,250,0.1) 0%, rgba(236,72,153,0.1) 100%)',

  // Button gradients
  primary: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
  secondary: 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)',
  accent: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)'
}

// Text gradient generator
export const textGradient = (gradient) => ({
  background: gradient,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text'
})

// Animated gradient background
export const animatedGradient = (gradient1, gradient2) => ({
  background: gradient1,
  backgroundSize: '200% 200%',
  animation: 'gradientShift 8s ease infinite',
  '@keyframes gradientShift': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' }
  }
})

// Glassmorphism utility
export const glassmorphism = (blur = '10px', opacity = 0.1, borderOpacity = 0.2) => ({
  background: `rgba(255, 255, 255, ${opacity})`,
  backdropFilter: `blur(${blur}) saturate(180%)`,
  WebkitBackdropFilter: `blur(${blur}) saturate(180%)`,
  border: `1px solid rgba(255, 255, 255, ${borderOpacity})`,
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
})

// Dark mode glassmorphism
export const glassmorphismDark = (blur = '10px', opacity = 0.1, borderOpacity = 0.15) => ({
  background: `rgba(0, 0, 0, ${opacity})`,
  backdropFilter: `blur(${blur}) saturate(180%)`,
  WebkitBackdropFilter: `blur(${blur}) saturate(180%)`,
  border: `1px solid rgba(255, 255, 255, ${borderOpacity})`,
  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
})

// Neon glow effect
export const neonGlow = (color, intensity = 'medium') => {
  const intensities = {
    low: `0 0 10px ${color}`,
    medium: `0 0 20px ${color}, 0 0 30px ${color}`,
    high: `0 0 20px ${color}, 0 0 30px ${color}, 0 0 40px ${color}, 0 0 50px ${color}`
  }
  return {
    boxShadow: intensities[intensity] || intensities.medium,
    transition: 'box-shadow 0.3s ease-in-out'
  }
}

// Gradient border
export const gradientBorder = (gradient, width = '2px') => ({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderRadius: 'inherit',
    padding: width,
    background: gradient,
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
    pointerEvents: 'none'
  }
})

export default {
  gradients,
  textGradient,
  animatedGradient,
  glassmorphism,
  glassmorphismDark,
  neonGlow,
  gradientBorder
}
