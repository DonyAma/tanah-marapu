"use client";
import { useState } from "react";
import Link from "next/link";
import { kalenderAdat } from "../../data/kalender-adat";
import FadeIn from "../../components/FadeIn";
import DividerTenun from "../../components/DividerTenun";

const TIPE_WARNA = {
  ritual: { bg: "bg-kombu/10", text: "text-kombu", dot: "bg-kombu" },
  alam: { bg: "bg-lumut/10", text: "text-lumut", dot: "bg-lumut" },
  wisata: { bg: "bg-nila/10", text: "text-nila", dot: "bg-nila" },
};

const MUSIM_WARNA = {
  hujan: { bg: "bg-nila/15", text: "text-nila", icon: "🌧" },
  kemarau: { bg: "bg-emas/20", text: "text-[#7a5c1e]", icon: "☀️" },
  transisi: { bg: "bg-lumut/10", text: "text-lumut", icon: "🌤" },
};

const HIGHLIGHT_LABEL = {
  pasola: { label: "🏇 Pasola", warna: "bg-kombu text-pasir" },
  "wulla-poddu": { label: "🙏 Wulla Poddu", warna: "bg-indigo2 text-pasir" },
};

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={`text-sm ${s <= rating ? "text-emas" : "text-[#d0c8bc]"}`}>★</span>
      ))}
    </div>
  );
}

export default function HalamanKalender() {
  const [bulanAktif, setBulanAktif] = useState(new Date().getMonth() + 1);
  const bulan = kalenderAdat.find((b) => b.bulan === bulanAktif);
  const musim = MUSIM_WARNA[bulan.musim];

  return (
    <>
      {/* HERO */}
      <div className="mx-auto max-w-5xl px-5 pt-10 pb-6">
        <FadeIn>
          <nav className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#8a8273]">
              <li><Link href="/" className="hover:text-kombu transition">Beranda</Link></li>
              <li className="opacity-40">/</li>
              <li className="font-semibold text-kombu">Kalender Adat</li>
            </ol>
          </nav>
          <span className="rounded-md bg-indigo2/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-indigo2 dark:text-[#f0e8da]">
            📅 Kalender Adat
          </span>
          <h1 className="mt-4 font-display text-[clamp(2rem,6vw,3.2rem)] font-extrabold leading-tight text-indigo2 dark:text-[#f0e8da]">
            Kapan Waktu Terbaik ke Sumba?
          </h1>
          <p className="mt-3 max-w-2xl text-[#4d463c] dark:text-[#c4b8a8]">
            Kalender ini menggabungkan siklus adat Marapu, musim alam, dan kondisi wisata —
            supaya kamu bisa merencanakan perjalanan yang tepat waktu dan menghormati budaya setempat.
          </p>
        </FadeIn>
      </div>

      <DividerTenun />

      <div className="mx-auto max-w-5xl px-5 py-10">
        {/* GRID BULAN */}
        <FadeIn>
          <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-12">
            {kalenderAdat.map((b) => {
              const aktif = b.bulan === bulanAktif;
              const musimWarna = MUSIM_WARNA[b.musim];
              return (
                <button
                  key={b.bulan}
                  onClick={() => setBulanAktif(b.bulan)}
                  className={`relative rounded-xl p-2 text-center transition ${
                    aktif
                      ? "bg-indigo2 text-pasir shadow-lg scale-105"
                      : "bg-white border border-indigo2/15 hover:border-kombu dark:bg-[#252019] dark:border-white/10"
                  }`}
                >
                  <p className={`font-sans text-[10px] font-bold uppercase tracking-wide ${aktif ? "text-pasir/70" : "text-[#8a8273]"}`}>
                    {b.nama.slice(0, 3)}
                  </p>
                  <p className="mt-0.5 text-base">{musimWarna.icon}</p>
                  {b.highlight && (
                    <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-kombu border-2 border-pasir" />
                  )}
                  <div className="mt-1 flex justify-center gap-0.5">
                    {[1,2,3,4,5].map((s) => (
                      <span key={s} className={`text-[6px] ${s <= b.rating ? "text-emas" : aktif ? "text-pasir/30" : "text-[#d0c8bc]"}`}>★</span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* LEGENDA */}
        <FadeIn delay={80}>
          <div className="mt-4 flex flex-wrap gap-3 text-xs text-[#5a5347] dark:text-[#c4b8a8]">
            <span className="flex items-center gap-1">🌧 Hujan</span>
            <span className="flex items-center gap-1">🌤 Transisi</span>
            <span className="flex items-center gap-1">☀️ Kemarau</span>
            <span className="flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-kombu inline-block" /> Ada event adat</span>
            <span className="flex items-center gap-1">★ Rating wisata</span>
          </div>
        </FadeIn>

        {/* DETAIL BULAN AKTIF */}
        <FadeIn key={bulanAktif} className="mt-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
            <div>
              {/* Header bulan */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <h2 className="font-display text-3xl font-extrabold text-indigo2 dark:text-[#f0e8da]">
                  {bulan.nama}
                </h2>
                <span className={`rounded-full px-3 py-1 text-xs font-bold ${musim.bg} ${musim.text}`}>
                  {musim.icon} {bulan.musim.charAt(0).toUpperCase() + bulan.musim.slice(1)}
                </span>
                {bulan.highlight && HIGHLIGHT_LABEL[bulan.highlight] && (
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${HIGHLIGHT_LABEL[bulan.highlight].warna}`}>
                    {HIGHLIGHT_LABEL[bulan.highlight].label}
                  </span>
                )}
              </div>

              {/* Events */}
              <div className="space-y-3">
                {bulan.events.map((e, i) => {
                  const warna = TIPE_WARNA[e.tipe] || TIPE_WARNA.wisata;
                  return (
                    <div key={i} className={`rounded-2xl border border-indigo2/10 p-4 dark:border-white/10 dark:bg-[#252019] bg-white`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`h-2 w-2 rounded-full ${warna.dot}`} />
                        <span className={`font-sans text-[10px] font-bold uppercase tracking-wider ${warna.text}`}>
                          {e.tipe}
                        </span>
                      </div>
                      <p className="font-display text-base font-bold text-indigo2 dark:text-[#f0e8da]">{e.nama}</p>
                      <p className="mt-1 text-sm leading-relaxed text-[#4d463c] dark:text-[#c4b8a8]">{e.deskripsi}</p>
                    </div>
                  );
                })}
              </div>

              {/* Link ke artikel Pasola */}
              {bulan.highlight === "pasola" && (
                <Link href="/budaya/pasola-ritual-perang-tombak"
                  className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-kombu px-5 py-2 text-sm font-bold text-kombu hover:bg-kombu hover:text-pasir transition">
                  Baca lebih lanjut tentang Pasola →
                </Link>
              )}
              {bulan.highlight === "wulla-poddu" && (
                <Link href="/etika"
                  className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-indigo2 px-5 py-2 text-sm font-bold text-indigo2 hover:bg-indigo2 hover:text-pasir transition dark:text-[#f0e8da] dark:border-[#f0e8da]">
                  Baca panduan etika berkunjung →
                </Link>
              )}
            </div>

            {/* SIDEBAR */}
            <div className="space-y-4 h-max lg:sticky lg:top-24">
              {/* Rating wisata */}
              <div className="rounded-2xl border border-indigo2/15 bg-white p-5 dark:bg-[#252019] dark:border-white/10">
                <p className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#8a8273]">
                  Rating Wisata
                </p>
                <div className="mt-2">
                  <StarRating rating={bulan.rating} />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#4d463c] dark:text-[#c4b8a8]">
                  {bulan.wisata}
                </p>
              </div>

              {/* Navigasi cepat bulan */}
              <div className="rounded-2xl border border-indigo2/15 bg-white p-5 dark:bg-[#252019] dark:border-white/10">
                <p className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#8a8273] mb-3">
                  Bulan Terbaik Berkunjung
                </p>
                {kalenderAdat.filter((b) => b.rating >= 4).map((b) => (
                  <button key={b.bulan} onClick={() => setBulanAktif(b.bulan)}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition hover:bg-pasir dark:hover:bg-[#2e2820] ${
                      b.bulan === bulanAktif ? "bg-pasir dark:bg-[#2e2820] font-bold" : ""
                    }`}>
                    <span className="text-indigo2 dark:text-[#f0e8da]">{b.nama}</span>
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map((s) => (
                        <span key={s} className={`text-xs ${s <= b.rating ? "text-emas" : "text-[#d0c8bc]"}`}>★</span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>

              <Link href="/itinerary"
                className="block rounded-2xl bg-gradient-to-br from-kombu to-[#6e2419] p-5 text-pasir transition hover:opacity-90">
                <p className="font-display font-bold">Sudah tahu kapan mau berangkat?</p>
                <p className="mt-1 text-sm opacity-85">Lihat itinerary siap pakai →</p>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>

      <DividerTenun />

      {/* RINGKASAN TAHUNAN */}
      <FadeIn className="mx-auto max-w-5xl px-5 py-10">
        <h2 className="font-display text-2xl font-bold text-indigo2 dark:text-[#f0e8da] mb-6">
          Ringkasan Setahun
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: "Terbaik untuk wisata", value: "Mei – September", icon: "☀️" },
            { label: "Musim Pasola", value: "Februari – Maret", icon: "🏇" },
            { label: "Wulla Poddu (Bulan Pahit)", value: "Oktober – November", icon: "🙏" },
            { label: "Hindari jika benci hujan", value: "November – Januari", icon: "🌧" },
            { label: "Terbaik untuk fotografi", value: "Juni – Agustus", icon: "📷" },
            { label: "Paling sepi wisatawan", value: "April & Oktober", icon: "😌" },
          ].map((r) => (
            <div key={r.label} className="flex gap-3 rounded-xl border border-indigo2/15 bg-white p-4 dark:bg-[#252019] dark:border-white/10">
              <span className="text-xl">{r.icon}</span>
              <div>
                <p className="font-sans text-xs text-[#8a8273]">{r.label}</p>
                <p className="font-display text-sm font-bold text-indigo2 dark:text-[#f0e8da]">{r.value}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </>
  );
}