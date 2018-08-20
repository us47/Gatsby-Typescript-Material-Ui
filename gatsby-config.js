module.exports = {
  siteMetadata: {
    title: `Gatsby Typescript Material-Ui Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        //pathToConfigModule: `src/utils/typography`,
      },
    },
    //{
      //resolve: `gatsby-plugin-styled-components`,
      //options: {
        // Add any options here
      //},
    //}
  ]
}
