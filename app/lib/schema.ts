export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://blacklabdev.com/#business",
  name: "Black Lab Development",
  url: "https://blacklabdev.com",
  logo: {
    "@type": "ImageObject",
    url: "https://blacklabdev.com/images/blacklabdevelopment.png",
  },
  image: "https://blacklabdev.com/images/homepage-hero-bg.png",
  description:
    "Independent web development and technical SEO practice run by senior web developer Michael Beasley, serving Cincinnati, OH and clients nationwide. Builds professional websites directly for small-to-medium businesses, and partners with agencies and strategy firms as a white-label web development and SEO execution partner.",
  telephone: "+15135204362",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cincinnati",
    addressRegion: "OH",
    postalCode: "45202",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.1031,
    longitude: -84.512,
  },
  areaServed: [
    { "@type": "City", name: "Cincinnati" },
    { "@type": "AdministrativeArea", name: "Ohio" },
    { "@type": "Country", name: "United States" },
  ],
  priceRange: "$$",
  founder: {
    "@type": "Person",
    "@id": "https://blacklabdev.com/about#michael-beasley",
    name: "Michael Beasley",
  },
  employee: {
    "@type": "Person",
    "@id": "https://blacklabdev.com/about#michael-beasley",
    name: "Michael Beasley",
    jobTitle: "Senior Web Developer & Founder",
  },
  knowsAbout: [
    "Next.js development",
    "WordPress development",
    "Shopify development",
    "B2B website design",
    "Conversion rate optimization",
    "Core Web Vitals optimization",
    "Technical SEO",
    "White-label web development",
    "SEO fulfillment for agencies",
    "Cloudflare configuration",
    "CDN and WAF security hardening",
    "Uptime and performance monitoring",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+15135204362",
    contactType: "sales",
    availableLanguage: "en",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Design, Development & Agency Partner Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Small Business Website Design",
          url: "https://blacklabdev.com/services/small-business-website-design",
          description:
            "Custom website design and development for small-to-medium businesses — built by a senior engineer to look credible, load fast, and generate leads.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Conversion Optimization",
          url: "https://blacklabdev.com/services/conversion-optimization",
          description:
            "Audit, diagnose, and fix why your site isn't generating qualified leads — measured before and after with real data.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "White-Label Web Development for Agencies",
          url: "https://blacklabdev.com/partners",
          description:
            "White-label web development and technical SEO fulfillment for marketing agencies and strategy firms — delivered under the agency's brand.",
          audience: {
            "@type": "BusinessAudience",
            audienceType: "Agencies and consulting firms",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Web Development",
          url: "https://blacklabdev.com/services",
          description:
            "Custom website and web application development — WordPress, headless CMS, Next.js, or fully custom.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Technical SEO & Performance",
          url: "https://blacklabdev.com/services",
          description:
            "Core Web Vitals, technical SEO remediation, and performance optimization with measurable results.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Security & Infrastructure Hardening",
          url: "https://blacklabdev.com/services",
          description:
            "Cloudflare configuration, CDN setup, WAF rules, and uptime/performance monitoring for production websites and applications.",
        },
      },
    ],
  },
  sameAs: ["https://www.linkedin.com/company/blacklabdevelopment/"],
};
