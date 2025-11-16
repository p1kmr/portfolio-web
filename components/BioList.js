import { Box } from '@chakra-ui/react'
import { BioSection, BioYear, BioDetails } from './bio'

const BioList = ({ bioData }) => (
  <Box position="relative">
    {bioData.map((bio, index) => (
      <BioSection key={index} index={index}>
        <BioYear>{bio.period}</BioYear>
        <BioDetails>{bio.details}</BioDetails>
      </BioSection>
    ))}
  </Box>
)

export default BioList