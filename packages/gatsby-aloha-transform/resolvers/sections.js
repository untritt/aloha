const getSectionPages = require("./get-section-pages")

const sectionsResolver = {
  type: "[SectionPageSection!]",
  // eslint-disable-next-line no-unused-vars
  resolve: (source, args, context, info) => {
    const sectionPages = getSectionPages(context.nodeModel)

    return sectionPages.map(({ section }) => section)
  },
}

module.exports = sectionsResolver
