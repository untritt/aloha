const argsToSection = require("@common/plugin/args-to-section")
const getPageType = require("@common/plugin/get-page-type")
const {
  INDEX_PAGE,
  NOT_FOUND_PAGE,
  SECTION_PAGE,
} = require("@common/plugin/constants")

const NOT_FOUND_PAGE_TYPE = getPageType(NOT_FOUND_PAGE)
const SECTION_PAGE_TYPE = getPageType(SECTION_PAGE)
const consoleInspect = require("@common/plugin/console-inspect")
const getSectionPages = require("./get-section-pages")

const createGetPageByArgsAsync = (nodeModel) => {
  return async (args) => {
    const { section } = args
    if (section === INDEX_PAGE || section === NOT_FOUND_PAGE) {
      return nodeModel.getAllNodes({ type: getPageType(section) })[0]
    }
    const sectionPages = getSectionPages(nodeModel)
    console.log(`section: ${section}`)
    consoleInspect(sectionPages)
    if (
      sectionPages.findIndex(({ section: name }) => name === section) === -1
    ) {
      return nodeModel.getAllNodes({ type: NOT_FOUND_PAGE_TYPE })[0]
    }

    return nodeModel.runQuery({
      query: { filter: { section: { name: { eq: section } } } },
      type: SECTION_PAGE_TYPE,
      firstOnly: true,
    })
  }
}
module.exports = createGetPageByArgsAsync
