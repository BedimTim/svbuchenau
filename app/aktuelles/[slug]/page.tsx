"use client";
import { useParams } from "next/navigation";
import { articles } from "@/lib/articles";
import Image from "next/image";
import Link from "next/link";

export default function ArticlePage() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) return <p className="text-center text-gray-500">Artikel nicht gefunden.</p>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Link href="/aktuelles" className="text-blue-500">← Zurück</Link>
      <h1 className="text-3xl font-bold mt-2">{article.title}</h1>
      <p className="text-sm text-gray-500 mt-1">{article.date}</p>
      
      {article.image && (
        <Image src={article.image} alt={article.title} width={600} height={350} className="w-full mt-4 rounded"/>
      )}

      <p className="mt-6 text-gray-700">
        {/* Hier kannst du den vollständigen Artikeltext hinzufügen */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut urna purus...
      </p>
    </div>
  );
}
