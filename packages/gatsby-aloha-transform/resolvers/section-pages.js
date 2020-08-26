const getSectionPages = require("./get-section-pages")

const sectionPagesResolver = {
  type: "[SectionPage!]",
  // eslint-disable-next-line no-unused-vars
  resolve: (source, args, context, info) => {
    const sectionPages = getSectionPages(context.nodeModel)

    return sectionPages
  },
}

module.exports = sectionPagesResolver
