const compose = require("@common/plugin/compose")

const {
  onCreateSvgNode,
  onCreateCssModuleNode,
  onCreateMdHtmlNode,
} = require("./file-node")
const onCreatePageNode = require("./page-node")

module.exports = compose([
  onCreateCssModuleNode,
  onCreateSvgNode,
  onCreateMdHtmlNode,
  onCreatePageNode,
])
