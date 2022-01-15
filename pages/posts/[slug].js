import Head from 'next/head'
import { getPost } from '../../lib/posts'

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'first-post' } },
      { params: { slug: 'second-post' } },
    ],
    fallback: false, // 上記がないと404になる
  }
}

export async function getStaticProps(context) {
  console.log('[PostPage] getStaticProps()', context)
  const post = await getPost('first-post')
  return {
    props: {
      post,
    },
  }
}

function PostPage({ post }) {
  console.log('[PostPage] render', post)
  return (
    <>
      <Head>
        <title>{post.title} - My Blog</title>
      </Head>
      <main>
        <p>{post.date}</p>
        <h1>{post.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  )
}

export default PostPage
