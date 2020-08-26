const { JSON_MIME_TYPE, SECTION_PAGE } = require(`@common/plugin/constants`)

const createIsMimeType = require("@common/plugin/create-is-mime-type")
const getPageType = require("@common/plugin/get-page-type")
const parsePageJsonNode = require("./parse-page-json-node")
const getNodeTypeId = require("../get-node-type-id")

const onCreatePageNode = async ({
  node,
  actions,
  createNodeId,
  loadNodeContent,
  createContentDigest,
}) => {
  const isJson = createIsMimeType(JSON_MIME_TYPE)
  const { createNode } = actions
  if (!isJson(node)) {
    return
  }

  const { pageType, ...page } = parsePageJsonNode(
    node,
    await loadNodeContent(node),
  )

  const pageNode = {
    ...page,
    id: createNodeId(getNodeTypeId(pageType, node)),
    internal: {
      type: pageType,
      contentDigest: createContentDigest(page),
    },
  }

  pageNode.header.page = pageNode.id
  if (pageType === getPageType(SECTION_PAGE)) {
    pageNode.header.social.page = pageNode.id
  }
  pageNode.profile.page = pageNode.id
  pageNode.section.page = pageNode.id

  createNode(pageNode)
}
module.exports = onCreatePageNode
