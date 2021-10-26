import Head from 'next/head'
import Layout, { siteTitle, name } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
import Link from 'next/link'
// import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Image
        priority
        src="/images/profile.jpg"
        className={utilStyles.borderCircle}
        height={144}
        width={144}
        alt={name}
      />
      <section>
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </section>
      <section className={utilStyles.headingMd}>
        <p>Hey, I like cheese</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
      </section>
      {/* <Image
        src="/images/unsplash1.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="50% 70%"
        zIndex="1"
        /> */}
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
    </Layout>
  )
}