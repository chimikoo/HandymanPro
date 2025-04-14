import { defineField, defineType } from 'sanity'

export const testimonialSectionType = defineType({
    name: 'testimonialSection',
    title: 'Testimonial Section',
    type: 'document',
    fields: [
      defineField({ name: 'heading', type: 'string', title: 'Heading' }),
      defineField({ name: 'subtext', type: 'text', title: 'Intro Text' }),
    ]
  })