import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SEO, { Meta } from "./component"

export type SeoContainerProps = {
  title?: string
  description?: string
  lang?: string
  meta?: Meta[]
}

const SEOContainer = ({
  title: titleOverride = ``,
  description: descriptionOverride = ``,
  lang = `en`,
  meta: optionalMeta = [],
}: SeoContainerProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const { siteMetadata } = site
  const {
    title: metaTitle,
    description: metaDescription,
    author,
 } = siteMetadata
  const description = descriptionOverride || metaDescription
  const title = titleOverride || metaTitle

  return (
    <SEO
      author={author}
      title={title}
      description={description}
      lang={lang}
      meta={optionalMeta}
    />
  )
}
export default SEOContainer
