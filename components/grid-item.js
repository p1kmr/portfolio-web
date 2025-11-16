import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, useColorModeValue, Badge, HStack } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail, tags }) => {
  const cardBg = useColorModeValue('white', '#1a1a1a')
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200')
  const hoverBorderColor = useColorModeValue('brand.500', 'brand.400')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const hoverShadow = useColorModeValue(
    '0 20px 40px -10px rgba(0, 0, 0, 0.1)',
    '0 20px 40px -10px rgba(0, 0, 0, 0.5)'
  )
  const overlayGradient = useColorModeValue(
    'linear(to-b, transparent, rgba(255,255,255,0.8))',
    'linear(to-b, transparent, rgba(0,0,0,0.8))'
  )
  const titleGradient = useColorModeValue(
    'linear(to-r, brand.600, accent.600)',
    'linear(to-r, brand.400, accent.400)'
  )
  const titleHoverGradient = useColorModeValue(
    'linear(to-r, brand.500, accent.500)',
    'linear(to-r, brand.300, accent.300)'
  )

  return (
    <NextLink href={`/works/${id}`} passHref scroll={false}>
      <LinkBox as="article" cursor="pointer">
        <MotionBox
          bg={cardBg}
          borderRadius="2xl"
          overflow="hidden"
          border="1px solid"
          borderColor={borderColor}
          transition="all 0.3s ease-in-out"
          whileHover={{
            y: -8,
            transition: { duration: 0.2 }
          }}
          _hover={{
            borderColor: hoverBorderColor,
            boxShadow: hoverShadow
          }}
        >
          {/* Image Container with Overlay */}
          <Box position="relative" overflow="hidden">
            <MotionBox
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                placeholder="blur"
                loading="lazy"
              />
            </MotionBox>

            {/* Gradient Overlay on Hover */}
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bgGradient={overlayGradient}
              opacity={0}
              transition="opacity 0.3s ease"
              _groupHover={{ opacity: 1 }}
            />
          </Box>

          {/* Content */}
          <Box p={6}>
            <LinkOverlay href={`/works/${id}`}>
              <Text
                fontSize="xl"
                fontWeight="bold"
                mb={2}
                bgGradient={titleGradient}
                bgClip="text"
                _hover={{
                  bgGradient: titleHoverGradient
                }}
              >
                {title}
              </Text>
            </LinkOverlay>

            <Text fontSize="sm" color={textColor} mb={4} noOfLines={3}>
              {children}
            </Text>

            {/* Tags */}
            {tags && tags.length > 0 && (
              <HStack spacing={2} flexWrap="wrap">
                {tags.slice(0, 3).map((tag, index) => (
                  <Badge
                    key={index}
                    colorScheme={index % 2 === 0 ? 'purple' : 'teal'}
                    borderRadius="full"
                    px={2}
                    py={1}
                    fontSize="xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </HStack>
            )}
          </Box>
        </MotionBox>
      </LinkBox>
    </NextLink>
  )
}

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 0;
        transition: transform 0.3s ease-in-out;
      }
    `}
  />
)
