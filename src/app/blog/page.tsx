import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/blog'

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="bg-[#FFF4E6] min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[#333333] py-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#D35400] to-[#333333] opacity-90"></div>
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#F1C40F 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-[#FFF4E6] sm:text-5xl md:text-6xl">
            Our Blog
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-[#FFF4E6]/90">
            Insights and updates on AI innovations and productivity solutions
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#F1C40F] hover:border-[#D35400] transition-all duration-300 hover:shadow-xl"
            >
              {post.image && (
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <time className="text-sm text-[#666666]">{post.date}</time>
                  <div className="flex gap-2">
                    {post.tags && post.tags.slice(0, 2).map(tag => (
                      <span 
                        key={tag}
                        className="px-2 py-1 text-xs bg-[#FFF4E6] text-[#D35400] rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h2 className="text-xl font-bold text-[#333333] mb-2 line-clamp-2">
                  <Link 
                    href={`/blog/${post.id}`}
                    className="hover:text-[#D35400] transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-[#666666] text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#666666]">By {post.author}</span>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="text-[#D35400] hover:text-[#F1C40F] text-sm font-medium transition-colors inline-flex items-center"
                  >
                    Read more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
} 