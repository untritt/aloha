const consoleInspect = require("@common/plugin/console-inspect")

const fakeResolver = {
  type: "String!",
  // eslint-disable-next-line no-unused-vars
  resolve: async (source, args, context, info) => {
    console.log("args")
    consoleInspect(args)
    console.log("context")
    consoleInspect(context)

    return "fake"
  },
}

module.exports = fakeResolver
