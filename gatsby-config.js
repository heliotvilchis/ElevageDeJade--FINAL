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
        name: "imagesTiblanche",
        path: "./src/assets/images/ti-blanche",
      },
      __key: "imagesTiblanche",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "imagesSoftshiny",
        path: "./src/assets/images/soft-shiny",
      },
      __key: "imagesSoftshiny",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "imagesTinaturner",
        path: "./src/assets/images/tina-turner",
      },
      __key: "imagesTinaturner",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "imagesHaley",
        path: "./src/assets/images/haley",
      },
      __key: "imagesHaley",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "imagesRhapsodie",
        path: "./src/assets/images/rapsodie",
      },
      __key: "imagesRhapsodie",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "imagesThunder",
        path: "./src/assets/images/thunder",
      },
      __key: "imagesThunder",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "imagesBentley",
        path: "./src/assets/images/bentley",
      },
      __key: "imagesBentley",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "imagesGretta",
        path: "./src/assets/images/gretta",
      },
      __key: "imagesGretta",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "imagesEska",
        path: "./src/assets/images/eska",
      },
      __key: "imagesEska",
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
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "En mi maleta llevo",
        short_name: "En mi maleta",
        description:
          "Podcast sobre el crecimiento personal, las aventuras y el empoderamiento femenino",
        start_url: "/",
        lang: "es",
        background_color: "#ffffff",
        theme_color: "#ff5186",
        display: "minimal-ui",
        orientation: "portrait-primary",
        icon: "src/assets/images/icon.png",
        cache_busting_mode: "none",
        crossOrigin: "use-credentials",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://enmimaleta.com",
        sitemap: "https://enmimaleta.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
};
