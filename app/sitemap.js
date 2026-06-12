import { destinasi, artikel } from "../data/site";

const BASE = "https://tanah-marapu.vercel.app"; // ganti dengan domain asli nanti

export default function sitemap() {
  const statis = ["", "/destinasi", "/stay", "/tentang"].map((p) => ({
    url: `${BASE}${p}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.8,
  }));
  const dest = destinasi.map((d) => ({
    url: `${BASE}/destinasi/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  const blog = artikel.map((a) => ({
    url: `${BASE}/blog/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  return [...statis, ...dest, ...blog];
}
