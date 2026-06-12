"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const WILAYAH = ["Sumba Barat Daya", "Sumba Barat", "Sumba Tengah", "Sumba Timur"];

export default function Nav() {
  const [buka, setBuka] = useState(false);
  const [cari, setCari] = useState("");
  const router = useRouter();

  function submitCari(e) {
    e.preventDefault();
    const q = cari.trim();
    if (!q) return;
    setBuka(false);
    router.push(`/destinasi?q=${encodeURIComponent(q)}`);
  }

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-indigo2/10 bg-pasir/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="font-display text-xl font-extrabold text-indigo2">
          SUM<span className="text-kombu">BA</span>
        </Link>

        {/* menu desktop */}
        <ul className="hidden items-center gap-6 text-sm font-semibold md:flex">
          <li className="group relative">
            <Link href="/destinasi" className="cursor-pointer hover:text-kombu">Destinasi ▾</Link>
            <div className="invisible absolute left-0 top-full w-48 rounded-xl border border-indigo2/10 bg-white py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              <Link href="/destinasi" className="block px-4 py-2 text-sm hover:bg-pasir hover:text-kombu">
                Semua Destinasi
              </Link>
              {WILAYAH.map((w) => (
                <Link key={w} href={`/destinasi?wilayah=${encodeURIComponent(w)}`}
                  className="block px-4 py-2 text-sm hover:bg-pasir hover:text-kombu">
                  {w}
                </Link>
              ))}
            </div>
          </li>
          <li><Link href="/blog/itinerary-sumba-5-hari" className="hover:text-kombu">Blog</Link></li>
          <li><Link href="/stay" className="hover:text-kombu">Stay & Guide</Link></li>
          <li><Link href="/tentang" className="hover:text-kombu">Tentang</Link></li>
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <form onSubmit={submitCari}>
            <input
              type="search"
              value={cari}
              onChange={(e) => setCari(e.target.value)}
              placeholder="Cari destinasi…"
              className="w-40 rounded-full border border-indigo2/20 bg-white px-4 py-1.5 text-xs outline-none focus:border-kombu"
            />
          </form>
          <button className="rounded-full border-2 border-indigo2 px-3 py-1 text-xs font-bold text-indigo2">ID/EN</button>
          <a href="https://wa.me/6281319634257?text=Halo,%20saya%20mau%20rencanakan%20trip%20Sumba"
            target="_blank" rel="noopener"
            className="rounded-full bg-indigo2 px-4 py-2 text-xs font-bold text-pasir hover:bg-kombu">
            Rencanakan Trip
          </a>
        </div>

        {/* hamburger mobile */}
        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setBuka(!buka)}
          aria-label="Buka menu"
          aria-expanded={buka}
        >
          <span className={`h-0.5 w-6 bg-indigo2 transition ${buka ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-indigo2 transition ${buka ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-indigo2 transition ${buka ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* drawer mobile */}
      {buka && (
        <div className="border-t border-indigo2/10 bg-pasir px-5 py-4 md:hidden">
          <form onSubmit={submitCari}>
            <input
              type="search"
              value={cari}
              onChange={(e) => setCari(e.target.value)}
              placeholder="Cari destinasi… (tekan Enter)"
              className="mb-3 w-full rounded-full border border-indigo2/20 bg-white px-4 py-2 text-sm outline-none"
            />
          </form>
          <ul className="space-y-3 text-sm font-semibold">
            <li><Link href="/destinasi" onClick={() => setBuka(false)}>Semua Destinasi</Link></li>
            {WILAYAH.map((w) => (
              <li key={w} className="ml-3 text-[#5a5347]">
                <Link href={`/destinasi?wilayah=${encodeURIComponent(w)}`} onClick={() => setBuka(false)}>
                  {w}
                </Link>
              </li>
            ))}
            <li><Link href="/blog/itinerary-sumba-5-hari" onClick={() => setBuka(false)}>Blog</Link></li>
            <li><Link href="/stay" onClick={() => setBuka(false)}>Stay & Guide</Link></li>
            <li><Link href="/tentang" onClick={() => setBuka(false)}>Tentang</Link></li>
          </ul>
          <a href="https://wa.me/6281319634257?text=Halo,%20saya%20mau%20rencanakan%20trip%20Sumba"
            target="_blank" rel="noopener"
            className="mt-4 block rounded-full bg-indigo2 py-2.5 text-center text-sm font-bold text-pasir">
            Rencanakan Trip
          </a>
        </div>
      )}
    </nav>
  );
}
