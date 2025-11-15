import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { AIVISION_DETAILS } from '../../components/constants'

const Work = () => (
  <Layout title={AIVISION_DETAILS.title}>
    <Container>
      <Title>
        {AIVISION_DETAILS.title}
      </Title>
      <P>
        {AIVISION_DETAILS.description}
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href={AIVISION_DETAILS.website}>
            {AIVISION_DETAILS.website} <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>{AIVISION_DETAILS.platform}</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>{AIVISION_DETAILS.stack}</span>
        </ListItem>
        {AIVISION_DETAILS.tools && (
          <ListItem>
            <Meta>Tools</Meta>
            <span>{AIVISION_DETAILS.tools}</span>
          </ListItem>
        )}
        {AIVISION_DETAILS.teamSize && (
          <ListItem>
            <Meta>Team Size</Meta>
            <span>{AIVISION_DETAILS.teamSize} developers</span>
          </ListItem>
        )}
      </List>

      {AIVISION_DETAILS.images.map((image, index) => (
        <WorkImage key={index} src={image.src} alt={image.alt} />
      ))}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

