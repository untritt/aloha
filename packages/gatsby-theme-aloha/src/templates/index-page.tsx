import React from "react"

import { Layout } from "../components"
import { Header, Profile, SEO, Nav, Sections } from "../features"

const SectionTemplate = () => {
  return (
    <>
      <SEO />
      <Layout>
        <Header />
        <Profile />
        <Sections>
          <Nav />
        </Sections>
      </Layout>
    </>
  )
}
export default SectionTemplate
