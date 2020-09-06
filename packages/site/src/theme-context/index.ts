import { createContext } from "react"
import getTheme from "./get-theme"
import { INDEX } from "./constants"
import { THEME_NAME } from "./types"

const ThemeContext = createContext({
  theme: getTheme(INDEX),
  createChangeTheme: (id: THEME_NAME) => () => {},
})
export default ThemeContext
