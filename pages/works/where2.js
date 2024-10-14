import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { WHERE2_DETAILS } from '../../components/constants'

const Work = () => (
  <Layout title={WHERE2_DETAILS.title}>
    <Container>
      <Title>
        {WHERE2_DETAILS.title}
      </Title>
      <P>
        {WHERE2_DETAILS.description}
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href={WHERE2_DETAILS.website}>
            {WHERE2_DETAILS.website} <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>{WHERE2_DETAILS.platform}</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>{WHERE2_DETAILS.stack}</span>
        </ListItem>
        <ListItem>
          <Meta>Team Size</Meta>
          <span>{WHERE2_DETAILS.teamSize} developers</span>
        </ListItem>
      </List>

      {WHERE2_DETAILS.images.map((image, index) => (
        <WorkImage key={index} src={image.src} alt={image.alt} />
      ))}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
