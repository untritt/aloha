import React, { Children, ReactNode } from "react"

import { conatiner, conatinerItem } from "./content.module.scss"
import { Css } from "../../../theme-context/types"

const Content = ({
  className,
  children,
}: {
  className: Css
  children: ReactNode[]
}) => {
  return (
    <main className={`${conatiner} ${className}`}>
      {Children.map(children, (child) => {
        return <div className={conatinerItem}>{child}</div>
      })}
    </main>
  )
}
export default Content
