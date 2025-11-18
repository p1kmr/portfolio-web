import { Container, Heading, SimpleGrid, Text, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import GradientHeading from '../components/ui/GradientHeading'

import thumbInkdrop from '../public/images/works/docsapp_eyecatch.png'
import thumbWalknote from '../public/images/works/dca_eyecatch.png'
import thumbFourPainters from '../public/images/works/letsShop.png'
import thumbMenkiki from '../public/images/works/notepad_01.png'
import thumbTodoApp from '../public/images/works/todoApp_01.png'
import thumbFastFit from '../public/images/works/fastfit_eyecatch.png'
import thumbWhere2 from '../public/images/works/where2_eyecatch.png'
import thumbWedPlanAI from '../public/images/works/wedplanai_eyecatch.png'
import thumbAIVision from '../public/images/works/aivision_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container maxW="container.xl">
      <Box mb={10}>
        <GradientHeading
          as="h2"
          fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
          mb={4}
        >
          Portfolio
        </GradientHeading>
        <Text fontSize="lg" opacity={0.8} maxW="2xl">
          A collection of projects showcasing expertise in full-stack development,
          AI integration, and modern web technologies.
        </Text>
      </Box>

      <SimpleGrid columns={[1, 1, 2, 2]} gap={8} spacing={8}>
        <Section>
          <WorkGridItem
            id="wedplanai"
            title="WedPlanAI"
            thumbnail={thumbWedPlanAI}
            tags={['Voice AI', 'Cursor IDE']}
          >
            AI-powered wedding planning platform with automated vendor discovery, AI voice calling agents for negotiations, and intelligent budget management.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fastfit"
            title="FastFit"
            thumbnail={thumbFastFit}
            tags={['Admin Panel', 'Form Handling', 'Firebase']}
          >
            Admin panel for managing FastFit's 100+ workouts, 600+ meal plans, 55+ meditation sessions and 34+ yoga programs.
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem
            id="where2"
            title="Where2"
            thumbnail={thumbWhere2}
            tags={['Dashboard', 'Admin Panel']}
          >
            Admin panel for Where2's (Clubs & Bars): oversees establishments, manages user roles, and provides owner-specific dashboards.
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem
            id="aivision"
            title="AI Vision App"
            thumbnail={thumbAIVision}
            tags={['NextJS', 'WebSockets', 'OpenAI API']}
          >
            Real-time AI vision and audio conversation app with live video analysis, voice conversations, and multi-provider AI support (OpenAI & Google Gemini).
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="docsapp"
            title="Docsapp"
            thumbnail={thumbInkdrop}
            tags={['Editor', 'Firebase', 'Wysiwyg']}
          >
            Document App like Google Docs used to take notes edit documents in realtime
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem
            id="googleSearch"
            title="Search Engine"
            thumbnail={thumbWalknote}
            tags={['Google API', 'Next.js', 'Pagination']}
          >
            Built a Search Engine powered by Google API with full search functionality and Pagination which gives multiple search result pages.
         </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem
            id="letsShop"
            title="Let's Shop"
            thumbnail={thumbFourPainters}
            tags={['E-commerce', 'Shopping', 'Full-Stack']}
          >
            Built an e-commerce website with basic shopping functionalities.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="notepadApp"
            thumbnail={thumbMenkiki}
            title="Notepad Clone"
            tags={['Desktop App', 'Editor']}
          >
            Created clone of notepad app.
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem
            id="todoApp"
            thumbnail={thumbTodoApp}
            title="Todo App"
            tags={['Spring MVC', 'Hibernate', 'Mysql']}
          >
            Todo application using Spring framework.
          </WorkGridItem>
        </Section>

      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
