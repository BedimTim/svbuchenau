import Link from "next/link";
import { performRequest } from "@/lib/datocms";
import Image from "next/image";
import { format } from "date-fns";
import { de } from "date-fns/locale";

const PAGE_CONTENT_QUERY = `
  query {
    allArticles(orderBy: created_DESC) {
      slug
      title
      created
      image {
        url
        alt
      }
    }
  }
`;

export default async function Aktuelles() {
  
  const articles = await performRequest(PAGE_CONTENT_QUERY);

  return (
    <main>
      <div className="mt-32 flex min-h-screen sm:mt-12 flex-col items-center sm:justify-between sm:p-24 ">
      <h1 className="m-4 text-3xl p-2 bg-white shadow-lg rounded-lg font-bold transition">Aktuelles</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.allArticles.map(article => (
          <Link key={article.slug} href={`/aktuelles/${article.slug}`} className="block bg-white shadow-lg rounded-lg overflow-hidden hover:scale-[1.02] transition">
            
            {article.image && (
                <Image 
                  src={article.image.url} 
                  alt={article.image.alt || article.title} 
                  width={400} 
                  height={250} 
                  className="w-full object-cover"
                />
              )}

            <div className="p-4 m-2">
              <p className="text-sm text-gray-500">{format(new Date(article.created), "dd.MM.yyyy", { locale: de })}</p>
              <h2 className="text-xl font-semibold mt-1">{article.title}</h2>
        
            </div>
          </Link>
        ))}
      </div>
    </div>
    </main>
    
    
  );
}
