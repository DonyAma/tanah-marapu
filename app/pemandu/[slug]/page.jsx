import DetailOrang from "../../../components/DetailOrang";
import { getArtikelBySlug, getAllSlugs } from "../../../lib/mdx";

export function generateStaticParams() {
  return getAllSlugs("pemandu").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const orang = await getArtikelBySlug("pemandu", params.slug);
  if (!orang) return {};
  return {
    title: `${orang.nama} — Pemandu Lokal ${orang.lokasi}`,
    description: `${orang.nama}, pemandu lokal di ${orang.lokasi}. ${orang.spesialisasi}.`,
  };
}

export default function HalamanDetailPemandu({ params }) {
  return (
    <DetailOrang
      kategori="pemandu"
      breadcrumbLabel="Pemandu"
      slug={params.slug}
      labelKontak="Hubungi via WhatsApp"
    />
  );
}