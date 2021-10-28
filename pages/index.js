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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <MainSection />
        <TravelDestination />
      </section>
      <Link
        href={{
          pathname: '/destinations/[id]',
          query: { id: 'abccc' },
        }}
      >
        <a>Go to pages/destinations/[id].js</a>
      </Link>
    </Layout>
  )
}