const compose = require("@common/plugin/compose")

const createPageResolvers = require("./create-page-resolvers")

module.exports = compose([createPageResolvers])
