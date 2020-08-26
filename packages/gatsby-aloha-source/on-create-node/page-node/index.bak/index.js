const {
  JSON_MIME_TYPE,
  HEADER_UI,
  PROFILE_UI,
  SECTION_PAGE,
} = require(`@common/plugin/constants`)

const getPageType = require("@common/plugin/get-page-type")
const createIsMimeType = require("@common/plugin/create-is-mime-type")
const parsePageJsonNode = require("./parse-page-json-node")
const useCreateElementNode = require("./use-create-element-node")
const createElementTypeId = require("./create-element-type-id")
const createChildElementType = require("./create-child-element-type")

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

  const {
    pageType,
    header = {},
    // header: { social },
    profile,
    section = {},
  } = parsePageJsonNode(node, await loadNodeContent(node))

  const pageNode = {
    id: createNodeId(`${node.id} >>> ${pageType}`),
    internal: {
      type: pageType,
      contentDigest: createContentDigest({}),
    },
  }

  const getPageElementType = createChildElementType(pageType)
  const getPageElementTypeId = createElementTypeId(node, getPageElementType)

  const getElementType = createChildElementType("Page")
  const getElementTypeId = createElementTypeId(node, getElementType)

  const getHeaderElementType = createChildElementType("Header")
  const getHeaderElementTypeId = createElementTypeId(node, getHeaderElementType)

  const createElementNode = useCreateElementNode({
    createNodeId,
    createContentDigest,
  })

  const profileNode = createElementNode({
    name: PROFILE_UI,
    element: profile,
    getType: getElementType,
    getTypeId: getElementTypeId,
  })
  pageNode.profile = profileNode.id
  profileNode.page = pageNode.id
  const headerNode = createElementNode({
    name: HEADER_UI,
    element: header,
    getType: getPageElementType,
    getTypeId: getPageElementTypeId,
  })
  pageNode.header = headerNode.id
  headerNode.page = pageNode.id
  if (pageType === getPageType(SECTION_PAGE)) {
    headerNode.social.page = pageNode.id
  }
  const sectionNode = createElementNode({
    name: SECTION_PAGE,
    element: section,
    getType: getPageElementType,
    getTypeId: getPageElementTypeId,
  })
  pageNode.section = sectionNode.id
  sectionNode.page = pageNode.id

  createNode(pageNode)
  createNode(headerNode)
  createNode(profileNode)
  createNode(sectionNode)
}
module.exports = onCreatePageNode
