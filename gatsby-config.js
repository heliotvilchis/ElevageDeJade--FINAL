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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "imagesAiko",
        path: "./src/assets/images/aiko/",
      },
      __key: "imagesAiko",
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
        name: "imagesSilverDream",
        path: "./src/assets/images/silver-dream",
      },
      __key: "imagesSilverDream",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "imagesIndia",
        path: "./src/assets/images/india",
      },
      __key: "imagesIndia",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "imagesSweety",
        path: "./src/assets/images/sweety",
      },
      __key: "imagesSweety",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "imagesPhotospage",
        path: "./src/assets/images/photospage",
      },
      __key: "imagesPhotospage",
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
        name: "allPdfs",
        path: "./src/assets/tests",
      },
      __key: "allPdfs",
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-minify`,
  ],
};
