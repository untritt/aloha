const {
  CSS_MODULE_NODE_TYPE: name,
  CSS_MIME_TYPE,
} = require(`@common/plugin/constants`)

const getNodeTypeId = require("../get-node-type-id")
const parseFileNode = require("./parse-file-node")
const useOnCreateFileNode = require("./use-on-create-file-node")

const isType = (curNode) =>
  curNode &&
  curNode.internal &&
  curNode.internal.type === "File" &&
  curNode.internal.mediaType === CSS_MIME_TYPE

const getTypeId = ({ typeName, node, source }) =>
  getNodeTypeId(typeName, node, source.section, source.element)

const onCreateMdHtmlNode = useOnCreateFileNode({
  name,
  isType,
  getTypeId,
  parseFileNode,
})
module.exports = onCreateMdHtmlNode
