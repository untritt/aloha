import { useState } from "react"

import { Theme, THEME_NAME } from "./types"
import { INDEX } from "./constants"
import getTheme from "./get-theme"


const useTheme = () => {
  const [theme, changeTheme] = useState<Theme>(getTheme(INDEX))
  const createChangeTheme = (id: THEME_NAME): () => void => {
    const theme = getTheme(id)

    return (): void => {
      changeTheme(() => theme)
    }
  }

  return {
    theme,
    createChangeTheme,
  }
}
export default useTheme