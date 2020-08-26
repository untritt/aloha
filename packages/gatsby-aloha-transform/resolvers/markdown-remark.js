const isMarkdownRemarkNode = require("@common/plugin/is-markdown-remark-node")
const {
  NOT_FOUND_PAGE,
  MD_HTML_NODE_TYPE,
} = require("@common/plugin/constants")
const getSection = require("@common/plugin/get-section")

const mardownRemarkResolver = {
  type: "MarkdownRemark",
  resolve: async (source, args, context, info) => {
    const section =
      getSection({ source, context, info, args }) || NOT_FOUND_PAGE

    const mdHtml = await context.nodeModel.runQuery({
      query: { filter: { section: { eq: section } } },
      type: MD_HTML_NODE_TYPE,
      firstOnly: true,
    })

    const mardownRemark = context.nodeModel.findRootNodeAncestor(
      mdHtml,
      isMarkdownRemarkNode,
    )
    return mardownRemark
  },
}

module.exports = mardownRemarkResolver
