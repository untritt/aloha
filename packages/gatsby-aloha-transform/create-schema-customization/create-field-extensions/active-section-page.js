const activeSectionPagesResolver = require("../../resolvers/active-section-page")

const activeSectionPagesFieldExtension = {
  name: "active",
  extend: () => activeSectionPagesResolver,
}
module.exports = activeSectionPagesFieldExtension
