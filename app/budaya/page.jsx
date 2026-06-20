import Link from "next/link";
import { getAllArtikel } from "../../lib/mdx";
import FadeIn from "../../components/FadeIn";
import DividerTenun from "../../components/DividerTenun";

export const metadata = {
  title: "Budaya & Tradisi Sumba",
  description:
    "Ensiklopedia budaya Sumba — filosofi Marapu, sejarah Pasola, makna motif tenun ikat, dan tradisi megalitik yang masih hidup hingga kini.",
};

const KATEGORI_WARNA = {
  kepercayaan: "bg-nila/10 text-nila",
  ritual: "bg-kombu/10 text-kombu",
  kerajinan: "bg-emas/15 text-[#7a5c1e]",
  sejarah: "bg-lumut/10 text-lumut",
};

export default function DaftarBudaya() {
  const artikel = getAllArtikel("budaya");

  return (
    <section className="mx-auto max-w-5xl px-5 py-14">
      <FadeIn>
        <span className="rounded-md bg-nila/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-nila">
          Ensiklopedia Budaya
        </span>
        <h1 className="mt-4 font-display text-[clamp(2rem,6vw,3.2rem)] font-extrabold text-indigo2">
          Budaya & Tradisi Sumba
        </h1>
        <p className="mt-3 max-w-xl font-serif2 text-lg italic text-[#4d463c]">
          Filosofi Marapu, makna di balik motif tenun, dan tradisi yang masih hidup
          hingga hari ini — ditulis untuk dipahami, bukan sekadar dilihat.
        </p>
      </FadeIn>

      <DividerTenun className="my-10" />

      {artikel.length === 0 ? (
        <FadeIn className="rounded-2xl border border-indigo2/15 bg-white p-10 text-center dark:bg-[#252019]">
          <p className="text-[#5a5347] dark:text-[#c4b8a8]">
            Artikel budaya sedang disiapkan. Kembali lagi sebentar lagi.
          </p>
        </FadeIn>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {artikel.map((a, i) => (
            <FadeIn key={a.slug} delay={i * 80}>
              <Link
                href={`/budaya/${a.slug}`}
                className="group block overflow-hidden rounded-2xl border border-indigo2/15 bg-white transition hover:-translate-y-1 hover:shadow-lg dark:bg-[#252019] dark:border-white/10"
              >
                {a.foto && (
                  <div className="h-44 overflow-hidden bg-gradient-to-br from-nila to-indigo2">
                    <img src={a.foto} alt={a.title} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                )}
                <div className="p-5">
                  <span className={`inline-block rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider ${
                    KATEGORI_WARNA[a.kategori] || "bg-indigo2/10 text-indigo2"
                  }`}>
                    {a.kategori}
                  </span>
                  <h2 className="mt-3 font-display text-xl font-bold text-indigo2 group-hover:text-kombu dark:text-[#f0e8da]">
                    {a.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#5a5347] dark:text-[#c4b8a8]">
                    {a.ringkasan}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      )}
    </section>
  );
}