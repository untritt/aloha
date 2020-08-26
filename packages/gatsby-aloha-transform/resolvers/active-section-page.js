const sectionArgs = require("@common/plugin/section-args")

const activeSectionPagesResolver = {
  type: "Boolean!",
  args: sectionArgs,
  // eslint-disable-next-line no-unused-vars
  resolve: async (source, args, context, info) => {
    const { section } = args
    const { nodeModel } = context
    const {
      section: { name },
    } = nodeModel.findRootNodeAncestor(source)

    return name === section
  },
}
module.exports = activeSectionPagesResolver
