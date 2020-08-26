const { SECTION_PAGE } = require("@common/plugin/constants")
const getPageType = require("@common/plugin/get-page-type")

const SECTION_PAGE_TYPE = getPageType(SECTION_PAGE)

const getSectionPages = (nodeModel) => {
  const sectionPages = nodeModel.nodeModel.getAllNodes(
    { type: SECTION_PAGE_TYPE },
    { connectionType: SECTION_PAGE_TYPE },
  )
  return sectionPages.sort(
    ({ section: { order: pageAOrder } }, { section: { order: pageBOrder } }) =>
      pageBOrder - pageAOrder,
  )
}

module.exports = getSectionPages
