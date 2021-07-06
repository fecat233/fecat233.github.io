import PostList from '../components/PostList'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function Home({ posts }: { posts: any }) {
  return (
    <>
      <PostList posts={posts}/>
    </>
  )
}

export async function getStaticProps() {
  const filenames = fs.readdirSync(path.join('posts'))
  const posts = filenames.map((filename) => {
    const slug = filename.replace('.md', '')
    const file = fs.readFileSync(path.join('posts', filename))
    const { data: frontmatter } = matter(file)
    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      posts,
    }
  }
}
