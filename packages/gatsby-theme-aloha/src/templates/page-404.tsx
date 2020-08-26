import React from "react"

import { Layout } from "../components"
import { Header, Profile, SEO, Nav, Sections } from "../features"

const Page404 = () => {
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
export default Page404
