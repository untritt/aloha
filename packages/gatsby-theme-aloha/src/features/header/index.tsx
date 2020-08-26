import React, { PropsWithChildren, FunctionComponent } from "react"

import { accCss, ThemeCssProp } from "../../common"
import { header as commonHeaderCss } from "../../common/css/header.module.css"

export type HeaderClass = "header" | "headerLogo" | "headerLogoActive"
export type HeaderThemeCssProp = ThemeCssProp<HeaderClass>
export type HeaderProps = PropsWithChildren<Record<string, unknown>>

const accomulateCss = accCss(commonHeaderCss)

const Header: FunctionComponent<HeaderProps & HeaderThemeCssProp> = (
  props: HeaderProps & HeaderThemeCssProp,
) => {
  const { children: logos, themeCss } = props
  const { header: headerThemeCss } = themeCss
  const headerCss =
    headerThemeCss !== undefined
      ? accomulateCss(headerThemeCss)
      : (commonHeaderCss as string)

  return <header className={headerCss}>{logos}</header>
}
export default Header
