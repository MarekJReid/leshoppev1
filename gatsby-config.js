require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Le Shoppe`,
    description: `Welcome to Le Shoppe`,
    author: `@marek.reid`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `460o8xb2rzlv`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: 'S0mTuAzqULN-ObSyDs08pRR_zLNUqaDUpGqJGblPZUU',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logos/leshoppe.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

   // shop disabled until required {
     // resolve: `gatsby-source-shopify`,
     // options: {
       // shopName: 'scottpickettgroup',
       // accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
      //  verbose: true,
      //},
     
    //},
  ],
}
