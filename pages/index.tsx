import { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const SphereWithoutSSR = dynamic(() => import('./components/sphere'), { ssr: false });

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Three.js components</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <SphereWithoutSSR />
    </div>
  )
}

export default Home
