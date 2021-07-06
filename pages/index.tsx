import PostList from '../components/PostList'
import { getPostsMeta } from '../utils/utils'

export default function Home({ posts }: { posts: any }) {
  return (
    <>
      <PostList posts={posts}/>
    </>
  )
}

export async function getStaticProps() {
  const posts = getPostsMeta()
  return {
    props: {
      posts,
    }
  }
}
