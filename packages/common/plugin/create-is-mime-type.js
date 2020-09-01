const createIsMimeType = (mimeType) => (node) => {
  return (
    node &&
    node.internal &&
    node.internal.type === "File" &&
    node.internal.mediaType === mimeType
  )
}
module.exports = createIsMimeType
