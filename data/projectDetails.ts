// Full detail-page content for portfolio projects, keyed by slug.
// /work/[slug] renders this when the project has no published Sanity
// page; a published Sanity caseStudy with the same slug takes precedence.
// Card-level fields (name, platform, live URL, card summary) live in projects.ts.

export type DetailImage = { src: string; alt: string; caption?: string };
export type DetailMetric = { value: string; label: string; note?: string };
export type DetailSection = {
  heading: string;
  level?: 2 | 3;
  paragraphs: string[];
};

export type ProjectDetail = {
  slug: string;
  title: string;
  industry: string;
  tagline: string;
  excerpt: string;
  seoTitle?: string;
  metaDescription?: string;
  main: DetailImage;
  before?: DetailImage;
  gallery: DetailImage[];
  details: string[];
  /** Build facts, shown once under "At a Glance". */
  metrics: DetailMetric[];
  /** Measured outcomes (e.g. verified in Google Analytics). Drive the hero chips and "The Results". */
  results?: DetailMetric[];
  body: DetailSection[];
};

export const projectDetails: ProjectDetail[] = [
  {
    slug: "global-environmental-products-wordpress-rebuild",
    title:
      "Rebuilding an Industrial Absorbents Supplier's Website on WordPress",
    industry: "Manufacturing",
    tagline:
      'The old site listed products. The new one walks an industrial buyer from "what do I need" to a quote request, and was built so GEP\'s team can run it without a developer.',
    excerpt:
      "A 2011-era site replaced with a custom WordPress block theme: a searchable product catalog with spec tables, an add-to-quote workflow, and 57 legacy URLs redirected so existing rankings carried over.",
    seoTitle: "GEP WordPress Rebuild | Industrial Supplier Project",
    metaDescription:
      "How a 2011-era industrial absorbents site became a custom WordPress catalog with an add-to-quote workflow, 57 SEO-safe redirects and Product schema.",
    main: {
      src: "/images/work/gep-screenshot.jpg",
      alt: "The new gepltd.com homepage: industrial absorbents and spill kits, supplied worldwide",
    },
    before: {
      src: "/images/work/projects/gep-before-home.jpg",
      alt: "The old gepltd.com homepage from 2011, with a stock globe banner and a long sidebar product list",
    },
    gallery: [
      {
        src: "/images/work/projects/gep-products.jpg",
        alt: "GEP products overview page",
        caption:
          "Product catalog: eight product families, each with part numbers and case quantities",
      },
      {
        src: "/images/work/projects/gep-product-detail.jpg",
        alt: "Oil Absorbent Rolls product page with spec table and Add to quote button",
        caption:
          'Product page: spec table, Product schema and an "Add to quote" button',
      },
      {
        src: "/images/work/projects/gep-booms-socks.jpg",
        alt: "Absorbent booms and socks category page",
        caption: "Category pages answer the buyer's sizing questions up front",
      },
      {
        src: "/images/work/projects/gep-spill-kits.jpg",
        alt: "Spill kits page",
        caption:
          "Spill kits, from truck kits to 95-gallon overpacks, with a custom-kit path",
      },
      {
        src: "/images/work/projects/gep-request-a-quote.jpg",
        alt: "Request a quote page with form and contact details",
        caption: "Quote form that pulls in the visitor's quote list",
      },
      {
        src: "/images/work/projects/gep-recycling.jpg",
        alt: "Waste-to-energy recycling program page",
        caption:
          "Waste-to-energy recycling program, a differentiator the old site buried",
      },
    ],
    details: [
      "Custom WordPress block theme and 15 custom Gutenberg blocks, with no page builder and no ACF",
      "Product catalog of 48 products with spec tables, search and Product schema",
      "Products stored the way WooCommerce stores them, so online ordering can be switched on later with no migration",
      '"Add to quote" list that carries products and quantities into the Contact Form 7 quote request',
      "57 legacy URLs mapped and 301-redirected to protect existing search rankings",
      "GA4 / GTM lead events and Microsoft Clarity behind Google Consent Mode v2",
      "LocalBusiness, FAQPage and Product schema, plus an auto-generated llms.txt for AI answer engines",
      "Business details managed in one settings screen that feeds the header, footer, schema and llms.txt",
    ],
    metrics: [
      {
        value: "57",
        label: "Legacy URLs Redirected",
        note: "301s from the old sitemap",
      },
      {
        value: "48",
        label: "Products With Spec Tables",
        note: "Across 8 families",
      },
      {
        value: "15",
        label: "Custom Gutenberg Blocks",
        note: "No page builder",
      },
    ],
    body: [
      {
        heading: "The Problem",
        paragraphs: [
          'Global Environmental Products converts and supplies industrial absorbents, spill kits and containment products from Middletown, Ohio. Their website was from 2011 and looked it: a stock globe banner, a homepage headed "Welcome to GEPltd\'s Main Website", an outdated facility address, and a sidebar that listed every product in one long tree.',
          'There was no clear way to ask for pricing. A buyer who knew what they needed had to read a phone number off the page, and one who didn\'t had nothing to help them choose. The footer even carried a "sponsored by" link to an unrelated business, a leftover from an old SEO arrangement.',
        ],
      },
      {
        heading: "What We Did",
        paragraphs: [],
      },
      {
        heading: "A catalog built around how buyers spec products",
        level: 3,
        paragraphs: [
          "Every product now has its own page with a spec table, part numbers and case quantities, grouped into eight families with filtering and search. Products are stored the way WooCommerce stores them, so if GEP ever wants online ordering it's a plugin activation, not a migration.",
        ],
      },
      {
        heading: "A quote workflow instead of a phone number",
        level: 3,
        paragraphs: [
          'Buyers can add products to a quote list as they browse. The quote form shows the list with quantities and sends it with the request, so GEP\'s team gets a complete, actionable inquiry instead of a vague one. "Get Bulk Pricing" and a click-to-call number are on every page.',
        ],
      },
      {
        heading: "A theme the client can actually run",
        level: 3,
        paragraphs: [
          "The site is a custom block theme with 15 purpose-built Gutenberg blocks (hero, product grid, spec table, FAQ, quote form, team and more), with no page builder and no ACF. Business details such as address, phone and hours live in one settings screen and feed the header, footer and structured data, so they stay consistent with the Google Business Profile.",
        ],
      },
      {
        heading: "Protecting what the old site had earned",
        level: 3,
        paragraphs: [
          "Every URL in the old site's sitemap was mapped to its new home, and 57 of them were 301-redirected so existing search rankings and inbound links carried over to the new site.",
        ],
      },
      {
        heading: "Built to be found by search engines and AI",
        level: 3,
        paragraphs: [
          "The theme outputs LocalBusiness schema on every page, FAQPage schema from FAQ blocks, and Product / ItemList schema from the catalog. A generated llms.txt indexes live pages and products for AI answer engines.",
        ],
      },
      {
        heading: "Measurement from day one, with consent",
        level: 3,
        paragraphs: [
          "Quote submissions, phone clicks, email clicks and quote CTA clicks fire as GA4 events through GTM. Google Consent Mode v2 keeps everything off until the visitor opts in, and Microsoft Clarity loads only after analytics consent.",
        ],
      },
      {
        heading: "The Result",
        paragraphs: [
          "GEP went from a 15-year-old brochure to a modern catalog that leads buyers toward a quote, is ready for ecommerce when they are, and measures every lead it generates.",
        ],
      },
    ],
  },
  {
    slug: "city-view-tavern-wordpress-block-theme",
    title:
      "A Custom Block Theme for a Mount Adams Tavern With the Best View in Cincinnati",
    industry: "Hospitality",
    tagline:
      "A neighborhood bar doesn't need a complicated website. It needs the view, the hours, the menu and directions in one tap, and a theme the owners can update themselves.",
    excerpt:
      "A custom full-site-editing WordPress theme for a Mount Adams bar pouring drinks since 1875, built around the skyline view and engineered to win local search for hours, menu, and directions.",
    main: {
      src: "/images/work/projects/cityview-home.jpg",
      alt: "City View Tavern homepage with the Cincinnati skyline view headline",
    },
    gallery: [
      {
        src: "/images/work/projects/cityview-page1.jpg",
        alt: "City View Tavern menu page",
        caption:
          "Menu page with a downloadable PDF menu and happy hour details",
      },
      {
        src: "/images/work/projects/cityview-page2.jpg",
        alt: "City View Tavern about page",
        caption: "Our Story: 150 years in the same Mount Adams location",
      },
    ],
    details: [
      "Custom full-site-editing block theme built from scratch with Tailwind CSS",
      "16 custom blocks: hero, menu highlights, happy hours, hours & location, private events, gallery, reviews and more",
      "Live skyline webcam block embedded from the patio view",
      "Reviews post type feeding a Yelp, Google and TripAdvisor review hub",
      "Local SEO with BarOrPub schema covering hours, geo, menu and reviews",
      "Tavern settings screen for hours and contact details, plus Google Tag Manager",
    ],
    metrics: [
      {
        value: "16",
        label: "Custom Blocks",
        note: "Full site editing",
      },
    ],
    body: [
      {
        heading: "The Brief",
        paragraphs: [
          "City View Tavern has poured drinks on Mount Adams since 1875, and its patio has one of the best views of downtown Cincinnati. The website needed to sell that view and answer the questions people actually search for: are you open, what's on the menu, and how do I get there.",
        ],
      },
      {
        heading: "What We Built",
        paragraphs: [
          "A custom block theme built for full site editing, with 16 purpose-built blocks covering the hero, menu highlights, happy hours, hours and location, private events, the photo gallery and reviews. A live webcam block streams the skyline from the patio, so the site shows the view instead of describing it.",
          "Hours, address and one-tap directions are persistent on every page, and a single tavern settings screen keeps them consistent everywhere they appear, including the structured data.",
          "Reviews live in their own post type and feed a review hub that links out to Yelp, Google and TripAdvisor.",
        ],
      },
      {
        heading: "Built for Local Search",
        paragraphs: [
          "The theme outputs BarOrPub schema with hours, geo coordinates, menu and reviews, the details that drive map-pack and AI-answer results for a local bar.",
        ],
      },
    ],
  },
  {
    slug: "national-management-association-wordpress-platform",
    title: "Rebuilding the Web Platform for a 100-Year-Old Leadership Network",
    industry: "Associations",
    tagline:
      "An association site has to serve members, chapters, conference attendees and prospects at once. This one does it from a single block library the NMA team can assemble pages from.",
    excerpt:
      "A custom WordPress theme and a library of 46 Gutenberg blocks for a leadership development network with 7,700+ members and 29 chapters, wired into GrowthZone events and the MindEdge course catalog.",
    main: {
      src: "/images/work/projects/nma-home.jpg",
      alt: "National Management Association homepage: The Human Skills Network",
    },
    gallery: [
      {
        src: "/images/work/projects/nma-page1.jpg",
        alt: "NMA-U professional development page",
        caption:
          "NMA-U professional development, with the MindEdge on-demand catalog",
      },
      {
        src: "/images/work/projects/nma-page2.jpg",
        alt: "Explore NMA Resources page",
        caption: "Resources hub: member portal, blog and chapter finder",
      },
    ],
    details: [
      "Custom WordPress theme with Tailwind CSS and 46 custom Gutenberg blocks",
      "GrowthZone API integration for events and chapters, with registration and add-to-calendar links",
      "Custom course plugin surfacing the MindEdge on-demand catalog",
      "Chapter directory and interactive chapter map",
      "Annual conference microsite: schedule, venue, live social feed, auction and attendee reminders",
      "Cookie consent, Calendly embeds, and redirects consolidating legacy pages",
    ],
    metrics: [
      {
        value: "46",
        label: "Custom Gutenberg Blocks",
        note: "One shared library",
      },
      {
        value: "7,700+",
        label: "Members Served",
        note: "Across the network",
      },
      {
        value: "29",
        label: "Chapters",
        note: "Directory + map",
      },
    ],
    body: [
      {
        heading: "The Brief",
        paragraphs: [
          "The National Management Association has developed leaders since 1925. Its site has to serve several audiences at once: members looking for courses and events, chapters, conference attendees, and organizations evaluating membership.",
        ],
      },
      {
        heading: "What We Built",
        paragraphs: [
          "A custom WordPress theme with a library of 46 dynamic Gutenberg blocks, from heroes and membership comparisons to chapter directories and testimonial spotlights. The NMA team builds pages by combining blocks in the editor rather than requesting templates.",
          "Events and chapters come straight from the association's GrowthZone system through its API, with registration links and add-to-calendar on every event. A custom course plugin brings the MindEdge on-demand catalog into the site under NMA-U.",
          "The annual conference gets its own microsite inside the theme: hero, schedule tabs, venue and destination, a live social feed, charity auction, and attendee reminders.",
        ],
      },
      {
        heading: "Beyond the Website",
        paragraphs: [
          "The same conference schedule also powers NMA Connect, a companion mobile app for attendees built with Expo and React Native. It reads the live schedule from nma1.org and lets attendees swap contact cards by QR code, with no login and nothing personal leaving the phone.",
        ],
      },
    ],
  },
  {
    slug: "millennosphere-wordpress-editorial-theme",
    title: "An Editorial Block Theme for a Millennial Lifestyle Publication",
    industry: "Media & Publishing",
    tagline:
      "A publication with a voice this strong couldn't live in a stock magazine theme. Every hub, grid and ticker was designed around how the editors actually publish.",
    excerpt:
      "A custom full-site-editing WordPress theme and custom Gutenberg blocks for a millennial culture and lifestyle publication, with editorial layouts designed for a distinct voice.",
    main: {
      src: "/images/work/projects/millennosphere-home.jpg",
      alt: "Millennosphere homepage: This is The Bad Place, and we're just kind of dealing with it",
    },
    gallery: [
      {
        src: "/images/work/projects/millennosphere-page1.jpg",
        alt: "Millennosphere content hub page",
        caption:
          "Content hubs with their own color, intro and sub-topic navigation",
      },
      {
        src: "/images/work/projects/millennosphere-page2.jpg",
        alt: "Money & Milestones hub page",
        caption: "Sub-hub layout with featured stories and most-popular rail",
      },
    ],
    details: [
      "Full-site-editing block theme built on core Gutenberg blocks",
      "10 custom blocks: home hero, mosaic, browse grid, hub CTA, Top 8, most popular, post list, vitals ticker and newsletter signup",
      "Category-driven content architecture with hubs and sub-hubs",
      "Built-in view counter powering the most-popular rail",
      "Ad slot patterns for header, sidebar, in-feed and footer placements",
      "Relevanssi-powered site search",
    ],
    metrics: [
      {
        value: "10",
        label: "Custom Blocks",
        note: "Editorial layouts",
      },
      {
        value: "15",
        label: "Block Patterns",
        note: "Reusable sections",
      },
    ],
    body: [
      {
        heading: "The Brief",
        paragraphs: [
          "Millennosphere is a field guide to millennial life: training, money, and the friendships that keep it all standing. The voice is the product, so the design had to carry it rather than flatten it into a generic magazine template.",
        ],
      },
      {
        heading: "What We Built",
        paragraphs: [
          "A full-site-editing block theme built on core Gutenberg blocks, extended with 10 custom blocks for the publication's signature layouts: a home hero, story mosaic, browse grid, hub calls to action, a Top 8 list, a vitals ticker, and newsletter signup.",
          "Content is organized into themed hubs and sub-hubs, each with its own color and navigation. A built-in view counter drives the most-popular rail, and ad slot patterns give the team ready placements for header, sidebar, in-feed and footer units.",
          "Fifteen block patterns let editors drop in recurring sections like quote breaks, featured grids and announcement bars without touching code.",
        ],
      },
    ],
  },
  {
    slug: "globe-iron-roofing-wordpress-theme",
    title:
      "A Performance-First WordPress Theme for a Regional Roofing Contractor",
    industry: "Construction",
    tagline:
      "Enterprise-grade web presence for a regional roofing contractor, without the enterprise overhead: hand-written blocks, schema on every page type, and one JS bundle.",
    excerpt:
      "A custom Gutenberg-first WordPress theme with 21 hand-built blocks, engineered for technical SEO, AEO and GEO discoverability alongside top-tier page speed.",
    main: {
      src: "/images/work/projects/globeiron-home.jpg",
      alt: "Globe Iron Roofing homepage: Time-Tested Technicians",
    },
    gallery: [
      {
        src: "/images/work/projects/globeiron-page1.jpg",
        alt: "Globe Iron Roofing commercial roofing page",
        caption: "Commercial service hub with split-collage hero and quote CTA",
      },
      {
        src: "/images/work/projects/globeiron-page2.jpg",
        alt: "Single ply roofing service page",
        caption: "Service pages structured for local and AI search",
      },
    ],
    details: [
      "Custom Gutenberg-first theme with 21 ACF blocks and server-side PHP renders",
      "Hand-written JSON-LD: Organization, RoofingContractor, LocalBusiness, Service, Review and BlogPosting",
      "Projects post type with project header, details and outcome blocks",
      "GSAP animations, Splide sliders and a deferred Google Maps embed",
      "Single JS bundle and single CSS bundle, with no render-blocking third-party scripts",
      "Every section editable through ACF fields, with no code needed for routine updates",
    ],
    metrics: [
      {
        value: "21",
        label: "Custom Blocks",
        note: "Hand-built, no page builder",
      },
      {
        value: "6",
        label: "Schema Types",
        note: "On every page type",
      },
      {
        value: "3",
        label: "States Served",
        note: "OH · IN · KY",
      },
    ],
    body: [
      {
        heading: "The Brief",
        paragraphs: [
          "Globe Iron Roofing works across Ohio, Indiana and Kentucky in commercial roofing, residential and historic restoration. The site needed to match that positioning (confident, craft-focused, technically precise) and compete for local search across three states.",
        ],
      },
      {
        heading: "What We Built",
        paragraphs: [
          "A fully custom Gutenberg-first theme, designed by BLDG and developed by Black Lab. All 21 blocks are registered through ACF with JSON-synced field groups and server-side renders, so every hero, service grid, process section, team grid and review band is editable without code.",
          "A Projects post type showcases completed work with dedicated header, details and outcome blocks. Animations run on GSAP and sliders on Splide, all shipped in a single JS bundle and a single CSS bundle, with Google Maps deferred so nothing blocks the first render.",
        ],
      },
      {
        heading: "Built to Be Found",
        paragraphs: [
          "Structured data is hand-written for every page type: Organization, RoofingContractor, LocalBusiness, Service, Review and BlogPosting. It's designed specifically for local pack rankings and AI-generated answer eligibility, with canonical and Open Graph handling built into the theme.",
        ],
      },
    ],
  },
  {
    slug: "blum-media-group-nextjs-website",
    title: "A High-Performance Next.js Site for a Search Marketing Agency",
    industry: "Marketing",
    tagline:
      "An agency that sells performance needs a site that proves it. This one doubles as the agency's proof point for how fast, conversion-focused sites are built.",
    excerpt:
      "A modern marketing website for a Cincinnati search engine marketing agency, built on Next.js and Vercel for fast load times, scalability and streamlined content delivery.",
    main: {
      src: "/images/work/projects/blum-home.jpg",
      alt: "Blum Media Group homepage: Search Engine Marketing Built for Real Growth",
    },
    gallery: [
      {
        src: "/images/work/projects/blum-page1.jpg",
        alt: "Blum Media Group search engine marketing page",
        caption: "Search engine marketing service page",
      },
      {
        src: "/images/work/projects/blum-page2.jpg",
        alt: "About Blum Media Group page",
        caption: "About page telling the founder's story",
      },
    ],
    details: [
      "Next.js App Router build in TypeScript",
      "Tailwind CSS styling with Framer Motion animation",
      "Optimized, responsive images with Next/Image",
      "Analytics loaded through @next/third-parties",
      "Vercel hosting and deployment pipeline",
      "Performance and SEO optimization from the start",
    ],
    metrics: [],
    body: [
      {
        heading: "The Brief",
        paragraphs: [
          "Blum Media Group is a Cincinnati-based agency focused on search engine marketing, paid media and conversion strategy. Its own website had to reflect what it sells: data-driven decisions, clear outcomes, and fast, conversion-focused experiences.",
        ],
      },
      {
        heading: "What We Built",
        paragraphs: [
          "A marketing site on the Next.js App Router, written in TypeScript and styled with Tailwind CSS. Motion comes from Framer Motion, images are served through Next/Image, and analytics load through @next/third-parties so tracking doesn't slow the page.",
          "The site deploys on Vercel with preview builds, so new pages and copy changes can be reviewed before they go live.",
        ],
      },
    ],
  },
  {
    slug: "mona-dermatology-wordpress-woocommerce",
    title:
      "Ongoing WordPress and WooCommerce Engineering for a Dermatology Practice",
    industry: "Healthcare",
    tagline:
      "A practice website that books appointments, sells skincare and runs an interactive consult tool has a lot of moving parts. The job is keeping all of them reliable.",
    excerpt:
      "Ongoing WordPress engineering and WooCommerce support for a Cincinnati dermatology practice, keeping the patient experience, online store and Instant Consult tool reliable and fast.",
    main: {
      src: "/images/work/projects/mona-home.jpg",
      alt: "Mona Dermatology homepage: Guided by science, inspired by you",
    },
    gallery: [
      {
        src: "/images/work/projects/mona-page2.jpg",
        alt: "The Mona Experience page",
        caption: "Patient-facing pages that build trust before the first visit",
      },
    ],
    details: [
      "Custom Mona theme with WooCommerce product and email templates",
      "Instant Consult tool with emailed and PDF-generated results",
      "Custom post types for treatments, concerns and team members",
      "Gravity Forms with Constant Contact integration",
      "WooCommerce subscriptions, reminders and checkout customization",
      "Performance, security and reliability improvements",
    ],
    metrics: [],
    body: [
      {
        heading: "The Engagement",
        paragraphs: [
          "Mona Dermatology's site does several jobs at once: it introduces the practice, books appointments, sells skincare through WooCommerce, and runs Instant Consult, an interactive tool that recommends treatments and products. Black Lab provides ongoing engineering to keep all of it reliable.",
        ],
      },
      {
        heading: "What We Maintain and Build",
        paragraphs: [
          "The custom Mona theme carries WooCommerce product and email templates, custom post types for treatments, concerns and team members, and dedicated landing page templates.",
          "Instant Consult walks a patient from their concerns to recommended treatments and products, then emails the results or generates them as a PDF. Lead capture runs through Gravity Forms connected to Constant Contact, and the store handles subscriptions with automated reminders.",
          "Ongoing work covers performance, security, plugin and WooCommerce updates, and new features as the practice grows.",
        ],
      },
    ],
  },
  {
    slug: "frischs-big-boy-wordpress-platform",
    title: "Modernizing and Supporting a Multi-Location Restaurant Platform",
    industry: "Restaurants",
    tagline:
      "A regional restaurant brand since 1947 needs a website that keeps up with locations, menus and promotions, on a platform with years of history behind it.",
    excerpt:
      "Modernization and long-term support of a multi-location restaurant platform with legacy constraints and ongoing operational needs.",
    main: {
      src: "/images/work/frischs-screenshot.jpg",
      alt: "Frisch's Big Boy website",
    },
    gallery: [],
    details: [
      "Custom WordPress development",
      "Location and content management systems",
      "Performance and reliability improvements",
      "Ongoing platform support",
    ],
    metrics: [],
    body: [
      {
        heading: "The Engagement",
        paragraphs: [
          "Frisch's Big Boy has served the region since 1947. Its website supports a multi-location restaurant operation, so it has to keep locations, menus and promotions accurate for guests across the region, every day.",
          "Like most long-running brand sites, it carries years of history: legacy code, content and integrations that can't simply be thrown away. Black Lab provides modernization and long-term support so the platform keeps improving without disrupting the business that depends on it.",
        ],
      },
      {
        heading: "Modernizing Without a Rebuild",
        paragraphs: [
          "The work is custom WordPress development done inside real legacy constraints: modernizing the parts of the platform that matter most while keeping everything else stable and running.",
          "Location and content management systems give the team a reliable way to keep restaurant information and site content current across every location.",
        ],
      },
      {
        heading: "Performance and Ongoing Support",
        paragraphs: [
          "Performance and reliability improvements keep the site fast and dependable for guests checking hours, menus and locations on their phones.",
          "Ongoing support means the platform has a developer who already knows it, handling updates, fixes and new requests as the brand's operational needs change.",
        ],
      },
    ],
  },
  {
    slug: "enduir-cybersecurity-engineering",
    title: "Engineering Support for a Cybersecurity Firm",
    industry: "Technology",
    tagline:
      "A security firm's website has to look as reliable as the service it sells, and run that way too.",
    excerpt:
      "Engineering support for a cybersecurity firm requiring reliability, scalability, and clean integration between systems.",
    main: {
      src: "/images/work/enduir-screenshot.jpg",
      alt: "Enduir cybersecurity website",
    },
    gallery: [],
    details: [
      "Drupal 11 development",
      "Performance optimization",
      "Technical leadership and execution",
    ],
    metrics: [],
    body: [
      {
        heading: "The Engagement",
        paragraphs: [
          "Enduir helps organizations build security into their core operations, from the boardroom to the backroom, so they can navigate crises and keep running. A firm selling resilience needs a web platform that demonstrates it.",
          "Black Lab provided engineering support focused on three things: reliability, scalability, and clean integration between systems.",
        ],
      },
      {
        heading: "Drupal 11 Development",
        paragraphs: [
          "The platform runs on Drupal 11. Development work covered building and maintaining the site on a current, supported foundation, keeping it secure and maintainable for the long term.",
        ],
      },
      {
        heading: "Performance and Technical Leadership",
        paragraphs: [
          "Performance optimization kept the site fast and dependable under real conditions, not just in a staging environment.",
          "Beyond hands-on development, Black Lab provided technical leadership and execution: making architecture decisions, keeping systems integrated cleanly, and seeing work through from plan to production.",
        ],
      },
    ],
  },
  {
    slug: "buzzworthy-seven-hills-news-site",
    title: "Buzzworthy: A Standalone News Site for Seven Hills School",
    industry: "Education",
    tagline:
      "A school produces a story a day. Buzzworthy gives those stories a home that's easy to publish to and easy to read on any device.",
    excerpt:
      "The standalone news and storytelling site for Seven Hills School, showcasing student achievements, faculty insights and school events across every division.",
    main: {
      src: "/images/work/projects/buzzworthy-home.jpg",
      alt: "Buzzworthy homepage with featured Seven Hills stories",
    },
    gallery: [
      {
        src: "/images/work/projects/buzzworthy-page1.jpg",
        alt: "Buzzworthy Athletics category page",
        caption:
          "Category archives for divisions, athletics, arts and messages from the heads of school",
      },
    ],
    details: [
      "Custom WordPress templates for news articles and editorial content",
      "Navigation by division, athletics, arts and messages from the heads of school",
      "Category and tag archives so families can follow what matters to them",
      "Responsive, mobile-first layout for reading on any device",
      "Optimized performance and usability for a steady publishing schedule",
    ],
    metrics: [],
    body: [
      {
        heading: "The Brief",
        paragraphs: [
          "Seven Hills School wanted a dedicated home for its news: student achievements, faculty insights and school events, published often and read mostly on phones.",
        ],
      },
      {
        heading: "What We Built",
        paragraphs: [
          "Buzzworthy, a standalone news and storytelling site with custom WordPress templates for articles and editorial content. Stories are organized by division, athletics, arts and messages from the heads of school, with category and tag archives so families can follow the parts of school life that matter to them.",
          "The layout is mobile-first and tuned for fast loading, so the communications team can publish frequently and every story reads well on any device.",
        ],
      },
    ],
  },
  {
    slug: "rev-and-rinse-nextjs-sanity",
    title: "A Next.js and Sanity Site for a Local Auto Detailing Business",
    industry: "Automotive",
    tagline:
      "Detailing sells on before-and-after. The site is built so the owner can add new transformations from a phone, without a developer.",
    excerpt:
      "A brochure site for a local auto detailing business, built with Next.js and Sanity CMS for fast performance and easy content management.",
    main: {
      src: "/images/work/revandrinse-screenshot.png",
      alt: "Rev & Rinse Auto Detailing website shown on desktop and mobile",
    },
    gallery: [],
    details: [
      "Next.js application development",
      "Embedded Sanity Studio for content management",
      "Before-and-after pair content type for detailing transformations",
      "Anime.js motion for a high-energy brand",
      "Sitemap and robots generated by the app",
      "Responsive, component-based UI",
    ],
    metrics: [],
    body: [
      {
        heading: "The Brief",
        paragraphs: [
          "Rev & Rinse needed a brochure site that looked as sharp as a fresh detail and that the owner could keep current without help.",
        ],
      },
      {
        heading: "What We Built",
        paragraphs: [
          "A Next.js site with Sanity Studio embedded right in the app. A dedicated before-and-after content type lets the owner add new transformations as pairs, and the site presents them side by side.",
          "Motion built with Anime.js gives the brand its energy, and the app generates its own sitemap and robots rules so new pages are discoverable as soon as they're published.",
        ],
      },
    ],
  },
  {
    slug: "bishopric-industries-shop-floor-kiosk",
    title: "A Touchscreen Shop Floor Kiosk for an Industrial Fabricator",
    industry: "Manufacturing",
    tagline:
      "Shop floor crews needed the right drawing in seconds, not a hunt through shared folders. The kiosk gets them there in five taps and shows what changed since their last shift.",
    excerpt:
      "A custom Next.js touchscreen kiosk for Bishopric Industries' Cincinnati and Natchez shop floors that puts fabrication drawings, weld procedures and inspection documents a few taps away, with new documents flagged.",
    seoTitle: "Shop Floor Kiosk for Bishopric Industries",
    metaDescription:
      "How a custom Next.js touchscreen kiosk gives Bishopric Industries' shop floors fast access to drawings, weld procedures and inspection documents from Egnyte.",
    main: {
      src: "/images/work/projects/bishopric-home.jpg",
      alt: "Bishopric Industries Shop Floor Kiosk home screen with Cincinnati and Natchez locations",
    },
    gallery: [
      {
        src: "/images/work/projects/bishopric-projects.jpg",
        alt: "Kiosk project selection screen with a project number filter",
        caption:
          "Project selection: large touch targets and a filter by project number",
      },
      {
        src: "/images/work/projects/bishopric-categories.jpg",
        alt: "Kiosk project screen with eight document category tiles",
        caption: "Each project opens to the same eight document categories",
      },
      {
        src: "/images/work/projects/bishopric-drawings.jpg",
        alt: "Kiosk drawing list with recently added documents outlined in red",
        caption:
          "Recently added drawings are outlined in red, with the date they were added",
      },
    ],
    details: [
      "Touchscreen-first Next.js app with a five-screen flow: location, project, category, drawing, viewer",
      "Locations discovered automatically from the Egnyte folder structure, so adding a site needs no code change",
      "Server-side Egnyte integration: the service account and tokens never reach the browser",
      "Recently added documents flagged on every screen, tracked by an hourly sweep of Egnyte's audit API",
      "In-browser PDF viewer with pinch-zoom, pan, page navigation and fullscreen",
      "Page-one thumbnails rendered once on the server and cached, so kiosks don't redo the work",
      "Inactivity reset, offline and rate-limit screens, and graceful handling of missing documents",
      "Admin dashboard for maintenance mode, cache clearing, on-demand sweeps and error logs",
    ],
    metrics: [
      {
        value: "5",
        label: "Taps to Any Drawing",
        note: "Location → viewer",
      },
      {
        value: "2",
        label: "Shop Floor Locations",
        note: "Cincinnati & Natchez",
      },
      {
        value: "8",
        label: "Document Categories",
        note: "Per project",
      },
      {
        value: "1",
        label: "Egnyte Call per Document",
        note: "Request budget by design",
      },
    ],
    body: [
      {
        heading: "The Brief",
        paragraphs: [
          "Bishopric Industries keeps its fabrication drawings, weld procedures, specifications and inspection documents in Egnyte. On the shop floor, finding the current drawing for a job meant navigating folder trees on a shared computer — slow, error-prone, and easy to land on an outdated revision.",
          'The goal: a touchscreen kiosk at each location that gets a crew member from "which job?" to the right document in a few taps, and makes it obvious when something has changed.',
        ],
      },
      {
        heading: "What We Built",
        paragraphs: [
          "A custom Next.js application designed for a touchscreen first. The flow is five screens: pick a location, pick a project number, pick one of eight standard document categories, pick a drawing, and view it. Every control is a large touch target, and the kiosk returns itself to the home screen after a few minutes without input.",
          "Locations are read straight from the Egnyte folder structure, so adding a new site is a matter of creating its folder, not changing code. Category folders can be empty when a project doesn't have that kind of document, and near-variant folder names are matched automatically.",
        ],
      },
      {
        heading: "Built Around Egnyte",
        level: 3,
        paragraphs: [
          "Every Egnyte call happens on the server. The kiosk authenticates as a dedicated service account, and its credentials and access tokens never reach the browser.",
          'Egnyte meters requests, so the integration is designed around a request budget: a document view is a single call, page-one thumbnails are rendered once on the server and cached, and "recently added" activity comes from an hourly sweep of Egnyte\'s audit API instead of live scans on every screen.',
        ],
      },
      {
        heading: "Showing What Changed",
        level: 3,
        paragraphs: [
          "A document counts as recent when it was uploaded or copied in during the last two business days, so weekends never hide Friday's changes. Recent drawings get a red outline and their date added, and projects and categories show a count of new documents, so crews can see at a glance where something changed.",
        ],
      },
      {
        heading: "Built for the Shop Floor",
        level: 3,
        paragraphs: [
          "Drawings open in an in-browser PDF viewer with pinch-to-zoom, drag-to-pan, page navigation and fullscreen. If Egnyte can't be reached or a request is rate-limited, the kiosk shows a clear message instead of an error page, and a stale link falls back gracefully.",
          "A separate admin dashboard lets the team switch on maintenance mode, clear caches, run an activity sweep on demand and review recent errors — without touching the kiosks themselves.",
        ],
      },
    ],
  },
  {
    slug: "whole30-laravel-shopify-slicktext-sms",
    title: "A Laravel Admin Portal Connecting Shopify Orders to SlickText SMS",
    industry: "Health & Wellness",
    tagline:
      "Every Whole30 SMS purchase on Shopify becomes a subscriber, a daily message sequence and a delivery record, without anyone copying data between systems.",
    excerpt:
      "A custom Laravel admin portal that turns Whole30's Shopify purchases into SlickText SMS subscriptions, with automated setup, daily message sequences, delivery tracking and opt-out handling.",
    seoTitle: "Whole30 Laravel App: Shopify + SlickText SMS",
    metaDescription:
      "How a custom Laravel admin portal connects Whole30's Shopify orders to SlickText SMS: automatic setup, daily messages, delivery tracking and opt-outs.",
    main: {
      src: "/images/work/projects/whole30-app-login.jpg",
      alt: "Whole30 Admin Portal sign-in screen",
    },
    gallery: [
      {
        src: "/images/work/projects/whole30-app-orders.jpg",
        alt: "Whole30 Admin Portal active orders list with SMS status, customer details redacted",
        caption:
          "Active orders: every subscriber currently receiving daily messages, with their program day and status (customer details redacted)",
      },
      {
        src: "/images/work/projects/whole30-app-order-detail.jpg",
        alt: "Whole30 Admin Portal order detail with SlickText and Shopify connections and sent messages, identifiers redacted",
        caption:
          "Order detail: the SlickText and Shopify connections side by side, with every delivered message logged (identifiers redacted)",
      },
    ],
    details: [
      "Shopify order webhooks processed by Laravel in real time",
      "Each buyer set up as a SlickText subscriber automatically",
      "Daily SMS sequences tied to each subscriber's program start date",
      "Program day recalculates automatically when a start date changes",
      "Every delivered message logged and counted per subscriber",
      "Order views for active, completed, refunded and opted-out subscribers",
      "Opt-out handling kept in sync with SMS delivery",
      "Email notifications with configuration and logs, plus admin users and job settings",
    ],
    metrics: [],
    body: [
      {
        heading: "The Brief",
        paragraphs: [
          "Whole30 sells SMS programs through its Shopify store: buy the product, then get a daily text that guides you through the program. Connecting those two systems by hand doesn't scale. Every purchase needs a subscriber in SlickText, the right message sequence, a start date, and a way to see what was actually delivered.",
          "The goal was one place where the operations team can see every SMS order and trust that setup, delivery and opt-outs happen on their own.",
        ],
      },
      {
        heading: "What We Built",
        paragraphs: [
          "A custom Laravel application, the Whole30 Admin Portal, that sits between Shopify and SlickText. When an order comes in, Shopify's webhook hits Laravel, which records the order, sets the buyer up as a SlickText subscriber, and starts their daily message sequence.",
        ],
      },
      {
        heading: "Setup and Notifications",
        level: 3,
        paragraphs: [
          "Each order carries its SlickText connection and its Shopify connection (product, order number and order ID), so the team can trace any subscriber back to the purchase. Messages go out on a daily schedule keyed to the subscriber's start date, and if a start date changes, the program day recalculates automatically.",
          "Email notifications run alongside SMS, with their own configuration screen and logs, so the team can confirm what went out by either channel.",
        ],
      },
      {
        heading: "Tracking and Opt-Outs",
        level: 3,
        paragraphs: [
          "Every message delivered through SlickText is logged against its subscriber, with a running delivered count. Orders are organized into active, completed, refunded and opt-out views, so refunds and STOP replies are visible and handled rather than lost.",
          "An admin area covers administrator accounts, product catalog settings and scheduled job settings, so day-to-day changes don't need a developer.",
        ],
      },
    ],
  },
  {
    slug: "legacy-financial-wordpress-block-theme",
    title: "A Custom Block Theme for a Wealth Management Firm",
    industry: "Financial Services",
    tagline:
      "A wealth management firm needs a site that feels as considered as its advice. This one is built from custom blocks the team can arrange themselves.",
    excerpt:
      "A custom WordPress block theme for Legacy Financial Advisors in Covington, KY, built in the Gutenberg site editor with Tailwind CSS, 18 custom blocks, team profiles and an Insights hub.",
    seoTitle: "Legacy Financial: Custom WordPress Theme",
    metaDescription:
      "How a custom WordPress block theme with 18 custom blocks, team profiles and an Insights hub was built for Legacy Financial Advisors in Covington, KY.",
    main: {
      src: "/images/work/projects/legacy-home.jpg",
      alt: "Legacy Financial Advisors homepage: Your Treasure Is Where Your Heart Is",
    },
    gallery: [
      {
        src: "/images/work/projects/legacy-page1.jpg",
        alt: "Legacy Financial client portals page",
        caption:
          "Client portals page linking clients to their planning and reporting platforms",
      },
      {
        src: "/images/work/projects/legacy-page2.jpg",
        alt: "Legacy Financial get in touch page",
        caption: "Contact page built around scheduling a meeting with the team",
      },
    ],
    details: [
      "Custom Gutenberg block theme built with the site editor and Tailwind CSS",
      "18 custom server-rendered blocks: homepage hero, stats, service pillars, quote carousel, contact scheduler and more",
      "12 block patterns for composing new pages without a developer",
      "Team custom post type with member profiles",
      "Global settings and structured content managed through ACF",
      "Insights articles with a dedicated hero and admin tools",
      "FAQ accordions and category schema for search",
      "Hand-written SCSS components compiled with Tailwind into one stylesheet",
    ],
    metrics: [
      {
        value: "18",
        label: "Custom Blocks",
        note: "Server-rendered",
      },
      {
        value: "12",
        label: "Block Patterns",
        note: "Ready-made layouts",
      },
    ],
    body: [
      {
        heading: "The Brief",
        paragraphs: [
          "Legacy Financial Advisors is a wealth management firm in Covington, Kentucky. Its site needed to feel warm and trustworthy, introduce the team, and make it easy for both prospects and existing clients to get where they're going.",
        ],
      },
      {
        heading: "What We Built",
        paragraphs: [
          "A custom WordPress block theme built in the Gutenberg site editor and styled with Tailwind CSS. Eighteen custom server-rendered blocks cover the homepage hero, stats, service pillars, a quote carousel, team profiles and a contact scheduler, and twelve block patterns let the team compose new pages from proven layouts.",
          "Team members live in their own post type with profiles, and global details are managed through ACF, so updates happen in one place.",
        ],
      },
      {
        heading: "Built for Clients and Search",
        level: 3,
        paragraphs: [
          "A client portals page sends existing clients straight to their financial planning and investment reporting platforms. An Insights section publishes articles with a dedicated hero, and FAQ accordions and category schema help the firm's expertise show up in search.",
        ],
      },
    ],
  },
  {
    slug: "bridge-partners-wordpress-block-theme",
    title: "A Custom Gutenberg Theme for a Tax Strategy Firm",
    industry: "Financial Services",
    tagline:
      "A firm that defends high-net-worth clients from tax inefficiency needs a site with the same precision. Every block in this one was built for its brand.",
    excerpt:
      "A custom full-site-editing WordPress theme for Bridge Partners, built from the brand guidelines with 16 native custom blocks, no plugin dependencies, and schema for search and AI answers.",
    seoTitle: "Bridge Partners: Custom Gutenberg Theme",
    metaDescription:
      "How a custom full-site-editing WordPress theme with 16 native blocks and no plugin dependencies was built from Bridge Partners' brand guidelines.",
    main: {
      src: "/images/work/projects/bridge-home.jpg",
      alt: "Bridge Partners homepage: You Earned It. We Help You Take It Further.",
    },
    gallery: [
      {
        src: "/images/work/projects/bridge-page1.jpg",
        alt: "Bridge Partners about page",
        caption:
          "About page: the firm's positioning in its own editorial typography",
      },
      {
        src: "/images/work/projects/bridge-page2.jpg",
        alt: "Bridge Partners services page",
        caption: "Services page built from the same native blocks",
      },
    ],
    details: [
      "Full-site-editing theme built from the brand guidelines and homepage design",
      "16 native custom blocks: hero, pathways, feature grids, media splits, team members, testimonials and more",
      "No plugin dependencies for blocks or layout",
      "Built-in contact form block and advisor profiles",
      "Organization, FAQPage and Person schema, plus an llms.txt for AI answer engines",
      "SCSS and Tailwind build, minified, with cache-busted assets",
      "Content seeding script to build pages and sample articles consistently",
      "Insights article layout with author bylines and reading time, ready to launch",
    ],
    metrics: [
      {
        value: "16",
        label: "Native Custom Blocks",
        note: "Built for the brand",
      },
      {
        value: "0",
        label: "Plugin Dependencies",
        note: "For blocks and layout",
      },
    ],
    body: [
      {
        heading: "The Brief",
        paragraphs: [
          "Bridge Partners specializes in advanced tax mitigation and wealth strategies for high-net-worth clients. The site had to match a precise, editorial brand and stay fast and maintainable without a stack of plugins.",
        ],
      },
      {
        heading: "What We Built",
        paragraphs: [
          "A custom full-site-editing theme built directly from the Brand Guidelines and homepage design. Sixteen native custom blocks, including the hero, pathways, feature grids, media splits, team members, testimonials and a contact form, give the team a consistent set of on-brand building blocks.",
          "There are no plugin dependencies for blocks or layout. Styles compile from SCSS through Tailwind into minified, cache-busted assets.",
        ],
      },
      {
        heading: "Built to Be Found",
        level: 3,
        paragraphs: [
          "The theme outputs Organization, FAQPage and Person schema and generates an llms.txt for AI answer engines. An Insights article layout with author bylines and reading time is built and ready to switch on when the firm starts publishing.",
        ],
      },
    ],
  },
  {
    slug: "dexafit-cincinnati-squarespace-seo",
    title: "An SEO Overhaul for a Physician-Led Testing Clinic",
    industry: "Healthcare",
    tagline:
      "The clinic offered exactly what people search for (DEXA scans, VO2 max, metabolic testing), but the site wasn't saying it the way search engines read it.",
    excerpt:
      "An SEO overhaul of DexaFit Cincinnati's Squarespace site: rewritten titles, meta descriptions and alt text, per-page structured data, consistent technical updates and clearer booking CTAs.",
    seoTitle: "DexaFit Cincinnati: Squarespace SEO Overhaul",
    metaDescription:
      "How DexaFit Cincinnati's Squarespace site got an SEO overhaul: rewritten titles, meta and alt text, structured data, technical updates and stronger CTAs.",
    main: {
      src: "/images/work/projects/dexafit-home.jpg",
      alt: "DexaFit Cincinnati homepage: Optimize your health with physician-led testing",
    },
    gallery: [
      {
        src: "/images/work/projects/dexafit-dexa.jpg",
        alt: "DexaFit Cincinnati DEXA scan page",
        caption:
          "Service pages lead with the search phrase: DEXA Scan in Cincinnati, OH",
      },
      {
        src: "/images/work/projects/dexafit-doctor.jpg",
        alt: "DexaFit Cincinnati physician page for Dr. David DeMarco, MD",
        caption: "Physician page with clear booking calls to action",
      },
    ],
    details: [
      "Page titles rewritten around each service and Cincinnati, kept under 60 characters",
      "Meta descriptions rewritten for every key page",
      "Descriptive alt text added across the site's images",
      "One keyword-led H1 per page",
      "Per-page structured data: clinic, physician, services, offers, FAQs and breadcrumbs",
      "Clearer booking CTAs across service and physician pages",
      "Split heroes and campaign landing pages",
      "Ongoing technical updates through custom CSS and code injection",
    ],
    metrics: [
      {
        value: "30+",
        label: "Pages With Structured Data",
        note: "Clinic, services, FAQs",
      },
    ],
    // Google Search Console: first 6 weeks after the Oct 7, 2026 launch
    // vs. the 6 weeks before. Revisit with 90-day data.
    results: [
      {
        value: "#3.7",
        label: "Avg. Position for “DEXA Scan Near Me”",
        note: "Up from #14.5 in the 6 weeks before launch",
      },
      {
        value: "38.5%",
        label: "Click-Through Rate on “DexaFit Cincinnati”",
        note: "Up from 26.7% in the 6 weeks before launch",
      },
      {
        value: "+21%",
        label: "Homepage Click-Through Rate",
        note: "5.0% → 6.1% from Google search",
      },
    ],
    body: [
      {
        heading: "The Brief",
        paragraphs: [
          "DexaFit Cincinnati offers physician-led DEXA scans, VO2 max and metabolic testing. The services matched exactly what people search for, but page titles, descriptions and headings weren't consistently saying it, and the paths to booking weren't as clear as they could be.",
        ],
      },
      {
        heading: "What We Did",
        paragraphs: [
          "A site-wide SEO overhaul on Squarespace. Every key page got a rewritten title built around its service and Cincinnati, kept short enough to display in full, plus a rewritten meta description. Images got descriptive alt text, and each page now has a single H1 that carries its main search phrase.",
          "Structured data was added page by page, covering the clinic, the physician, each service and its offers, FAQs and breadcrumbs, so search engines understand what the clinic does and where.",
        ],
      },
      {
        heading: "Clearer Paths to Booking",
        level: 3,
        paragraphs: [
          "Calls to action were tightened across service and physician pages so every page points somewhere specific, like booking a scan or a physician-guided test. Split heroes and campaign landing pages support promotions without changing the core site.",
        ],
      },
      {
        heading: "Consistent Technical Updates",
        level: 3,
        paragraphs: [
          "Because Squarespace limits what can change in the template, ongoing improvements ship through a maintained custom stylesheet and code injection, versioned outside Squarespace so every change is repeatable.",
        ],
      },
    ],
  },
];

export const getProjectDetail = (slug: string) =>
  projectDetails.find((d) => d.slug === slug);
