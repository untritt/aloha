const createPageElementNodeResolver = (getSection) => (element, nodeType) => {
  return (source, args, context, info) => {
    const section = getSection({ source, context })

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
  }
}
module.exports = createPageElementNodeResolver
