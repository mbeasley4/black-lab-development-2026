import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const caseStudyType = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
    }),
    defineField({
      name: 'kind',
      title: 'Kind',
      type: 'string',
      options: {
        list: [
          {title: 'Case study (metrics-led, listed under "More Case Studies")', value: 'caseStudy'},
          {title: 'Project (detail page for a portfolio card)', value: 'project'},
        ],
        layout: 'radio',
      },
      initialValue: 'caseStudy',
    }),
    defineField({name: 'clientName', title: 'Client Name', type: 'string'}),
    defineField({name: 'industry', title: 'Industry', type: 'string'}),
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      description: 'e.g. WordPress, Shopify, Custom Next.js',
    }),
    defineField({
      name: 'websiteUrl',
      title: 'Live Website URL',
      type: 'url',
      description: 'Shown in the browser frame and as a "Visit site" link.',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Short summary shown on the /work listing page.',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Hero subtitle shown below the title.',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', type: 'string', title: 'Alternative text'})],
    }),
    defineField({
      name: 'logo',
      title: 'Client Logo',
      type: 'image',
      options: {hotspot: false},
      fields: [defineField({name: 'alt', type: 'string', title: 'Alternative text'})],
      description: 'Used on the portfolio card grid.',
    }),
    defineField({
      name: 'beforeImage',
      title: 'Before Screenshot',
      type: 'image',
      description: 'The old site, shown side by side with the main image in a Before / After section.',
      fields: [defineField({name: 'alt', type: 'string', title: 'Alternative text'})],
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          fields: [
            defineField({name: 'alt', type: 'string', title: 'Alternative text'}),
            defineField({name: 'caption', type: 'string', title: 'Caption'}),
          ],
        }),
      ],
      description: 'Additional screenshots of the finished work.',
    }),
    defineField({
      name: 'details',
      title: 'Project Details',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      description: 'Bullet points shown on the portfolio card (e.g. "Custom WordPress theme development").',
    }),
    defineField({name: 'publishedAt', type: 'datetime'}),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'metrics',
      title: 'Key Metrics',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'improvement', title: 'Improvement (e.g. +164%)', type: 'string'}),
            defineField({name: 'label', title: 'Label (e.g. Average Order Value)', type: 'string'}),
            defineField({name: 'value', title: 'Value (e.g. $281)', type: 'string'}),
            defineField({name: 'note', title: 'Note (e.g. From baseline)', type: 'string'}),
          ],
          preview: {select: {title: 'improvement', subtitle: 'label'}},
        }),
      ],
    }),
    defineField({name: 'body', title: 'Body', type: 'blockContent'}),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'SEO Title',
          type: 'string',
          description: 'Overrides the case study title in search results. Keep under 60 characters.',
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          description: 'Shown in search results. Keep between 140–160 characters.',
        }),
      ],
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'clientName', media: 'mainImage'},
  },
})
