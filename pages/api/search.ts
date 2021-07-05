import { posts } from '../../cache/cache'

export default function hander(req: any, res: any) {
	const keyword = req.query.keyword.toLocaleLowerCase()
	const result = posts.filter((post) => {
		if (keyword) {
			return post.frontmatter.title.toLocaleLowerCase().includes(keyword)
		} else {
			return []
		}
	})
	res.status(200).json(result)
}