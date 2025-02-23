import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

export type BlogPost = {
  id: string
  title: string
  date: string
  excerpt: string
  content: string
  image?: string
}

export async function getAllPosts(): Promise<BlogPost[]> {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPosts = await Promise.all(fileNames.map(async (fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Convert markdown to HTML
    const content = marked.parse(matterResult.content).toString()

    return {
      id,
      content,
      ...(matterResult.data as { title: string; date: string; excerpt: string; image?: string }),
    }
  }))

  // Sort posts by date
  return allPosts.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getPost(id: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Convert markdown to HTML
    const content = marked.parse(matterResult.content).toString()

    return {
      id,
      content,
      ...(matterResult.data as { title: string; date: string; excerpt: string; image?: string }),
    }
  } catch (error) {
    return null
  }
} 