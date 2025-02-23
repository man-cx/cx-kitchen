import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to CX Kitchen</h1>
        <p className="text-xl text-gray-600 mb-8">A place for sharing ideas and experiences</p>
        <Link 
          href="/blog" 
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Read Our Blog
        </Link>
      </div>
    </div>
  )
} 