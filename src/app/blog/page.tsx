import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/blog'

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Our Blog</h1>
        <p className="mt-1 text-lg text-gray-600">Latest insights and updates from our team</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {post.image && (
              <div className="relative w-full h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}
            <div className="p-4">
              <time className="text-sm text-gray-500">{post.date}</time>
              <h2 className="mt-1 text-xl font-semibold text-gray-900">
                <Link 
                  href={`/blog/${post.id}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-1 text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
              <Link 
                href={`/blog/${post.id}`}
                className="mt-2 inline-block text-blue-600 hover:text-blue-800 text-sm"
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
} 