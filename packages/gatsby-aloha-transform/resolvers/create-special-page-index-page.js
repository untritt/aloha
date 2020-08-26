const getPageType = require("@common/plugin/get-page-type")

const createSpecialPageResolver = (pageType) => ({
  type: `${pageType}`,
  // eslint-disable-next-line no-unused-vars
  resolve: (source, args, context, info) => {
    const indexPages = context.nodeModel.getAll({
      type: getPageType(pageType),
    })[0]

    return indexPages
  },
})

module.exports = createSpecialPageResolver
