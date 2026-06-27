import Link from "next/link";
import { destinasi } from "../data/site";
import { getAllArtikel } from "../lib/mdx";
import FadeIn from "../components/FadeIn";
import DividerTenun from "../components/DividerTenun";

export default function Beranda() {
  // Ambil 4 artikel budaya terbaru
  const artikelBudaya = getAllArtikel("budaya").slice(0, 4);
  // Ambil 4 pengrajin
  const pengrajin = getAllArtikel("pengrajin").slice(0, 4);
  // Ambil 6 destinasi pilihan
  const destinasiPilihan = destinasi.filter((d) => d.foto).slice(0, 6);

  const KATEGORI_WARNA = {
    kepercayaan: { bg: "from-nila to-indigo2", label: "bg-nila/20 text-nila" },
    ritual: { bg: "from-kombu to-[#6e2419]", label: "bg-kombu/15 text-kombu" },
    kerajinan: { bg: "from-lumut to-[#3a4a2a]", label: "bg-lumut/15 text-lumut" },
    sejarah: { bg: "from-[#7a5c1e] to-emas", label: "bg-emas/20 text-[#7a5c1e]" },
  };

  return (
    <>
      {/* HERO — tagline baru community-first */}
      <header className="relative bg-gradient-to-b from-pasir via-[#efe5cf] to-[#e8d6ad] px-5 pt-24 pb-14 md:grid md:min-h-[88svh] md:content-center md:py-16">
        <img
          src="/kuda-sumba-full.jpg"
          alt="Kuda Sumba"
          loading="eager"
          className="
            mx-auto mb-6 block
            h-44 w-44 rounded-full object-cover shadow-xl ring-4 ring-white/60
            md:absolute md:right-[8vw] md:top-1/2 md:-translate-y-1/2
            md:mx-0 md:mb-0 md:h-[min(28vw,320px)] md:w-[min(28vw,320px)]
            md:ring-8
          "
        />
        <div className="relative z-10 mx-auto w-full max-w-6xl text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-nila/30 bg-white px-4 py-1.5 text-xs font-bold text-nila">
            🏛 Ensiklopedia Budaya & Wisata Sumba
          </span>
          <h1 className="mt-4 font-display text-[clamp(3.2rem,13vw,8rem)] font-extrabold uppercase leading-[1.02] text-indigo2">
            Tanah<span className="block text-kombu">Marapu</span>
          </h1>
          <p className="mx-auto mt-4 max-w-sm font-serif2 text-base italic text-[#4a4338] md:mx-0 md:max-w-xl md:text-lg">
            Mengenal Sumba lebih dalam — budaya Marapu, tradisi yang masih hidup,
            dan manusia di baliknya. Gratis, tanpa perantara.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <Link href="/budaya"
              className="rounded-full bg-nila px-7 py-3 text-sm font-bold text-pasir hover:bg-indigo2 transition">
              Jelajahi Budaya
            </Link>
            <Link href="/destinasi"
              className="rounded-full border-2 border-indigo2 px-7 py-3 text-sm font-bold text-indigo2 hover:bg-indigo2/5 transition">
              Lihat Destinasi
            </Link>
          </div>
        </div>
      </header>

      {/* MARQUEE */}
      <div className="overflow-hidden whitespace-nowrap bg-indigo2 py-3 font-display font-semibold text-pasir">
        <div className="inline-block animate-[geser_28s_linear_infinite] hover:[animation-play-state:paused]">
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

      {/* === SECTION BUDAYA === */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <FadeIn>
          <span className="rounded-md bg-nila/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-nila">
            📖 Ensiklopedia Budaya
          </span>
          <h2 className="mt-4 font-display text-[clamp(1.8rem,5vw,3rem)] font-extrabold text-indigo2 dark:text-[#f0e8da]">
            Kenali Sumba Lebih Dalam
          </h2>
          <p className="mt-2 max-w-xl text-[#4d463c] dark:text-[#c4b8a8]">
            Filosofi Marapu, makna di balik motif tenun, dan tradisi yang masih hidup —
            ditulis untuk dipahami, bukan sekadar dilihat.
          </p>
        </FadeIn>

        {artikelBudaya.length === 0 ? (
          <FadeIn className="mt-8 rounded-2xl border border-indigo2/15 bg-white p-8 text-center dark:bg-[#252019]">
            <p className="text-[#5a5347]">Artikel budaya segera hadir.</p>
          </FadeIn>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {artikelBudaya.map((a, i) => {
              const warna = KATEGORI_WARNA[a.kategori] || { bg: "from-indigo2 to-nila", label: "bg-indigo2/10 text-indigo2" };
              return (
                <FadeIn key={a.slug} delay={i * 70}>
                  <Link href={`/budaya/${a.slug}`}
                    className="group block overflow-hidden rounded-2xl border border-indigo2/15 bg-white transition hover:-translate-y-1 hover:shadow-lg dark:bg-[#252019] dark:border-white/10">
                    <div className={`h-36 bg-gradient-to-br ${warna.bg} relative overflow-hidden`}>
                      {a.foto && <img src={a.foto} alt={a.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />}
                      <span className={`absolute top-3 left-3 rounded-full px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider ${warna.label} bg-white/80`}>
                        {a.kategori}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-display text-sm font-bold leading-snug text-indigo2 group-hover:text-kombu dark:text-[#f0e8da]">
                        {a.title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-[#5a5347] dark:text-[#c4b8a8] line-clamp-2">
                        {a.ringkasan}
                      </p>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        )}

        <FadeIn delay={200}>
          <div className="mt-6 text-center md:text-left">
            <Link href="/budaya"
              className="inline-block rounded-full border-2 border-nila px-6 py-2.5 text-sm font-bold text-nila hover:bg-nila hover:text-pasir transition">
              Lihat semua artikel →
            </Link>
          </div>
        </FadeIn>
      </section>

      <DividerTenun />

      {/* === SECTION PENGRAJIN & PEMANDU === */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <FadeIn>
          <span className="rounded-md bg-lumut/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-lumut">
            👤 Pilar Manusia
          </span>
          <h2 className="mt-4 font-display text-[clamp(1.8rem,5vw,3rem)] font-extrabold text-indigo2 dark:text-[#f0e8da]">
            Pengrajin & Pemandu Lokal
          </h2>
          <p className="mt-2 max-w-xl text-[#4d463c] dark:text-[#c4b8a8]">
            Di balik setiap helai tenun dan setiap perjalanan ada manusia dengan cerita.
            Terhubung langsung — tanpa perantara, tanpa komisi.
          </p>
        </FadeIn>

        {pengrajin.length === 0 ? (
          <FadeIn className="mt-8 rounded-2xl border border-indigo2/15 bg-white p-8 text-center dark:bg-[#252019]">
            <p className="text-[#5a5347]">Profil pengrajin segera hadir.</p>
          </FadeIn>
        ) : (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pengrajin.map((o, i) => (
              <FadeIn key={o.slug} delay={i * 70}>
                <Link href={`/pengrajin/${o.slug}`}
                  className="group flex gap-3 rounded-2xl border border-indigo2/15 bg-white p-4 transition hover:-translate-y-1 hover:shadow-lg dark:bg-[#252019] dark:border-white/10">
                  <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-kombu to-emas">
                    {o.foto && <img src={o.foto} alt={o.nama} loading="lazy" className="h-full w-full object-cover" />}
                  </div>
                  <div className="min-w-0">
                    <p className="font-display text-sm font-bold text-indigo2 group-hover:text-kombu dark:text-[#f0e8da] truncate">{o.nama}</p>
                    <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wide text-kombu truncate">{o.spesialisasi}</p>
                    <p className="mt-0.5 text-[10px] text-[#8a8273] truncate">{o.lokasi}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        )}

        <FadeIn delay={200}>
          <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
            <Link href="/pengrajin"
              className="rounded-full border-2 border-lumut px-6 py-2.5 text-sm font-bold text-lumut hover:bg-lumut hover:text-pasir transition">
              Semua pengrajin →
            </Link>
            <Link href="/pemandu"
              className="rounded-full border-2 border-indigo2/30 px-6 py-2.5 text-sm font-bold text-indigo2 hover:border-indigo2 transition dark:text-[#f0e8da]">
              Cari pemandu →
            </Link>
          </div>
        </FadeIn>
      </section>

      <DividerTenun />

      {/* === SECTION DESTINASI === */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <FadeIn>
          <span className="rounded-md bg-kombu/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-kombu">
            🗺 Destinasi Pilihan
          </span>
          <h2 className="mt-4 font-display text-[clamp(1.8rem,5vw,3rem)] font-extrabold text-indigo2 dark:text-[#f0e8da]">
            Jelajahi Sumba
          </h2>
          <p className="mt-2 max-w-xl text-[#4d463c] dark:text-[#c4b8a8]">
            Dari pantai ikonik, kampung adat megalitik, hingga hidden gem terbaru.
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destinasiPilihan.map((d, i) => (
            <FadeIn key={d.slug} delay={i * 70}>
              <Link href={`/destinasi/${d.slug}`}
                className="group block overflow-hidden rounded-2xl border border-indigo2/15 bg-white transition hover:-translate-y-1 hover:shadow-lg dark:bg-[#252019] dark:border-white/10">
                <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${d.gradien}`}>
                  {d.foto && <img src={d.foto} alt={d.nama} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />}
                  <span className={`absolute top-3 right-3 rounded-full px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider ${
                    d.badge === "baru" ? "bg-emas text-indigo2" : "bg-pasir/90 text-indigo2"
                  }`}>
                    {d.badge === "baru" ? "Baru" : "Klasik"}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-display text-base font-bold text-indigo2 group-hover:text-kombu dark:text-[#f0e8da]">{d.nama}</h3>
                  <p className="mt-1 text-xs text-[#5a5347] dark:text-[#c4b8a8] line-clamp-2">{d.ringkas}</p>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-kombu">{d.wilayah}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200}>
          <div className="mt-6 text-center md:text-left">
            <Link href="/destinasi"
              className="inline-block rounded-full border-2 border-kombu px-6 py-2.5 text-sm font-bold text-kombu hover:bg-kombu hover:text-pasir transition">
              Lihat semua destinasi →
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* === CTA KOMUNITAS === */}
      <FadeIn className="mx-5 mb-16 md:mx-auto md:max-w-6xl">
        <div className="rounded-3xl bg-gradient-to-br from-nila to-indigo2 p-10 text-center text-pasir">
          <h2 className="font-display text-3xl font-extrabold">Punya cerita tentang Sumba?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm opacity-90">
            Kami terbuka untuk kolaborasi dengan fotografer, penulis, pengrajin, dan pemandu lokal
            yang ingin berbagi cerita Sumba ke dunia — gratis, tanpa komisi.
          </p>
          <a href="https://wa.me/6281319634257?text=Halo,%20saya%20ingin%20berkontribusi%20untuk%20Jelajah%20Sumba"
            target="_blank" rel="noopener"
            className="mt-6 inline-block rounded-full bg-emas px-8 py-3.5 font-bold text-indigo2 hover:opacity-90 transition">
            Hubungi Kami →
          </a>
        </div>
      </FadeIn>
    </>
  );
}