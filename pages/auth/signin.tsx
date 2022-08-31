import { getProviders, signIn, useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Loader from '../../components/Loader'

const signin = ({ providers }: any) => {
  const { data: session } = useSession()
  const router = useRouter()
  // console.log({ token: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID, session })

  useEffect(() => {
    if (session) {
      router.push('/')
    }
  }, [session])
  if (session) return <Loader />
  return (
    <div className="bg-black h-screen flex flex-col items-center pt-40 space-y-8">
      <Head>
        <title>Login - spotify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        src="https://rb.gy/y9mwtb"
        height={250}
        width={600}
        objectFit="contain"
        className="animate-pulse"
      />
      {providers &&
        Object.values(providers).map((provider: any) => {
          return (
            <div key={provider.id}>
              <button
                className="rounded-full border border-transparent bg-[#1db954] py-4 px-6 text-xs font-bold uppercase tracking-wider text-white transition duration-300 ease-out hover:scale-105 hover:bg-[#0db146] md:text-base"
                onClick={() => signIn(provider.id)}
              >
                Sign in with {provider.name}
              </button>
            </div>
          )
        })}
    </div>
  )
}

export default signin

export async function getServerSideProps() {
  const providers = await getProviders()
 
  return {
    props: { providers },
  }
}
