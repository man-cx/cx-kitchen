import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

export type BlogPost = {
  id: string
  title: string
  date: string
  image?: string
  excerpt: string
  content: string
  author: string
  tags: string[]
}

export async function getAllPosts(): Promise<BlogPost[]> {
  // Create posts directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(async fileName => {
        const id = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)

        const processedContent = await remark()
          .use(html)
          .process(matterResult.content)
        const content = processedContent.toString()

        return {
          id,
          content,
          ...(matterResult.data as Omit<BlogPost, 'id' | 'content'>),
        }
      })
  )

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPost(id: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
    const content = processedContent.toString()

    return {
      id,
      content,
      ...(matterResult.data as Omit<BlogPost, 'id' | 'content'>),
    }
  } catch (error) {
    return null
  }
} 