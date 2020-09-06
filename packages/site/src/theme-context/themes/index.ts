import { Theme } from "../types"
import {
  INDEX, NOT_FOUND, LINKEDIN, GITHUB, TELEGRAM,
  EXPERIENCE, TOOLS, INTERESTS
} from "../constants"

import indexThemeCss from "./index.module.scss"
import notFoundThemeCss from "./not-found.module.scss"
import linkedinThemeCss from "./linkedin.module.scss"
import githubThemeCss from "./github.module.scss"
import telegramThemeCss from "./telegram.module.scss"

import linkedinSvg from "./linkedin.svg"
import githubSvg from "./github.svg"
import telegramSvg from "./telegram.svg"

import experienceMd from "./experience.content.md"
import toolsMd from "./tools.content.md"
import interestsMd from "./interests.content.md"

export const themes: Theme[] = [
  {
    id: INDEX,
    themeCss: indexThemeCss,
  },
  {
    id: NOT_FOUND,
    themeCss: notFoundThemeCss,
  },
  {
    id: LINKEDIN,
    themeCss: linkedinThemeCss,
    section: EXPERIENCE,
    social: "linkedin",
    svg: linkedinSvg,
    url: "https://www.linkedin.com/in/tuyiana-dondokova/",
    md: experienceMd,
  },
  {
    id: GITHUB,
    themeCss: githubThemeCss,
    section: TOOLS,
    social: "github",
    svg: githubSvg,
    url: "https://github.com/untritt",
    md: toolsMd,
  },
  {
    id: TELEGRAM,
    themeCss: telegramThemeCss,
    section: INTERESTS,
    social: "telegram",
    svg: telegramSvg,
    url: "https://t.me/untritt",
    md: interestsMd,
  },
]
