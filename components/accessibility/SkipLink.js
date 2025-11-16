import { Box, Link, useColorModeValue } from '@chakra-ui/react'

/**
 * Skip to main content link for keyboard navigation
 * Improves accessibility for screen reader users
 */
const SkipLink = ({ href = '#main-content' }) => {
  const bg = useColorModeValue('brand.500', 'brand.400')
  const color = 'white'

  return (
    <Link
      href={href}
      position="absolute"
      left="-9999px"
      zIndex={9999}
      padding={4}
      bg={bg}
      color={color}
      borderRadius="md"
      fontWeight="bold"
      _focus={{
        left: '10px',
        top: '10px'
      }}
      _focusVisible={{
        outline: '2px solid',
        outlineColor: 'accent.500',
        outlineOffset: '2px'
      }}
    >
      Skip to main content
    </Link>
  )
}

export default SkipLink
