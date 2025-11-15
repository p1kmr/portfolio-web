import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  List,
  useColorModeValue,
  SimpleGrid,
  Text,
  VStack,
  HStack
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import BioList from '../components/BioList'
import SocialLinks from '../components/SocialLinks'
import { bioData, socialLinks } from '../components/config/bio'
import GradientHeading from '../components/ui/GradientHeading'
import FloatingCard from '../components/ui/FloatingCard'
import AnimatedButton from '../components/ui/AnimatedButton'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const Home = () => {
  const taglineBg = useColorModeValue(
    'rgba(255, 255, 255, 0.8)',
    'rgba(0, 0, 0, 0.3)'
  )

  const interestCardBg = useColorModeValue(
    'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(20, 184, 166, 0.05) 100%)',
    'linear-gradient(135deg, rgba(167, 139, 250, 0.1) 0%, rgba(45, 212, 191, 0.1) 100%)'
  )

  return (
    <Layout>
      {/* Hero Section with Tagline */}
      <Box mb={12} mt={8}>
        <Container maxW="container.lg">
          <MotionBox
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            borderRadius="2xl"
            mb={8}
            p={4}
            textAlign="center"
            bg={taglineBg}
            css={{
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)'
            }}
            boxShadow={useColorModeValue(
              '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
              '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
            )}
            border="1px solid"
            borderColor={useColorModeValue(
              'rgba(255, 255, 255, 0.3)',
              'rgba(255, 255, 255, 0.1)'
            )}
          >
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              fontWeight="semibold"
              letterSpacing="wide"
            >
              "Keen to L-Earn"
            </Text>
          </MotionBox>

          {/* Name and Title */}
          <VStack spacing={2} mb={6} textAlign="center">
            <GradientHeading
              as="h1"
              fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
              delay={0.1}
            >
              Pawan Kumar
            </GradientHeading>
            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Text
                fontSize={{ base: 'xl', md: '2xl' }}
                color={useColorModeValue('gray.600', 'gray.400')}
                fontWeight="medium"
              >
                Software Developer
              </Text>
            </MotionBox>
          </VStack>
        </Container>
      </Box>

      <Container maxW="container.md">
        {/* Work/About Section - Glassmorphic Card */}
        <Section delay={0.1}>
          <FloatingCard variant="glass" delay={0.2}>
            <Heading as="h3" variant="section-title" mb={4}>
              Work
            </Heading>
            <Paragraph>
              Pawan Kumar, from Chikhli, Gujarat, is a highly skilled and
              motivated individual with a Bachelor's degree in Information
              Technology from Gujarat Technological University.
            </Paragraph>
            <Paragraph mt={3}>
              Apart from development works, he is passionate about
              problem-solving with Data Structures and Algorithms, continuously
              improving his skills on{' '}
              <NextLink href="https://leetcode.com/p1kmr" passHref scroll={false}>
                <Link variant="gradient">LeetCode</Link>
              </NextLink>
              . He also has a strong understanding of Computer Networks and
              enjoys playing{' '}
              <NextLink
                href="https://www.chess.com/member/p_one420"
                passHref
                scroll={false}
              >
                <Link variant="gradient">Chess</Link>
              </NextLink>{' '}
              in his free time.
            </Paragraph>
            <Box textAlign="center" mt={6}>
              <NextLink href="/works" passHref scroll={false}>
                <Link style={{ textDecoration: 'none' }}>
                  <AnimatedButton variant="gradient" showIcon size="lg">
                    My Portfolio
                  </AnimatedButton>
                </Link>
              </NextLink>
            </Box>
          </FloatingCard>
        </Section>

        {/* Bio Timeline - Elevated Card */}
        <Section delay={0.2}>
          <FloatingCard variant="elevated" delay={0.3}>
            <Heading as="h3" variant="section-title" mb={4}>
              Bio
            </Heading>
            <BioList bioData={bioData} />
          </FloatingCard>
        </Section>

        {/* Interests Section - Grid of Cards */}
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title" mb={6} textAlign="center">
            I ♥
          </Heading>
          <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={4}>
            {['Music', 'Chess', 'Travelling'].map((interest, index) => (
              <MotionBox
                key={interest}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  y: -4,
                  transition: { duration: 0.2 }
                }}
                p={6}
                borderRadius="xl"
                textAlign="center"
                background={interestCardBg}
                boxShadow={useColorModeValue(
                  '0 4px 12px rgba(0, 0, 0, 0.05)',
                  '0 4px 12px rgba(0, 0, 0, 0.3)'
                )}
                cursor="default"
                border="1px solid"
                borderColor={useColorModeValue(
                  'rgba(99, 102, 241, 0.1)',
                  'rgba(167, 139, 250, 0.1)'
                )}
              >
                <Text
                  fontSize={{ base: 'xl', md: '2xl' }}
                  fontWeight="bold"
                  bgGradient={useColorModeValue(
                    'linear-gradient(135deg, #6366f1 0%, #14b8a6 100%)',
                    'linear-gradient(135deg, #a78bfa 0%, #2dd4bf 100%)'
                  )}
                  bgClip="text"
                >
                  {interest}
                </Text>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Section>

        {/* Social Links Section - Glass Card */}
        <Section delay={0.4}>
          <FloatingCard variant="glass" delay={0.5}>
            <Heading as="h3" variant="section-title" mb={4}>
              On the web
            </Heading>
            <List>
              <SocialLinks socialLinks={socialLinks} />
            </List>
          </FloatingCard>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
