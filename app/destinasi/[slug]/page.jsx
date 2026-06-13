import Link from "next/link";
import { destinasi } from "../../../data/site";
import { FAQ, SlotIklan, BoxAffiliate } from "../../../components/Blok";

export function generateStaticParams() {
  return destinasi.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }) {
  const d = destinasi.find((x) => x.slug === params.slug);
  if (!d) return {};
  return {
    title: `${d.nama} — Rute, Tiket & Tips`,
    description: d.ringkas,
  };
}

export default function DetailDestinasi({ params }) {
  const d = destinasi.find((x) => x.slug === params.slug);
  if (!d) return <p className="p-10">Destinasi tidak ditemukan.</p>;
  const terdekat = (d.terdekat || [])
    .map((s) => destinasi.find((x) => x.slug === s))
    .filter(Boolean);

  return (
    <>
      {/* breadcrumb */}
      <p className="mx-auto max-w-6xl px-5 pt-4 text-xs text-[#8a8273]">
        <Link href="/">Beranda</Link> / <Link href="/destinasi">Destinasi</Link> /{" "}
        {d.wilayah} / <b className="text-kombu">{d.nama}</b>
      </p>

      {/* hero */}
      <div className={`relative mx-auto mt-3 flex h-[32vh] min-h-[200px] md:h-[40vh] max-w-6xl items-end overflow-hidden rounded-3xl bg-gradient-to-br p-7 ${d.gradien}`}>
        {d.foto && (
          <img src={d.foto} alt={d.nama}
            className="absolute inset-0 h-full w-full object-cover" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo2/60" />
        <div className="relative z-10">
          <p className="text-xs font-bold uppercase tracking-widest text-white/90">
            {d.wilayah} · {d.kategori}
          </p>
          <h1 className="font-display text-[clamp(2rem,6vw,3.5rem)] font-extrabold text-white">{d.nama}</h1>
          <span className={`mt-2 inline-block rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider ${
            d.badge === "baru" ? "bg-emas text-indigo2" : "bg-pasir text-indigo2"}`}>
            {d.badge === "baru" ? "Baru Naik Daun" : "Klasik"}
          </span>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 md:gap-9 px-5 py-10 lg:grid-cols-[1.6fr_.9fr]">
        <article>
          <h2 className="font-display text-2xl font-bold text-indigo2">Kenapa harus ke sini</h2>
          <p className="mt-2 text-[#4d463c]">{d.deskripsi}</p>

          <h2 className="mt-8 font-display text-2xl font-bold text-indigo2">Rute & akses</h2>
          <p className="mt-2 text-[#4d463c]">{d.rute}</p>

          <BoxAffiliate
            judul="🏨 Menginap di dekat sini?"
            teks="Bandingkan harga hotel & penginapan terdekat mulai Rp150rb/malam."
            cta="Cek harga di Traveloka"
          />

          <h2 className="mt-8 font-display text-2xl font-bold text-indigo2">Tips berkunjung</h2>
          <p className="mt-2 text-[#4d463c]">{d.tips}</p>

          <SlotIklan />

          {/* Google Maps embed */}
          <h2 className="font-display text-2xl font-bold text-indigo2">Lokasi</h2>
          <iframe
            src={d.maps}
            className="mt-3 h-72 w-full rounded-2xl border border-indigo2/15"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Peta ${d.nama}`}
          />

          <FAQ items={d.faq} />

          {/* destinasi terdekat */}
          {terdekat.length > 0 && (
            <section className="mt-10">
              <h2 className="font-display text-2xl font-bold text-indigo2">Destinasi terdekat</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {terdekat.map((t) => (
                  <Link key={t.slug} href={`/destinasi/${t.slug}`}
                    className="group flex gap-3 rounded-xl border border-indigo2/15 bg-white p-3 transition hover:shadow-md">
                    <div className={`h-16 w-20 shrink-0 overflow-hidden rounded-lg bg-gradient-to-br ${t.gradien}`}>
                      {t.foto && <img src={t.foto} alt={t.nama} loading="lazy" className="h-full w-full object-cover" />}
                    </div>
                    <div>
                      <p className="font-display text-sm font-bold text-indigo2 group-hover:text-kombu">{t.nama}</p>
                      <p className="text-xs text-[#8a8273]">{t.wilayah}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>

        {/* sidebar fakta */}
        <aside className="h-max rounded-2xl border border-indigo2/15 bg-white p-6 lg:sticky lg:top-24">
          <h3 className="font-display font-bold text-indigo2">Fakta singkat</h3>
          <ul className="mt-3 text-sm">
            {[
              ["Tiket masuk", d.fakta.tiket],
              ["Jarak", d.fakta.jarak],
              ["Waktu terbaik", d.fakta.waktuTerbaik],
              ["Durasi kunjungan", d.fakta.durasi],
              ["Sinyal", d.fakta.sinyal],
            ].map(([k, v]) => (
              <li key={k} className="flex justify-between gap-3 border-b border-dashed border-indigo2/15 py-2 last:border-0">
                <span>{k}</span>
                <b className="text-kombu">{v}</b>
              </li>
            ))}
          </ul>
          <a
            href={`https://wa.me/6281319634257?text=Halo,%20saya%20mau%20tanya%20tentang%20${encodeURIComponent(d.nama)}`}
            target="_blank"
            rel="noopener"
            className="mt-4 block rounded-full bg-[#1f8a4c] py-3 text-center text-sm font-bold text-white hover:bg-[#27a25b]"
          >
            💬 Tanya guide lokal
          </a>
        </aside>
      </div>
    </>
  );
}
