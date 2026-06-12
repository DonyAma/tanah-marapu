import Link from "next/link";
import { destinasi } from "../data/site";

export default function Beranda() {
  return (
    <>
      {/* HERO */}
      <header className="relative grid min-h-[92svh] content-center bg-gradient-to-b from-pasir via-[#efe5cf] to-[#e8d6ad] px-5 py-16">
        <div className="absolute right-[8vw] top-[14vh] aspect-square w-[min(26vw,220px)] rounded-full bg-[radial-gradient(circle_at_35%_35%,#f3c96b,#e0a93e_60%,#d28f2c)] opacity-90" />
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-indigo2 bg-white px-4 py-1.5 text-xs font-bold">
            ★ <b className="text-kombu">Tatler Travel</b> · 18 Destinasi Dunia 2026
          </span>
          <h1 className="mt-6 font-display text-[clamp(3rem,11vw,8rem)] font-extrabold uppercase leading-[1.02] text-indigo2">
            Tanah<span className="block text-kombu">Marapu</span>
          </h1>
          <p className="mt-4 max-w-xl font-serif2 text-lg italic text-[#4a4338]">
            Sabana emas, bukit berlapis warna tanah, kampung megalitik, dan tradisi
            Pasola berusia ratusan tahun — selamat datang di Sumba.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/destinasi" className="rounded-full bg-kombu px-7 py-3 text-sm font-bold text-pasir hover:bg-[#b04636]">
              Jelajahi Destinasi
            </Link>
            <Link href="/blog/itinerary-sumba-5-hari" className="rounded-full border-2 border-indigo2 px-7 py-3 text-sm font-bold text-indigo2 hover:bg-indigo2/5">
              Lihat Itinerary
            </Link>
          </div>
        </div>
      </header>

      {/* MARQUEE */}
      <div className="overflow-hidden whitespace-nowrap bg-indigo2 py-3 font-display font-semibold text-pasir">
        <div className="inline-block animate-[geser_28s_linear_infinite]">
          {[0, 1].map((k) => (
            <span key={k}>
              {destinasi.map((d) => (
                <span key={d.slug + k}>
                  {d.nama.toUpperCase()} <i className="mx-4 not-italic text-emas">◆</i>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* DESTINASI */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <span className="rounded-md bg-lumut px-3 py-1 text-xs font-bold uppercase tracking-widest text-pasir">
          Baru naik daun × Klasik
        </span>
        <h2 className="mt-4 font-display text-[clamp(1.8rem,5vw,3.2rem)] font-extrabold text-indigo2">
          Dari ikon legendaris sampai hidden gem terbaru
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destinasi.map((d) => (
            <Link
              key={d.slug}
              href={`/destinasi/${d.slug}`}
              className="group overflow-hidden rounded-2xl border border-indigo2/15 bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`relative flex h-40 items-start justify-end overflow-hidden bg-gradient-to-br p-3 ${d.gradien}`}>
                {d.foto && (
                  <img src={d.foto} alt={d.nama} loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover" />
                )}
                <span
                  className={`relative z-10 rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider ${
                    d.badge === "baru" ? "bg-emas text-indigo2" : "bg-pasir/95 text-indigo2"
                  }`}
                >
                  {d.badge === "baru" ? "Baru Naik Daun" : "Klasik"}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg font-bold text-indigo2 group-hover:text-kombu">{d.nama}</h3>
                <p className="mt-1 text-sm text-[#5a5347]">{d.ringkas}</p>
                <p className="mt-3 text-[11px] font-bold uppercase tracking-wider text-kombu">{d.wilayah}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div id="kontak" className="mx-5 mb-16 rounded-3xl bg-gradient-to-br from-kombu to-[#6e2419] p-10 text-center text-pasir md:mx-auto md:max-w-6xl">
        <h2 className="font-display text-3xl font-extrabold">Siap menjejak Tanah Marapu?</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm opacity-90">
          Terhubung langsung dengan homestay, sopir, dan guide lokal Sumba — tanpa perantara, harga jujur.
        </p>
        <a
          href="https://wa.me/6281319634257?text=Halo,%20saya%20mau%20rencanakan%20trip%20Sumba"
          target="_blank"
          rel="noopener"
          className="mt-6 inline-block rounded-full bg-[#1f8a4c] px-8 py-3.5 font-bold text-white hover:bg-[#27a25b]"
        >
          Chat via WhatsApp
        </a>
      </div>
    </>
  );
}
