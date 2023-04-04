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
    <Layout title="DocsApp">
      <Container>
        <Title>
          Notepad Clone
        </Title>
        <P>
        Created Notepad Clone Java-based text-editor with essential features such as save, save as, open, cut, copy, paste, and select all. It offers a simple yet effective solution for managing and editing text-based files.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Jar file</Meta>
            <Link href="https://github.com/p1kmr/Notepad/releases/tag/1.0.0">
            shorturl.at/kEUW5<ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Java, Swing</span>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/notepad_01.png" alt="Notepad App" />
       
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  