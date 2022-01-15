import Head from 'next/head'
import NavBar from '../components/NavBar'

function AboutPage() {
  console.log('[Home Page] render')
  return (
    <>
      <Head>
        <title>About - My Blog</title>
      </Head>
      <main>
        <h1>About</h1>
      </main>
    </>
  )
}

export default AboutPage
