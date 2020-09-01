const { inspect } = require("util")

const consoleInspect = (obj) => {
  console.log(inspect(obj, { depth: null, color: true }))
}
module.exports = consoleInspect
