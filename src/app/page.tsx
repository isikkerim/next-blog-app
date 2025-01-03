'use client'

import { useState, useMemo } from 'react'
import BlogList from '@/components/BlogList'
import posts from '@/data/posts.json'
import { FaSearch } from 'react-icons/fa'

const categories = ['Tümü', 'Yapay Zeka', 'Web Geliştirme', 'Mobil', 'Veri Bilimi', 'Siber Güvenlik']

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Tümü')

  const filteredPosts = useMemo(() => {
    return posts.posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.content.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === 'Tümü' || post.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-600 mb-4">
            Teknoloji ve Yazılım Blogu
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            En güncel teknoloji ve yazılım konularını, detaylı makaleler ve rehberler ile keşfedin.
          </p>
        </section>

        <section className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Yazılarda ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? "bg-purple-600 text-white"
                      : "bg-white text-gray-700 hover:bg-purple-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">
                {selectedCategory === 'Tümü' 
                  ? 'Aradığınız kriterlere uygun yazı bulunamadı'
                  : `${selectedCategory} kategorisinde henüz yazı bulunmuyor`}
              </h2>
              <p className="text-gray-500">
                Lütfen farklı bir arama terimi veya kategori seçin
              </p>
            </div>
          ) : (
            <BlogList posts={filteredPosts} />
          )}
        </section>
      </div>
    </main>
  )
}
