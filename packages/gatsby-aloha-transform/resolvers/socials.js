const getSectionPages = require("./get-section-pages")

const sectionsResolver = {
  type: "[Social!]",
  // eslint-disable-next-line no-unused-vars
  resolve: (source, args, context, info) => {
    const sectionPages = getSectionPages(context.nodeModel)

    return sectionPages.map(({ header: { social } }) => social)
  },
}

module.exports = sectionsResolver
