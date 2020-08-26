const getTypeName = require("@common/plugin/get-type-name")
const getSectionMeta = require("@common/plugin/get-section-meta")

const useOnCreateFileNode = ({ name, isType, getTypeId, parseFileNode }) => {
  const onCreateFileNode = async ({
    node,
    actions,
    createNodeId,
    createContentDigest,
  }) => {
    const { createNode, createParentChildLink } = actions
    if (!isType(node)) {
      return
    }

    const sectionMeta = getSectionMeta(node)
    if (sectionMeta === null) {
      return
    }
    const { section, element } = sectionMeta
    const typeName = getTypeName(name)

    const source = parseFileNode({ node, section, element })
    const id = getTypeId({ node, source, typeName })

    const fileNode = {
      ...source,
      id: createNodeId(id),
      internal: {
        content: source.internal.content,
        contentDigest: createContentDigest(source),
        type: typeName,
        mediaType: node.internal.mediaType,
      },
    }

    createNode(fileNode)
    createParentChildLink({ parent: node, child: fileNode })
  }

  return onCreateFileNode
}
module.exports = useOnCreateFileNode
