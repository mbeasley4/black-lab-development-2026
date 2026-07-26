import {defineType, defineField, defineArrayMember} from 'sanity'

export const tableRowType = defineType({
  name: 'tableRow',
  title: 'Row',
  type: 'object',
  fields: [
    defineField({
      name: 'cells',
      title: 'Cells',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {cells: 'cells'},
    prepare({cells}: {cells?: string[]}) {
      return {title: (cells || []).join(' | ') || 'Empty row'}
    },
  },
})

export const tableType = defineType({
  name: 'table',
  title: 'Table',
  type: 'object',
  fields: [
    defineField({
      name: 'rows',
      title: 'Rows',
      description: 'The first row is treated as the header row.',
      type: 'array',
      of: [defineArrayMember({type: 'tableRow'})],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {rows: 'rows'},
    prepare({rows}: {rows?: {cells?: string[]}[]}) {
      const rowCount = rows?.length || 0
      const colCount = rows?.[0]?.cells?.length || 0
      return {
        title: 'Table',
        subtitle: `${rowCount} row${rowCount === 1 ? '' : 's'} × ${colCount} column${colCount === 1 ? '' : 's'}`,
      }
    },
  },
})
