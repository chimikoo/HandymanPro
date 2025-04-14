import { defineField, defineType } from 'sanity'

export const servicesSectionType = defineType({
  name: 'servicesSection',
  title: 'Services Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
    }),
    defineField({
      name: 'subtext',
      title: 'Intro Paragraph',
      type: 'text',
    }),
  ],
})