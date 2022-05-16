import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Spotify - Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Spotify is all the music you’ll ever need."
        ></meta>
      </Head>
    </div>
  )
}

export default Home
