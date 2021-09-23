import * as React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/layout"

export default function IndexPage(props: PageProps) {
  return (
    <main>
        <Layout pageTitle={"Home Page"}>
            <p>I'm making this by following the Gatsby Tutorial.</p>
        </Layout>

        <hr/>
        <h2>Path:</h2>
        <p>{props.path}</p>
      
    </main>
  )
}
