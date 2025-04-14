import { defineField, defineType } from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'subtext',
      title: 'Subtext',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
        name: 'button',
        title: 'Button',
        type: 'object',
        fields: [
          {
            name: 'text',
            title: 'Button Text',
            type: 'string',
            validation: (rule) => rule.required(),
          },
          {
            name: 'href',
            title: 'Button Link',
            type: 'string',
            validation: (rule) => rule.required(),
          },
        ],
      }),
  ],
})