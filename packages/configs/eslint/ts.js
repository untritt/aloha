const { override } = require("./common")
const gql = require("./snippets/gql")
const ts = require("./snippets/ts")
const testTs = require("./snippets/test-ts")

module.exports = override(gql, ts, testTs)
