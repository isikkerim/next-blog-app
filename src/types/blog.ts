export interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  excerpt: string;
  slug: string;
  category: string;
  image: string;
}

export interface BlogPostList {
  posts: BlogPost[];
}

export type Category = 'Yapay Zeka' | 'Web Geliştirme' | 'Mobil' | 'Siber Güvenlik' | 'Veri Bilimi'; 