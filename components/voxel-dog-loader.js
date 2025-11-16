import { forwardRef } from 'react'
import { Box, Spinner, Text, Progress } from '@chakra-ui/react'

export const DogSpinner = ({ progress }) => (
  <Box
    position="absolute"
    left="50%"
    top="50%"
    transform="translate(-50%, -50%)"
    textAlign="center"
  >
    <Spinner
      size="xl"
      thickness="4px"
      speed="0.65s"
      color="teal.400"
      mb={4}
    />
    {progress > 0 && progress < 100 && (
      <>
        <Text fontSize="sm" color="gray.500" mb={2}>
          Loading 3D Model...
        </Text>
        <Progress
          value={progress}
          size="sm"
          colorScheme="teal"
          width="200px"
          borderRadius="md"
          hasStripe
          isAnimated
        />
        <Text fontSize="xs" color="gray.400" mt={1}>
          {Math.round(progress)}%
        </Text>
      </>
    )}
  </Box>
)

export const DogContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-dog"
    m="auto"
    mt={['-20px', '-60px', '-120px']}
    mb={['-40px', '-140px', '-200px']}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <DogContainer>
      <DogSpinner progress={0} />
    </DogContainer>
  )
}

export default Loader
