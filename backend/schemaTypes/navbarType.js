// sanity/schemas/navbarType.ts

import { defineType, defineField } from 'sanity'

export const navbarType = defineType({
  name: 'navbar',
  title: 'Navbar',
  type: 'document',
  fields: [
    defineField({
      name: 'brand',
      title: 'Brand Name',
      type: 'string',
    }),
    defineField({
      name: 'links',
      title: 'Navigation Links',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Link Label' },
            { name: 'href', type: 'string', title: 'Link Href' },
          ],
        }),
      ],
    }),
    defineField({
      name: 'quoteButtonText',
      title: 'Quote Button Text',
      type: 'string',
    }),
  ],
})
