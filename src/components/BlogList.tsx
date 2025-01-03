'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaCalendar, FaUser, FaTag } from 'react-icons/fa'
import { BlogPost } from '@/types/blog'

interface BlogListProps {
  posts: BlogPost[]
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <motion.article
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <Link href={`/blog/${post.slug}`}>
            <div className="relative h-48 w-full">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-3">
                <div className="flex items-center gap-1">
                  <FaCalendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaUser className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaTag className="w-4 h-4" />
                  <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                {post.title}
              </h2>
              <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  )
} 