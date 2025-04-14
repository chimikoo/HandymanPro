import { defineField, defineType } from 'sanity'
import IconPicker from '../components/IconPicker'

export const serviceType = defineType({
  name: 'service',
  title: 'Service Cards',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Service Title',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Service Description',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      components: {
        input: IconPicker,
      },
    }),
  ],
})
