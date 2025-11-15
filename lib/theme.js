import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

// Modern color palette
const colors = {
  // Brand colors - Vibrant Tech theme
  brand: {
    50: '#f0f4ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1', // Primary
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81'
  },

  // Accent colors - Teal/Cyan
  accent: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6', // Secondary
    600: '#0d9488',
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a'
  },

  // Highlight colors - Pink/Rose
  highlight: {
    50: '#fdf2f8',
    100: '#fce7f3',
    200: '#fbcfe8',
    300: '#f9a8d4',
    400: '#f472b6',
    500: '#ec4899', // Tertiary
    600: '#db2777',
    700: '#be185d',
    800: '#9f1239',
    900: '#831843'
  },

  // Purple for variety
  purple: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7e22ce',
    800: '#6b21a8',
    900: '#581c87'
  },

  // Gradient teal (legacy support)
  grassTeal: '#14b8a6'
}

// Global styles
const styles = {
  global: props => ({
    body: {
      bg: mode('#fafafa', '#0f0f0f')(props),
      color: mode('#0f172a', '#f8fafc')(props),
      transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out'
    },
    // Custom scrollbar
    '*::-webkit-scrollbar': {
      width: '10px',
      height: '10px'
    },
    '*::-webkit-scrollbar-track': {
      background: mode('#f1f5f9', '#1a1a1a')(props)
    },
    '*::-webkit-scrollbar-thumb': {
      background: mode('#cbd5e1', '#404040')(props),
      borderRadius: '5px',
      '&:hover': {
        background: mode('#94a3b8', '#525252')(props)
      }
    },
    // Selection color
    '::selection': {
      background: mode('rgba(99, 102, 241, 0.2)', 'rgba(167, 139, 250, 0.3)')(props),
      color: mode('#0f172a', '#f8fafc')(props)
    },
    // Smooth scroll
    html: {
      scrollBehavior: 'smooth'
    }
  })
}

// Component styles
const components = {
  // Heading variants
  Heading: {
    baseStyle: {
      fontWeight: 'bold',
      letterSpacing: '-0.02em'
    },
    variants: {
      'section-title': props => ({
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: mode('#6366f1', '#a78bfa')(props),
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
        fontWeight: 'bold'
      }),
      'gradient': props => ({
        background: mode(
          'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
          'linear-gradient(135deg, #a78bfa 0%, #ec4899 100%)'
        )(props),
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        fontWeight: 'extrabold'
      }),
      'hero': {
        fontSize: ['3xl', '4xl', '5xl', '6xl'],
        fontWeight: 'black',
        lineHeight: 1.1,
        letterSpacing: '-0.03em'
      },
      'glow': props => ({
        color: mode('#6366f1', '#a78bfa')(props),
        textShadow: mode(
          '0 0 20px rgba(99, 102, 241, 0.3)',
          '0 0 20px rgba(167, 139, 250, 0.5)'
        )(props)
      })
    }
  },

  // Link styles
  Link: {
    baseStyle: props => ({
      color: mode('#6366f1', '#a78bfa')(props),
      textUnderlineOffset: 3,
      transition: 'all 0.2s ease-in-out',
      _hover: {
        color: mode('#4f46e5', '#c084fc')(props),
        textDecoration: 'none',
        transform: 'translateY(-1px)'
      }
    }),
    variants: {
      gradient: props => ({
        background: mode(
          'linear-gradient(135deg, #6366f1 0%, #14b8a6 100%)',
          'linear-gradient(135deg, #a78bfa 0%, #2dd4bf 100%)'
        )(props),
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        fontWeight: 'semibold'
      })
    }
  },

  // Button variants
  Button: {
    baseStyle: {
      fontWeight: 'semibold',
      borderRadius: 'lg',
      transition: 'all 0.2s ease-in-out'
    },
    variants: {
      gradient: props => ({
        background: mode(
          'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
          'linear-gradient(135deg, #a78bfa 0%, #ec4899 100%)'
        )(props),
        color: 'white',
        _hover: {
          transform: 'translateY(-2px)',
          boxShadow: mode(
            '0 10px 25px -5px rgba(99, 102, 241, 0.4)',
            '0 10px 25px -5px rgba(167, 139, 250, 0.4)'
          )(props),
          _disabled: {
            transform: 'none'
          }
        },
        _active: {
          transform: 'translateY(0px)'
        }
      }),
      glass: props => ({
        background: mode(
          'rgba(255, 255, 255, 0.1)',
          'rgba(0, 0, 0, 0.2)'
        )(props),
        backdropFilter: 'blur(10px) saturate(180%)',
        WebkitBackdropFilter: 'blur(10px) saturate(180%)',
        border: mode(
          '1px solid rgba(255, 255, 255, 0.2)',
          '1px solid rgba(255, 255, 255, 0.1)'
        )(props),
        color: mode('#0f172a', '#f8fafc')(props),
        _hover: {
          background: mode(
            'rgba(255, 255, 255, 0.2)',
            'rgba(255, 255, 255, 0.1)'
          )(props),
          transform: 'translateY(-2px)'
        }
      }),
      neon: props => ({
        background: 'transparent',
        color: mode('#6366f1', '#a78bfa')(props),
        border: '2px solid',
        borderColor: mode('#6366f1', '#a78bfa')(props),
        _hover: {
          boxShadow: mode(
            '0 0 20px rgba(99, 102, 241, 0.5)',
            '0 0 20px rgba(167, 139, 250, 0.6)'
          )(props),
          transform: 'translateY(-2px)'
        }
      })
    }
  },

  // Container/Box variants for cards
  Box: {
    variants: {
      glass: props => ({
        background: mode(
          'rgba(255, 255, 255, 0.7)',
          'rgba(0, 0, 0, 0.3)'
        )(props),
        backdropFilter: 'blur(10px) saturate(180%)',
        WebkitBackdropFilter: 'blur(10px) saturate(180%)',
        borderRadius: 'xl',
        border: mode(
          '1px solid rgba(255, 255, 255, 0.3)',
          '1px solid rgba(255, 255, 255, 0.1)'
        )(props),
        boxShadow: mode(
          '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
          '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
        )(props)
      }),
      elevated: props => ({
        background: mode('#ffffff', '#1a1a1a')(props),
        borderRadius: 'xl',
        boxShadow: mode(
          '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
          '0 10px 40px -10px rgba(0, 0, 0, 0.5)'
        )(props),
        border: mode(
          '1px solid rgba(0, 0, 0, 0.05)',
          '1px solid rgba(255, 255, 255, 0.05)'
        )(props),
        transition: 'all 0.3s ease-in-out',
        _hover: {
          transform: 'translateY(-4px)',
          boxShadow: mode(
            '0 20px 50px -10px rgba(0, 0, 0, 0.15)',
            '0 20px 50px -10px rgba(0, 0, 0, 0.7)'
          )(props)
        }
      }),
      gradient: props => ({
        background: mode(
          'linear-gradient(145deg, rgba(99, 102, 241, 0.05) 0%, rgba(20, 184, 166, 0.05) 100%)',
          'linear-gradient(145deg, rgba(167, 139, 250, 0.1) 0%, rgba(45, 212, 191, 0.1) 100%)'
        )(props),
        borderRadius: 'xl',
        padding: 6
      })
    }
  },

  // Badge/Tag styles
  Badge: {
    baseStyle: {
      borderRadius: 'full',
      px: 3,
      py: 1,
      fontWeight: 'semibold',
      fontSize: 'sm'
    },
    variants: {
      gradient: props => ({
        background: mode(
          'linear-gradient(135deg, #6366f1 0%, #14b8a6 100%)',
          'linear-gradient(135deg, #a78bfa 0%, #2dd4bf 100%)'
        )(props),
        color: 'white'
      })
    }
  }
}

// Font configuration
const fonts = {
  heading: "'M PLUS Rounded 1c', sans-serif",
  body: "'M PLUS Rounded 1c', sans-serif"
}

// Theme configuration
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

// Breakpoints (custom responsive breakpoints)
const breakpoints = {
  sm: '30em',  // 480px
  md: '48em',  // 768px
  lg: '62em',  // 992px
  xl: '80em',  // 1280px
  '2xl': '96em' // 1536px
}

// Spacing scale (if needed for custom spacing)
const space = {
  px: '1px',
  0: '0',
  0.5: '0.125rem',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem'
}

// Shadow system
const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  outline: '0 0 0 3px rgba(99, 102, 241, 0.5)',
  neon: '0 0 20px rgba(99, 102, 241, 0.5), 0 0 30px rgba(99, 102, 241, 0.3)',
  none: 'none'
}

const theme = extendTheme({
  config,
  styles,
  components,
  fonts,
  colors,
  breakpoints,
  space,
  shadows
})

export default theme
