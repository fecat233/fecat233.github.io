import Link from 'next/link'

function Post({ post }: {post: any}) {

	return (
		<section className="postcard">
			<div className="card">
				{
					post.frontmatter.img !== undefined &&
					<img className="card-img-top" src={post.frontmatter.img} alt="card image cap" />
				}
				<h5 className="card-title title">{post.frontmatter.title}</h5>
				<div className="card-body">
					<p className="card-text">
						{post.frontmatter.description}
				    </p>
				</div>
				<Link href={`/blog/${post.slug}`}>
					<a className="btn btn-primary">继续阅读吧</a>
				</Link>
			</div>
		</section>
	)
}

export default Post;