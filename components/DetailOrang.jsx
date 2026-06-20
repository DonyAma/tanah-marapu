import Link from "next/link";
import { getArtikelBySlug, getAllSlugs } from "../lib/mdx";
import FadeIn from "./FadeIn";
import DividerTenun from "./DividerTenun";

// Reusable untuk /pengrajin/[slug] dan /pemandu/[slug]
export default async function DetailOrang({ kategori, breadcrumbLabel, slug, labelKontak }) {
  const orang = await getArtikelBySlug(kategori, slug);
  if (!orang) return <p className="mx-auto max-w-3xl px-5 py-20">Profil tidak ditemukan.</p>;

  const waLink = orang.kontak_wa
    ? `https://wa.me/${orang.kontak_wa}?text=${encodeURIComponent(`Halo ${orang.nama}, saya menemukan profil Anda di Jelajah Sumba`)}`
    : null;

  return (
    <article>
      <nav className="mx-auto max-w-3xl px-5 pt-5">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#8a8273]">
          <li><Link href="/" className="hover:text-kombu transition">Beranda</Link></li>
          <li className="opacity-40">/</li>
          <li><Link href={`/${kategori}`} className="hover:text-kombu transition">{breadcrumbLabel}</Link></li>
          <li className="opacity-40">/</li>
          <li className="font-semibold text-kombu">{orang.nama}</li>
        </ol>
      </nav>

      {/* CARD PROFIL — sesuai mockup */}
      <FadeIn className="mx-auto max-w-3xl px-5 pt-8">
        <div className="flex flex-col items-start gap-5 rounded-2xl border border-indigo2/15 bg-white p-6 sm:flex-row sm:items-center dark:bg-[#252019] dark:border-white/10">
          <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-kombu to-emas">
            {orang.foto && <img src={orang.foto} alt={orang.nama} className="h-full w-full object-cover" />}
          </div>
          <div className="flex-1">
            <h1 className="font-display text-2xl font-bold text-indigo2 dark:text-[#f0e8da]">{orang.nama}</h1>
            <p className="mt-1 text-sm font-bold uppercase tracking-wide text-kombu">
              {orang.spesialisasi} · {orang.lokasi}
            </p>
            {orang.tahun_pengalaman && (
              <p className="mt-1 text-xs text-[#8a8273]">{orang.tahun_pengalaman} tahun pengalaman</p>
            )}
          </div>
          {waLink && (
            <a href={waLink} target="_blank" rel="noopener"
              className="shrink-0 rounded-full bg-[#1f8a4c] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#27a25b]">
              💬 {labelKontak}
            </a>
          )}
        </div>
      </FadeIn>

      <DividerTenun className="my-8" />

      {/* BODY — cerita lengkap */}
      <FadeIn className="mx-auto max-w-3xl px-5 pb-12">
        <div
          className="
            font-serif2 text-[17px] leading-[1.85] text-[#26221c] dark:text-[#e8ddd0]
            [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-indigo2
            [&_h2]:mt-7 [&_h2]:mb-3 dark:[&_h2]:text-[#f0e8da]
            [&_p]:mb-5
            [&_blockquote]:my-6 [&_blockquote]:border-l-[3px] [&_blockquote]:border-nila
            [&_blockquote]:bg-[#fbf6ec] dark:[&_blockquote]:bg-[#1a1612]
            [&_blockquote]:py-3 [&_blockquote]:px-5 [&_blockquote]:not-italic
            [&_blockquote_p]:font-display [&_blockquote_p]:italic [&_blockquote_p]:text-base [&_blockquote_p]:text-nila [&_blockquote_p]:mb-0
            [&_ul]:my-4 [&_ul]:pl-5 [&_li]:mb-1.5 [&_li]:list-disc
            [&_em]:text-[#8a8273] [&_em]:text-sm
          "
          dangerouslySetInnerHTML={{ __html: orang.contentHtml }}
        />
      </FadeIn>
    </article>
  );
}