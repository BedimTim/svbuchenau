import Link from "next/link";
import { performRequest } from "@/lib/datocms";
import { Image as DatoImage, RSCImage as DatoSRCImage } from "react-datocms";
import { format } from "date-fns";
import { de } from "date-fns/locale";

const PAGE_CONTENT_QUERY = `
  query {
    allArticles(orderBy: created_DESC) {
      slug
      title
      created
      image {
      responsiveImage(imgixParams: { fit: crop, w: 300, h: 300, auto: format }) {
        sizes
        src
        width
        height
        alt
        base64
      }
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
            <Link
              key={article.slug}
              href={`/aktuelles/${article.slug}`}
              className=" bg-white shadow-lg rounded-lg overflow-hidden hover:scale-[1.02] transition flex flex-col"
            >
              {article.image && (
                <div className="flex-1 flex items-center justify-center w-full h-48 bg-gray-100">
                  <DatoImage
                    data={article.image.responsiveImage}
                    alt={article.image.alt || article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
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
