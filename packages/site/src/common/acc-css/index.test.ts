import accCss from "./index"
import { arrToCss } from "../css-utils"

const class0 = "class0"
const class1 = "class1"
const class2 = "class2"
const class3 = "class3"
const class4 = "class4"

const classes01 = arrToCss(class0, class1)
const classes012 = arrToCss(class0, class1, class2)
const classes0123 = arrToCss(class0, class1, class2, class3)
const classes01234 = arrToCss(class0, class1, class2, class3, class4)
const classes12340 = arrToCss(class1, class2, class3, class4, class0)
const classes23401 = arrToCss(class2, class3, class4, class0, class1)
const classes34012 = arrToCss(class3, class4, class0, class1, class2)
const classes40123 = arrToCss(class4, class0, class1, class2, class3)

describe("#accCss", () => {
  describe("when passed no arguments", () => {
    test("should return empty result and adder", () => {
      const [getClassAcc] = accCss()
      expect(getClassAcc()).toBe("")
    })
  })

  describe("when passed first class", () => {
    test("should return class only", () => {
      const [getClassAcc] = accCss(class0)
      expect(getClassAcc()).toBe(class0)
    })
  })

  describe("when pass arguments one by one", () => {
    test("should return acc classes", () => {
      const [getClassAcc, addToClassAcc] = accCss(class0)

      const c01 = addToClassAcc(class1)
      expect(c01).toBe(classes01)
      expect(getClassAcc()).toBe(classes01)

      const c012 = addToClassAcc(class2)
      expect(getClassAcc()).toBe(classes012)
      expect(c012).toBe(classes012)

      const c0123 = addToClassAcc(class3)
      expect(getClassAcc()).toBe(classes0123)
      expect(c0123).toBe(classes0123)

      const c01234 = addToClassAcc(class4)
      expect(getClassAcc()).toBe(classes01234)
      expect(c01234).toBe(classes01234)
    })
  })

  describe("when passed already existent class", () => {
    test("should return new classes with existent class at the end", () => {
      const [getClassAcc, addToClassAcc] = accCss(classes01234)

      const c0 = addToClassAcc(class0)
      expect(getClassAcc()).toBe(classes12340)
      expect(c0).toBe(classes12340)

      const c01 = addToClassAcc(class1)
      expect(getClassAcc()).toBe(classes23401)
      expect(c01).toBe(classes23401)

      const c012 = addToClassAcc(class2)
      expect(getClassAcc()).toBe(classes34012)
      expect(c012).toBe(classes34012)

      const c0123 = addToClassAcc(class3)
      expect(getClassAcc()).toBe(classes40123)
      expect(c0123).toBe(classes40123)

      const c01234 = addToClassAcc(class4)
      expect(getClassAcc()).toBe(classes01234)
      expect(c01234).toBe(classes01234)

      const c12340 = addToClassAcc(class0)
      expect(getClassAcc()).toBe(classes12340)
      expect(c12340).toBe(classes12340)

      const c23401 = addToClassAcc(class1)
      expect(getClassAcc()).toBe(classes23401)
      expect(c23401).toBe(classes23401)

      const c34012 = addToClassAcc(class2)
      expect(getClassAcc()).toBe(classes34012)
      expect(c34012).toBe(classes34012)

      const c40123 = addToClassAcc(class3)
      expect(getClassAcc()).toBe(classes40123)
      expect(c40123).toBe(classes40123)
    })
  })
})
