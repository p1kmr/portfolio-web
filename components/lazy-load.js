import { Suspense } from 'react'
import { Box, Spinner, Center } from '@chakra-ui/react'

/**
 * Lazy loading wrapper for heavy components
 * Displays a loading spinner while the component is being loaded
 */
export const LazyLoad = ({ children, fallback, minHeight = '400px' }) => {
  const defaultFallback = (
    <Center minH={minHeight}>
      <Spinner
        size="xl"
        thickness="4px"
        speed="0.8s"
        color="brand.500"
        emptyColor="gray.200"
      />
    </Center>
  )

  return <Suspense fallback={fallback || defaultFallback}>{children}</Suspense>
}

/**
 * Skeleton loader for better perceived performance
 */
export const SkeletonLoader = ({ height = '400px', variant = 'box' }) => {
  return (
    <Box
      height={height}
      borderRadius={variant === 'box' ? '2xl' : 'lg'}
      bg="linear-gradient(90deg, rgba(200, 200, 200, 0.1) 25%, rgba(200, 200, 200, 0.2) 50%, rgba(200, 200, 200, 0.1) 75%)"
      backgroundSize="200% 100%"
      animation="shimmer 2s infinite"
      sx={{
        '@keyframes shimmer': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' }
        }
      }}
    />
  )
}

export default LazyLoad
