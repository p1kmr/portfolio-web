import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'
import SnowEffect from '../components/SnowEffect'
import FocusStyles from '../components/accessibility/FocusStyles'
import SkipLink from '../components/accessibility/SkipLink'
import { PersonStructuredData, WebsiteStructuredData } from '../components/seo/structured-data'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps, router }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <FocusStyles />
      <PersonStructuredData />
      <WebsiteStructuredData />
      <SkipLink />
      <Layout router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <SnowEffect />
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  )
}

export default Website
