/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable import/named */
/* eslint-disable @typescript-eslint/no-unused-vars */
import consoleInspect from "@common/plugin/console-inspect"
import React, { FunctionComponent } from "react"

import { graphql } from "gatsby"
import { Layout, Logo } from "../components"
import {
  Header,
  HeaderThemeCssProp,
  Profile,
  SEO,
  Sections,
  Markdown,
  Nav,
} from "../features"

type SectionPageRespose = {
  data: {
    sectionPage: {
      header: {
        themeCss: {
          absolutePath: string
        }
      }
      profile: {
        svg: string
        themeCss: {
          absolutePath: string
        }
      }
      section: {
        themeCss: {
          absolutePath: string
        }
      }
    }
    sections: {
      name: string
      md: string
      active: boolean
    }[]
    socials: {
      name: string
      active: boolean
    }[]
  }
  pageContext: {
    section: string
  }
}

const SectionTemplate: FunctionComponent<SectionPageRespose> = ({
  data,
  pageContext,
}: SectionPageRespose) => {
  consoleInspect(data)
  const {
    sectionPage: {
      header: { themeCss: { absolutePath: headerThemeCssPath } },
      // profile: { svg, themeCss: profileThemeCss },
      // section: { themeCss: sectionThemeCss },
    },
    // sections,
    socials,
  } = data
  const headerThemeCss = require(headerThemeCssPath)
  console.log(headerThemeCss)
  const { section } = pageContext
  return (
    <>
      <SEO />
      <Layout>
        <Header themeCss={headerThemeCss}>
          {socials.map(({ name, active }) => {
            return (
              <Logo
                key={name}
                social={name}
                url={`/${section}`}
                active={active}
                themeCss={headerThemeCss}
              />
            )
          })}
        </Header>
        {/* <Profile />
        <Sections>
          <Nav />
          <Markdown />
        </Sections> */}
      </Layout>
    </>
  )
}
export default SectionTemplate

export const pageQuery = graphql`
  query SectionPagesQuery($section: String!) {
    sectionPage(section: { name: { eq: $section } }) {
      header {
        themeCss {
          absolutePath
        }
      }
      profile {
        # svg
        themeCss {
          absolutePath
        }
      }
      section {
        themeCss {
          absolutePath
        }
      }
    }
    allSections {
      name
      # md
      active(section: $section)
    }
    allSocials {
      name
      active(section: $section)
    }
  }
`
