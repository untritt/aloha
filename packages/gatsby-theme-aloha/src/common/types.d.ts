import { Css } from "@common/type-defs"

export type ThemeCssModule<CssClass extends Css> = {
  [field in CssClass]?: Css
}
export type ThemeCssProp<CssClass extends Css> = {
  themeCss: ThemeCssModule<CssClass>
}
