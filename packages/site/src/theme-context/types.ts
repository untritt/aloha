import { EXPERIENCE, TOOLS, INTERESTS, INDEX, NOT_FOUND, LINKEDIN, GITHUB, TELEGRAM } from "./constants"

export type EXPERIENCE_SECTION_NAME = typeof EXPERIENCE
export type TOOLS_SECTION_NAME = typeof TOOLS
export type INTERESTS_SECTION_NAME = typeof INTERESTS

export type SECTION_NAME =
  | EXPERIENCE_SECTION_NAME
  | TOOLS_SECTION_NAME
  | INTERESTS_SECTION_NAME

export type LINKEDIN_SOCIAL_NAME = typeof LINKEDIN
export type GITHUB_SOCIAL_NAME = typeof GITHUB
export type TELEGRAM_SOCIAL_NAME = typeof TELEGRAM

export type SOCIAL_NAME =
  | LINKEDIN_SOCIAL_NAME
  | GITHUB_SOCIAL_NAME
  | TELEGRAM_SOCIAL_NAME

  
export type INDEX_THEME_NAME = typeof INDEX
export type NOT_FOUND_THEME_NAME = typeof NOT_FOUND
export type LINKEDIN_THEME_NAME = typeof LINKEDIN
export type GITHUB_THEME_NAME = typeof GITHUB
export type TELEGRAM_THEME_NAME = typeof TELEGRAM

export type SECTION_THEME_NAME =
| LINKEDIN_THEME_NAME
| GITHUB_THEME_NAME
| TELEGRAM_THEME_NAME

export type THEME_NAME =
  | INDEX_THEME_NAME
  | NOT_FOUND_THEME_NAME
  | SECTION_THEME_NAME

export type Css = string

export type HeaderThemeCss = {
  header: Css
  headerLogo: Css
  logoIcon: Css
  logoIconActive: Css
}
export type ContentThemeCss = {
  contentBackground: Css
  contentTitle: Css
}
export type SectionThemeCss = {
  section: Css
  sectionTitle: Css
  sectionTitleActive: Css
  sectionContent?: Css
}

type ThemeCss = HeaderThemeCss & ContentThemeCss & SectionThemeCss

export type Md = { html: string }

export type IndexTheme = {
  id: INDEX_THEME_NAME
  themeCss: ThemeCss
}

export type NotFoundTheme = {
  id: NOT_FOUND_THEME_NAME
  themeCss: ThemeCss
}

export type SectionTheme = {
  id: SECTION_THEME_NAME
  section: SECTION_NAME
  social: SOCIAL_NAME
  svg: string
  url: string
  md: Md
  themeCss: ThemeCss
}

export type Theme = IndexTheme | NotFoundTheme | SectionTheme
