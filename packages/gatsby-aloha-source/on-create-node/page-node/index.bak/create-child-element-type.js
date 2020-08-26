const { upperFirst } = require("lodash")

const createChildElementType = (parentNodeType) => {
  return (childElementName) => {
    return `${parentNodeType || ``}${upperFirst(childElementName)}`
  }
}
module.exports = createChildElementType
