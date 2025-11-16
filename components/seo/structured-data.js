import Head from 'next/head'

/**
 * Structured Data (JSON-LD) for better SEO
 * Helps search engines understand the content and context
 */
export const PersonStructuredData = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Pawan Kumar',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio-web.com',
    jobTitle: 'Software Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Stryker'
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Gujarat Technological University'
    },
    knowsAbout: [
      'Software Engineering',
      'Full Stack Development',
      'React',
      'Java',
      'Spring Boot',
      'Artificial Intelligence',
      'Web Development',
      'Kafka',
      'Angular',
      'MariaDB'
    ],
    sameAs: [
      'https://github.com/p1kmr',
      'mailto:kmrpawan320@gmail.com'
    ]
  }

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  )
}

export const WebsiteStructuredData = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Pawan Kumar Portfolio',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio-web.com',
    description: 'Full-stack Software Engineer portfolio showcasing projects and expertise',
    author: {
      '@type': 'Person',
      name: 'Pawan Kumar'
    }
  }

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  )
}

export const ProjectStructuredData = ({ project }) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    author: {
      '@type': 'Person',
      name: 'Pawan Kumar'
    },
    dateCreated: project.date,
    keywords: project.tags?.join(', ') || ''
  }

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  )
}

export default PersonStructuredData
