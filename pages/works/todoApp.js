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
          Todo App
        </Title>
        <P>
        Developed a Todolist application using . The application features CRUD functionalities, JSTL, and Spring for dependency injection. I used Hibernate for ORM and Apache Maven to automate the build process. Finally, I used JSP to create the web pages for the application.
        
        
      
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Code</Meta>
            <Link href="https://github.com/p1kmr/todoapp">
            https://github.com/p1kmr/todoapp<ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
       
          <ListItem>
            <Meta>Stack</Meta>
            <span>Java, Spring MVC, Hibernate, MySQL, Bootstrap, Eclipse, JSP, Tomcat</span>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/todoApp_01.png" alt="Todo App" />
        <WorkImage src="/images/works/todoApp_02.png" alt="Todo App" />
       
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  