const { INDEX_PAGE, NOT_FOUND_PAGE } = require("@common/plugin/constants")

const getSectionMeta = (node) => {
  const { relativeDirectory, name } = node
  const element = name.split(".")[0]
  const parsedDir = relativeDirectory.split("/")

  if (parsedDir.length === 0 && !element) {
    return null
  }
  if (parsedDir.length === 1) {
    const section = parsedDir[0]
    if (section === "index" || section === "index-page" || section === "") {
      return {
        section: INDEX_PAGE,
        element,
      }
    }
    if (section === "404" || section === "page-404") {
      return {
        section: NOT_FOUND_PAGE,
        element,
      }
    }
    return null
  }
  return {
    section: parsedDir[1],
    element,
  }
}
module.exports = getSectionMeta
