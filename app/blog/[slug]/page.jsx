import Link from "next/link";
import { artikel, destinasi } from "../../../data/site";
import { FAQ, SlotIklan, BoxAffiliate } from "../../../components/Blok";

export function generateStaticParams() {
  return artikel.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }) {
  const a = artikel.find((x) => x.slug === params.slug);
  if (!a) return {};
  return { title: a.judul, description: a.lede };
}

export default function Artikel({ params }) {
  const a = artikel.find((x) => x.slug === params.slug);
  if (!a) return <p className="p-10">Artikel tidak ditemukan.</p>;

  return (
    <article className="mx-auto max-w-3xl px-5 py-12">
      <span className="rounded-md bg-lumut px-3 py-1 text-xs font-bold uppercase tracking-widest text-pasir">
        {a.kategori}
      </span>
      <p className="mt-3 text-xs text-[#8a8273]">{a.tanggal} · {a.baca} baca · Tim Tanah Marapu</p>
      <h1 className="mt-2 font-display text-[clamp(1.9rem,5.5vw,3rem)] font-extrabold leading-tight text-indigo2">
        {a.judul}
      </h1>
      <p className="mt-4 font-serif2 text-lg italic text-[#4d463c]">{a.lede}</p>

      {/* daftar isi */}
      <nav className="mt-6 rounded-xl border border-indigo2/15 bg-white p-5 text-sm">
        <b className="font-display text-indigo2">Di artikel ini</b>
        <ul className="mt-2 space-y-1">
          {a.isi.map((s, i) => (
            <li key={i} className="ml-4 list-disc font-semibold text-kombu">{s.h}</li>
          ))}
        </ul>
      </nav>

      {a.isi.map((s, i) => (
        <section key={i}>
          <h2 className="mt-8 font-display text-2xl font-bold text-indigo2">{s.h}</h2>
          <p className="mt-2 text-[#4d463c]">{s.p}</p>
          {i === 0 && <SlotIklan label="slot iklan AdSense in-article" />}
          {i === 1 && (
            <BoxAffiliate
              judul="🚗 Belum punya transport?"
              teks="Sewa mobil + sopir lokal mulai Rp750rb/hari sudah termasuk BBM."
              cta="Lihat direktori rental kami"
              href="/stay"
            />
          )}
        </section>
      ))}

      <FAQ items={a.faq} />

      {/* related / baca juga */}
      <section className="mt-10">
        <h2 className="font-display text-2xl font-bold text-indigo2">Baca juga</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {destinasi.slice(0, 2).map((d) => (
            <Link key={d.slug} href={`/destinasi/${d.slug}`}
              className="group flex gap-3 rounded-xl border border-indigo2/15 bg-white p-3 hover:shadow-md">
              <div className={`h-16 w-20 shrink-0 overflow-hidden rounded-lg bg-gradient-to-br ${d.gradien}`}>
                {d.foto && <img src={d.foto} alt={d.nama} loading="lazy" className="h-full w-full object-cover" />}
              </div>
              <div>
                <p className="font-display text-sm font-bold text-indigo2 group-hover:text-kombu">{d.nama}</p>
                <p className="text-xs text-[#8a8273]">{d.wilayah}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
