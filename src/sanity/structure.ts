import { SunIcon } from '@sanity/icons'
import type { StructureResolver } from 'sanity/structure'
import { ourAnimalsTypeIdentifier } from './singletons'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Seiten')
    .items([
      S.listItem()
        .title('Unsere Tiere')
        .icon(SunIcon)
        .id(ourAnimalsTypeIdentifier)
        .child(
          S.document()
            .schemaType(ourAnimalsTypeIdentifier)
            .documentId(ourAnimalsTypeIdentifier)
        ),
    ])
