const { CSS_MODULE_NODE_TYPE } = require("@common/plugin/constants")
const createFileNodeFieldExtension = require("./file-node")

const ccsModuleExtension = createFileNodeFieldExtension({
  name: "cssModule",
  nodeType: CSS_MODULE_NODE_TYPE,
})
module.exports = ccsModuleExtension
