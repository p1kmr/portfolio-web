import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { DOCSAPP_DETAILS } from '../../components/constants'  

const Work = () => (
  <Layout title={DOCSAPP_DETAILS.title}>
    <Container>
      <Title>
        {DOCSAPP_DETAILS.title}
      </Title>
      <P>
        {DOCSAPP_DETAILS.description}
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href={DOCSAPP_DETAILS.website}>
            {DOCSAPP_DETAILS.website} <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>{DOCSAPP_DETAILS.platform}</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>{DOCSAPP_DETAILS.stack}</span>
        </ListItem>
      </List>

      {DOCSAPP_DETAILS.images.map((image, index) => (
        <WorkImage key={index} src={image.src} alt={image.alt} />
      ))}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
