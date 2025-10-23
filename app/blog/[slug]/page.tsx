
import { notFound } from "next/navigation";
import "@/app/blog/[slug]/article.css";
import Image from "next/image";
import HeaderMenu from "@/components/Header/HeaderMenu";
import Footer from "@/components/Footer";
import { blogPosts } from "@/constants/slug";



export default function BlogArticlePage({ params } : { params: { slug: string} }) {
  const article = blogPosts.find((post) => post.slug === params.slug);
 

  if (!article) return notFound();

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <HeaderMenu isScrolledAndImmutable />

      {/* <section className="max-w-4xl mx-auto px-6 py-20"> */}
        {/* <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B365D]">
          {article.title}
        </h1>
        <div className="relative w-full h-80 mb-8">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover rounded-lg"
          />
        </div> */}
        <div className="w-full h-[400px] md:h-[700px] overflow-hidden">
            <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover"
            />
        </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Title */}
        <h1 className="text-2xl md:text-5xl font-medium text-foreground mb-6 leading-tight">
          {article.title}
        </h1>

        {/* Chapo */}
        <div className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 border-l-4 chapo border-accent pl-6 py-4 bg-secondary/30">
          {article.chapo}
        </div>

        <article
          className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
        />
        
    </div>
    
      {/* </section> */}
      <Footer />
    </main>
  );
}
