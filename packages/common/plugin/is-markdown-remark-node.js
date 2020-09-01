const isMarkdownRemarkNode = (curNode) =>
  curNode.internal.type === `MarkdownRemark`
module.exports = isMarkdownRemarkNode
