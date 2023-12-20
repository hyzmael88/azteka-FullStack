export default {
    name: 'entry',
    title: 'Entrada de Blog',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Título',
            type: 'string',
            validation: (Rule) => Rule.required().max(100),
        },
        {
            name: 'content',
            title: 'Contenido',
            type: 'text',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'author',
            title: 'Author',
            type: 'text',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'publishedAt',
            title: 'Fecha de Publicación',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
        },
    ],
};
