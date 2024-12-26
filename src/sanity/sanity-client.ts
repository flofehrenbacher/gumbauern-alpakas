import { createClient } from 'next-sanity'

export const sanityClient = createClient({
  projectId: 'xp2q514t',
  dataset: 'production',
  apiVersion: '2024-11-01',
  useCdn: false,
})
