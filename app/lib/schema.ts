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
    "B2B website design and pipeline generation agency serving Cincinnati, OH and clients nationwide. Specializing in manufacturing websites, B2B design, and conversion optimization.",
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
    "B2B website design",
    "Conversion rate optimization",
    "Core Web Vitals optimization",
    "Technical SEO",
    "Manufacturing website design",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+15135204362",
    contactType: "sales",
    availableLanguage: "en",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "B2B Web Design & Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "B2B Website Design",
          url: "https://blacklabdev.com/services/b2b-website-design",
          description:
            "Custom B2B website design built for technical buyers, complex buying decisions, and higher-quality lead generation.",
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
          name: "Manufacturing Website Design",
          url: "https://blacklabdev.com/services/manufacturing-website-design",
          description:
            "Industry-specific website design for manufacturers — built to generate RFQs from engineers and procurement teams.",
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
    ],
  },
  sameAs: ["https://www.linkedin.com/company/blacklabdevelopment/"],
};
