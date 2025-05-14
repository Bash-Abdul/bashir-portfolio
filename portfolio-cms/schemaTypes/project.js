import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Project_Title',
        type: 'string',
      }),
      defineField({
        name: 'subtitle',
        title: 'SubTitle',
        type: 'string',
      }),
      defineField({
        name: 'technology',
        title: 'Technology',
        type: 'string',
      }),
      defineField({
        name: 'codeLink',
        title: 'CodeLink',
        type: 'string',
      }),
      defineField({
        name: 'viewLink',
        title: 'ViewLink',
        type: 'string',
      }),
      defineField({
        name: 'mainImage',
        title: 'projectImage',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
    ],
  })
  