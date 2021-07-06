import Post from './Post'

function PostList({posts}: {posts: any}) {
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

export default PostList;