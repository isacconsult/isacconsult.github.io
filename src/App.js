import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Helmet from 'react-helmet';
/*-----pages-----*/
import { Home4 } from "./Home4";
import { NotFound } from "./404";
import Blog from "./component/Blog/Blog";
import { Article } from "./component/Blog/Article";
import logo from './image/logo.png';
import ScrollToTop from "./scrollTop";

/*-----not used pages ... for now -----*/
// import { Home } from "./Home";
// import { Home2 } from "./Home2";
// import { Home3 } from "./Home3";
// import { Home5 } from "./Home5";
// import { Home6 } from "./Home6";
// import { Homefrelencer } from "./Home-frelencer";
// import { HomeDeveloper } from "./Home-developer";
// import { Creativecarousel } from "./Creative-carousel";

// seo-constants.tsx
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

export const siteNavScript = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "SiteNavigationElement",
      "position": 1,
      "name": "Acasă",
      "url": siteUrl
    },
    {
      "@type": "SiteNavigationElement",
      "position": 2,
      "name": "Articole",
      "url": `${siteUrl}/articole`
    },
    {
      "@type": "SiteNavigationElement",
      "position": 3,
      "name": "Omul care se reglează prin risc",
      "url": `${siteUrl}/articole/unu`
    },
    {
      "@type": "SiteNavigationElement",
      "position": 4,
      "name": "A fost odată un om ...",
      "url": `${siteUrl}/articole/doi`
    },
    {
      "@type": "SiteNavigationElement",
      "position": 5,
      "name": "Felul în care am ajuns să înțeleg adaptarea umană",
      "url": `${siteUrl}/articole/trei`
    },
    {
      "@type": "SiteNavigationElement",
      "position": 6,
      "name": "Manifest pentru învățarea minții si a corpului",
      "url": `${siteUrl}/articole/patru`
    },
    {
      "@type": "SiteNavigationElement",
      "position": 7,
      "name": "Consultanță comportamentală defensivă",
      "url": `${siteUrl}/articole/cinci`
    },
    {
      "@type": "SiteNavigationElement",
      "position": 8,
      "name": "Comportamentele care ne țin împreună (până nu ne mai țin)",
      "url": `${siteUrl}/articole/sase`
    },
    {
      "@type": "SiteNavigationElement",
      "position": 9,
      "name": "Nodul cel mai dureros din relații",
      "url": `${siteUrl}/articole/sapte`
    },
    {
      "@type": "SiteNavigationElement",
      "position": 10,
      "name": "Funcția din spatele comportamentului",
      "url": `${siteUrl}/articole/opt`
    },
    {
      "@type": "SiteNavigationElement",
      "position": 11,
      "name": "De ce stau oamenii in relații",
      "url": `${siteUrl}/articole/noua`
    },
    {
      "@type": "SiteNavigationElement",
      "position": 12,
      "name": "Costul biologic",
      "url": `${siteUrl}/articole/zece`
    },
    {
      "@type": "SiteNavigationElement",
      "position": 13,
      "name": "După despărțire",
      "url": `${siteUrl}/articole/unspe`
    },
    {
      "@type": "SiteNavigationElement",
      "position": 14,
      "name": "Influența mediului familial cu alcoolism asupra adultului: o perspectivă comportamentală și biologică",
      "url": `${siteUrl}/articole/doispe`
    },
    {
      "@type": "SiteNavigationElement",
      "position": 15,
      "name": "Moduri diferite prin care oamenii privesc realitatea interpersonală",
      "url": `${siteUrl}/articole/treispe`
    },
  ]
};

// ── Helper to render JSON-LD safely ────────────────────────────
const JsonLd = ({ data }) => (
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
    <JsonLd data={siteNavScript} />
  </>
);

class App extends Component {
  render() {
    return (
      <div>
        <RenderMetaData />
        <React.Fragment>

          <Router>
            {/* scrolling to top for each route to prevent browser behavior */}
            <ScrollToTop />
            <Switch>
              <Route path="/Home4" component={Home4} />
              <Route exact path="/" component={Home4} />
              <Route exact path="/articole" component={Blog} />
              {/* Dynamic route for individual posts */}
              <Route path="/articole/:slug" component={Article} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
