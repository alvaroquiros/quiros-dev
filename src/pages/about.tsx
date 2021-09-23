import * as React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/layout"

export default function AboutPage(props: PageProps) {
  return (
    <main>
        <Layout pageTitle={"About Page"}>
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </Layout>

        <hr/>
        <h2>Path:</h2>
        <p>{props.path}</p>

      
    </main>
  )
}
