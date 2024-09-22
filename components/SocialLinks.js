import { Button, Link, ListItem } from '@chakra-ui/react'
import { IoLogoGithub, IoLogoWebComponent, IoLogoGoogle } from 'react-icons/io5'

const iconMap = {
  IoLogoGithub,
  IoLogoWebComponent,
  IoLogoGoogle
}

const SocialLinks = ({ socialLinks }) => (
  <>
    {socialLinks.map((link, index) => (
      <ListItem key={index}>
        <Link href={link.href} target="_blank">
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={iconMap[link.icon]()}
          >
            {link.name}
          </Button>
        </Link>
      </ListItem>
    ))}
  </>
)

export default SocialLinks