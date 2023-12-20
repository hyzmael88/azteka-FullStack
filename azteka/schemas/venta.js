
export default {
  name: 'venta',
  title: 'Venta',
  type: 'document',
  fields: [
    {
      name: 'venta',
      title: 'Venta',
      type: 'reference',
      to: [{ type: 'product' }],
    },
    {
      name: 'cantidad',
      title: 'Cantidad',
      type: 'number',
    },
    {
      name: 'user',
      title: 'User',
      type: 'reference',
      to: [{ type: 'user' }],
    },
    {
      name: 'datosEnvio',
      title: 'Datos de Envío',
      type: 'object',
      fields: [
        {
          name: 'direccion',
          title: 'Dirección',
          type: 'string',
        },
        {
          name: 'ciudad',
          title: 'Ciudad',
          type: 'string',
        },
        {
          name: 'pais',
          title: 'País',
          type: 'string',
        },
      ],
    },
    // Otros campos relacionados con la venta...
  ],
};
