import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Image from 'next/image'
import BioList from '../components/BioList'
import SocialLinks from '../components/SocialLinks'
import { bioData, socialLinks } from '../components/config/bio'


const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        "Keen to L-Earn"
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Pawan Kumar
          </Heading>
          <p>Software Developer</p>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Pawan Kumar, from Chikhli, Gujarat, is a highly skilled and motivated individual with a Bachelor's degree in Information Technology from Gujarat Technological University.
          <p>
            Apart from development works, he is passionate about problem-solving with Data Structures and Algorithms, continuously improving his skills on&nbsp;
            <NextLink href="https://leetcode.com/p1kmr" passHref scroll={false}>
              <Link>LeetCode.</Link>
            </NextLink> He also has a strong understanding of Computer Networks and enjoys playing &nbsp;
            <NextLink href="https://www.chess.com/member/p_one420" passHref scroll={false}>
              <Link>Chess</Link>
            </NextLink> in his free time.
          </p>
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioList bioData={bioData} />
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Music , Chess , Travelling
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <SocialLinks socialLinks={socialLinks} />
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'