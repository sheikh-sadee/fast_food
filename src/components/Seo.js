import Head from 'next/head';

const SEO = ({ title, description, image }) => {
  const siteTitle = title ? `${title} | Plastk` : 'Plastk';
  const siteDescription = description || 'Description of your website goes here';

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />

      {/* Open Graph tags */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:type" content="website" />
      {/* Add other Open Graph tags as needed */}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={image} />
      {/* Add other Twitter Card tags as needed */}

      {/* Additional tags */}
      {process.env.NEXT_PUBLIC_ENV_PRAM === 'live' && (
        <>
          <meta key="peachtree-id" name="peachtree-id" content="c9683a09-f146-49bc-be26-1d36ca60ce02" />
          <meta name="insight-app-sec-validation" content="f9fb3f7c-ecb5-41a1-bfbb-85d76ac8fe44" />
          <meta name="google-site-verification" content="kIo1yOEPxuZqbskDkE_SYN4jjJpIZRx0Pw9zCQN_nnU" />
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Plastk Financial & Rewards Inc",
                "legalName": "Plastk Financial & Rewards Inc",
                "url": "https://plastk.ca/",
                "logo": "https://plastk.ca/243fd5feae1b39b9e848.svg",
                "foundingDate": "2018",
                "founder": [
                  {
                    "@type": "Person",
                    "name": "Motola Omobamiduro"
                  }
                ],
                "address": {
                  "@type": "PostalAddress",
                  "addressRegion": "Calgary",
                  "addressCountry": "Canada"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "Client Success Team",
                  "telephone": "[ 1-844-200-0526]",
                  "email": "hello@plastk.ca"
                },
                "sameAs": [
                  "Plastk",
                  "Plastk_Card",
                  "https://www.instagram.com/plastk_visa/",
                  "https://www.linkedin.com/company/plastk-financial-rewards/"
                ]
              }
            `}
          </script>
        </>
      )}
    </Head>
  );
};

export default SEO;
