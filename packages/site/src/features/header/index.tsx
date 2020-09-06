import React, { useContext } from "react"
import Header from "./component"
import Logo from "./component/logo"

import ThemeContext from "../../theme-context"
import { Theme, SOCIAL_NAME } from "../../theme-context/types"
import { isSectionTheme } from "../../theme-context/type-guards"

const HeaderContainer = ({ socials }: {
  socials: Array<{ name: SOCIAL_NAME; svg: string; url: string }>
}) => {
  const { theme } = useContext<{ theme: Theme }>(ThemeContext)
  const { themeCss } = theme
  const { header, headerLogo } = themeCss

  return (
    <Header themeCss={{ header }}>
      {socials.map(({ name, url, svg }) => {
        const active = isSectionTheme(theme) && name === theme.social

        return (
          <Logo
            key={name}
            social={name}
            active={active}
            svg={svg}
            url={url}
            themeCss={{ headerLogo }}
          />
        )
      })}
    </Header>
  )
}
export default HeaderContainer
