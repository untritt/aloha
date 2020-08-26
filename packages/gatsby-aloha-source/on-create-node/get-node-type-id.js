const getNodeTypeId = (typeName, node, ...prefixes) =>
  `${node.id}${
    prefixes.length > 0 ? `[${prefixes.join(":")}]` : ``
  } >>> ${typeName}`
module.exports = getNodeTypeId
