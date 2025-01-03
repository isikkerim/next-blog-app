'use client'

import { FaSearch, FaFilter } from 'react-icons/fa'
import { useState } from 'react'

interface SearchAndFilterProps {
  onSearch: (query: string) => void;
  onFilter: (category: string) => void;
}

export default function SearchAndFilter({ onSearch, onFilter }: SearchAndFilterProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    onSearch(query)
  }

  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
      <h1 className="text-4xl font-bold mb-4 md:mb-0">Inside Design: Stories and Interviews</h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Yazılarda ara..."
            value={searchQuery}
            onChange={handleSearch}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50">
          <FaFilter className="text-gray-600" />
          <span>Filtrele</span>
        </button>
      </div>
    </div>
  )
} 