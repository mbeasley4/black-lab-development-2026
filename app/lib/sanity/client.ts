import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  // use the latest Sanity API version
  apiVersion: "2024-01-01", 
  // set to true to use the CDN for faster reads in production
  useCdn: process.env.NODE_ENV === 'production', 
});