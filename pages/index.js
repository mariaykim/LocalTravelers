import Head from 'next/head'
import Layout, { siteTitle, name } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
import Link from 'next/link'
import homeStyles from '../styles/home.module.css'
import Button from '../components/Button/button.js'
import TravelDestination from '../components/TravelDestination/travelDestination.js'
import MainSection from '../components/MainSection'
// import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
    <section>
      <MainSection />
      {/* <Image
        className={homeStyles.landingImage}
        src="/images/unsplash1.jpg"
        alt="outdoorsy background"
        height="30%"
        width="40px"
        layout="responsive"
        objectFit="cover"
        objectPosition="50% 70%"
      /> */}
    </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <section className={homeStyles.landingText}>
          <Link
            href={{
              pathname: '/destinations/[id]',
              query: { id: 'abccc' },
            }}
          >
            <a>Go to pages/destinations/[id].js</a>
          </Link>
        </section>
      </section>
    </Layout>
  )
}