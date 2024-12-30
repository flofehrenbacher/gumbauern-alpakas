import {SunIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const alpakaType = defineType({
  name: 'alpaka',
  title: 'Alpaka',
  icon: SunIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'nickname',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'birthYear',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
  ],
})
