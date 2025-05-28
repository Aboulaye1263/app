import Footer from '@/components/Footer';
import HeaderMenu from '@/components/Header/HeaderMenu';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: "COMMENT TOM RÉVOLUTIONNE T-ELLE LE TRANSPORT EN AFRIQUE DE L'OUEST ?",
    image: "/images/blogs/article_1.jpg",
    slug: "transport-revolution"
  },
  {
    id: 2,
    title: "ENGAGEMENT ENVIRONNEMENTAL : NOS INITIATIVES POUR UNE LOGISTIQUE DURABLE",
    image: "/images/blogs/article_2.png",
    slug: "environmental-initiatives"
  },
  {
    id: 3,
    title: "LES TENDANCES CLÉS DE LA LOGISTIQUE EN 2025",
    image: "/images/blogs/article_3.jpg",
    slug: "logistics-trends-2025"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen">
        <HeaderMenu isScrolledAndImmutable/>
      {/* Header Section */}
      <div className="relative h-screen bg-[#222221] text-white py-12 px-4 text-center pt-40">
        <div className="absolute top-0 left-0 right-0 -z-99 h-full">
          <Image
            src="/images/banner-news.png"
            alt="TOM MEDLOG Image header"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute w-full h-screen bottom-0 right-0 left-0 bg-gradient-to-r from-black/90 to-black/50" />
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-5xl md:text-7xl font-bold mb-8 leading-tight text-white z-10">
          Actualités et <span className="text-[#F3DFA2]">Annonces</span>
        </h1>
        
        <p className="absolute bottom-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg md:text-xl mb-12 max-w-3xl leading-relaxed opacity-90 text-center">
        RESTEZ INFORMÉ DES DERNIÈRES TENDANCES ET INNOVATIONS DANS LA LOGISTIQUE AU SÉNÉGAL.   
        </p>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id}
              className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-[#1B365D] font-bold text-xl mb-4 flex-grow">
                  {post.title}
                </h2>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center justify-center bg-[var(--secondary)] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors duration-300 mt-4"
                >
                  <span>LIRE PLUS</span>
                  <svg 
                    className="ml-2 w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer/>
    </main>
  );
} 