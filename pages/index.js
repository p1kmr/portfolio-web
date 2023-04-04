import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear, BioDetails } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoGoogle, IoLogoInstagram, IoLogoGithub, IoLogoWebComponent } from 'react-icons/io5'
import Image from 'next/image'
import Head from 'next/head'

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
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          
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
        {/* <BioSection>

          <BioYear>Oct 2022 to Apr 2023 </BioYear>

          <span>Worked as Software Developer Intern at FinacPlus in Bangalore / Bengaluru. </span>

        </BioSection> */}

<BioSection>
  <BioYear>Oct 2022 to Apr 2023</BioYear>
  <BioDetails>Worked as Software Developer Intern at FinacPlus in Bangalore / Bengaluru.</BioDetails>
</BioSection>

        <BioSection>
          <BioYear>Feb 2022 to Apr 2022 </BioYear>
<BioDetails > Worked as Asp.net developer Intern at  Toshal-Infotech in Surat.</BioDetails>
         
        </BioSection>

        <BioSection>
          <BioYear>Jun 2021 to Jul 2021 </BioYear>

         <BioDetails>Worked as
          Python-Django Intern at  Akash Technolabs.</BioDetails> 
        </BioSection>


        <BioSection>
          <BioYear>Aug 2018 to Jul 2022</BioYear>
        <BioDetails>Completed B.E. in Information Technology
          from GTU with overall CGPA of 8.30.</BioDetails> 
        </BioSection>
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
          <ListItem>
            <Link href="https://github.com/p1kmr" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @p1kmr
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://drive.google.com/drive/folders/16bjyfPH7ZWyWG8_6WEyacC7RbnEcmB_I?usp=sharing" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoWebComponent />}
              >
                Resume
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:kmrpawan320@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGoogle />}
              >
                kmrpawan320@gmail.com
              </Button>
            </Link>

          </ListItem>

        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
