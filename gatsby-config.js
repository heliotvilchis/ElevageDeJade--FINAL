module.exports = {
  siteMetadata: {
    title: `Élevage de Jade`,
    description: `Éleveur de chiens Colley au Québec, Canada.`,
    author: `Heliot Vilchis`,
    siteUrl: `https://elevagedejade.com`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "123",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "imagesHere",
        path: "./src/assets/images/aiko/",
      },
      __key: "imagesHere",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "imagesGabou",
        path: "./src/assets/images/gabou/",
      },
      __key: "imagesGabou",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pagesHere",
        path: "./src/pages/",
      },
      __key: "pagesHere",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "imagesX",
        path: "./src/assets/images/",
      },
      __key: "pagesX",
    },
    `gatsby-plugin-styled-components`,
  ],
};
