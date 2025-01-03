import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kerim Işık - Teknoloji ve Yazılım Blogu',
  description: 'Yazılım geliştirme, web teknolojileri ve yapay zeka üzerine yazılar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <header className="bg-white shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link 
              href="/" 
              className="text-xl font-bold text-purple-600 hover:text-purple-700 transition-colors"
            >
              Kerim Işık
            </Link>
            <div className="flex gap-6">
              <Link 
                href="/" 
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Ana Sayfa
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                İletişim
              </Link>
              <Link 
                href="/admin" 
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Admin
              </Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className="bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <p className="text-center text-gray-600">
              © 2024 Kerim Işık. Portfolio amaçlı oluşturulmuştur.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
