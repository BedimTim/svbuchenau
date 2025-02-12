const DATOCMS_API_URL = "https://graphql.datocms.com/";
const API_TOKEN = process.env.DATOCMS_READONLY_TOKEN as string;

export async function getArticles() {
  const query = `
    query {
      allArtikels(orderBy: _createdAt_DESC) {
        slug
        titel
        veroeffentlichung
        inhalt
        bild {
          url
        }
      }
    }
  `;

  const response = await fetch(DATOCMS_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_TOKEN}`,
      "Accept": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const { data } = await response.json();
  return data?.allArtikels || [];
}

export async function getArticleBySlug(slug: string) {
  const query = `
    query ($slug: ItemSlug!) {
      newsArticle(filter: { slug: { eq: $slug } }) {
        slug
        titel
        veroeffentlichung
        inhalt
        bild {
          url
        }
      }
    }
  `;

  const response = await fetch(DATOCMS_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_TOKEN}`,
      "Accept": "application/json",
    },
    body: JSON.stringify({ query, variables: { slug } }),
  });

  const { data } = await response.json();
  return data?.Artikel || null;
}
