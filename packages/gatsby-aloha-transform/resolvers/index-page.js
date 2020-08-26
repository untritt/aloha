const { INDEX_PAGE } = require("@common/plugin/constants")
const createSpecialPageResolver = require("./create-special-page-index-page")

const indexPageResolver = createSpecialPageResolver(INDEX_PAGE)
module.exports = indexPageResolver
