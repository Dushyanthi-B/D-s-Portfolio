import { Helmet } from 'react-helmet-async'

const SEOHelmet = ({ title, description, image, path }) => (
  <Helmet>
    <title>{title} | Software Engineer Portfolio</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={`https://yourportfolio.com${path}`} />
    <meta name="twitter:card" content="summary_large_image" />
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Your Name",
        "jobTitle": "Software Engineering Student",
        "image": image,
        "url": `https://yourportfolio.com${path}`,
        "sameAs": [
          "https://github.com/yourusername",
          "https://linkedin.com/in/yourusername"
        ]
      })}
    </script>
  </Helmet>
)

export default SEOHelmet

