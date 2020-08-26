const { CSS_MIME_TYPE, SVG_MIME_TYPE } = require("@common/plugin/constants")

const WithElementInterfaceTypeDef = `
  interface WithElementInterface {
    element: String!
  }
`
const WithSectionInterfaceTypeDef = `
  interface WithSectionInterface {
    section: String!
  }
`
const CssModuleTypeDef = `
  type CssModule implements
    WithElementInterface &
    WithSectionInterface &
    Node
    @childOf(types: ["File"] mimeTypes: ["${CSS_MIME_TYPE}"]){
    element: String!
    section: String!
  }
`
const SvgTypeDef = `
  type Svg implements
    WithElementInterface &
    WithSectionInterface &
    Node
    @childOf(types: ["File"] mimeTypes: ["${SVG_MIME_TYPE}"]){
    element: String!
    section: String!
  }
`
const MdHtmlTypeDef = `
  type MdHtml implements
    WithSectionInterface &
    Node
    @childOf(types: ["MarkdownRemark"]){
    section: String!
  }
`
const createFileNodeSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = [
    WithElementInterfaceTypeDef,
    WithSectionInterfaceTypeDef,
    CssModuleTypeDef,
    SvgTypeDef,
    MdHtmlTypeDef,
  ]
  createTypes(typeDefs)
}
module.exports = createFileNodeSchemaCustomization
