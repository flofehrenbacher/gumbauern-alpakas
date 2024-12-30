import { defineField, defineType } from 'sanity'

export const ourAnimalsType = defineType({
  name: 'ourAnimals',
  title: 'Unsere Tiere',
  type: 'document',
  fields: [
    defineField({
      title: 'Seitentitel',
      name: 'pageTitle',
      type: 'string',
    }),
    defineField({
      title: 'Beschreibung',
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'alpakas',
      type: 'array',
      of: [{ type: 'alpaka' }],
    }),
  ],
})
