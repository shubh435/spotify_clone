import { useSession } from 'next-auth/react'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import SpotifyWebApi from 'spotify-web-api-node'
import { playingTrackState } from '../atoms/playerAtom'
import Body from './Body'
import Player from './Player'
import Right from './Right'
import Sidebar from './Sidebar'

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
})

const Dashboard = () => {
  const { data: session } = useSession()
  const acceessToken = session?.accessToken
  const [playingTrack, setPlayingTrack] = useRecoilState<any>(playingTrackState)
  const [showPlayer, setShowPlayer] = useState<boolean>(false)
  useEffect(() => {
    setShowPlayer(true)
    console.log({ "token": process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID ,"secret":process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET})
  }, [])
  console.log({ "token": process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID ,"secret":process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET})

  const chooseTrack = (track: any) => {
    setPlayingTrack(track)
  }
  return (
    <main className="flex min-h-screen min-w-max bg-black lg:pb-24">
      <Sidebar />
      <Body spotifyApi={spotifyApi} chooseTrack={chooseTrack} />
      <Right spotifyApi={spotifyApi} chooseTrack={chooseTrack} />

      <div className="fixed bottom-0 left-0 right-0 z-50">
        <Player accessToken={acceessToken} trackUri={playingTrack.uri} />
      </div>
    </main>
  )
}

export default Dashboard
