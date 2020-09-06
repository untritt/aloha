import { cssToArr, arrToCss } from "../css-utils"

const getNextAcc = (cssAcc = "", css = ""): string => {
  const cssArr = cssToArr(css)
  const accCssArr = cssToArr(cssAcc)

  const nextAccArr = cssArr.reduce(
    (prevAcc: string[], curCss: string): string[] => {
      if (curCss === "") {
        return prevAcc
      }

      const curCssIndex = prevAcc.findIndex((accCss) => accCss === curCss)
      const isLast = curCssIndex === prevAcc.length - 1
      if (isLast) {
        return prevAcc
      }

      const isExists = curCssIndex > -1

      const accWithoutCurCss = isExists
        ? [...prevAcc.slice(0, curCssIndex), ...prevAcc.slice(curCssIndex + 1)]
        : prevAcc

      const acc = [...accWithoutCurCss, curCss]

      return acc
    },
    accCssArr,
  )

  return arrToCss(...nextAccArr)
}

const accCss = (initCss?: string): ((str?: string) => string) => {
  let acc = initCss || ""

  const accomulateCss = (css?: string): string => {
    if (!css) return acc
    const nextAcc = getNextAcc(acc, css)
    acc = nextAcc

    return nextAcc
  }

  return accomulateCss
}
export default accCss
