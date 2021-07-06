import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

/**
 * 从文件系统获取post的元信息
 */
export function getPostsMeta() {
	const filenames = fs.readdirSync(path.join('posts'))
	const posts = filenames.map((filename) => {
		const slug = filename.replace('.md', '')
		const file = fs.readFileSync(path.join('posts', filename))
		const { data: frontmatter } = matter(file)
		return {
		slug,
		frontmatter
		}
	})
	return posts;
}