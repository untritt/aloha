const { NOT_FOUND_PAGE } = require("@common/plugin/constants")
const getSection = require("@common/plugin/get-section")

const createFileNodeFieldExtension = ({ name, nodeType }) => {
  const args = {
    element: {
      type: "String!",
    },
  }
  const extend = (options) => {
    const { element } = options
    return {
      type: nodeType,
      // eslint-disable-next-line no-shadow
      resolve: (source, args, context, info) => {
        const section =
          getSection({ source, context, info, args }) || NOT_FOUND_PAGE

        return context.nodeModel.runQuery({
          query: {
            filter: {
              section: { eq: section },
              element: { eq: element },
            },
          },
          type: nodeType,
          firstOnly: true,
        })
      },
    }
  }

  return {
    name,
    args,
    extend,
  }
}
module.exports = createFileNodeFieldExtension
