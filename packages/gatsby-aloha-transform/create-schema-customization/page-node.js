const { JSON_MIME_TYPE } = require("@common/plugin/constants")

const UrlScalarDef = `
  scalar UrlScalar
`
// const WithThemeCssInterfaceDef = `
//   interface WithThemeCssInterface {
//     themeCss: CssModule
//   }
// `
// const WithPageInterfaceDef = `
//   interface WithPageInterface {
//     page: Page!
//   }
// `
// const WithActiveInterfaceDef = `
//   interface WithActiveInterface {
//     active(element: String): Boolean! @active
//   }
// `
// const PageProfileInterfaceDef = `
//   interface PageProfileInterface {
//     url: UrlScalar!
//   }
// `
const PageProfileTypeDef = `
  type PageProfile
    @dontInfer {
    url: UrlScalar!
    themeCss: CssModule @cssModule (element: "profile")
    svg: Svg! @svg (element: "profile")
    page: Page! @link
  }
`
const SocialTypeDef = `
  type Social
    @dontIfer {
    name: String!
    active: Boolean!
    svg: Svg! @svg (element: "header")
    page: SectionPage! @link
    active(element: String): Boolean! @active
  }
`
const IndexPageHeaderTypeDef = `
  type IndexPageHeader
    @dontIfer {
    themeCss: CssModule @cssModule (element: "header")
    page: IndexPage! @link
  }
`
const NotFoundPageHeaderTypeDef = `
  type NotFoundPageHeader
    @dontIfer {
    themeCss: CssModule @cssModule (element: "header")
    page: NotFoundPage! @link
  }
`
const SectionPageHeaderTypeDef = `
  type SectionPageHeader
    @dontIfer {
    social: Social!
#    socials: [Social!]
    themeCss: CssModule @cssModule (element: "header")
    page: SectionPage! @link
  }
`
const PageHeaderUnionDef = `
  union PageHeader =
    | IndexPageHeader
    | NotFoundPageHeader
    | SectionPageHeader
`
const IndexPageSectionTypeDef = `
  type IndexPageSection
    @dontIfer {
    themeCss: CssModule @cssModule (element: "section")
    page: IndexPage! @link
  }
`
const NotFoundPageSectionTypeDef = `
  type NotFoundPageSection
    @dontIfer {
    themeCss: CssModule @cssModule (element: "section")
    page: NotFoundPage! @link
  }
`
const SectionPageSectionTypeDef = `
  type SectionPageSection
    @dontIfer {
    name: String!
    order: Int!
    md: MarkdownRemark
    themeCss: CssModule @cssModule (element: "section")
    page: SectionPage! @link
    active(element: String): Boolean! @active
  }
`
const PageSectionUnionDef = `
  union PageSection =
    | IndexPageSection
    | NotFoundPageSection
    | SectionPageSection
`
const PageInterfaceDef = `
  interface PageInterface {
    header: PageHeader!
    profile: PageProfile!
    section: PageSection!
  }
`
const IndexPageTypeDef = `
  type IndexPage
    implements
    PageInterface & Node
    @dontInfer {
    header: IndexPageHeader!
    profile: PageProfile!
    section: IndexPageSection!
  }
`
const NotFoundPageTypeDef = `
  type NotFoundPage implements
    PageInterface & Node
    @childOf(types: ["File"] mimeTypes: ["${JSON_MIME_TYPE}"])
    @dontInfer {
    header: NotFoundPageHeader!
    profile: PageProfile!
    section: NotFoundPageSection!
  }
`
const SectionPageTypeDef = `
  type SectionPage implements
    PageInterface & Node
    @dontInfer {
    header: SectionPageHeader!
    profile: PageProfile!
    section: SectionPageSection!
    active(element: String): Boolean! @active
  }
`
const PageUnionDef = `
  union Page =
    | IndexPage
    | NotFoundPage
    | SectionPage
`
const QueryTypeDef = `
  type Query {
    indexPage: IndexPage!
    notFoundPage: NotFoundPage!
    sectionPages: [SectionPage!]
  }
`
const createPageNodeSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  const typeDefs = [
    UrlScalarDef,
    // WithThemeCssInterfaceDef,
    // WithPageInterfaceDef,
    // WithActiveInterfaceDef,
    // PageProfileInterfaceDef,
    PageProfileTypeDef,
    SocialTypeDef,
    IndexPageHeaderTypeDef,
    NotFoundPageHeaderTypeDef,
    SectionPageHeaderTypeDef,
    PageHeaderUnionDef,
    IndexPageSectionTypeDef,
    NotFoundPageSectionTypeDef,
    SectionPageSectionTypeDef,
    PageSectionUnionDef,
    PageInterfaceDef,
    SectionPageTypeDef,
    IndexPageTypeDef,
    NotFoundPageTypeDef,
    PageUnionDef,
    QueryTypeDef,
  ]
  createTypes(typeDefs)
}
module.exports = createPageNodeSchemaCustomization
