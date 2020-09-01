const getTypeName = require("./get-type-name")
const { NOT_FOUND_PAGE, SECTION_PAGE, INDEX_PAGE } = require("./constants")

const getPageType = (section) =>
  getTypeName(
    `${
      section === INDEX_PAGE || section === NOT_FOUND_PAGE
        ? section
        : SECTION_PAGE
    } Page`,
  )
module.exports = getPageType
