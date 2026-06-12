"use client";
import { useState } from "react";

export function FAQ({ items }) {
  const [aktif, setAktif] = useState(null);
  if (!items?.length) return null;
  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl font-bold text-indigo2">Pertanyaan umum</h2>
      <div className="mt-4 space-y-3">
        {items.map((f, i) => (
          <div key={i} className="rounded-xl border border-indigo2/15 bg-white">
            <button
              className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-indigo2"
              onClick={() => setAktif(aktif === i ? null : i)}
              aria-expanded={aktif === i}
            >
              {f.q}
              <span className="text-kombu">{aktif === i ? "−" : "+"}</span>
            </button>
            {aktif === i && <p className="px-5 pb-4 text-sm text-[#4d463c]">{f.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export function SlotIklan({ label = "slot iklan AdSense" }) {
  // Placeholder — ganti dengan kode AdSense setelah trafik & akun disetujui
  return (
    <div className="my-8 rounded-xl border-2 border-dashed border-indigo2/25 p-7 text-center text-xs font-semibold uppercase tracking-widest text-[#9a9283]">
      — {label} —
    </div>
  );
}

export function BoxAffiliate({ judul, teks, cta, href = "#" }) {
  return (
    <div className="my-6 rounded-2xl border-2 border-emas bg-gradient-to-br from-white to-[#f9f3e6] p-5">
      <p className="font-display font-bold text-indigo2">{judul}</p>
      <p className="mt-1 text-sm text-[#4d463c]">{teks}</p>
      <a
        href={href}
        className="mt-3 inline-block rounded-full bg-indigo2 px-5 py-2 text-xs font-bold text-pasir hover:bg-kombu"
        rel="nofollow sponsored"
      >
        {cta} →
      </a>
    </div>
  );
}
