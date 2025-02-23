import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Blog Post Not Found</h2>
        <p className="text-gray-600 mb-4">Sorry, the blog post you're looking for doesn't exist.</p>
        <Link 
          href="/blog" 
          className="text-blue-600 hover:text-blue-800"
        >
          ← Back to Blog
        </Link>
      </div>
    </div>
  )
} 