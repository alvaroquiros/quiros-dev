import * as React from "react"
import Layout from "../components/layout"
import {graphql} from 'gatsby'

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default function BlogPage({ data }) {
  return (
    <main>
        <Layout pageTitle={"Blog Page"}>
            <ul>
                {
                    data.allFile.nodes.map(node => (
                    <li key={node.name}>
                        {node.name}
                    </li>
                    ))
                }
            </ul>
        </Layout>
    </main>
  )
}


