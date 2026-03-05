import { performRequest } from "@/lib/datocms";
import { Image as DatoImage } from "react-datocms";
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
      responsiveImage(imgixParams: { fit: crop, w: 300, h: 300, auto: format }) {
        sizes
        src
        width
        height
        alt
        base64
      }
    }
      content {
        value
      }
    }
  }
`;


export default async function ArticlePage({ params }) {
  const { slug } = await params;

  const pageContent = await performRequest(PAGE_CONTENT_QUERY, { variables: { slug } });

  if (!pageContent) return <p className="text-center text-gray-500">Artikel nicht gefunden.</p>;

  return (
    <main>
      <div className="flex w-full flex-col items-center justify-center min-h-screen px-4 sm:px-8 lg:px-12">
        <section className="w-full max-w-3xl rounded-lg bg-white p-4 text-left shadow-2xl sm:p-8">
          <Link href="/aktuelles" className="inline-block rounded-lg bg-black p-2 text-white duration-200 hover:bg-slate-600">← Zurück</Link>
          <h1 className="mt-3 text-2xl font-bold sm:text-3xl">{pageContent.article.title}</h1>
          <p className="text-sm text-gray-500 mt-1">{format(new Date(pageContent.article.created), "dd.MM.yyyy", { locale: de })}</p>

          {pageContent.article.image && (
            <div className="my-6 flex justify-center">
              <DatoImage
                data={pageContent.article.image.responsiveImage}
                alt={pageContent.article.image.alt || pageContent.article.title}
                className="h-auto w-full max-w-xs rounded-lg object-cover sm:max-w-sm"
              />
            </div>
          )}
          <div className="break-words [&_a]:break-all [&_img]:h-auto [&_img]:max-w-full">
            <StructuredText data={pageContent.article.content} />
          </div>
        </section>
      </div>
    </main>
  );
}
