import Post from '../components/Post'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function Home({ posts }: { posts: any }) {
  const postcard = posts.map((post: any, index: number) => {
    return <Post key={index} post={post}/>
  })
  return (
    <>
      <main className="container-fluid">
        <div>
          <ul>
            {postcard}
          </ul>
        </div>
      </main>
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
