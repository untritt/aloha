import React, { ReactElement, useContext } from "react"

import ThemeContext from "../../theme-context"
import { SectionTheme, IndexTheme } from "../../theme-context/types"

import Content from "./content"

import useProfile from "./use-profile"

const RegularContent = (): ReactElement => {
  const { theme } = useContext<{ theme: SectionTheme | IndexTheme }>(
    ThemeContext,
  )
  const {
    themeCss: { contentBackground, contentTitle },
  } = theme
  const { name, position } = useProfile()

  return (
    <Content className={contentBackground}>
      <h1 className={contentTitle}>{name}</h1>
      <p className={contentTitle}>{position}</p>
    </Content>
  )
}
export default RegularContent
