import { getPostsMeta } from '../utils/utils'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Series({serieses}: {serieses: []}) {
	const router = useRouter()
	const onClick = (event: Event) => {
		const queryKey = event.currentTarget.name
		if(queryKey) {
			router.push({
				pathname: '/seriespost',
				query: {key: queryKey}
			})
		}
	}

	return (
		<>
		  <div id="serieses">
				<h5>系列</h5>
				<ul>
					{
						serieses.map((series, idx) => {
							return <li key={idx}>
								<Link href="#">
									<a name={series[0]} onClick={onClick}>{`${series[0]}:[${series[1]}]`}</a>
								</Link>
							</li>
						})
					}
				</ul>
			</div>
		</>
	)
}


export async function getStaticProps() {
	const posts = getPostsMeta()
	const seriesMap = new Map<string, number>()
	posts.map(post => {
		const series = post.frontmatter.series
		if(series) {
			if(!seriesMap.has(series)) {
				seriesMap.set(series, 1)
			} else {
				let value = seriesMap.get(series)
				if(value !== undefined) {
					seriesMap.set(series, value + 1)
				}
			}
		}
	})
	const serieses = Array.from(seriesMap)
	return {
		props: {
			serieses
		}
	}
}

export default Series