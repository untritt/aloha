import { Theme, SectionTheme, NotFoundTheme, IndexTheme } from "./types"
import { NOT_FOUND, INDEX } from "./constants"

export const isSectionTheme = (theme: Theme | SectionTheme): theme is SectionTheme => {
  return (theme as SectionTheme).section !== undefined
}
export const isNotFoundTheme = (
  theme: Theme | NotFoundTheme,
): theme is NotFoundTheme => {
  return (theme as NotFoundTheme).id === NOT_FOUND
}
export const isIndexTheme = (theme: Theme | IndexTheme): theme is IndexTheme => {
  return (theme as IndexTheme).id === INDEX
}
