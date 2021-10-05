import * as React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

export default function AboutPage(props: PageProps) {
  return (
    <main>
        <Layout pageTitle={"About Page"}>
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
            <hr/>
            <StaticImage width={1000} src="../images/foto1.jpeg" alt="Microsoft Fligh Simulator 2020 screenshot" />
            <h2>Path:</h2>
            <p>{props.path}</p>
        </Layout>
    </main>
  )
}
