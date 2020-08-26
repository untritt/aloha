const { INDEX_PAGE, NOT_FOUND_PAGE } = require(`@common/plugin/constants`)
const getPageType = require("@common/plugin/get-page-type")
const getSectionMeta = require("@common/plugin/get-section-meta")

const parsePageJsonNode = (jsonNode, content) => {
  const { section } = getSectionMeta(jsonNode)
  const { order, social, url } = JSON.parse(content)

  const pageType = getPageType(section)
  const commonPage = {
    pageType,
    header: {},
    profile: {
      url,
    },
    section: { name: section },
  }
  if (section !== INDEX_PAGE && section !== NOT_FOUND_PAGE) {
    return {
      ...commonPage,
      section: {
        ...commonPage.section,
        order,
      },
      header: {
        social: { name: social },
      },
    }
  }

  return commonPage
}
module.exports = parsePageJsonNode
