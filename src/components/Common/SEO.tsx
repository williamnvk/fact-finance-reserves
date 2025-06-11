import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: any;
  canonical?: string;
}

export const SEO = ({
  title = 'Fact Finance - Blockchain & Data Infrastructure Experts',
  description = 'A data layer connecting trusted, official data sources to tokenized assets, unlocking new financial solutions',
  keywords = 'oráculo, data layer, data hub, blockchain, web3, asset tokenization',
  image = '/assets/poster.png',
  url = 'https://fact.finance',
  type = 'website',
  structuredData = {},
  canonical = 'https://fact.finance',
}: SEOProps) => {
  const rawStructuredData =
    JSON.stringify(structuredData) === JSON.stringify({})
      ? {
          '@context': 'https://schema.org',
          '@type': type,
          name: 'Fact Finance',
          description,
          url,
          applicationCategory: '',
          operatingSystem: 'Any',
          keywords: keywords.split(','),
          sameAs: ['https://x.com/TheFactOracle', 'https://www.linkedin.com/company/fact-finance-oracle'],
        }
      : structuredData;

  const baseUrl = 'https://fact.finance/';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={baseUrl + image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={baseUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={baseUrl + image} />

      <meta name="keywords" content={keywords} />
      <meta name="author" content="Fact Finance" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />

      <script type="application/ld+json">{JSON.stringify(rawStructuredData)}</script>
    </Helmet>
  );
};
