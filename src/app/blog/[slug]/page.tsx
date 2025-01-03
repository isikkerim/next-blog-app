import { notFound } from 'next/navigation'
import Image from 'next/image'
import { FaCalendar, FaUser, FaTag } from 'react-icons/fa'
import posts from '@/data/posts.json'

type Props = {
  params: {
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function BlogPostPage({ params }: Props) {
  const post = posts.posts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <article className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="relative h-[400px] w-full">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="p-8">
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-2">
                <FaCalendar />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUser />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaTag />
                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-6">{post.title}</h1>
            
            <div className="prose prose-purple max-w-none">
              {post.content.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("##")) {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                      {paragraph.replace("##", "").trim()}
                    </h2>
                  );
                }
                if (paragraph.startsWith("###")) {
                  return (
                    <h3 key={index} className="text-xl font-semibold mt-6 mb-3">
                      {paragraph.replace("###", "").trim()}
                    </h3>
                  );
                }
                if (paragraph.startsWith("-")) {
                  return (
                    <ul key={index} className="list-disc pl-6 mb-4">
                      {paragraph
                        .split("\n")
                        .map((item, i) => (
                          <li key={i}>{item.replace("-", "").trim()}</li>
                        ))}
                    </ul>
                  );
                }
                if (paragraph.match(/^\d\./)) {
                  return (
                    <ol key={index} className="list-decimal pl-6 mb-4">
                      {paragraph
                        .split("\n")
                        .map((item, i) => (
                          <li key={i}>{item.replace(/^\d\./, "").trim()}</li>
                        ))}
                    </ol>
                  );
                }
                return <p key={index} className="mb-4">{paragraph}</p>;
              })}
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export function generateStaticParams() {
  return posts.posts.map((post) => ({
    slug: post.slug,
  }))
} 