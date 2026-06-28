import { destinasi } from "./data/site";
import { getAllSlugs } from "./lib/mdx";

export default async function sitemap() {
  const BASE = "https://jelajahsumba.id";

  // Route statis
  const statis = [
    "/",
    "/destinasi",
    "/budaya",
    "/pengrajin",
    "/pemandu",
    "/glosarium",
    "/etika",
    "/itinerary",
    "/kalender",
    "/peta",
    "/tentang-sumba",
    "/tentang",
    "/stay",
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));

  // Destinasi dinamis
  const destinasiRoutes = destinasi.map((d) => ({
    url: `${BASE}/destinasi/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Artikel budaya dinamis
  const budayaSlugs = getAllSlugs("budaya");
  const budayaRoutes = budayaSlugs.map((slug) => ({
    url: `${BASE}/budaya/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Pengrajin dinamis
  const pengrajinSlugs = getAllSlugs("pengrajin");
  const pengrajinRoutes = pengrajinSlugs.map((slug) => ({
    url: `${BASE}/pengrajin/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Pemandu dinamis
  const peminanduSlugs = getAllSlugs("pemandu");
  const pemandoRoutes = peminanduSlugs.map((slug) => ({
    url: `${BASE}/pemandu/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...statis, ...destinasiRoutes, ...budayaRoutes, ...pengrajinRoutes, ...pemandoRoutes];
}