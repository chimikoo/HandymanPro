import { defineField, defineType } from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Section Heading',
    }),
    defineField({
      name: 'intro',
      type: 'text',
      title: 'Intro Paragraph',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description Paragraph',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'About Image',
    }),
    defineField({
      name: 'benefits',
      type: 'array',
      of: [{ type: 'string' }],
      title: 'Benefits',
    }),
  ],
})
