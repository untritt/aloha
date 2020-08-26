const { MD_HTML_NODE_TYPE } = require("@common/plugin/constants")
const getSectionMeta = require("@common/plugin/get-section-meta")
const isMarkdownRemarkNode = require("@common/plugin/is-markdown-remark-node")
const getTypeName = require("@common/plugin/get-type-name")
const getNodeTypeId = require("../get-node-type-id")

const onCreateMdHtmlNode = async ({
  node,
  actions,
  getNode,
  createNodeId,
  createContentDigest,
}) => {
  if (!isMarkdownRemarkNode(node)) {
    return
  }

  const { createNode, createParentChildLink } = actions

  const mdHtmlType = getTypeName(MD_HTML_NODE_TYPE)

  // const { html } = node
  const { section } = getSectionMeta(getNode(node.parent))

  const mdHtml = { section }

  const mdHtmlNode = {
    ...mdHtml,
    id: createNodeId(getNodeTypeId(mdHtmlType, node)),
    parent: node.id,
    internal: {
      type: mdHtmlType,
      contentDigest: createContentDigest(mdHtml),
    },
  }

  createNode(mdHtmlNode)
  createParentChildLink({ parent: node, child: mdHtmlNode })
}
module.exports = onCreateMdHtmlNode
