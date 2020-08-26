const compose = require("@common/plugin/compose")

const createFieldExtensions = require("./create-field-extensions")
const createFileNodeSchemaCustomization = require("./file-node")
const createPageNodeSchemaCustomization = require("./page-node")

module.exports = compose([
  createFieldExtensions,
  createFileNodeSchemaCustomization,
  createPageNodeSchemaCustomization,
])
