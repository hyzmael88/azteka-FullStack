
export default {
  name: 'product',
  title: 'Producto',
  type: 'document',
  fields: [
    {
      name: 'nombre',
      title: 'Nombre',
      type: 'string',
    },
    {
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
    },
    {
      name: 'detalles',
      title: 'Detalles',
      type: 'text',
    },
    {
      name: 'precioEnvio',
      title: 'Precio de Envío',
      type: 'number',
    },
    {
      name: 'categoria',
      title: 'Categoría',
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      name: 'imagenes',
      title: 'Imágenes',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'descuento',
      title: 'Descuento',
      type: 'number',
    },
    {
      name: 'precio',
      title: 'Precio',
      type: 'number',
    },
    {
      name: 'inventario',
      title: 'Inventario',
      type: 'number',
    },
    {
      name: 'ventas',
      title: 'Ventas',
      type: 'number',
    },
    {
      name: 'fechaPublicacion',
      title: 'Fecha de Publicación',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        calendarTodayLabel: 'Hoy',
      },
      initialValue: () => ({
        _type: 'datetime',
        datetime: Date.now(),
      }),
    },
  ],
};

 
