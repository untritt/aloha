export const arrToCss = (...arr: string[]): string => arr.join(" ")
export const cssToArr = (str: string): string[] => {
  const trimedStr = str.trim()
  if (!trimedStr.length) {
    return []
  }

  return trimedStr.split(" ")
}
