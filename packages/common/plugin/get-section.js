const { INDEX_PAGE, NOT_FOUND_PAGE } = require("./constants")
const getPageType = require("./get-page-type")

const getSection = ({ source, context }) => {
  const { nodeModel } = context
  const page = nodeModel.findRootNodeAncestor(source)

  switch (page.internal.type) {
    case getPageType(INDEX_PAGE):
      return INDEX_PAGE
    case getPageType(NOT_FOUND_PAGE):
      return NOT_FOUND_PAGE

    default:
      return page.section.name
  }
}
module.exports = getSection
