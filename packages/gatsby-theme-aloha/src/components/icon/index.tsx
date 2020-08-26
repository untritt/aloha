import React, { FunctionComponent } from "react"

import {
  icon as commonIconCss,
  iconActive as activeIconCss,
} from "./styles.module.css"
import { accCss } from "../../common"

type IconProps = {
  description: string
  path: string
  active: boolean
}
const accomulateCss = accCss(commonIconCss)

const Icon: FunctionComponent<IconProps> = (props: IconProps) => {
  const { active, path, description } = props
  const iconCss = active
    ? accomulateCss(activeIconCss)
    : (commonIconCss as string)

  return <img className={iconCss} src={path} alt={description} />
}
export default Icon
