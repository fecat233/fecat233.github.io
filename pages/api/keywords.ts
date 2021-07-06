import { posts } from '../../cache/cache'

export default function hander(req: any, res: any) {
	const queryKey = req.query.tag.toLocaleLowerCase()
	const result = posts.filter(post => {
		if (queryKey) {
			const keys = post.frontmatter.keys?.toLocaleLowerCase()
			return keys.includes(queryKey, 0)
		} else {
			[]
		}
	})
	res.status(200).json(result)
}