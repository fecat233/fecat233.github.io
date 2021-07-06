import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import PostList from '../components/PostList'
/**
 * 渲染按关键字和系列查询到的post
 * @returns
 */
function KeyPost() {
	const [posts, setPosts] = useState([])
	const router = useRouter()

	useEffect(() => {
		const key = router.query.key
		fetch(`/api/keywords?tag=${key}`)
		  .then(res => res.json())
			.then(res => {setPosts(res)})
	}, [])

	return (
		<>
		  <PostList posts={posts}/>
		</>
	)
}


export default KeyPost;