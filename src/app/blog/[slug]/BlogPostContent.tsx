'use client'

import Image from 'next/image'
import { FaUser, FaCalendar, FaTag } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { BlogPost } from '@/types/blog'

interface BlogPostContentProps {
  post: BlogPost
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto bg-white dark:bg-dark-card rounded-2xl shadow-lg dark:shadow-gray-800 overflow-hidden"
    >
      <div className="relative h-96 w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="p-8"
      >
        <header className="mb-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 rounded-full">
              <FaTag className="mr-2" />
              {post.category}
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-4xl font-bold mb-4 text-gray-900 dark:text-dark-text"
          >
            {post.title}
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-6 text-gray-600 dark:text-gray-400"
          >
            <div className="flex items-center">
              <FaUser className="mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <FaCalendar className="mr-2" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('tr-TR')}
              </time>
            </div>
          </motion.div>
        </header>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="prose prose-lg max-w-none dark:prose-invert prose-primary"
        >
          {post.content}
        </motion.div>
      </motion.div>
    </motion.article>
  )
} 