import {
  EXPERIENCE,
  EXPERIENCE_ROUTE,
  TOOLS,
  TOOLS_ROUTE,
  INTERESTS,
  INTERESTS_ROUTE,
  LINKEDIN,
  LINKEDIN_ROUTE,
  GITHUB,
  GITHUB_ROUTE,
  TELEGRAM,
  TELEGRAM_ROUTE,
} from "./constants"

export type ExperienceSectionType = typeof EXPERIENCE
export type ToolsSectionType = typeof TOOLS
export type InterestsSectionType = typeof INTERESTS
export type LinkedinSocialType = typeof LINKEDIN
export type GithubSocialType = typeof GITHUB
export type TelegramSocialType = typeof TELEGRAM

export type Section =
  | ExperienceSectionType
  | ToolsSectionType
  | InterestsSectionType
export type Social = LinkedinSocialType | GithubSocialType | TelegramSocialType

export type ExperienceSectionRouteType = typeof EXPERIENCE_ROUTE
export type ToolsSectionRouteType = typeof TOOLS_ROUTE
export type InterestsSectionRouteType = typeof INTERESTS_ROUTE
export type LinkedinSocialRouteType = typeof LINKEDIN_ROUTE
export type GithubSocialRouteType = typeof GITHUB_ROUTE
export type TelegramSocialRouteType = typeof TELEGRAM_ROUTE

export type ExperienceRouteType =
  | ExperienceSectionRouteType
  | LinkedinSocialRouteType
export type ToolsRouteType = ToolsSectionRouteType | GithubSocialRouteType
export type InterestsRouteType =
  | InterestsSectionRouteType
  | TelegramSocialRouteType

export type SocialRouteType =
  | ExperienceSectionRouteType
  | ToolsSectionRouteType
  | InterestsSectionRouteType
export type SectionRouteType =
  | LinkedinSocialRouteType
  | GithubSocialRouteType
  | TelegramSocialRouteType

export type Route = ExperienceRouteType | ToolsRouteType | InterestsRouteType

export type SocialMeta = {
  id: Social
  url: string
}

export type StaticQueryResult<QueryResult> = { data: QueryResult }

export type SiteMetadata = {
  title: string
  name: string
  author: string
  description: string
  position: string
}

export type SiteQuery = {
  site: {
    siteMetadata: SiteMetadata
  }
}

export type MarkdownRemarkQuery = {
  markdownRemark: {
    frontmatter: {
      id: Section
      order: number
      social: SocialMeta
      html: string | null
    }
  }
}

export type Css = string