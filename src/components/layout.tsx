import * as React from 'react'
import { Link } from 'gatsby'
// @ts-ignore
import * as styles from './layout.module.css'

{/*This could be done as: Layout = (props) => ... then props.pageTitle*/}
const Layout = ({pageTitle, children}) => (
    <div className={styles.container}>
      <title>{pageTitle}</title>
      <nav>
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
          </ul>
        </nav>
        <main>
          <h1 className={styles.heading}>{pageTitle}</h1>
          {children}
      </main>
    </div>
)

export default Layout