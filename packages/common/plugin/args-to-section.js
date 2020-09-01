const { parse } = require("path")

const argsToSection = ({ path }) => {
  const { name } = parse(path)

  return name
}
module.exports = argsToSection
