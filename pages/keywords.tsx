import { getPostsMeta } from '../utils/utils'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Keywords({keys}: {keys: any}) {
	const router = useRouter()

	function onClick(event: Event) {
		const key = event.currentTarget?.id
		if(key) {
		  router.push({
				pathname: '/keypost',
				query: {key: key}
			})
		}
	}
	return (
		<>
		  <div id="keywords">
			  <h5>关键词</h5>
			  <ul>
				{
					keys.map((key: any, index: number) => {
						return <li key={index}>
							<Link href="#">
								<a onClick={onClick} id={key[0]} value={key[0]}>{`${key[0]}:${key[1]}篇文章`}</a>
							</Link>
						</li>
					})
				}
			  </ul>
		  </div>
		</>
	)
}

export async function getStaticProps(){
	const posts = getPostsMeta()
	const keyMap = new Map<string, number>() //存放关键字和每个关键字的个数
	posts.map(post => {
		const keys = post.frontmatter.keys
		if (keys) {
			const tags = keys.split(' ')
			tags.forEach((tag: string) => {
				if (!keyMap.has(tag)) {
					keyMap.set(tag, 1)
				} else {
					let value = keyMap.get(tag)
					if(value != undefined){
					   keyMap.set(tag, value + 1)
					}
				}
			});
		}
	})
	const keys = Array.from(keyMap)
	return {
		props: {
			keys
		}
	}
}

export default Keywords;