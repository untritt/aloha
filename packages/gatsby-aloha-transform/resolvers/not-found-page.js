const { NOT_FOUND_PAGE } = require("@common/plugin/constants")
const createSpecialPageResolver = require("./create-special-page-index-page")

const notFoundPageResolver = createSpecialPageResolver(NOT_FOUND_PAGE)
module.exports = notFoundPageResolver
