import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import PostList from '../components/PostList'

function SeriesPost() {
	const [posts, setPosts] = useState([])
	const router = useRouter()
	const queryKey = router.query.key
	useEffect(() => {
		fetch(`/api/series?key=${queryKey}`)
		  .then(res => res.json())
			.then(res => {setPosts(res)})
	}, [])
	return(
		<>
		  <PostList posts={posts} />
		</>
	)
}

export default SeriesPost