import Post from '../components/Post'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function Home({ posts }) {
  const postcard = posts.map((post: any, index: number) => {
    return <Post key={index} img={post.img} title={post.title} description={post.description}/>
  })
  return (
    <>
      <main className="container">
        <ul>
          {postcard}
        </ul>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const filenames = fs.readdirSync(path.join('posts'))
  const posts = filenames.map((filename) => {
    const file = fs.readFileSync(path.join('posts', filename))
    const { data: frontmatter } = matter(file)
    return frontmatter
  })

  return {
    props: {
      posts,
    }
  }
}
