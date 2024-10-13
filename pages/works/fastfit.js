import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { FASTFIT_DETAILS } from '../../components/constants'

const Work = () => (
  <Layout title={FASTFIT_DETAILS.title}>
    <Container>
      <Title>
        {FASTFIT_DETAILS.title}
      </Title>
      <P>
        {FASTFIT_DETAILS.description}
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Admin Panel</Meta>
          <Link href={FASTFIT_DETAILS.adminWebsite}>
            {FASTFIT_DETAILS.adminWebsite} <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Official Website</Meta>
          <Link href={FASTFIT_DETAILS.officialWebsite}>
            {FASTFIT_DETAILS.officialWebsite} <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>{FASTFIT_DETAILS.platform}</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>{FASTFIT_DETAILS.stack}</span>
        </ListItem>
      </List>

      {FASTFIT_DETAILS.images.map((image, index) => (
        <WorkImage key={index} src={image.src} alt={image.alt} />
      ))}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
