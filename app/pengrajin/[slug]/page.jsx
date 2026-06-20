import DetailOrang from "../../../components/DetailOrang";
import { getArtikelBySlug, getAllSlugs } from "../../../lib/mdx";

export function generateStaticParams() {
  return getAllSlugs("pengrajin").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const orang = await getArtikelBySlug("pengrajin", params.slug);
  if (!orang) return {};
  return {
    title: `${orang.nama} — Pengrajin ${orang.spesialisasi}`,
    description: `${orang.nama}, pengrajin dari ${orang.lokasi}. ${orang.spesialisasi}.`,
  };
}

export default function HalamanDetailPengrajin({ params }) {
  return (
    <DetailOrang
      kategori="pengrajin"
      breadcrumbLabel="Pengrajin"
      slug={params.slug}
      labelKontak="Kontak Langsung"
    />
  );
}