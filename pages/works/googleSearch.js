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
  
  const Work = () => (
    <Layout title="OpSearch">
      <Container>
        <Title>
          Op-search
        </Title>
        <P>
         Built a Search Engine powered by Google API
with full search functionality and Pagination
which gives multiple search result pages.

        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://op-search.vercel.app/">
            https://op-search.vercel.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Google API,Tailwind CSS,Next.js(React).</span>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/opsearch_01.png" alt="OpSearch" />
         
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  