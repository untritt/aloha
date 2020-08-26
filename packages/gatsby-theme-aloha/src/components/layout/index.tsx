import React, { PropsWithChildren } from "react"

import { accCss, ThemeCssProp } from "../../common"
import { container as containerCss } from "./styles.module.css"

const accomulateContainerCss = accCss(containerCss)

export type LayoutProps = PropsWithChildren<ThemeCssProp>

const Layout = ({ children, themeCss }: LayoutProps) => {
  const containerThemeCss = accomulateContainerCss(themeCss)
  return <div className={containerThemeCss}>{children}</div>
}

export default Layout
