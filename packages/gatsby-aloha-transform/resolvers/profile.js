const sectionArgs = require("@common/plugin/section-args")
const createGetPageByArgsAsync = require("./create-get-page-by-args-async")

const pageProfileResolver = {
  type: "PageProfile!",
  args: sectionArgs,
  // eslint-disable-next-line no-unused-vars
  resolve: async (source, args, context, info) => {
    const getPageByArgsAsync = createGetPageByArgsAsync(context.nodeModel)
    const page = await getPageByArgsAsync(args)

    return page.profile
  },
}

module.exports = pageProfileResolver
