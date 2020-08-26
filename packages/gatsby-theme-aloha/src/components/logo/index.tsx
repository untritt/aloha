import React from "react"

import Icon from "../icon"
import {
  headerLogo as commonLogoCss,
  headerLogoActive as commonActiveLogoCss,
} from "../../common/css/header.module.css"
import { accCss, ThemeCssProp, ThemeCssModule } from "../../common"

export type LogoThemeClass = "headerLogo" | "headerLogoActive"
export type LogoThemeCssModule = ThemeCssModule<LogoThemeClass>
export type LogoThemeCssProp = ThemeCssProp<LogoThemeClass>

export type LogoProps = {
  social: string
  url: string
  svg: string
  active: boolean
}

const accomulateLogoCss = accCss(commonLogoCss)
const accomulateActiveLogoCss = accCss(commonActiveLogoCss)

const Logo = (props: LogoProps & LogoThemeCssProp) => {
  const { social, url, svg, active, themeCss } = props

  const {
    headerLogo: themeLogoCss,
    headerLogoActive: themeLogoActiveCss,
  } = themeCss
  const headerLogoCss = accomulateLogoCss(themeLogoCss)

  return (
    <a
      className={
        !active
          ? headerLogoCss
          : accomulateLogoCss(accomulateActiveLogoCss(themeLogoActiveCss))
      }
      href={url}
    >
      <Icon active={active} path={svg} description={social} />
    </a>
  )
}
export default Logo
