'use client'

import { useState } from 'react'

interface CategoryFilterProps {
  onCategorySelect: (category: string) => void;
}

export default function CategoryFilter({ onCategorySelect }: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = ['All', 'Yapay Zeka', 'Web Geliştirme', 'Mobil', 'Siber Güvenlik', 'Veri Bilimi']

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
    onCategorySelect(category)
  }

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`px-4 py-2 rounded-full border transition-colors ${
            selectedCategory === category
              ? 'border-blue-500 bg-blue-50 text-blue-600'
              : 'border-gray-300 hover:bg-gray-50'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
} 