import Helmet from 'react-helmet';
import logo from '../image/logo.png';
// seo-constants
// ──────────────────────────────────────────────────────────────
// All your SEO constants + JSON-LD + Helmet render function
// Compatible with React 16.9 + react-helmet 6.1.0
// ──────────────────────────────────────────────────────────────

// ── Basic site constants ───────────────────────────────────────
export const siteUrl = 'https://www.isacconsult.com';
export const siteName = 'Isac Consult';
export const siteDesc =
  'Consultanță comportamentală și strategie de relaționare, bazată pe comportamente observabile și funcția lor în contexte specifice.';

// Replace with your real OG image path (should be absolute URL)
const ogImage = `${siteUrl}${logo}`;

// ── JSON-LD Structured Data Objects ────────────────────────────
export const orgScript = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteName,
  award: 'Life',
  url: siteUrl,
  logo: `${siteUrl}${logo}`,
  sameAs: [
    'https://www.facebook.com/share/14PuXYiFJw2/?mibextid=wwXIfr',
    'https://www.instagram.com/isacconsult?igsh=a3VpeW5vMjU3ZGF4',
    'https://youtube.com/@isacconsult?si=2iKk0PDsQNNQ3Et4'
  ],
};

export const localBusinessScript = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteName,
  image: `${siteUrl}${logo}`,
  url: siteUrl,
  telephone: '+40 724 319 099',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'CLUJ 400012', // ← probably better with full street if available
    addressLocality: 'Cluj-Napoca',
    postalCode: '400012',
    addressCountry: 'RO',
    addressRegion: 'Cluj',
  },
  openingHours: ['Mo-Fr 10:00-19:00'],
  priceRange: '$$$, €',
};

export const webSiteScript = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteName,
  url: siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/search/{search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};
// ── Helper to render JSON-LD safely ────────────────────────────
export const JsonLd = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

// ── Main Helmet component (use this in layout or pages) ────────
export const RenderMetaData = () => (
  <>
    <Helmet>
      {/* Basic + Canonical */}
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph – good defaults for social sharing */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ro_RO" /> {/* Romanian – more accurate */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:description" content={siteDesc} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />

      {/* Optional: Twitter/X Card – recommended */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteName} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>

    {/* Structured Data – placed outside Helmet (Helmet doesn't manage <script type="application/ld+json"> well) */}
    <JsonLd data={orgScript} />
    <JsonLd data={localBusinessScript} />
    <JsonLd data={webSiteScript} />
  </>
);