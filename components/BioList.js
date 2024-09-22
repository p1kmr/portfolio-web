import { BioSection, BioYear, BioDetails } from './bio'

const BioList = ({ bioData }) => (
  <>
    {bioData.map((bio, index) => (
      <BioSection key={index}>
        <BioYear>{bio.period}</BioYear>
        <BioDetails>{bio.details}</BioDetails>
      </BioSection>
    ))}
  </>
)

export default BioList