import { Button, Link, ListItem, useColorModeValue } from '@chakra-ui/react'
import { IoLogoGithub, IoLogoWebComponent, IoLogoGoogle } from 'react-icons/io5'
import { motion } from 'framer-motion'

const MotionListItem = motion(ListItem)
const MotionButton = motion(Button)

const iconMap = {
  IoLogoGithub,
  IoLogoWebComponent,
  IoLogoGoogle
}

const SocialLinks = ({ socialLinks }) => {
  const hoverBg = useColorModeValue(
    'rgba(99, 102, 241, 0.1)',
    'rgba(167, 139, 250, 0.1)'
  )

  const hoverColor = useColorModeValue('#6366f1', '#a78bfa')

  return (
    <>
      {socialLinks.map((link, index) => (
        <MotionListItem
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <Link href={link.href} target="_blank" style={{ textDecoration: 'none' }}>
            <MotionButton
              variant="ghost"
              leftIcon={iconMap[link.icon]()}
              w="100%"
              justifyContent="flex-start"
              whileHover={{
                scale: 1.05,
                x: 4
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              _hover={{
                bg: hoverBg,
                color: hoverColor,
                transform: 'translateX(4px)'
              }}
              sx={{
                '& svg': {
                  transition: 'transform 0.2s ease-in-out'
                },
                '&:hover svg': {
                  transform: 'rotate(5deg) scale(1.1)'
                }
              }}
            >
              {link.name}
            </MotionButton>
          </Link>
        </MotionListItem>
      ))}
    </>
  )
}

export default SocialLinks
