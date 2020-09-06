import React, { useContext } from "react"
import cn from "classnames"

import ThemeContext from "../../../theme-context"
import { Section } from "../../../pages"
import { Theme } from "../../../theme-context/types"


const Nav = ({ sections }: {
  sections: Section[]
}) => {
  const { theme } = useContext<{ theme: Theme }>(ThemeContext)
  const { id: themeId, themeCss } = theme
  const {
    section: sectionCss,
    sectionTitle: sectionTitleCss,
    sectionTitleActive: activeSectionTitleCss,
  } = themeCss
  return <nav className={sectionCss}>
    <ul>
      {sections.map((section) => {
        const { name, isActive, onChangeTheme } = section
        const isActiveSection = isActive(themeId)
        console.log(`isActiveSection: ${isActiveSection}`)
        console.log(`themeId: ${themeId}`)

        return (
          <li
            key={name}
            className={cn(
              sectionTitleCss,
              { [activeSectionTitleCss]: isActiveSection }
            )}
            onClick={isActiveSection ? () => {} : onChangeTheme}
          >{name}</li>
        )
      })}
    </ul>
  </nav>
}
export default Nav
