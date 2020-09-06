import { NOT_FOUND } from "./constants";
import { themes } from "./themes";
import { THEME_NAME, Theme } from "./types";

const getTheme = (id: THEME_NAME): Theme => themes.find(({ id: curId }) => curId === id) || getTheme(NOT_FOUND)
export default getTheme
