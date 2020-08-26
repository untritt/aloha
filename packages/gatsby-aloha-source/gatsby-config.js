module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `src/data`,
        name: "data",
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-typescript-css-modules`,
  ],
}
