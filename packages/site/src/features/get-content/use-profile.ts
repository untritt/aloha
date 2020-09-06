import { useStaticQuery, graphql } from "gatsby"

const useProfile = () => {
  const {
    site: {
      siteMetadata: { name, position },
    },
  }: {
    site: {
      siteMetadata: { name: string; position: string }
    }
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          name
          position
        }
      }
    }
  `)
  return { name, position }
}
export default useProfile