const identity = require("@common/plugin/identity")

const useCreateElementNode = ({ createNodeId, createContentDigest }) => ({
  name,
  element,
  getType = identity,
  getTypeId = identity,
  parent = null,
}) => {
  const elementNode = {
    ...element,
    id: createNodeId(getTypeId(name)),
    ...(parent ? { parent: [parent.id] } : {}),
    children: [],
    internal: {
      type: getType(name),
      contentDigest: createContentDigest(element),
    },
  }
  return elementNode
}
module.exports = useCreateElementNode
