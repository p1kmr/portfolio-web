import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { WEDPLANAI_DETAILS } from '../../components/constants'

const Work = () => (
  <Layout title={WEDPLANAI_DETAILS.title}>
    <Container>
      <Title>
        {WEDPLANAI_DETAILS.title}
      </Title>
      <P>
        {WEDPLANAI_DETAILS.description}
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href={WEDPLANAI_DETAILS.website}>
            {WEDPLANAI_DETAILS.website} <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>{WEDPLANAI_DETAILS.platform}</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>{WEDPLANAI_DETAILS.stack}</span>
        </ListItem>
        {WEDPLANAI_DETAILS.tools && (
          <ListItem>
            <Meta>Tools</Meta>
            <span>{WEDPLANAI_DETAILS.tools}</span>
          </ListItem>
        )}
        {WEDPLANAI_DETAILS.teamSize && (
          <ListItem>
            <Meta>Team Size</Meta>
            <span>{WEDPLANAI_DETAILS.teamSize} developers</span>
          </ListItem>
        )}
      </List>

      {WEDPLANAI_DETAILS.images.map((image, index) => (
        <WorkImage key={index} src={image.src} alt={image.alt} />
      ))}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

