import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/docsapp_eyecatch.png'
import thumbWalknote from '../public/images/works/dca_eyecatch.png'
import thumbFourPainters from '../public/images/works/letsShop.png'
import thumbMenkiki from '../public/images/works/notepad_01.png'
import thumbTodoApp from '../public/images/works/todoApp_01.png'
import thumbFastFit from '../public/images/works/fastfit_eyecatch.png'
import thumbWhere2 from '../public/images/works/where2_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="fastfit" title="FastFit [Freelance]" thumbnail={thumbFastFit}>
            Admin panel for managing FastFit's 100+ workouts, 600+ meal plans, 55+ meditation sessions and 34+ yoga programs.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="where2" title="Where2 [Freelance]" thumbnail={thumbWhere2}>
            Admin panel for Where2's (Clubs & Bars): oversees establishments, manages user roles, and provides owner-specific dashboards.
          </WorkGridItem>
        </Section>
        
        <Section>
          <WorkGridItem id="docsapp" title="Docsapp" thumbnail={thumbInkdrop}>
            Document App like Google Docs used to take notes edit documents in realtime
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="googleSearch"
            title="Search Engine using Google API"
            thumbnail={thumbWalknote}
          >
            Built a Search Engine powered by Google API
            with full search functionality and Pagination
            which gives multiple search result pages.

         </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="letsShop"
            title="Let's Shop"
            thumbnail={thumbFourPainters}
          >
            Built an e-commerce website with basic shopping functionalities.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="notepadApp" thumbnail={thumbMenkiki} title="Notepad Clone">
            Created clone of notepad app.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="todoApp" thumbnail={thumbTodoApp} title="Todo app">
            Todo application using Spring framework.  </WorkGridItem>
        </Section>

      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
