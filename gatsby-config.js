module.exports = {
  siteMetadata: {
    title: `Tienda en Línea de Servicios de Inteligencia Artificial | Juan Jaramillo`,
    siteUrl: `https://shop.juanjaramillo.tech`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-6NH5HQX0BL",
        head: true,
        anonymize: true,
        respectDNT: true,
        exclude: ["/preview/**"],
        pageTransitionDelay: 0,
        defer: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tienda en Línea de Servicios de Inteligencia Artificial | Juan Jaramillo`,
        short_name: `Juan Jaramillo`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#EC4899`,
        display: `standalone`,
        icon: '/assets/favicon.webp',
      },
    },
    'gatsby-plugin-netlify',
  ],
};
