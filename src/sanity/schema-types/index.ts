import { TemplateResolver, type SchemaTypeDefinition } from 'sanity'
import { ourAnimalsType } from './our-animals-type'
import { singletonTypes } from '../singletons'
import { alpakaType } from './alpaka-type'

export const schema: {
  types: SchemaTypeDefinition[]
  templates: TemplateResolver
} = {
  types: [alpakaType, ourAnimalsType],
  // Filter out singleton types from the global “New document” menu options
  templates: (templates) =>
    templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
}
