import { posts } from '../../cache/cache'

export default function hander(req: any, res: any) {
	const queryKey = req.query.key.toLocaleLowerCase()
	const result = posts.filter(post => {
		if(queryKey) {
			return post.frontmatter.series.toLocaleLowerCase().includes(queryKey)
		} else {
			return []
		}
	})
	res.status(200).json(result)
}