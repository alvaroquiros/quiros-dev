import * as React from 'react'
// @ts-expect-error
import * as styles from './layout.module.css'
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql, Link } from 'gatsby'

{/*This could be done as: Layout = (props) => ... then props.pageTitle*/}
const Layout = ({pageTitle, children}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
  <div className={styles.container}>
    <title>{pageTitle} | {data.site.siteMetadata.title}</title>
    <header className={styles.siteTitle}>{data.site.siteMetadata.title}</header>
    <nav>
      <StaticImage width={100} src="../images/icon.png" alt="Gatsby icon" />
      <ul className={styles.navLinks}>
          <li className={styles.navLinkItem}>
            <Link to="/" className={styles.navLinkText}>
              Home
            </Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link to="/about" className={styles.navLinkText}>
              About
            </Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link to="/blog" className={styles.navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={styles.heading}>{pageTitle}</h1>
        {children}
    </main>
  </div>
  )
}


export default Layout