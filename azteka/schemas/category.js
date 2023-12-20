
export default{
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
    },
  ],
}

