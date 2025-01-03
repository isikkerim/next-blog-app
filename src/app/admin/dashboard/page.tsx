"use client";

import { useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import Loading from "@/components/Loading";

export default function AdminDashboard() {
  const [loading, setLoading] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleNewPost = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowInfo(true);
      setTimeout(() => setShowInfo(false), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {loading && <Loading />}
      
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-purple-600">Admin Dashboard</h1>
            <div className="relative">
              <button
                onClick={handleNewPost}
                className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
              >
                <FaPlus /> Yeni Yazı
              </button>
              {showInfo && (
                <div className="absolute right-0 top-full mt-2 p-3 bg-white rounded-md shadow-lg text-sm text-gray-600 w-64">
                  Bu özellik örnek amaçlı eklenmiştir ve şu anda aktif değildir.
                </div>
              )}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Başlık</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kategori</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tarih</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">İşlemler</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Yapay Zeka ve Geleceğimiz</td>
                  <td className="px-6 py-4 whitespace-nowrap">Yapay Zeka</td>
                  <td className="px-6 py-4 whitespace-nowrap">2024-01-03</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-3">
                      <button className="text-blue-600 hover:text-blue-800">
                        <FaEdit />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Web Geliştirme Trendleri 2024</td>
                  <td className="px-6 py-4 whitespace-nowrap">Web Geliştirme</td>
                  <td className="px-6 py-4 whitespace-nowrap">2024-01-03</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-3">
                      <button className="text-blue-600 hover:text-blue-800">
                        <FaEdit />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Toplam Yazı</h3>
            <p className="text-3xl font-bold text-purple-600">6</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Toplam Kategori</h3>
            <p className="text-3xl font-bold text-purple-600">4</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Son Yazı Tarihi</h3>
            <p className="text-3xl font-bold text-purple-600">03.01.2024</p>
          </div>
        </div>
      </div>
    </div>
  );
} 