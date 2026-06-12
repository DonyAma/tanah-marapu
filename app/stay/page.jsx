"use client";
import { useState } from "react";
import { direktori } from "../../data/site";

export default function Direktori() {
  const tipe = ["Semua", "Homestay", "Guide", "Rental Mobil", "Rental Motor"];
  const [filter, setFilter] = useState("Semua");
  const data = direktori.filter((d) => filter === "Semua" || d.tipe === filter);

  return (
    <section className="mx-auto max-w-6xl px-5 py-12">
      <span className="rounded-md bg-lumut px-3 py-1 text-xs font-bold uppercase tracking-widest text-pasir">
        Direktori lokal
      </span>
      <h1 className="mt-4 font-display text-[clamp(2rem,6vw,3.2rem)] font-extrabold text-indigo2">
        Menginap & Jelajah Bareng Warga
      </h1>
      <p className="mt-2 max-w-xl text-[#4d463c]">
        Homestay, guide, dan rental terverifikasi — pesan langsung via WhatsApp, tanpa perantara.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tipe.map((t) => (
          <button key={t} onClick={() => setFilter(t)}
            className={`rounded-full border-2 px-4 py-1.5 text-xs font-bold ${
              filter === t ? "border-indigo2 bg-indigo2 text-pasir" : "border-indigo2/30 bg-white text-indigo2"}`}>
            {t}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((k) => (
          <article key={k.nama}
            className={`relative overflow-hidden rounded-2xl bg-white ${
              k.premium ? "border-2 border-emas shadow-[0_4px_18px_rgba(224,169,62,.25)]" : "border border-indigo2/15"}`}>
            {k.premium && (
              <span className="absolute left-3 top-3 z-10 rounded-full bg-emas px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-indigo2">
                ★ Unggulan
              </span>
            )}
            <div className={`h-36 bg-gradient-to-br ${k.gradien}`} />
            <div className="p-4">
              <h2 className="font-display text-lg font-bold text-indigo2">{k.nama}</h2>
              <p className="text-[11px] font-bold uppercase tracking-wider text-kombu">{k.lokasi}</p>
              <p className="mt-2 text-sm text-[#5a5347]">{k.desc}</p>
              <p className="mt-2 font-display text-lg font-extrabold text-lumut">
                {k.harga} <small className="font-body text-xs font-medium text-[#8a8273]">{k.satuan}</small>
              </p>
              <a href={`https://wa.me/${k.wa}`} target="_blank" rel="noopener"
                className="mt-3 block rounded-full bg-[#1f8a4c] py-2.5 text-center text-sm font-bold text-white hover:bg-[#27a25b]">
                💬 Chat WhatsApp
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-3xl bg-gradient-to-br from-indigo2 to-indigodeep p-9 text-center text-pasir">
        <h2 className="font-display text-2xl font-extrabold">Punya homestay, jasa guide, atau rental di Sumba?</h2>
        <p className="mx-auto mt-2 max-w-lg text-sm opacity-85">
          Tampil di direktori ini dan dijangkau ribuan calon wisatawan tiap bulan. Gratis untuk listing dasar, Unggulan mulai Rp100rb/bulan.
        </p>
        <a href="https://wa.me/6281319634257?text=Halo,%20saya%20mau%20daftarkan%20usaha" target="_blank" rel="noopener"
          className="mt-5 inline-block rounded-full bg-emas px-7 py-3 text-sm font-extrabold text-indigo2">
          Daftarkan usahamu →
        </a>
      </div>
    </section>
  );
}
