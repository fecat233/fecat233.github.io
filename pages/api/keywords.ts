import { posts } from '../../cache/cache'

export default function hander(req: any, res: any) {
	const queryKey = req.query.tag.toLocaleLowerCase()
	const result = posts.filter(post => {
		const keys = post.frontmatter.keys
		if (queryKey && keys) {
			return keys.toLocaleLowerCase().includes(queryKey)
		}
	})
	res.status(200).json(result)
}