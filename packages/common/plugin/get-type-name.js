const { camelCase } = require("lodash")
const { upperFirst } = require("lodash")

const getTypeName = (name) => upperFirst(camelCase(name))
module.exports = getTypeName
