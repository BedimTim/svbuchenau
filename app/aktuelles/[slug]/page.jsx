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
      <div className="flex w-full flex-col items-center px-4 justify-center py-8 sm:px-8 sm:py-12 lg:px-12 my-32">
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
          <div className="break-words space-y-4 [&_a]:break-all [&_a]:text-lime-600 [&_a]:underline [&_a]:hover:text-lime-700 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mt-6 [&_h1]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-5 [&_h2]:mb-3 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-4 [&_h3]:mb-2 [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:mt-4 [&_h4]:mb-2 [&_h5]:text-base [&_h5]:font-semibold [&_h5]:mt-3 [&_h5]:mb-2 [&_h6]:text-sm [&_h6]:font-semibold [&_h6]:mt-3 [&_h6]:mb-2 [&_p]:leading-relaxed [&_strong]:font-bold [&_em]:italic [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:space-y-1 [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:space-y-1 [&_li]:leading-relaxed [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-lg [&_img]:my-4 [&_hr]:my-6 [&_hr]:border-gray-300 [&_blockquote]:border-l-4 [&_blockquote]:border-lime-600 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-700">
            <StructuredText data={pageContent.article.content} />
          </div>
        </section>
      </div>
    </main>
  );
}
