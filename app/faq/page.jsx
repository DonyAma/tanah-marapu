"use client";
import { useState } from "react";
import Link from "next/link";
import { faqSumba } from "../../data/faq-sumba";
import FadeIn from "../../components/FadeIn";
import DividerTenun from "../../components/DividerTenun";

export default function HalamanFAQ() {
  const [terbuka, setTerbuka] = useState(null);
  const [kategoriAktif, setKategoriAktif] = useState("Semua");

  const kategoriFAQ = ["Semua", ...faqSumba.map((k) => k.kategori)];

  const dataFil = kategoriAktif === "Semua"
    ? faqSumba
    : faqSumba.filter((k) => k.kategori === kategoriAktif);

  function toggleItem(id) {
    setTerbuka(terbuka === id ? null : id);
  }

  return (
    <>
      {/* HERO */}
      <div className="mx-auto max-w-3xl px-5 pt-10 pb-6">
        <FadeIn>
          <nav className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#8a8273]">
              <li><Link href="/" className="hover:text-kombu transition">Beranda</Link></li>
              <li className="opacity-40">/</li>
              <li className="font-semibold text-kombu">FAQ</li>
            </ol>
          </nav>
          <span className="rounded-md bg-emas/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#7a5c1e]">
            💡 Pertanyaan Umum
          </span>
          <h1 className="mt-4 font-display text-[clamp(2rem,6vw,3rem)] font-extrabold leading-tight text-indigo2 dark:text-[#f0e8da]">
            FAQ Perjalanan Sumba
          </h1>
          <p className="mt-3 text-[#4d463c] dark:text-[#c4b8a8]">
            Pertanyaan yang paling sering ditanyakan oleh wisatawan sebelum ke Sumba —
            dijawab jujur berdasarkan kondisi nyata di lapangan.
          </p>
        </FadeIn>

        {/* FILTER KATEGORI */}
        <FadeIn delay={80}>
          <div className="mt-6 flex flex-wrap gap-2">
            {kategoriFAQ.map((k) => {
              const data = faqSumba.find((f) => f.kategori === k);
              return (
                <button key={k} onClick={() => setKategoriAktif(k)}
                  className={`rounded-full border-2 px-4 py-1.5 text-xs font-bold transition ${
                    kategoriAktif === k
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

      {/* FAQ ACCORDION */}
      <div className="mx-auto max-w-3xl px-5 py-10 space-y-8">
        {dataFil.map((kat, ki) => (
          <FadeIn key={kat.kategori} delay={ki * 60}>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{kat.icon}</span>
                <h2 className="font-display text-xl font-bold text-indigo2 dark:text-[#f0e8da]">
                  {kat.kategori}
                </h2>
              </div>

              <div className="space-y-2">
                {kat.pertanyaan.map((item, ii) => {
                  const id = `${ki}-${ii}`;
                  const aktif = terbuka === id;
                  return (
                    <div key={id}
                      className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                        aktif
                          ? "border-kombu shadow-sm"
                          : "border-indigo2/15 dark:border-white/10"
                      } bg-white dark:bg-[#252019]`}>
                      <button
                        onClick={() => toggleItem(id)}
                        className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
                      >
                        <span className={`font-display text-sm font-bold leading-snug ${
                          aktif ? "text-kombu" : "text-indigo2 dark:text-[#f0e8da]"
                        }`}>
                          {item.q}
                        </span>
                        <span className={`mt-0.5 shrink-0 text-lg transition-transform duration-200 ${aktif ? "rotate-45 text-kombu" : "text-[#8a8273]"}`}>
                          +
                        </span>
                      </button>
                      {aktif && (
                        <div className="border-t border-indigo2/10 dark:border-white/10 px-5 py-4">
                          <p className="text-sm leading-relaxed text-[#4d463c] dark:text-[#c4b8a8]">
                            {item.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <DividerTenun />

      {/* LINK KE HALAMAN RELEVAN */}
      <FadeIn className="mx-auto max-w-3xl px-5 py-10">
        <h2 className="font-display text-xl font-bold text-indigo2 dark:text-[#f0e8da] mb-4">
          Masih ada pertanyaan?
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { href: "/tentang-sumba", icon: "🏝", label: "Info Dasar Sumba", desc: "Fakta, kabupaten, cara akses" },
            { href: "/kalender", icon: "📅", label: "Kalender Adat", desc: "Kapan waktu terbaik berkunjung" },
            { href: "/etika", icon: "🤝", label: "Etika Berkunjung", desc: "Panduan menghormati budaya" },
            { href: "/kontribusi", icon: "💬", label: "Hubungi Kami", desc: "Ada pertanyaan lain? Chat via WA" },
          ].map((item) => (
            <Link key={item.href} href={item.href}
              className="group flex gap-3 rounded-xl border border-indigo2/15 bg-white p-4 transition hover:border-kombu hover:shadow-md dark:bg-[#252019] dark:border-white/10">
              <span className="text-xl">{item.icon}</span>
              <div>
                <p className="font-display text-sm font-bold text-indigo2 group-hover:text-kombu dark:text-[#f0e8da]">{item.label}</p>
                <p className="mt-0.5 text-xs text-[#8a8273]">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </FadeIn>
    </>
  );
}