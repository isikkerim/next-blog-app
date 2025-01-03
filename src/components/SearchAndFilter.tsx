'use client'

import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'

interface SearchAndFilterProps {
  onSearch: (query: string) => void;
}

export default function SearchAndFilter({ onSearch }: SearchAndFilterProps) {
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
      </div>
    </div>
  )
} 