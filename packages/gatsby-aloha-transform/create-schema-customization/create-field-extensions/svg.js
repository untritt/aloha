const { SVG_NODE_TYPE } = require("@common/plugin/constants")
const createFileNodeFieldExtension = require("./file-node")

const svgExtension = createFileNodeFieldExtension({
  name: "svg",
  nodeType: SVG_NODE_TYPE,
})
module.exports = svgExtension
