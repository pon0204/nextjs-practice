import Head from 'next/head'
import Link from 'next/link'
import NavBar from '../components/NavBar'

function HomePage() {
  console.log('[Home Page] render')
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <main>
        <h1>My Blog</h1>
        <ul>
          <li>
            <Link href="/posts/first-post">
              <a>First Post</a>
            </Link>
          </li>
        </ul>
      </main>
    </>
  )
}

export default HomePage
