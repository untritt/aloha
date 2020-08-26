const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const { data, errors } = await graphql(`
    query {
      sectionPages {
        section {
          name
        }
      }
    }
  `)

  // Handle errors
  if (errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create pages for each markdown file.
  const testTemplate = path.resolve(`${__dirname}/src/templates/section.tsx`)
  const { sectionPages } = data
  sectionPages.forEach(({ section:{ name: section }}) => {
    createPage({
      path: `/${section}`,
      component: testTemplate,
      context: { section },
    })
  })
}
