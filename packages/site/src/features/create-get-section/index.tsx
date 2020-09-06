import React from "react"

import { Theme } from "../../theme-context/types"
import { isIndexTheme, isSectionTheme } from "../../theme-context/type-guards"
import { Section as SectionType } from "../../pages"
import IndexSection from "./section/index-section"
import Section from "./section/section"

const createGetSection = (sections: SectionType[]) => (theme: Theme) => {
  if (isIndexTheme(theme)) return <IndexSection sections={sections} />
  if (isSectionTheme(theme)) return <Section sections={sections} />
  return null
}
export default createGetSection
