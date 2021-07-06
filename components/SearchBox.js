import { useState } from 'react'
import Link from 'next/link'

function SearchBox(props) {
	const [query, setQuery] = useState('')
	const [posts, setPosts] = useState([])
	const [active, setActive] = useState(false)

	function onChange() {
		const keyword = document.getElementById('searchbox').value
		if (keyword) {
			setQuery(keyword)
			fetch(`/api/search?keyword=${keyword}`)
			.then(res => res.json())
			.then(result => {setPosts(result)})
		} else {
			setQuery('')
		}
	}

	function onFocus() {
		setActive(true)
	}

	function onBlur() {
		setActive(false)
		setPosts([])
	}
	return (
		<div id="search">
			<input id="searchbox" type="text"
			placeholder={props.placeholder}
			onChange={onChange}
			onFocus={onFocus}
			onBlur={onBlur}/>
			{
				active && query && posts.length > 0 &&
				<ul>
					{
						posts.map((post, index) => {
							return <li key={index}>
									<Link href={`/blog/${post.slug}`}>
										<a>{post.frontmatter.title}</a>
									</Link>
								</li>
						})
					}
			    </ul>
            }
		</div>
	)
}

export default SearchBox;