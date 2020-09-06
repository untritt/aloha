import React, { PropsWithChildren, useContext } from "react"
import cn from "classnames"

import { container as commonContainerCss } from "./styles.module.scss"
import ThemeContext from "../../theme-context"

export type LayoutProps = PropsWithChildren<{}>

const Layout = ({ children }: LayoutProps) => {
  const { theme } = useContext(ThemeContext)
  const { themeCss } = theme
  const { layout: themeContainerCss } = themeCss
  const containerThemeCss = cn(commonContainerCss, themeContainerCss)

  return <div className={containerThemeCss}>{children}</div>
}

export default Layout
