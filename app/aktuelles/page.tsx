import Link from "next/link";
import { getArticles } from "@/lib/datocms";
import Image from "next/image";
import { format } from "date-fns";
import { de } from "date-fns/locale";

export default async function Aktuelles() {
  const articles = await getArticles();
  
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center sm:justify-between sm:p-24 ">
      <h1 className="text-3xl font-bold">Aktuelles</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article: { slug: string; bild: string; titel: string; veroeffentlichung: string; image?: string }) => (
          <Link key={article.slug} href={`/aktuelles/${article.slug}`} className="block bg-white shadow-lg rounded-lg overflow-hidden hover:scale-[1.02] transition">
            {article.image && (
              <Image src={article.bild} alt={article.titel} width={400} height={250} className="w-full h-40 object-cover"/>
            )}
            <div className="p-4">
              <p className="text-sm text-gray-500">{format(new Date(article.veroeffentlichung), "dd.MM.yyyy", { locale: de })}</p>
              <h2 className="text-xl font-semibold mt-1">{article.titel}</h2>
        
            </div>
          </Link>
        ))}
      </div>
    </div>
    </main>
    
    
  );
}
