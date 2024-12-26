import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { sanityClient } from './sanity-client'
import imageUrlBuilder from '@sanity/image-url'

const { projectId, dataset } = sanityClient.config()

export const urlForSanityImageSource = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null
