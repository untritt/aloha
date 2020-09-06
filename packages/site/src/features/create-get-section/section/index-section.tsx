import React, { useContext } from "react"
import cn from "classnames"

import { sectionContent as commonContentCss } from "./section.module.scss"
import Nav from "./nav"
import Layout from "../../layout"

const IndexSection = ({ sections }) => {
  return (
    <Layout>
      <Nav sections={sections} />
    </Layout>
  )
}
export default IndexSection
