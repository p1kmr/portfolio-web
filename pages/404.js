import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Button,
  VStack,
  useColorModeValue
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import GradientHeading from '../components/ui/GradientHeading'
import AnimatedButton from '../components/ui/AnimatedButton'

const MotionBox = motion(Box)

const NotFound = () => {
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const bgGradient = useColorModeValue(
    'linear(to-br, purple.50, blue.50, teal.50)',
    'linear(to-br, purple.900, blue.900, teal.900)'
  )

  return (
    <Container maxW="container.md" pt={20}>
      <VStack spacing={8} textAlign="center" py={20}>
        <MotionBox
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
        >
          <Box
            bgGradient={bgGradient}
            borderRadius="full"
            p={8}
            mb={4}
          >
            <Heading
              as="h1"
              fontSize={{ base: '6xl', md: '8xl' }}
              fontWeight="black"
              bgGradient="linear(to-r, brand.500, accent.500)"
              bgClip="text"
            >
              404
            </Heading>
          </Box>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <GradientHeading
            as="h2"
            fontSize={{ base: '2xl', md: '3xl' }}
            mb={4}
          >
            Page Not Found
          </GradientHeading>

          <Text fontSize="lg" color={textColor} mb={8} maxW="md">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track!
          </Text>

          <NextLink href="/" passHref>
            <AnimatedButton
              as="a"
              variant="gradient"
              size="lg"
              showIcon
            >
              Back to Home
            </AnimatedButton>
          </NextLink>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          mt={8}
        >
          <VStack spacing={4}>
            <Text fontSize="sm" color={textColor}>
              Quick Links:
            </Text>
            <Box display="flex" gap={4} flexWrap="wrap" justifyContent="center">
              <NextLink href="/works" passHref>
                <Button as="a" variant="ghost" colorScheme="brand">
                  Works
                </Button>
              </NextLink>
              <NextLink href="/posts" passHref>
                <Button as="a" variant="ghost" colorScheme="brand">
                  Posts
                </Button>
              </NextLink>
            </Box>
          </VStack>
        </MotionBox>
      </VStack>
    </Container>
  )
}

export default NotFound
