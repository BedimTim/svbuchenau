// einfache Sitemap für Next.js (app router)
// setzt SITE_URL oder NEXT_PUBLIC_SITE_URL in der Umgebung, ansonsten localhost

const BASE_URL = (process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");

export default async function sitemap() {
  const staticRoutes = [
    "/",
    "/verein",
    "/schiesssport",
    "/aktuelles",
    "/datenschutz",
    "/impressum",
  ];

  const urls = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return urls;
}