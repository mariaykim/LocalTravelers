import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import NavBar from './navbar.js'
import Footer from './footer.js'
import Link from 'next/link'

const name = 'Maria Kim'
export const siteTitle = 'LocalTravelers website'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="description"
          content="Travel like a local would"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <NavBar className={styles.header} />
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <Footer />
    </div>
  )
}