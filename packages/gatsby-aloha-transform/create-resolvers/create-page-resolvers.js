const mardownRemarkResolver = require("../resolvers/markdown-remark")
const sectionPagesResolver = require("../resolvers/section-pages")
const sectionsResolver = require("../resolvers/sections")
const socialsResolver = require("../resolvers/socials")
const pageProfileResolver = require("../resolvers/profile")
const fakeResolver = require("../resolvers/fake")
const indexPageResolver = require("../resolvers/index-page")
const notFoundPageResolver = require("../resolvers/not-found-page")

const createPageResolvers = ({ createResolvers }) => {
  const resolvers = {
    Query: {
      sectionPages: sectionPagesResolver,
      allSections: sectionsResolver,
      allSocials: socialsResolver,
      profile: pageProfileResolver,
      fake: fakeResolver,
      // indexPage: indexPageResolver,
      // notFoundPage: notFoundPageResolver,
    },
    SectionPageSection: {
      md: mardownRemarkResolver,
      sections: sectionsResolver,
    },
    SectionPageHeader: {
      socials: socialsResolver,
    },
  }

  createResolvers(resolvers)
}
module.exports = createPageResolvers
