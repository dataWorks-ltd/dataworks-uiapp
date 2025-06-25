import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'professional',
  title: 'Professional',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
          hotspot: true
      }
    }),
    defineField({
      name: 'specialties',
      title: 'Specialties',
      type: 'array',
      of: [
        {
          title: 'title',
          type: 'string',
        },
      ]
    })
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})
