require("dotenv").config({

path: `.env.${process.env.NODE_ENV}`,

})

module.exports = {
  siteMetadata: {
    title: 'Jo King & Co',
    author: 'Zac Dobbs'
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-head`,
     {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'src',
         path: `${__dirname}/src/`
      }
    }
  ]
}
