// Portfolio entries shown in the "Work Accomplished" section of /case-studies.
// `slug` links a card to its Sanity detail page (caseStudy, kind "project");
// the link only appears once that page is published.
// `featured` entries get a large showcase row when no platform filter is active.
// TODO: Migrate these into Sanity as caseStudy documents (kind: "project")

export type Project = {
  name: string;
  slug?: string;
  /** Live site, shown in the detail page browser frame and as a "Visit" link. */
  url?: string;
  platform: string;
  logo: string;
  screenshot: string;
  summary: string;
  details: string[];
  updated?: boolean;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Global Environmental Products",
    featured: true,
    slug: "global-environmental-products-wordpress-rebuild",
    url: "https://www.gepltd.com/",
    platform: "WordPress",
    logo: "/images/work/gep-logo.png",
    screenshot: "/images/work/gep-screenshot.jpg",
    summary:
      "Replaced a 2011-era site for a Middletown, Ohio absorbents converter and spill-kit supplier with a custom WordPress block theme — a searchable product catalog, a quote-list workflow, and a site built to turn industrial buyers into quote requests.",
    details: [
      "Custom block theme and custom Gutenberg blocks — no page builder, no ACF",
      "Product catalog with spec tables, search, and Product schema — WooCommerce-ready",
      "\"Add to quote\" list that feeds straight into the quote request form",
      "57 legacy URLs 301-redirected to protect existing search rankings",
      "GA4 lead tracking and Consent Mode v2, plus LocalBusiness, FAQ, and llms.txt for search and AI answers",
    ],
    updated: true,
  },
  {
    name: "City View Tavern",
    slug: "city-view-tavern-wordpress-block-theme",
    url: "https://cityviewtavern.com/",
    featured: true,
    platform: "WordPress",
    logo: "/images/work/cityviewtavern-logo.png",
    screenshot: "/images/work/cityviewtavern-screenshot.png",
    summary:
      "Built a custom WordPress block theme for a Mount Adams bar pouring drinks since 1875 — designed around the best skyline view in Cincinnati and engineered to win local search for hours, menu, and directions.",
    details: [
      "Custom full-site-editing block theme built from scratch",
      "Local SEO with BarOrPub schema — hours, geo, menu, and reviews",
      "Live EarthCam skyline feed embedded from the patio view",
      "Photo gallery carousel and Yelp, Google, and TripAdvisor review hub",
      "Persistent hours, address, and one-tap directions on every page",
    ],
    updated: true,
  },
  {
    name: "National Management Association",
    slug: "national-management-association-wordpress-platform",
    url: "https://nma1.org/",
    featured: true,
    platform: "WordPress",
    logo: "/images/work/nma-logo.png",
    screenshot: "/images/work/nma-screenshot.png",
    summary:
      "Rebuilt the web platform for a 100-year-old leadership development network with 7,700+ members and 29 chapters — a custom WordPress theme and block library wired into the association's events, courses, and member systems.",
    details: [
      "Custom WordPress theme and library of custom Gutenberg blocks",
      "GrowthZone events integration with registration and add-to-calendar",
      "Custom course plugin surfacing the MindEdge on-demand catalog",
      "Chapter finder, member portal access, and live event ticker",
      "Conference live social feed and consent-managed cookie banner",
    ],
    updated: true,
  },
  {
    name: "Millennosphere",
    slug: "millennosphere-wordpress-editorial-theme",
    url: "https://millennosphere.com/",
    platform: "WordPress",
    logo: "/images/work/millennosphere-logo.png",
    screenshot: "/images/work/millennosphere-screenshot.png",
    summary:
      "Built a custom WordPress theme and custom Gutenberg blocks from scratch for a millennial culture and lifestyle publication — editorial layouts designed for a distinct voice, not bent out of a stock theme.",
    details: [
      "Custom WordPress theme built from scratch",
      "Custom Gutenberg blocks for editorial content",
      "Category-driven content architecture across multiple verticals",
      "Fully responsive, brand-specific design system",
    ],
  },
  {
    name: "Globe Iron Roofing",
    slug: "globe-iron-roofing-wordpress-theme",
    url: "https://globeironroofing.com/",
    platform: "WordPress",
    logo: "/images/work/globeironroofing-logo.png",
    screenshot: "/images/work/globeironroofing-screenshot.png",
    summary:
      "Built a custom WordPress theme for the Gutenberg block editor from the ground up — engineered for technical SEO, AEO, and GEO discoverability alongside top-tier page speed performance.",
    details: [
      "Custom WordPress theme built for the Gutenberg block editor",
      "Technical SEO, AEO, and GEO architecture from day one",
      "Page speed and Core Web Vitals optimization",
      "Fully responsive, editor-friendly block layouts",
    ],
  },
  {
    name: "Zero Gravity of Northern Kentucky",
    slug: "zero-gravity-performance-rebuild",
    url: "https://zerogravitynky.com/",
    platform: "WordPress",
    logo: "/images/work/zerogravity-logo.png",
    screenshot: "/images/work/zerogravity-screenshot.jpg",
    summary:
      "Ongoing WordPress engineering for Zero Gravity NKY, a Northern Kentucky medical spa — WooCommerce ripped out in favor of the dedicated booking platform, booking links generalized, and page speed rebuilt from the ground up.",
    details: [
      "WooCommerce removed — booking handled through the dedicated platform, not a bolted-on store",
      "Booking links generalized for consistent, maintainable linking",
      "Significant page speed and Core Web Vitals improvements",
      "Custom WordPress theme built for the Gutenberg block editor",
    ],
    updated: true,
  },
  {
    name: "Rev & Rinse Auto Detailing",
    slug: "rev-and-rinse-nextjs-sanity",
    platform: "Custom Next.js",
    logo: "/images/work/revandrinse-logo.png",
    screenshot: "/images/work/revandrinse-screenshot.png",
    summary:
      "Brochure site for a local auto detailing business — built with Next.js and Sanity.io CMS for fast performance and easy content management.",
    details: [
      "Next.js application development",
      "Sanity.io CMS integration",
      "Performance and SEO optimization",
      "Responsive UI and component-based architecture",
    ],
  },
  {
    name: "Zoo Printables AI",
    slug: "zoo-printables-ai-seo-aeo-geo",
    url: "https://www.zooprintablesai.com/",
    platform: "Custom Next.js",
    logo: "/images/work/zooprintablesai-logo.png",
    screenshot: "/images/work/zooprintablesai-screenshot.png",
    summary:
      "Built a free wildlife education platform from the ground up with SEO, AEO, and GEO architecture baked in — clean crawlable URLs, fact-verified content structured for direct AI-answer extraction, and explicit crawler access for GPTBot, ClaudeBot, and PerplexityBot.",
    details: [
      "Next.js build with 30+ fact-verified animal landing pages",
      "AEO content structuring for direct-answer extraction",
      "GEO: explicit AI crawler permissions and a dynamic /llms.txt content index",
      "Sanity.io CMS integration for the blog",
    ],
  },
  {
    name: "The Shortening Shuttle",
    slug: "ecommerce-website-redesign-increase-aov",
    platform: "Shopify",
    logo: "/images/work/shortening-shuttle-logo.png",
    screenshot: "/images/work/shortening-shuttle-screenshot.png",
    summary:
      "Built a custom Shopify storefront for a specialty food brand using Liquid templating and Tailwind CSS, featuring a dynamic oil savings calculator to drive customer engagement and conversions.",
    details: [
      "Custom Shopify theme development with Liquid",
      "Tailwind CSS styling and responsive layout",
      "Interactive oil savings calculator built in JavaScript",
      "Product page and collection template customization",
      "Brand-aligned UI with performance optimization",
    ],
  },
  {
    name: "Blum Media Group",
    slug: "blum-media-group-nextjs-website",
    url: "https://www.blummediagroup.com/",
    platform: "Custom Next.js",
    logo: "/images/work/blum-logo.png",
    screenshot: "/images/work/blum-screenshot.png",
    summary:
      "Designed and developed a modern, high-performance marketing website using Next.js and Vercel for fast load times, scalability, and streamlined content delivery.",
    details: [
      "Next.js application development",
      "Vercel hosting and deployment pipeline",
      "Performance and SEO optimization",
      "Responsive UI and component-based architecture",
    ],
  },
  {
    name: "Mona Dermatology",
    slug: "mona-dermatology-wordpress-woocommerce",
    url: "https://www.monadermatology.com/",
    platform: "WordPress",
    logo: "/images/work/mona-logo.png",
    screenshot: "/images/work/mona-screenshot.png",
    summary:
      "Ongoing WordPress engineering and WooCommerce support to maintain a reliable, high-performing patient and product experience.",
    details: [
      "WordPress maintenance and feature development",
      "WooCommerce configuration and support",
      "Performance, security, and reliability improvements",
    ],
  },
  {
    name: "Buzzworthy",
    slug: "buzzworthy-seven-hills-news-site",
    url: "https://www.7hills.org/buzzworthy/",
    platform: "WordPress",
    logo: "/images/work/buzzworthy-logo.png",
    screenshot: "/images/work/buzzworthy-screenshot.png",
    summary:
      "Designed and developed Buzzworthy, the standalone news and storytelling site for Seven Hills School — showcasing student achievements, faculty insights, and school events.",
    details: [
      "Custom WordPress templates for news articles and editorial content",
      "Responsive, mobile-first layout for accessible reading across all devices",
      "Optimized performance and usability to highlight ongoing student achievements",
    ],
  },
  {
    name: "Frisch's Big Boy",
    slug: "frischs-big-boy-wordpress-platform",
    url: "https://www.frischs.com/",
    platform: "WordPress",
    logo: "/images/work/frischs-logo.png",
    screenshot: "/images/work/frischs-screenshot.jpg",
    summary:
      "Modernization and long-term support of a multi-location restaurant platform with legacy constraints and ongoing operational needs.",
    details: [
      "Custom WordPress development",
      "Location & content management systems",
      "Performance and reliability improvements",
      "Ongoing platform support",
    ],
  },
  {
    name: "Enduir Cybersecurity",
    slug: "enduir-cybersecurity-engineering",
    platform: "Drupal",
    logo: "/images/work/enduir-logo.png",
    screenshot: "/images/work/enduir-screenshot.jpg",
    summary:
      "Engineering support for a cybersecurity firm requiring reliability, scalability, and clean integration between systems.",
    details: [
      "Drupal 11 development",
      "Performance optimization",
      "Technical leadership and execution",
    ],
  },
  {
    name: "Melink Solar",
    slug: "melink-solar-calculator-plugin",
    url: "https://www.melinksolar.com/solar-calculator/",
    platform: "WordPress",
    logo: "/images/work/melink-logo.png",
    screenshot: "/images/work/melink-screenshot.jpg",
    summary:
      "Custom plugin and API integration work for a solar energy platform focused on reliability and technical precision.",
    details: [
      "Custom WordPress Plugin",
      "API Integration",
      "Technical leadership and execution",
    ],
  },
];
