const toRoute = (route: string): string => `/${route}`

export const EXPERIENCE = "experience"
export const LINKEDIN = "linkedin"
export const TOOLS = "tools"
export const GITHUB = "github"
export const INTERESTS = "interests"
export const TELEGRAM = "telegram"

export const EXPERIENCE_ROUTE = toRoute(EXPERIENCE)
export const LINKEDIN_ROUTE = toRoute(LINKEDIN)
export const TOOLS_ROUTE = toRoute(TOOLS)
export const GITHUB_ROUTE = toRoute(GITHUB)
export const INTERESTS_ROUTE = toRoute(INTERESTS)
export const TELEGRAM_ROUTE = toRoute(TELEGRAM)

export const SOCIALS = [LINKEDIN, GITHUB, TELEGRAM]
export const SECTIONS = [EXPERIENCE, TOOLS, INTERESTS]

export const HEADER_UI = "HEADER"
export const LOGO_UI = "LOGO"
export const ICON_UI = "ICON"
export const PROFILE_UI = "PROFILE"
export const TITLE_UI = "TITLE"
export const LINK_TO_RESOURCE_UI = "LINK_TO_RESOURCE"
export const SECTION_UI = "SECTION"
export const SECTION_LIST_UI = "SECTION_LIST"
export const SECTION_MD_UI = "SECTION_MD"
