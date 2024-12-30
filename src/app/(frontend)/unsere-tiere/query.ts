import { defineQuery } from 'next-sanity'
import { ourAnimalsTypeIdentifier } from '../../../sanity/singletons'

export const OUR_ANIMALS_QUERY = defineQuery(
  `*[_id == "${ourAnimalsTypeIdentifier}"][0]`
)
