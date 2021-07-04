import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import hljs from 'highlight.js'
//博客详情页面
function PostPage({ post }) {

	return (
		<main className="container-fluid">
			<div className="card" id="blogcard">
				{
					post.frontmatter.img !== undefined &&
					<img src={post.frontmatter.img} alt="cover image"/>
				}
				<div className="card-body">
					<h3 className="card-title">{post.frontmatter.title}</h3>
					<div dangerouslySetInnerHTML={{__html:marked(post.content)}} id="content"></div>
				</div>
		    </div>
		</main>
	)
}

export async function getStaticPaths() {
	const filenames = fs.readdirSync(path.join('posts'))
	const paths = filenames.map((filename) => {
		const slug = filename.replace('.md', '')
		return {
			params: {
				slug: slug
			}
		}
	})
	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps({ params }) {
	const file = fs.readFileSync(path.join('posts', `${params.slug}.md`))
	const {data: frontmatter, content} = matter(file)
	return {
		props: {
			post: {
				frontmatter,
				content
			}
		}
	}
}

marked.setOptions({
  highlight: function(code, lang) {
    return hljs.highlight(lang, code).value;
  }
});

export default PostPage;