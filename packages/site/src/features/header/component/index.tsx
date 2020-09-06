import React, { FunctionComponent, ReactNode } from "react"

import { accCss } from "../../../common"
import { header as commonHeaderCss } from "../header.module.scss"
import { Css } from "../../../theme-context/types"
console.log(commonHeaderCss)

export type HeaderProps = {
  children: ReactNode[]
}

const accomulateCss = accCss(commonHeaderCss)

const Header: FunctionComponent<HeaderProps & { themeCss: { header: Css } }> = (
  props: HeaderProps & { themeCss: { header: Css } },
) => {
  const { children: logos, themeCss } = props
  const { header: headerThemeCss } = themeCss
  const headerCss =
    headerThemeCss !== undefined
      ? accomulateCss(headerThemeCss)
      : commonHeaderCss

  return <header className={headerCss}>{logos}</header>
}
export default Header
