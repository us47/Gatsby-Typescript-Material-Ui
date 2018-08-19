module.exports = {
  siteMetadata: {
    title: `Gatsby Typescript Material-Ui Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
       //pathToTheme: 'src/themes/default',
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        //pathToConfigModule: `src/utils/typography`,
      },
    }
  ]
}
