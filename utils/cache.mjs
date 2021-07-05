import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const cachePosts = () => {
	const filePaths = fs.readdirSync(path.join('posts'))
	const fileContents = filePaths.map((filePath) => {
		const slug = filePath.replace('.md', '')
		const fileContent = fs.readFileSync(path.join('posts', filePath))
		const { data: frontmatter } = matter(fileContent)
		return {
			slug,
			frontmatter
		}
	})

	const content = `export const posts = ${JSON.stringify(fileContents)}`
	try {
		fs.writeFileSync(path.join('cache', 'cache.ts'), content)
	} catch (error) {
		console.error(error,'ohh error');
		fs.mkdirSync(path.join("cache"))
		console.log('cache foder has created');
	}
}

cachePosts()