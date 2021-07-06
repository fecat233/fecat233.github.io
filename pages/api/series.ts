import { posts } from '../../cache/cache'

export default function hander(req: any, res: any) {
	const queryKey = req.query.key.toLocaleLowerCase()
	const result = posts.filter(post => {
		const series = post.frontmatter.series
		if(queryKey && series) {
			return series.toLocaleLowerCase().includes(queryKey)
		}
	})
	res.status(200).json(result)
}