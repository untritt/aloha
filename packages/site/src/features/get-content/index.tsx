import React from "react"

import { Theme } from "../../theme-context/types"
import { isNotFoundTheme } from "../../theme-context/type-guards"

import NotFoundContent from "./not-found"
import RegularContent from "./regular"

const getContent = (theme: Theme) => {
  return isNotFoundTheme(theme) ? <NotFoundContent /> : <RegularContent />
}
export default getContent
