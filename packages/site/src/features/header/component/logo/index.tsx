import React from "react"

import Icon from "./icon"
import styles from "../../header.module.scss"
import { Css } from "../../../../theme-context/types"

export type LogoProps = {
  social: string
  url: string
  svg: string
  active: boolean
}

const { ["header__logo"]: commonLogoCss } = styles

const Logo = (props: LogoProps & { themeCss: { headerLogo: Css } }) => {
  const { social, url, svg, active } = props

  return (
    <a className={commonLogoCss} href={url}>
      <Icon active={active} path={svg} description={social} />
    </a>
  )
}
export default Logo
