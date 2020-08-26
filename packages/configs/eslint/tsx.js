const { override } = require("./common")
const gql = require("./snippets/gql")
const ts = require("./snippets/ts")
const testTs = require("./snippets/test-ts")
const tsx = require("./snippets/tsx")
const testTsx = require("./snippets/test-tsx")

module.exports = override(gql, ts, testTs, tsx, testTsx)
