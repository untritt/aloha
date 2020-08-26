const parseFileNode = ({ node, section, element }) => ({
  ...node,
  section,
  element,
})
module.exports = parseFileNode
