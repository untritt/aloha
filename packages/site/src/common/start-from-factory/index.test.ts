import startFromFactory, { GetId, StartFrom } from "."

describe("#startFromFactory", () => {
  describe("initialized by empty array", () => {
    let startFrom
    const arr = []

    beforeEach(() => {
      startFrom = startFromFactory(arr)
    })
    test("should always return init array", () => {
      expect(startFrom(0)).toBe(arr)
      expect(startFrom(null)).toBe(arr)
      expect(startFrom({})).toBe(arr)
      expect(startFrom("")).toBe(arr)
    })
  })
  describe("initialized by item array", () => {
    let startFrom
    const arr = [0, 1, 2, 3, 4]

    beforeEach(() => {
      startFrom = startFromFactory(arr)
    })

    describe("pass non-existent item", () => {
      test("should return init array", () => {
        expect(startFrom(-1)).toBe(arr)
      })
    })

    describe("pass first item", () => {
      test("should return init array", () => {
        expect(startFrom(arr[0])).toBe(arr)
      })
    })

    describe("pass not first item", () => {
      test("should return same length array started from paseed item", () => {
        expect(startFrom(arr[1])).toEqual([1, 2, 3, 4, 0])
        expect(startFrom(arr[2])).toEqual([2, 3, 4, 0, 1])
        expect(startFrom(arr[3])).toEqual([3, 4, 0, 1, 2])
        expect(startFrom(arr[4])).toEqual([4, 0, 1, 2, 3])
      })
    })
  })
})
