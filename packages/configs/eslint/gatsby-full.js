const { addGatsbyIgnoreFiles, override } = require("./common")
const gql = require("./snippets/gql")
const js = require("./snippets/js")
const testJs = require("./snippets/test-js")
const ts = require("./snippets/ts")
const testTs = require("./snippets/test-ts")
const tsx = require("./snippets/tsx")
const testTsx = require("./snippets/test-tsx")

const gatsbyJs = addGatsbyIgnoreFiles(js)
const gatsbyTestJs = addGatsbyIgnoreFiles(testJs)
const gatsbyTs = addGatsbyIgnoreFiles(ts)
const gatsbyTestTs = addGatsbyIgnoreFiles(testTs)
const gatsbyTsx = addGatsbyIgnoreFiles(tsx)
const gatsbyTestTsx = addGatsbyIgnoreFiles(testTsx)

module.exports = override(
  gql,
  gatsbyJs,
  gatsbyTestJs,
  gatsbyTs,
  gatsbyTestTs,
  gatsbyTsx,
  gatsbyTestTsx,
)
