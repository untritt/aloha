const { override } = require("./common")
const gql = require("./snippets/gql")
const json = require("./snippets/json")
const js = require("./snippets/js")
const testJs = require("./snippets/test-js")

module.exports = override(gql, js, testJs)
