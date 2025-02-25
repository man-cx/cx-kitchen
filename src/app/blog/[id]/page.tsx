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
    <div className="bg-[#FFF4E6] min-h-screen pb-16">
      {post.image && (
        <div className="relative w-full h-[400px]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#333333] to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-[#FFF4E6] mb-4">{post.title}</h1>
              <div className="flex items-center justify-between text-[#FFF4E6]/90">
                <div className="flex items-center space-x-4">
                  <span>By {post.author}</span>
                  <span>•</span>
                  <time>{post.date}</time>
                </div>
                <div className="flex gap-2">
                  {post.tags && post.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-sm bg-[#FFF4E6] text-[#D35400] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-[#D35400] hover:text-[#F1C40F] transition-colors mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        <article className="bg-white rounded-lg shadow-lg p-8 prose prose-lg max-w-none">
          <div 
            className="prose-headings:text-[#D35400] prose-p:text-[#333333] prose-a:text-[#D35400] prose-a:no-underline hover:prose-a:text-[#F1C40F]"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </article>

        <div className="mt-8 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#333333] bg-[#F1C40F] hover:bg-[#D35400] hover:text-[#FFF4E6] transition-colors shadow-md hover:shadow-lg"
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </div>
  )
} 