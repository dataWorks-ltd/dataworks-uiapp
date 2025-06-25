import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faq',
  title: 'Faq',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      // author: 'author.name',
      // media: 'mainImageUrl',
    },
    prepare(selection) {
      // const {author} = selection
      return {...selection}
    },
  },
})
