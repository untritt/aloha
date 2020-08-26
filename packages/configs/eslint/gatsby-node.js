const { addGatsbyIgnoreFiles, override } = require("./common")
const js = require("./snippets/js")
const testJs = require("./snippets/test-js")

const gatsbyJs = addGatsbyIgnoreFiles(js)
const gatsbyTestJs = addGatsbyIgnoreFiles(testJs)
module.exports = override(gatsbyJs, gatsbyTestJs)
