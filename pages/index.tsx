import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Dashboard from '../components/Dashboard'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Spotify - Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Spotify is all the music you’ll ever need."
        ></meta>
      </Head>

      <Dashboard />
    </>
  )
}

export default Home
