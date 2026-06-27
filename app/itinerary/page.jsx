import Link from "next/link";
import { itinerary } from "../../data/itinerary";
import { destinasi as semuaDestinasi } from "../../data/site";
import FadeIn from "../../components/FadeIn";
import DividerTenun from "../../components/DividerTenun";

export const metadata = {
  title: "Itinerary Sumba — Rencana Perjalanan 3, 5 & 7 Hari",
  description:
    "Rencana perjalanan Sumba yang sudah tersusun rapi — paket 3 hari, 5 hari lintas Sumba, dan 7 hari eksplorasi lengkap. Gratis, langsung bisa dipakai.",
  openGraph: {
    title: "Itinerary Sumba 3–7 Hari | Jelajah Sumba",
    description: "Rencana perjalanan Sumba siap pakai untuk first-timer hingga traveler serius.",
    images: [{ url: "/kuda-sumba-full.jpg", width: 1200, height: 630 }],
  },
};

const WARNA_HARI = [
  "border-kombu bg-kombu/5",
  "border-nila bg-nila/5",
  "border-lumut bg-lumut/5",
  "border-emas bg-emas/10",
  "border-kombu bg-kombu/5",
  "border-nila bg-nila/5",
  "border-lumut bg-lumut/5",
];

export default function HalamanItinerary() {
  return (
    <>
      {/* HERO */}
      <div className="mx-auto max-w-5xl px-5 pt-10 pb-6">
        <FadeIn>
          <nav className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#8a8273]">
              <li><Link href="/" className="hover:text-kombu transition">Beranda</Link></li>
              <li className="opacity-40">/</li>
              <li className="font-semibold text-kombu">Itinerary</li>
            </ol>
          </nav>
          <span className="rounded-md bg-kombu/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-kombu">
            🗺 Rencana Perjalanan
          </span>
          <h1 className="mt-4 font-display text-[clamp(2rem,6vw,3.2rem)] font-extrabold leading-tight text-indigo2 dark:text-[#f0e8da]">
            Itinerary Sumba Siap Pakai
          </h1>
          <p className="mt-3 max-w-2xl text-[#4d463c] dark:text-[#c4b8a8]">
            Jarak antar destinasi di Sumba bisa jauh dan medannya bervariasi — perencanaan yang baik
            membuat perjalanan lebih nyaman. Pilih paket sesuai durasi kamu.
          </p>
        </FadeIn>

        {/* PILIH PAKET */}
        <FadeIn delay={100}>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {itinerary.map((trip) => (
              <a key={trip.id} href={`#${trip.id}`}
                className="group rounded-2xl border-2 border-indigo2/15 bg-white p-5 transition hover:-translate-y-1 hover:border-kombu hover:shadow-lg dark:bg-[#252019] dark:border-white/10">
                <p className="font-display text-3xl font-extrabold text-kombu">{trip.durasi}</p>
                <p className="font-sans text-xs font-bold text-[#8a8273]">hari</p>
                <p className="mt-2 font-display text-base font-bold text-indigo2 dark:text-[#f0e8da]">{trip.judul}</p>
                <p className="mt-1 text-xs text-[#5a5347] dark:text-[#c4b8a8]">{trip.tagline}</p>
                <p className="mt-3 text-xs font-bold text-lumut">{trip.estimasiBiaya}</p>
              </a>
            ))}
          </div>
        </FadeIn>
      </div>

      <DividerTenun />

      {/* DETAIL TIAP PAKET */}
      {itinerary.map((trip, ti) => (
        <section key={trip.id} id={trip.id} className="mx-auto max-w-5xl px-5 py-14">
          <FadeIn>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="rounded-md bg-kombu/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-kombu">
                  {trip.durasi} Hari
                </span>
                <h2 className="mt-3 font-display text-[clamp(1.6rem,4vw,2.4rem)] font-extrabold text-indigo2 dark:text-[#f0e8da]">
                  {trip.judul}
                </h2>
                <p className="mt-2 font-serif2 italic text-[#4d463c] dark:text-[#c4b8a8]">{trip.tagline}</p>
              </div>
              <div className="rounded-2xl border border-indigo2/15 bg-white p-4 text-sm dark:bg-[#252019] dark:border-white/10 min-w-[180px]">
                <p className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#8a8273]">Info paket</p>
                <p className="mt-2 font-bold text-indigo2 dark:text-[#f0e8da]">{trip.estimasiBiaya}</p>
                <p className="text-xs text-[#5a5347] dark:text-[#c4b8a8]">per orang</p>
                <p className="mt-2 text-xs text-[#5a5347] dark:text-[#c4b8a8]">
                  <b className="text-indigo2 dark:text-[#f0e8da]">Basecamp:</b> {trip.basecamp}
                </p>
                <p className="mt-1 text-xs text-[#5a5347] dark:text-[#c4b8a8]">
                  <b className="text-indigo2 dark:text-[#f0e8da]">Cocok untuk:</b> {trip.cocokUntuk}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* TIMELINE HARI */}
          <div className="mt-8 space-y-4">
            {trip.hari.map((h, hi) => {
              const destiTerkait = semuaDestinasi.filter((d) => h.destinasi.includes(d.slug));
              return (
                <FadeIn key={h.hari} delay={hi * 60}>
                  <div className={`rounded-2xl border-l-4 p-5 ${WARNA_HARI[hi % WARNA_HARI.length]} dark:bg-[#1a1612]`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo2 font-display text-sm font-bold text-pasir">
                        {h.hari}
                      </span>
                      <h3 className="font-display text-lg font-bold text-indigo2 dark:text-[#f0e8da]">
                        Hari {h.hari} — {h.judul}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-[#4d463c] dark:text-[#c4b8a8]">{h.deskripsi}</p>

                    {h.tips && (
                      <div className="mt-3 flex gap-2 rounded-xl bg-white/60 px-3 py-2 dark:bg-[#252019]/60">
                        <span className="text-sm">💡</span>
                        <p className="text-xs leading-relaxed text-[#5a5347] dark:text-[#c4b8a8]">{h.tips}</p>
                      </div>
                    )}

                    {destiTerkait.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {destiTerkait.map((d) => (
                          <Link key={d.slug} href={`/destinasi/${d.slug}`}
                            className="flex items-center gap-1.5 rounded-full border border-indigo2/20 bg-white px-3 py-1 text-xs font-bold text-indigo2 hover:border-kombu hover:text-kombu transition dark:bg-[#252019] dark:border-white/10 dark:text-[#f0e8da]">
                            📍 {d.nama}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* CTA PEMANDU */}
          <FadeIn delay={200}>
            <div className="mt-8 rounded-2xl bg-gradient-to-br from-indigo2 to-nila p-6 text-pasir">
              <p className="font-display text-lg font-bold">Butuh pemandu untuk itinerary ini?</p>
              <p className="mt-1 text-sm opacity-85">
                Pemandu lokal Sumba bisa membantu menyesuaikan rute, mengurus transportasi,
                dan menghubungkan kamu dengan homestay terpercaya.
              </p>
              <a href={`https://wa.me/6281319634257?text=Halo,%20saya%20tertarik%20dengan%20itinerary%20${trip.durasi}%20hari%20di%20Sumba`}
                target="_blank" rel="noopener"
                className="mt-4 inline-block rounded-full bg-emas px-6 py-2.5 text-sm font-bold text-indigo2 hover:opacity-90 transition">
                💬 Tanya via WhatsApp
              </a>
              <Link href="/pemandu"
                className="ml-3 inline-block rounded-full border border-pasir/40 px-6 py-2.5 text-sm font-bold text-pasir hover:bg-white/10 transition">
                Lihat pemandu lokal →
              </Link>
            </div>
          </FadeIn>

          {ti < itinerary.length - 1 && <DividerTenun className="mt-14" />}
        </section>
      ))}

      {/* CTA BAWAH */}
      <FadeIn className="mx-5 mb-16 md:mx-auto md:max-w-5xl">
        <div className="rounded-3xl bg-gradient-to-br from-kombu to-[#6e2419] p-10 text-center text-pasir">
          <h2 className="font-display text-2xl font-extrabold">Siap menjejak Sumba?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm opacity-90">
            Sebelum berangkat, baca panduan etika berkunjung agar perjalananmu
            menghormati budaya dan alam Sumba.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/etika"
              className="rounded-full bg-white px-7 py-3 text-sm font-bold text-kombu hover:opacity-90 transition">
              Panduan Etika Berkunjung
            </Link>
            <Link href="/destinasi"
              className="rounded-full border-2 border-pasir/40 px-7 py-3 text-sm font-bold text-pasir hover:bg-white/10 transition">
              Jelajahi Destinasi →
            </Link>
          </div>
        </div>
      </FadeIn>
    </>
  );
}