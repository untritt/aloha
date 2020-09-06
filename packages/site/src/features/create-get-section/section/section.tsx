import React, { useContext } from "react"
import cn from "classnames"

import { sectionContent as commonContentCss } from "./section.module.scss"
import Nav from "./nav"
import Layout from "../../layout"
import Md from "./md"

const Section = ({ sections }) => {
  return (
    <Layout>
      <Nav sections={sections} />
      <Md />
    </Layout>
  )
}
export default Section
