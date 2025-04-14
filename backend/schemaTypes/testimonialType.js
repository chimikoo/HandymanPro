import { defineField, defineType } from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Customer Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      type: 'string',
      title: 'Customer Role',
    }),
    defineField({
      name: 'content',
      type: 'text',
      title: 'Testimonial Content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'rating',
      type: 'number',
      title: 'Rating (out of 5)',
      validation: (rule) => rule.min(1).max(5).required(),
    }),
  ],
})
