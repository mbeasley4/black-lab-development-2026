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
  sameAs: ["https://www.linkedin.com/company/blacklabdevelopment/"],
};
