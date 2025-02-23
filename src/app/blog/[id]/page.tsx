import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getPost } from '@/lib/blog'

export default async function BlogPost({ params }: { params: { id: string } }) {
  const post = await getPost(params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <article className="prose prose-sm sm:prose lg:prose-lg mx-auto">
        <Link href="/blog" className="text-blue-600 hover:text-blue-800 no-underline">
          ← Back to Blog
        </Link>
        <div className="mt-6">
          {post.image && (
            <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{post.title}</h1>
          <div className="text-gray-500 mb-6">{post.date}</div>
          <div 
            className="prose-headings:mt-4 prose-headings:mb-2 prose-p:my-2 prose-ul:my-2 prose-li:my-0"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </div>
      </article>
    </div>
  )
} 