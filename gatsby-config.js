module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
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
        path: "./src/assets/images/",
      },
      __key: "imagesHere",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pagesHere",
        path: "./src/pages/",
      },
      __key: "pagesHere",
    },
  ],
};
