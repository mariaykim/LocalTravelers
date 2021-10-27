import Head from 'next/head'
import Layout, { siteTitle, name } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
import Link from 'next/link'
import homeStyles from '../styles/home.module.css'
// import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <section>
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
      </section>
      <section>
        <Link
          href={{
            pathname: '/destinations/[id]',
            query: { id: 'abccc' },
          }}
        >
          <a>Go to pages/destinations/[id].js</a>
        </Link>
      </section>
      {/* <Image
        alt="outdoorsy background"
        src="/images/unsplash1.jpg"
        className={homeStyles.background}
        layout="fill"
        objectFit="cover"
        objectPosition="50% 70%"
        /> */}
    </Layout>
  )
}