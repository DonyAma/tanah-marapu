import Link from "next/link";
import { getAllArtikel } from "../lib/mdx";
import FadeIn from "./FadeIn";
import DividerTenun from "./DividerTenun";

// Reusable untuk /pengrajin dan /pemandu — beda hanya kategori & teks
export default function DaftarOrang({ kategori, judul, deskripsi, labelSpesialisasi }) {
  const orang = getAllArtikel(kategori);

  return (
    <section className="mx-auto max-w-5xl px-5 py-14">
      <FadeIn>
        <span className="rounded-md bg-lumut/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-lumut">
          Pilar Manusia
        </span>
        <h1 className="mt-4 font-display text-[clamp(2rem,6vw,3.2rem)] font-extrabold text-indigo2 dark:text-[#f0e8da]">
          {judul}
        </h1>
        <p className="mt-3 max-w-xl text-[#4d463c] dark:text-[#c4b8a8]">
          {deskripsi}
        </p>
      </FadeIn>

      <DividerTenun className="my-10" />

      {orang.length === 0 ? (
        <FadeIn className="rounded-2xl border border-indigo2/15 bg-white p-10 text-center dark:bg-[#252019]">
          <p className="text-[#5a5347] dark:text-[#c4b8a8]">Profil sedang disiapkan. Kembali lagi sebentar lagi.</p>
        </FadeIn>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2">
          {orang.map((o, i) => (
            <FadeIn key={o.slug} delay={i * 80}>
              <Link
                href={`/${kategori}/${o.slug}`}
                className="group flex gap-4 rounded-2xl border border-indigo2/15 bg-white p-4 transition hover:-translate-y-1 hover:shadow-lg dark:bg-[#252019] dark:border-white/10"
              >
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-kombu to-emas">
                  {o.foto && <img src={o.foto} alt={o.nama} loading="lazy" className="h-full w-full object-cover" />}
                </div>
                <div className="min-w-0">
                  <p className="font-display text-base font-bold text-indigo2 group-hover:text-kombu dark:text-[#f0e8da]">
                    {o.nama}
                  </p>
                  <p className="mt-0.5 text-xs font-bold uppercase tracking-wide text-kombu">
                    {o[labelSpesialisasi]}
                  </p>
                  <p className="mt-1.5 text-xs text-[#8a8273]">{o.lokasi}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      )}
    </section>
  );
}