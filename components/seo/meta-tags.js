import Head from 'next/head'

/**
 * SEO Meta Tags Component
 * Provides comprehensive meta tags for better SEO and social sharing
 */
const MetaTags = ({
  title = 'Pawan Kumar - Software Engineer',
  description = 'Full-stack Software Engineer specializing in React, Java, Spring Boot, and AI integration. Currently working at Stryker, building innovative solutions with modern web technologies.',
  keywords = 'Software Engineer, Full Stack Developer, React, Java, Spring Boot, Kafka, AI Development, Web Development, Pawan Kumar',
  ogImage = '/images/og-image.png',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonicalUrl,
  author = 'Pawan Kumar',
  locale = 'en_US'
}) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio-web.com'
  const fullUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl
  const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#6366f1" />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content="Pawan Kumar Portfolio" />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImageUrl} />
      <meta property="twitter:creator" content="@p1kmr" />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="format-detection" content="telephone=no" />

      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    </Head>
  )
}

export default MetaTags
