const gatsbyExcludedFiles = [".cache", "public"]

const addGatsbyIgnoreFiles = ({ snippet, overrides: eslintrcOverrides }) => {
  const eslintrcOverridesExcludedFiles = eslintrcOverrides.excludedFiles || []
  const excludedFiles = [
    ...gatsbyExcludedFiles,
    ...eslintrcOverridesExcludedFiles
  ]
  const overrides = {
    ...eslintrcOverrides,
    excludedFiles,
  }
  return {
    snippet,
    overrides,
  }
}
module.exports = addGatsbyIgnoreFiles
