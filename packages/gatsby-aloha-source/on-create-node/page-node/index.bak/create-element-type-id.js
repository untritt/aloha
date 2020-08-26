const createElementTypeId = (node, getElementType) => {
  return (pageElementName) => {
    return `${node.id}:[${pageElementName}] >>> ${getElementType(
      pageElementName,
    )}`
  }
}
module.exports = createElementTypeId
