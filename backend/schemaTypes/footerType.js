// sanity/schemas/footerType.ts

import { defineType, defineField } from 'sanity'

export const footerType = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'brandName',
      title: 'Brand Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Company Description',
      type: 'text',
    }),
    defineField({
      name: 'servicesTitle',
      title: 'Services Column Title',
      type: 'string',
      initialValue: 'Services',
    }),
    defineField({
      name: 'companyTitle',
      title: 'Company Column Title',
      type: 'string',
      initialValue: 'Company',
    }),
    defineField({
      name: 'contactTitle',
      title: 'Contact Column Title',
      type: 'string',
      initialValue: 'Contact',
    }),
    defineField({
      name: 'copyrightName',
      title: 'Copyright Name',
      type: 'string',
      initialValue: 'HandyPro',
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Service Name' },
            { name: 'href', type: 'string', title: 'Service Link' },
          ],
        }),
      ],
    }),
    defineField({
      name: 'companyLinks',
      title: 'Company Links',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Link Name' },
            { name: 'href', type: 'string', title: 'Link URL' },
          ],
        }),
      ],
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Info',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          fields: [
            { name: 'platform', type: 'string', title: 'Platform' },
            { name: 'href', type: 'string', title: 'URL' },
          ],
        }),
      ],
    }),
  ],
})
