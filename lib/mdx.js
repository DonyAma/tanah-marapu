import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

// Folder dasar untuk semua jenis konten markdown
const CONTENT_DIR = path.join(process.cwd(), "content");

/**
 * Ambil daftar semua artikel dalam satu kategori (budaya, pengrajin, pemandu)
 * Mengembalikan array berisi frontmatter + slug, TANPA isi lengkap (untuk listing)
 */
export function getAllArtikel(kategori) {
  const dir = path.join(CONTENT_DIR, kategori);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  const artikel = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fullPath = path.join(dir, filename);
    const fileContent = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContent); // hanya ambil frontmatter

    return { slug, ...data };
  });

  // Urutkan berdasarkan tanggal terbaru
  return artikel.sort((a, b) => (a.tanggal < b.tanggal ? 1 : -1));
}

/**
 * Ambil satu artikel lengkap (frontmatter + isi HTML)
 * Dipakai di halaman detail [slug]
 */
export async function getArtikelBySlug(kategori, slug) {
  const fullPath = path.join(CONTENT_DIR, kategori, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContent = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContent);

  // Ubah markdown body jadi HTML
  const processedContent = await remark().use(remarkHtml).process(content);
  const contentHtml = processedContent.toString();

  return { slug, ...data, contentHtml };
}

/**
 * Ambil semua slug dalam kategori (untuk generateStaticParams)
 */
export function getAllSlugs(kategori) {
  const dir = path.join(CONTENT_DIR, kategori);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}