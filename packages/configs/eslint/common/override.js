const rootify = require("./rootify")

const override = (...eslintrc) => {
  const eslintrcOverrides = eslintrc.map(({ snippet, overrides }) => ({
    ...snippet,
    ...overrides,
  }))
  return rootify({ overrides: eslintrcOverrides })
}
module.exports = override