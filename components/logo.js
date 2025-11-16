import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const LogoBox = styled(motion.span)`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  cursor: pointer;

  img {
    transition: transform 0.3s cubic-bezier(0.6, -0.05, 0.01, 0.99);
  }

  &:hover img {
    transform: rotate(360deg) scale(1.1);
  }
`

const MotionText = motion(Text)

const Logo = () => {
  const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`
  const textGradient = useColorModeValue(
    'linear-gradient(135deg, #6366f1 0%, #14b8a6 100%)',
    'linear-gradient(135deg, #a78bfa 0%, #2dd4bf 100%)'
  )

  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <Image src={footPrintImg} width={20} height={20} alt="logo" />
          <MotionText
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
            bgGradient={textGradient}
            bgClip="text"
            sx={{
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
            whileHover={{
              scale: 1.05
            }}
          >
            Pawan Kumar
          </MotionText>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
