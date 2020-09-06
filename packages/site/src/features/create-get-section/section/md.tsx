import React, { useContext } from "react"
import cn from "classnames"

import { sectionContent as commonContentCss } from "./section.module.scss"
import ThemeContext from "../../../theme-context"
import { THEME_NAME, Theme, SectionTheme } from "../../../theme-context/types"


const Md = () => {
  const { theme } = useContext<{ theme: SectionTheme }>(ThemeContext)
  const { md: Mdx, themeCss } = theme
  const { sectionContent: themeMdCss } = themeCss

  // console.log(md)
  return <div className={cn(commonContentCss, themeMdCss)}><Mdx /></div>
}
export default Md
