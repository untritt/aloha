import React, { FunctionComponent, useContext } from "react"
import cn from "classnames"

import styles from "../../header.module.scss"
import ThemeContext from "../../../../theme-context"
import { Theme } from "../../../../theme-context/types"

const {
  ["logo__icon"]: commonIconCss,
  ["logo__icon_active"]: activeIconCss,
} = styles

type IconProps = {
  description: string
  path: string
  active: boolean
}

const Icon: FunctionComponent<IconProps> = (props: IconProps) => {
  const { theme } = useContext<{ theme: Theme }>(ThemeContext)
  const { themeCss } = theme
  const {
    logoIcon: themeIconCss,
    logoIconActive: themeActiveIconCss,
  } = themeCss

  const { active, path, description } = props

  console.log(styles)

  const iconCss = cn(
    commonIconCss, themeIconCss,
    { [activeIconCss]: active, [themeActiveIconCss]: active },
  )

  return <img className={iconCss} src={path} alt={description} />
}
export default Icon
