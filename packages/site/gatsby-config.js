module.exports = {
  siteMetadata: {
    title: `Tuiana Dondokova`,
    name: `Tuiana Dondokova`,
    author: `@untritt`,
    description: `Homepage`,
    position: `support enginer`,
  },
  plugins: [
    'gatsby-plugin-scss-typescript',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Untritt Homepage`,
        short_name: `Untritt`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`,
      },
    },
    `gatsby-plugin-typescript`,
  ],
}
