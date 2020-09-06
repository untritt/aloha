import React, { ReactElement, useContext } from "react"
import ThemeContext from "../../theme-context"

import { NotFoundTheme } from "../../theme-context/types"

import Content from "./content"

const NotFoundContent = (): ReactElement => {
  const { theme } = useContext<{ theme: NotFoundTheme }>(ThemeContext)
  const {
    themeCss: { contentBackground, contentTitle },
  } = theme
  return (
    <Content className={contentBackground}>
      <h1 className={contentTitle}>404</h1>
      <p className={contentTitle}>
        Welcome in outer space! <a href="/">Go back...</a>
      </p>
    </Content>
  )
}
export default NotFoundContent
