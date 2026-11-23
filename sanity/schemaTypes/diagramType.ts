import {defineField, defineType} from 'sanity'

/** A diagram that is built as a site component (see components/PortableTextComponents). */
export const diagramType = defineType({
  name: 'diagram',
  title: 'Diagram',
  type: 'object',
  fields: [
    defineField({
      name: 'diagram',
      title: 'Diagram',
      type: 'string',
      options: {
        list: [{title: 'Organizational visibility', value: 'organizational-visibility'}],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Alternative text',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: {title: 'diagram', subtitle: 'alt'},
  },
})
