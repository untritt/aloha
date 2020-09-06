export type GetId = <T, Id>(item: T) => Id | T
export type StartFrom<T> = (item: T) => T[]

export const identity = <T>(id: T): T => id

const startFromFactory = <T>(
  arr: T[],
  getItemId: GetId = identity,
): StartFrom<T> => {
  return (item: T): T[] => {
    const itemIndex = arr.findIndex(
      (curItem) => getItemId(curItem) === getItemId(item),
    )
    if (itemIndex <= 0) {
      return arr
    }

    return [...arr.slice(itemIndex), ...arr.slice(0, itemIndex)]
  }
}
export default startFromFactory
