export function legalWebPageSchema(name: string, path: string, dateModified: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    url: `https://blacklabdev.com${path}`,
    dateModified,
    isPartOf: {
      "@type": "WebSite",
      name: "Black Lab Development",
      url: "https://blacklabdev.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Black Lab Development",
      url: "https://blacklabdev.com",
    },
  };
}
