const ccsModuleExtension = require("./ccs-module")
const svgExtension = require("./svg")
const activeSectionPagesFieldExtension = require("./active-section-page")

const createFieldExtensions = ({ actions }) => {
  const { createFieldExtension } = actions

  const extensions = [
    ccsModuleExtension,
    svgExtension,
    activeSectionPagesFieldExtension,
  ]
  extensions.forEach((ext) => {
    createFieldExtension(ext)
  })
}

module.exports = createFieldExtensions
