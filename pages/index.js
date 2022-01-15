import Head from 'next/head'
import Link from 'next/link'
import NavBar from '../components/NavBar'
import { getPosts } from '../lib/posts'

export async function getStaticProps() {
  const posts = await getPosts()
  return {
    props: { posts },
  }
}

function HomePage({ posts }) {
  console.log('[Home Page] render', posts)
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <main>
        <h1>My Blog</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default HomePage
