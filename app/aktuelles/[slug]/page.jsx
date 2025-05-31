import { performRequest } from "@/lib/datocms";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import { StructuredText } from "react-datocms";

const PAGE_CONTENT_QUERY = `
  query getArticle($slug: String!) {
    article(filter: { slug: { eq: $slug } }) {
      slug
      title
      created
      image {
        url
        alt
      }
      content {
        value
      }
    }
  }
`;


export default async function ArticlePage({ params }) {
  const { slug } = params;
  
  const pageContent = await performRequest(PAGE_CONTENT_QUERY, { variables: { slug } });

  if (!pageContent) return <p className="text-center text-gray-500">Artikel nicht gefunden.</p>;

  return (
    <main>
      
      <div className="flex min-h-screen flex-col items-center sm:p-24">
      <section className="flex-col w-full mt-32 sm:mt-12 p-8 bg-white rounded-lg shadow-2xl text-leftrounded-lg">
      
      <Link href="/aktuelles" className="text-white bg-black p-2 duration-200 rounded-lg hover:bg-slate-600">← Zurück</Link>
      <h1 className="text-3xl font-bold mt-2">{pageContent.article.title}</h1>
      <p className="text-sm text-gray-500 mt-1">{format(new Date(pageContent.article.created), "dd.MM.yyyy", { locale: de })}</p>
      
      {pageContent.article.image && (
            <div className="my-6">
              <Image 
                src={pageContent.article.image.url} 
                alt={pageContent.article.image.alt || pageContent.article.title} 
                width={800}
                height={450}
                className="w-full object-cover rounded-lg shadow-md"
              />
            </div>
          )}
        <StructuredText data={pageContent.article.content}/>
      </section>
      </div>
    </main>
    
  );
}
