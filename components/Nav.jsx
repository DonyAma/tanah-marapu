"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";

const WILAYAH = ["Sumba Barat Daya", "Sumba Barat", "Sumba Tengah", "Sumba Timur"];

export default function Nav() {
  const [buka, setBuka] = useState(false);
  const [cari, setCari] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const { dark, toggle } = useTheme();

  function submitCari(e) {
    e.preventDefault();
    const q = cari.trim();
    if (!q) return;
    setBuka(false);
    router.push(`/destinasi?q=${encodeURIComponent(q)}`);
  }

  function isActive(paths) {
    if (typeof paths === "string") return pathname === paths || pathname.startsWith(paths + "/");
    return paths.some((p) => pathname === p || pathname.startsWith(p + "/"));
  }

  function linkClass(paths) {
    return [
      "relative transition-colors text-sm font-semibold",
      isActive(paths)
        ? "text-kombu after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-kombu after:rounded-full"
        : "hover:text-kombu",
    ].join(" ");
  }

  const dropdownBase = "invisible absolute top-full w-52 rounded-xl border border-indigo2/10 bg-white py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 dark:bg-[#252019] dark:border-white/10";
  const dropdownLink = "block px-4 py-2 text-sm hover:bg-pasir hover:text-kombu dark:hover:bg-[#2e2820]";

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-indigo2/10 bg-pasir/90 backdrop-blur-md dark:border-white/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-1.5 font-display text-lg font-extrabold text-indigo2 dark:text-[#f0e8da]">
          <img src="/kuda-sumba-nav.jpg" alt="Jelajah Sumba"
            className="h-9 w-9 rounded-full object-cover shadow-sm shrink-0" />
          <span className="whitespace-nowrap hidden sm:block">SUM<span className="text-kombu">BA</span></span>
        </Link>

        {/* MENU DESKTOP */}
        <ul className="hidden items-center gap-5 md:flex dark:text-[#f0e8da]">

          {/* DESTINASI */}
          <li className="group relative">
            <span className={`cursor-pointer ${linkClass(["/destinasi", "/itinerary", "/kalender", "/peta"])}`}>
              Destinasi ▾
            </span>
            <div className={`${dropdownBase} left-0`}>
              <Link href="/destinasi" className={dropdownLink}>Semua Destinasi</Link>
              {WILAYAH.map((w) => (
                <Link key={w} href={`/destinasi?wilayah=${encodeURIComponent(w)}`} className={`${dropdownLink} text-xs pl-6 text-[#5a5347] dark:text-[#c4b8a8]`}>
                  {w}
                </Link>
              ))}
              <div className="my-1 border-t border-indigo2/10 dark:border-white/10" />
              <Link href="/peta" className={dropdownLink}>📍 Peta Destinasi</Link>
              <Link href="/itinerary" className={dropdownLink}>🗺 Itinerary</Link>
              <Link href="/kalender" className={dropdownLink}>📅 Kalender Adat</Link>
            </div>
          </li>

          {/* BUDAYA */}
          <li className="group relative">
            <span className={`cursor-pointer ${linkClass(["/budaya", "/pengrajin", "/pemandu", "/glosarium", "/etika"])}`}>
              Budaya ▾
            </span>
            <div className={`${dropdownBase} left-0`}>
              <Link href="/budaya" className={dropdownLink}>📖 Artikel Budaya</Link>
              <Link href="/pengrajin" className={dropdownLink}>🧵 Pengrajin Lokal</Link>
              <Link href="/pemandu" className={dropdownLink}>🧭 Pemandu Lokal</Link>
              <div className="my-1 border-t border-indigo2/10 dark:border-white/10" />
              <Link href="/glosarium" className={dropdownLink}>Glosarium Istilah</Link>
              <Link href="/etika" className={dropdownLink}>Etika Berkunjung</Link>
            </div>
          </li>

          {/* PANDUAN */}
          <li className="group relative">
            <span className={`cursor-pointer ${linkClass(["/tentang-sumba", "/faq", "/stay"])}`}>
              Panduan ▾
            </span>
            <div className={`${dropdownBase} left-0`}>
              <Link href="/tentang-sumba" className={dropdownLink}>🏝 Tentang Sumba</Link>
              <Link href="/faq" className={dropdownLink}>💡 FAQ Perjalanan</Link>
              <Link href="/stay" className={dropdownLink}>🏠 Stay & Guide</Link>
            </div>
          </li>

          {/* TENTANG */}
          <li>
            <Link href="/tentang" className={linkClass("/tentang")}>Tentang</Link>
          </li>
        </ul>

        {/* KANAN DESKTOP */}
        <div className="hidden items-center gap-2 md:flex">
          <form onSubmit={submitCari}>
            <input
              type="search"
              value={cari}
              onChange={(e) => setCari(e.target.value)}
              placeholder="Cari…"
              className="w-32 rounded-full border border-indigo2/20 bg-white px-3 py-1.5 text-xs outline-none focus:border-kombu transition dark:bg-[#252019] dark:text-[#f0e8da] dark:border-white/10"
            />
          </form>

          <button onClick={toggle} aria-label="Toggle dark mode"
            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo2/20 text-sm transition hover:border-kombu dark:border-white/10 dark:text-[#f0e8da]">
            {dark ? "☀️" : "🌙"}
          </button>

          <Link href="/kontribusi"
            className="rounded-full bg-lumut px-4 py-2 text-xs font-bold text-pasir hover:opacity-90 transition">
            🤝 Kontribusi
          </Link>

          <a href="https://wa.me/6281319634257?text=Halo,%20saya%20mau%20rencanakan%20trip%20Sumba"
            target="_blank" rel="noopener"
            className="rounded-full bg-indigo2 px-4 py-2 text-xs font-bold text-pasir hover:bg-kombu transition dark:bg-kombu dark:hover:bg-[#b04636]">
            Trip
          </a>
        </div>

        {/* HAMBURGER */}
        <button className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setBuka(!buka)} aria-label="Buka menu" aria-expanded={buka}>
          <span className={`h-0.5 w-6 bg-indigo2 transition duration-300 dark:bg-[#f0e8da] ${buka ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-indigo2 transition duration-300 dark:bg-[#f0e8da] ${buka ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-indigo2 transition duration-300 dark:bg-[#f0e8da] ${buka ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* DRAWER MOBILE */}
      <div className={`overflow-hidden border-t border-indigo2/10 bg-pasir transition-all duration-300 md:hidden dark:border-white/5 dark:bg-[#1a1612] ${
        buka ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-5 py-4">
          <form onSubmit={submitCari}>
            <input type="search" value={cari} onChange={(e) => setCari(e.target.value)}
              placeholder="Cari destinasi… (tekan Enter)"
              className="mb-4 w-full rounded-full border border-indigo2/20 bg-white px-4 py-2 text-sm outline-none focus:border-kombu dark:bg-[#252019] dark:text-[#f0e8da] dark:border-white/10" />
          </form>

          <div className="space-y-1 text-sm font-semibold dark:text-[#f0e8da]">
            {/* Destinasi */}
            <p className="pt-2 pb-1 text-[10px] font-bold uppercase tracking-widest text-[#8a8273]">Destinasi</p>
            {[
              { href: "/destinasi", label: "Semua Destinasi" },
              { href: "/peta", label: "📍 Peta Destinasi" },
              { href: "/itinerary", label: "🗺 Itinerary" },
              { href: "/kalender", label: "📅 Kalender Adat" },
            ].map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setBuka(false)}
                className={`block py-1.5 text-sm ${isActive(item.href) ? "text-kombu font-bold" : "text-indigo2 dark:text-[#f0e8da]"}`}>
                {item.label}
              </Link>
            ))}

            {/* Budaya */}
            <p className="pt-3 pb-1 text-[10px] font-bold uppercase tracking-widest text-[#8a8273]">Budaya</p>
            {[
              { href: "/budaya", label: "📖 Artikel Budaya" },
              { href: "/pengrajin", label: "🧵 Pengrajin Lokal" },
              { href: "/pemandu", label: "🧭 Pemandu Lokal" },
              { href: "/glosarium", label: "Glosarium" },
              { href: "/etika", label: "Etika Berkunjung" },
            ].map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setBuka(false)}
                className={`block py-1.5 text-sm ${isActive(item.href) ? "text-kombu font-bold" : "text-indigo2 dark:text-[#f0e8da]"}`}>
                {item.label}
              </Link>
            ))}

            {/* Panduan */}
            <p className="pt-3 pb-1 text-[10px] font-bold uppercase tracking-widest text-[#8a8273]">Panduan</p>
            {[
              { href: "/tentang-sumba", label: "🏝 Tentang Sumba" },
              { href: "/faq", label: "💡 FAQ" },
              { href: "/stay", label: "🏠 Stay & Guide" },
              { href: "/tentang", label: "Tentang Kami" },
            ].map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setBuka(false)}
                className={`block py-1.5 text-sm ${isActive(item.href) ? "text-kombu font-bold" : "text-indigo2 dark:text-[#f0e8da]"}`}>
                {item.label}
              </Link>
            ))}
          </div>

          <button onClick={toggle}
            className="mt-4 flex w-full items-center justify-between rounded-full border border-indigo2/20 px-5 py-2.5 text-sm font-semibold dark:border-white/10 dark:text-[#f0e8da]">
            <span>{dark ? "Mode Terang" : "Mode Gelap"}</span>
            <span>{dark ? "☀️" : "🌙"}</span>
          </button>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <Link href="/kontribusi" onClick={() => setBuka(false)}
              className="block rounded-full bg-lumut py-2.5 text-center text-sm font-bold text-pasir hover:opacity-90 transition">
              🤝 Kontribusi
            </Link>
            <a href="https://wa.me/6281319634257?text=Halo,%20saya%20mau%20rencanakan%20trip%20Sumba"
              target="_blank" rel="noopener"
              className="block rounded-full bg-indigo2 py-2.5 text-center text-sm font-bold text-pasir hover:bg-kombu transition dark:bg-kombu">
              Rencanakan Trip
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}