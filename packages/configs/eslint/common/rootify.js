const rootSnippet = {
  root: true,
}

const rootify = (eslintrc) => ({
  ...eslintrc,
  ...rootSnippet,
})
module.exports = rootify
