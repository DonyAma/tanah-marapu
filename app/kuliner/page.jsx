"use client";
import { useState } from "react";
import Link from "next/link";
import { kuliner, KATEGORI_KULINER } from "../../data/kuliner";
import FadeIn from "../../components/FadeIn";
import DividerTenun from "../../components/DividerTenun";

export default function HalamanKuliner() {
  const [filter, setFilter] = useState("Semua");
  const [aktif, setAktif] = useState(null);

  const data = filter === "Semua" ? kuliner : kuliner.filter((k) => k.kategori === filter);

  return (
    <>
      {/* HERO */}
      <div className="mx-auto max-w-5xl px-5 pt-10 pb-6">
        <FadeIn>
          <nav className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#8a8273]">
              <li><Link href="/" className="hover:text-kombu transition">Beranda</Link></li>
              <li className="opacity-40">/</li>
              <li className="font-semibold text-kombu">Kuliner</li>
            </ol>
          </nav>
          <span className="rounded-md bg-emas/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#7a5c1e]">
            🍽 Kuliner Lokal
          </span>
          <h1 className="mt-4 font-display text-[clamp(2rem,6vw,3.2rem)] font-extrabold leading-tight text-indigo2 dark:text-[#f0e8da]">
            Cita Rasa Sumba
          </h1>
          <p className="mt-3 max-w-2xl font-serif2 italic text-[#4d463c] dark:text-[#c4b8a8]">
            Dari jagung bose yang mengenyangkan hingga tuak lontar yang menghangatkan —
            makanan Sumba bercerita tentang tanah, tradisi, dan cara hidup masyarakatnya.
          </p>
        </FadeIn>

        {/* FILTER */}
        <FadeIn delay={80}>
          <div className="mt-6 flex flex-wrap gap-2">
            {KATEGORI_KULINER.map((k) => (
              <button key={k} onClick={() => setFilter(k)}
                className={`rounded-full border-2 px-4 py-1.5 text-xs font-bold transition ${
                  filter === k
                    ? "border-indigo2 bg-indigo2 text-pasir"
                    : "border-indigo2/20 bg-white text-indigo2 hover:border-kombu dark:bg-[#252019] dark:text-[#f0e8da] dark:border-white/10"
                }`}>
                {k}
              </button>
            ))}
          </div>
        </FadeIn>
      </div>

      <DividerTenun />

      {/* GRID KULINER */}
      <div className="mx-auto max-w-5xl px-5 py-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item, i) => (
            <FadeIn key={item.slug} delay={i * 60}>
              <div
                onClick={() => setAktif(aktif === item.slug ? null : item.slug)}
                className={`cursor-pointer overflow-hidden rounded-2xl border-2 transition ${
                  aktif === item.slug
                    ? "border-kombu shadow-lg"
                    : "border-indigo2/15 hover:border-kombu/40 dark:border-white/10"
                } bg-white dark:bg-[#252019]`}>

                {/* FOTO / GRADIENT */}
                <div className={`relative h-36 bg-gradient-to-br ${item.gradien}`}>
                  {item.foto && (
                    <img src={item.foto} alt={item.nama}
                      className="absolute inset-0 h-full w-full object-cover" />
                  )}
                  <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider text-indigo2">
                    {item.kategori}
                  </span>
                </div>

                {/* INFO */}
                <div className="p-4">
                  <h2 className="font-display text-lg font-bold text-indigo2 dark:text-[#f0e8da]">
                    {item.nama}
                  </h2>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#5a5347] dark:text-[#c4b8a8] line-clamp-2">
                    {item.deskripsi}
                  </p>
                  <p className="mt-2 font-sans text-xs font-bold text-lumut">{item.harga}</p>
                </div>

                {/* DETAIL — accordion */}
                {aktif === item.slug && (
                  <div className="border-t border-indigo2/10 dark:border-white/10 px-4 pb-4 pt-3 space-y-3">
                    <div>
                      <p className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#8a8273] mb-1.5">Bahan utama</p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.bahan.map((b) => (
                          <span key={b} className="rounded-full bg-pasir px-2.5 py-1 text-[10px] font-bold text-indigo2 dark:bg-[#2e2820] dark:text-[#f0e8da]">
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#8a8273] mb-1">Di mana makan</p>
                      <p className="text-xs text-[#4d463c] dark:text-[#c4b8a8]">📍 {item.dimanaMakan}</p>
                    </div>
                    {item.tipEtika && (
                      <div className="rounded-xl bg-emas/10 px-3 py-2.5">
                        <p className="text-xs leading-relaxed text-[#7a5c1e] dark:text-[#e0a93e]">
                          💡 {item.tipEtika}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <DividerTenun />

      {/* INFO TAMBAHAN */}
      <FadeIn className="mx-auto max-w-5xl px-5 py-10">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-indigo2/15 bg-white p-6 dark:bg-[#252019] dark:border-white/10">
            <h2 className="font-display text-xl font-bold text-indigo2 dark:text-[#f0e8da] mb-3">
              🏪 Tips Makan di Sumba
            </h2>
            <ul className="space-y-2.5 text-sm text-[#4d463c] dark:text-[#c4b8a8]">
              {[
                "Warung lokal biasanya buka pagi–siang, beberapa tutup sore. Jangan berharap buka 24 jam.",
                "Pasar pagi adalah tempat terbaik untuk menemukan kuliner otentik dan segar.",
                "Minta rekomendasi ke pemilik homestay — mereka tahu warung terbaik di sekitar.",
                "Bawa uang tunai — banyak warung tidak menerima kartu atau QRIS.",
                "Porsi di warung lokal biasanya cukup besar untuk ukuran harganya.",
              ].map((tip, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-kombu" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-indigo2/15 bg-white p-6 dark:bg-[#252019] dark:border-white/10">
            <h2 className="font-display text-xl font-bold text-indigo2 dark:text-[#f0e8da] mb-3">
              🌶 Soal Kepedasan
            </h2>
            <p className="text-sm leading-relaxed text-[#4d463c] dark:text-[#c4b8a8]">
              Masakan Sumba umumnya tidak sepedas masakan Manado atau Padang — tapi sambal selalu
              tersedia sebagai pelengkap. Sambal lu'at khas NTT rasanya lebih segar dan ringan
              dibanding sambal Jawa.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#4d463c] dark:text-[#c4b8a8]">
              Kalau tidak tahan pedas, bilang saja "tidak pakai sambal" — warga Sumba sangat
              akomodatif terhadap preferensi tamu.
            </p>
            <div className="mt-4 rounded-xl border-l-[3px] border-nila bg-[#fbf6ec] p-3 dark:bg-[#1a1612]">
              <p className="text-xs italic text-[#2d3b4f] dark:text-[#c4b8a8]">
                "Makanan Sumba paling enak dimakan bersama warga lokal — minta diajak ke warung langganan mereka."
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* CTA KONTRIBUSI */}
      <FadeIn className="mx-5 mb-16 md:mx-auto md:max-w-5xl">
        <div className="rounded-3xl bg-gradient-to-br from-[#7a5c1e] to-emas p-8 text-center text-indigo2">
          <h2 className="font-display text-2xl font-extrabold">Tahu kuliner Sumba lain yang belum ada di sini?</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm opacity-80">
            Bantu kami melengkapi panduan kuliner Sumba — ceritakan makanan lokal favoritmu dan di mana menemukannya.
          </p>
          <Link href="/kontribusi"
            className="mt-5 inline-block rounded-full bg-indigo2 px-7 py-3 text-sm font-bold text-pasir hover:opacity-90 transition">
            🤝 Kontribusi Info Kuliner
          </Link>
        </div>
      </FadeIn>
    </>
  );
}