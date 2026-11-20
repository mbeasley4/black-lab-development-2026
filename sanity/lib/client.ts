import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})

// Local draft preview: in development, when SANITY_API_READ_TOKEN is set in
// .env.local, pages read drafts on top of published content so unpublished
// work can be clicked through and reviewed. Production always reads published
// content only.
const previewToken = process.env.SANITY_API_READ_TOKEN

export const isDraftPreview = process.env.NODE_ENV === 'development' && Boolean(previewToken)

export const readClient = isDraftPreview
  ? client.withConfig({ token: previewToken, perspective: 'drafts', useCdn: false })
  : client
