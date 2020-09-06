import React from "react"
import { Helmet } from "react-helmet"

type MetaContent = {
  content: string
}
type NameMeta = {
  name: string
} & MetaContent
type PropertyMeta = {
  property: string
} & MetaContent
export type Meta = NameMeta | PropertyMeta

export type SEOProps = {
  author: string
  title: string
  description: string
  lang: string
  meta: Meta[]
}

const SEO = ({
  author,
  title,
  description,
  lang,
  meta,
}: SEOProps) => {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ].concat(meta)}
    />
  )
}
export default SEO
