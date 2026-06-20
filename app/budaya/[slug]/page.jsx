import Link from "next/link";
import { getArtikelBySlug, getAllSlugs, getAllArtikel } from "../../../lib/mdx";
import { cariIstilahTerkait } from "../../../data/glosarium";
import FadeIn from "../../../components/FadeIn";
import DividerTenun from "../../../components/DividerTenun";

export function generateStaticParams() {
  return getAllSlugs("budaya").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const artikel = await getArtikelBySlug("budaya", params.slug);
  if (!artikel) return {};
  return {
    title: artikel.title,
    description: artikel.ringkasan,
    openGraph: {
      title: artikel.title,
      description: artikel.ringkasan,
      images: artikel.foto ? [{ url: artikel.foto, width: 1200, height: 630, alt: artikel.title }] : undefined,
    },
  };
}

export default async function DetailBudaya({ params }) {
  const artikel = await getArtikelBySlug("budaya", params.slug);
  if (!artikel) return <p className="mx-auto max-w-3xl px-5 py-20">Artikel tidak ditemukan.</p>;

  const istilahTerkait = cariIstilahTerkait([artikel.title, artikel.kategori]);
  const artikelLain = getAllArtikel("budaya").filter((a) => a.slug !== params.slug).slice(0, 3);

  return (
    <article>
      {/* BREADCRUMB */}
      <nav className="mx-auto max-w-5xl px-5 pt-5">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#8a8273]">
          <li><Link href="/" className="hover:text-kombu transition">Beranda</Link></li>
          <li className="opacity-40">/</li>
          <li><Link href="/budaya" className="hover:text-kombu transition">Budaya</Link></li>
          <li className="opacity-40">/</li>
          <li className="font-semibold text-kombu">{artikel.title}</li>
        </ol>
      </nav>

      {/* HERO ARTIKEL */}
      <FadeIn className="mx-auto max-w-5xl px-5 pt-8 pb-6">
        <div className="flex items-center gap-2">
          <span className="inline-block h-0.5 w-6 bg-kombu" />
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-kombu">
            Pilar Budaya · {artikel.kategori}
          </span>
        </div>
        <h1 className="mt-4 font-display text-[clamp(2rem,5.5vw,3.4rem)] font-extrabold leading-[1.15] text-indigo2 dark:text-[#f0e8da]">
          {artikel.title}
        </h1>
        <p className="mt-4 max-w-2xl font-serif2 text-base text-[#5a5347] dark:text-[#c4b8a8]">
          {artikel.ringkasan}
        </p>
      </FadeIn>

      <DividerTenun />

      {/* BODY + SIDEBAR */}
      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-10 lg:grid-cols-[1fr_220px]">
        <FadeIn>
          <div
            className="
              prose-budaya
              font-serif2 text-[17px] leading-[1.85] text-[#26221c] dark:text-[#e8ddd0]
              [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-indigo2
              [&_h2]:mt-9 [&_h2]:mb-3 dark:[&_h2]:text-[#f0e8da]
              [&_p]:mb-5
              [&_strong]:font-bold [&_strong]:text-indigo2 dark:[&_strong]:text-[#f0e8da]
              [&_blockquote]:my-7 [&_blockquote]:border-l-[3px] [&_blockquote]:border-nila
              [&_blockquote]:bg-[#fbf6ec] dark:[&_blockquote]:bg-[#252019]
              [&_blockquote]:py-4 [&_blockquote]:px-6 [&_blockquote]:not-italic
              [&_blockquote_p]:font-display [&_blockquote_p]:italic [&_blockquote_p]:text-lg [&_blockquote_p]:text-nila
              [&_ul]:my-5 [&_ul]:pl-5 [&_li]:mb-2 [&_li]:list-disc
              [&_ol]:my-5 [&_ol]:pl-5 [&_li]:marker:text-kombu
            "
            dangerouslySetInnerHTML={{ __html: artikel.contentHtml }}
          />
        </FadeIn>

        {/* SIDEBAR — Istilah terkait */}
        <FadeIn direction="left" className="h-max lg:sticky lg:top-24">
          <p className="font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-kombu">
            Istilah Terkait
          </p>
          <div className="mt-3 space-y-2.5">
            {istilahTerkait.map((g) => (
              <div key={g.istilah} className="rounded-xl border border-indigo2/15 bg-white p-3.5 dark:bg-[#252019] dark:border-white/10">
                <p className="font-sans text-[13px] font-bold text-indigo2 dark:text-[#f0e8da]">{g.istilah}</p>
                <p className="mt-1 font-sans text-xs leading-relaxed text-[#5a5347] dark:text-[#c4b8a8]">{g.arti}</p>
              </div>
            ))}
          </div>
          <Link href="/glosarium" className="mt-3 inline-block font-sans text-xs font-bold text-kombu hover:underline">
            Lihat semua istilah →
          </Link>
        </FadeIn>
      </div>

      <DividerTenun />

      {/* ARTIKEL LAIN */}
      {artikelLain.length > 0 && (
        <FadeIn className="mx-auto max-w-5xl px-5 py-10">
          <h2 className="font-display text-xl font-bold text-indigo2 dark:text-[#f0e8da]">Baca juga</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {artikelLain.map((a) => (
              <Link key={a.slug} href={`/budaya/${a.slug}`}
                className="group rounded-xl border border-indigo2/15 bg-white p-4 transition hover:shadow-md dark:bg-[#252019] dark:border-white/10">
                <p className="font-display text-sm font-bold text-indigo2 group-hover:text-kombu dark:text-[#f0e8da]">{a.title}</p>
                <p className="mt-1 text-xs text-[#8a8273]">{a.kategori}</p>
              </Link>
            ))}
          </div>
        </FadeIn>
      )}
    </article>
  );
}