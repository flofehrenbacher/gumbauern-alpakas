import { DocumentActionsResolver } from 'sanity'
import { singletonTypes, singletonActions } from './singletons'

export const document: { actions: DocumentActionsResolver } = {
  // For singleton types, filter out actions that are not explicitly included
  // in the `singletonActions` list defined above
  actions: (input, context) =>
    singletonTypes.has(context.schemaType)
      ? input.filter(({ action }) => action && singletonActions.has(action))
      : input,
}
