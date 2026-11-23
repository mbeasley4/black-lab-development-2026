import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {caseStudyType} from './caseStudyType'
import {tableType, tableRowType} from './tableType'
import {diagramType} from './diagramType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, caseStudyType, tableType, tableRowType, diagramType],
}
