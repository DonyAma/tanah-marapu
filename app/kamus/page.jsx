"use client";
import { useState } from "react";
import Link from "next/link";
import { kamusData, KATEGORI_KAMUS } from "../../data/kamus-bahasa";
import FadeIn from "../../components/FadeIn";
import DividerTenun from "../../components/DividerTenun";

export default function HalamanKamus() {
  const [filter, setFilter] = useState("Semua");
  const [cari, setCari] = useState("");

  const dataFil = kamusData
    .filter((k) => filter === "Semua" || k.kategori === filter)
    .map((k) => ({
      ...k,
      kata: cari
        ? k.kata.filter((w) =>
            w.indonesia.toLowerCase().includes(cari.toLowerCase()) ||
            w.kambera.toLowerCase().includes(cari.toLowerCase()) ||
            w.wewewa.toLowerCase().includes(cari.toLowerCase())
          )
        : k.kata,
    }))
    .filter((k) => k.kata.length > 0);

  const totalKata = kamusData.reduce((acc, k) => acc + k.kata.length, 0);

  return (
    <>
      {/* HERO */}
      <div className="mx-auto max-w-5xl px-5 pt-10 pb-6">
        <FadeIn>
          <nav className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#8a8273]">
              <li><Link href="/" className="hover:text-kombu transition">Beranda</Link></li>
              <li className="opacity-40">/</li>
              <li className="font-semibold text-kombu">Kamus Bahasa</li>
            </ol>
          </nav>
          <span className="rounded-md bg-nila/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-nila">
            🗣 Kamus Mini
          </span>
          <h1 className="mt-4 font-display text-[clamp(2rem,6vw,3.2rem)] font-extrabold leading-tight text-indigo2 dark:text-[#f0e8da]">
            Belajar Bahasa Sumba
          </h1>
          <p className="mt-3 max-w-2xl font-serif2 italic text-[#4d463c] dark:text-[#c4b8a8]">
            Beberapa kata dalam bahasa lokal bisa mengubah perjalananmu sepenuhnya —
            warga Sumba akan menyambutmu jauh lebih hangat ketika kamu mencoba berbicara dalam bahasa mereka.
          </p>
          <p className="mt-2 font-sans text-xs text-[#8a8273]">
            {totalKata} kata dalam 2 dialek utama: <b className="text-indigo2 dark:text-[#f0e8da]">Kambera</b> (Sumba Timur) &amp; <b className="text-indigo2 dark:text-[#f0e8da]">Wewewa</b> (Sumba Barat)
          </p>
        </FadeIn>

        {/* SEARCH */}
        <FadeIn delay={80}>
          <input
            type="search"
            value={cari}
            onChange={(e) => setCari(e.target.value)}
            placeholder="Cari kata dalam bahasa Indonesia, Kambera, atau Wewewa..."
            className="mt-5 w-full rounded-xl border border-indigo2/20 bg-white px-4 py-3 text-sm outline-none focus:border-kombu transition dark:bg-[#252019] dark:text-[#f0e8da] dark:border-white/10 dark:placeholder:text-[#8a7e70]"
          />
        </FadeIn>

        {/* FILTER */}
        <FadeIn delay={120}>
          <div className="mt-4 flex flex-wrap gap-2">
            {KATEGORI_KAMUS.map((k) => {
              const data = kamusData.find((d) => d.kategori === k);
              return (
                <button key={k} onClick={() => setFilter(k)}
                  className={`rounded-full border-2 px-4 py-1.5 text-xs font-bold transition ${
                    filter === k
                      ? "border-indigo2 bg-indigo2 text-pasir"
                      : "border-indigo2/20 bg-white text-indigo2 hover:border-kombu dark:bg-[#252019] dark:text-[#f0e8da] dark:border-white/10"
                  }`}>
                  {data?.icon} {k}
                </button>
              );
            })}
          </div>
        </FadeIn>
      </div>

      <DividerTenun />

      {/* TABEL KAMUS */}
      <div className="mx-auto max-w-5xl px-5 py-10 space-y-8">
        {dataFil.length === 0 ? (
          <FadeIn className="rounded-2xl border border-indigo2/15 bg-white p-10 text-center dark:bg-[#252019]">
            <p className="text-[#5a5347] dark:text-[#c4b8a8]">Kata tidak ditemukan. Coba kata lain.</p>
          </FadeIn>
        ) : (
          dataFil.map((kat, ki) => (
            <FadeIn key={kat.kategori} delay={ki * 60}>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{kat.icon}</span>
                  <h2 className="font-display text-xl font-bold text-indigo2 dark:text-[#f0e8da]">
                    {kat.kategori}
                  </h2>
                </div>

                <div className="overflow-hidden rounded-2xl border border-indigo2/15 dark:border-white/10">
                  {/* Header tabel */}
                  <div className="grid grid-cols-[1fr_1fr_1fr] bg-indigo2 px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-pasir/70 sm:grid-cols-[1.5fr_1fr_1fr_1.5fr]">
                    <span>Indonesia</span>
                    <span>Kambera</span>
                    <span>Wewewa</span>
                    <span className="hidden sm:block">Catatan</span>
                  </div>

                  {/* Baris kata */}
                  {kat.kata.map((w, wi) => (
                    <div key={wi}
                      className={`grid grid-cols-[1fr_1fr_1fr] gap-x-2 px-4 py-3 text-sm sm:grid-cols-[1.5fr_1fr_1fr_1.5fr] ${
                        wi % 2 === 0
                          ? "bg-white dark:bg-[#252019]"
                          : "bg-pasir/30 dark:bg-[#1e1a14]"
                      }`}>
                      <span className="font-bold text-indigo2 dark:text-[#f0e8da]">{w.indonesia}</span>
                      <span className="font-display font-bold text-kombu">{w.kambera}</span>
                      <span className="font-display font-bold text-nila">{w.wewewa}</span>
                      {w.catatan && (
                        <span className="hidden sm:block text-xs text-[#8a8273] italic">{w.catatan}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))
        )}
      </div>

      <DividerTenun />

      {/* INFO DIALEK */}
      <FadeIn className="mx-auto max-w-5xl px-5 py-10">
        <h2 className="font-display text-xl font-bold text-indigo2 dark:text-[#f0e8da] mb-5">
          Tentang Bahasa di Sumba
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border-l-4 border-kombu border border-indigo2/10 bg-white p-5 dark:bg-[#252019] dark:border-indigo2/20">
            <h3 className="font-display text-base font-bold text-kombu mb-2">Bahasa Kambera</h3>
            <p className="text-sm leading-relaxed text-[#4d463c] dark:text-[#c4b8a8]">
              Bahasa utama di <b>Sumba Timur</b> — digunakan di Waingapu dan sekitarnya.
              Memiliki penutur terbanyak di antara dialek-dialek Sumba.
            </p>
          </div>
          <div className="rounded-2xl border-l-4 border-nila border border-indigo2/10 bg-white p-5 dark:bg-[#252019] dark:border-indigo2/20">
            <h3 className="font-display text-base font-bold text-nila mb-2">Bahasa Wewewa</h3>
            <p className="text-sm leading-relaxed text-[#4d463c] dark:text-[#c4b8a8]">
              Bahasa utama di <b>Sumba Barat</b> — digunakan di sekitar Waikabubak.
              Beberapa kata berbeda signifikan dari Kambera.
            </p>
          </div>
        </div>
        <div className="mt-4 rounded-2xl border border-indigo2/15 bg-white p-5 dark:bg-[#252019] dark:border-white/10">
          <p className="font-sans text-sm leading-relaxed text-[#4d463c] dark:text-[#c4b8a8]">
            <b className="text-indigo2 dark:text-[#f0e8da]">Catatan penting:</b> Sumba memiliki lebih dari 8 dialek berbeda antar wilayah.
            Kamus ini hanya mencakup dua dialek utama sebagai panduan dasar.
            Bahasa Indonesia dipahami luas di seluruh Sumba — gunakan sebagai fallback.
            Pemandu lokal adalah cara terbaik untuk belajar frasa-frasa spesifik wilayah yang akan dikunjungi.
          </p>
        </div>
      </FadeIn>

      {/* CTA */}
      <FadeIn className="mx-5 mb-16 md:mx-auto md:max-w-5xl">
        <div className="rounded-3xl bg-gradient-to-br from-nila to-indigo2 p-8 text-center text-pasir">
          <h2 className="font-display text-2xl font-extrabold">Mau belajar lebih dalam?</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm opacity-85">
            Pemandu lokal Sumba adalah guru bahasa terbaik — mereka bisa mengajarkan
            frasa-frasa yang tidak ada di kamus manapun sambil memandumu menjelajahi Sumba.
          </p>
          <Link href="/pemandu"
            className="mt-5 inline-block rounded-full bg-emas px-7 py-3 text-sm font-bold text-indigo2 hover:opacity-90 transition">
            Cari Pemandu Lokal →
          </Link>
        </div>
      </FadeIn>
    </>
  );
}