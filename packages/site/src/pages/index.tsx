import React from "react"

import { createGetSection, getContent, SEO, Header, Layout } from "../features"

import ThemeContext from "../theme-context"
import { SOCIAL_NAME, SECTION_NAME, Theme, THEME_NAME } from "../theme-context/types"
import { themes } from "../theme-context/themes"
import { isSectionTheme } from "../theme-context/type-guards"
import useTheme from "../theme-context/use-theme"

export type Social = {
  name: SOCIAL_NAME
  url: string
  svg: string
  isActive: (id: THEME_NAME) => boolean
}
export type Section = {
  name: SECTION_NAME
  isActive: (id: THEME_NAME) => boolean
  onChangeTheme: () => void
}

const isActiveTheme = (theme: Theme) => (id: THEME_NAME) => id === theme.id
const parseThemes = (createChangeTheme: (id: THEME_NAME) => () => void) => themes.reduce<{
  socials: Social[]
  sections: Section[]
}>(
  (prev, theme) => {
    if (!isSectionTheme(theme)) return prev

    const { sections: prevSections, socials: prevSocials } = prev
    const { section, social, url, svg } = theme
    const isActive = isActiveTheme(theme)
    const onChangeTheme = createChangeTheme(theme.id)

    return {
      sections: [...prevSections, { name: section, isActive, onChangeTheme }],
      socials: [...prevSocials, { name: social, url, svg, isActive }],
    }
  },
  { sections: [], socials: [] },
)

const IndexPage = () => {
  const { theme, createChangeTheme } = useTheme()

  const { socials, sections } = parseThemes(createChangeTheme)
  const getSection = createGetSection(sections)

  return (
    <ThemeContext.Provider value={{ theme, createChangeTheme }}>
      <SEO />
      <Layout>
        <Header socials={socials} />
        {getContent(theme)}
        {getSection(theme)}
      </Layout>
    </ThemeContext.Provider>
  )
}
export default IndexPage
