import { SunIcon } from '@sanity/icons'
import type { StructureResolver } from 'sanity/structure'
import { ourAnimalsType } from './singletons'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Seiten')
    .items([
      S.listItem()
        .title('Unsere Tiere')
        .icon(SunIcon)
        .id(ourAnimalsType)
        .child(
          S.document().schemaType(ourAnimalsType).documentId(ourAnimalsType)
        ),
    ])
