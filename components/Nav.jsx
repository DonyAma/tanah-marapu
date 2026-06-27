"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";

const WILAYAH = ["Sumba Barat Daya", "Sumba Barat", "Sumba Tengah", "Sumba Timur"];

const NAV_LINKS = [
  { href: "/destinasi", label: "Destinasi", dropdown: "destinasi" },
  { href: "/budaya", label: "Budaya", dropdown: "budaya" },
  { href: "/stay", label: "Stay & Guide" },
  { href: "/tentang", label: "Tentang" },
];

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

  function isActive(href) {
    if (href === "/destinasi") return pathname === "/destinasi" || pathname.startsWith("/destinasi/") || pathname === "/itinerary" || pathname === "/kalender" || pathname === "/peta";
    if (href === "/budaya") {
      return ["/budaya", "/pengrajin", "/pemandu", "/glosarium", "/etika"].some(
        (p) => pathname === p || pathname.startsWith(p + "/")
      );
    }
    return pathname === href || pathname.startsWith(href + "/");
  }

  function desktopLinkClass(href) {
    return [
      "relative transition-colors",
      isActive(href)
        ? "text-kombu after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-kombu after:rounded-full"
        : "hover:text-kombu",
    ].join(" ");
  }

  function mobileLinkClass(href) {
    return isActive(href) ? "text-kombu font-bold" : "";
  }

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-indigo2/10 bg-pasir/90 backdrop-blur-md dark:border-white/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-1 font-display text-sm md:text-xl font-extrabold text-indigo2 dark:text-[#f0e8da]">
          <img src="/kuda-sumba-nav.jpg" alt="Tanah Marapu"
            className="h-8 w-8 md:h-10 md:w-10 rounded-full object-cover shadow-sm shrink-0" />
          <span className="whitespace-nowrap">SUM<span className="text-kombu">BA</span></span>
        </Link>

        {/* MENU DESKTOP */}
        <ul className="hidden items-center gap-6 text-sm font-semibold md:flex dark:text-[#f0e8da]">
          {NAV_LINKS.map(({ href, label, dropdown }) =>
            dropdown === "destinasi" ? (
              <li key={href} className="group relative">
                <Link href={href} className={`cursor-pointer ${desktopLinkClass(href)}`}>
                  {label} ▾
                </Link>
                <div className="invisible absolute left-0 top-full w-48 rounded-xl border border-indigo2/10 bg-white py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 dark:bg-[#252019] dark:border-white/10">
                  <Link href="/destinasi" className="block px-4 py-2 text-sm hover:bg-pasir hover:text-kombu dark:hover:bg-[#2e2820]">
                    Semua Destinasi
                  </Link>
                  {WILAYAH.map((w) => (
                    <Link key={w} href={`/destinasi?wilayah=${encodeURIComponent(w)}`}
                      className="block px-4 py-2 text-sm hover:bg-pasir hover:text-kombu dark:hover:bg-[#2e2820]">
                      {w}
                    </Link>
                  ))}
                  <div className="my-1 border-t border-indigo2/10 dark:border-white/10" />
                  <Link href="/itinerary" className="block px-4 py-2 text-sm hover:bg-pasir hover:text-kombu dark:hover:bg-[#2e2820]">
                    🗺 Itinerary Siap Pakai
                  </Link>
                  <Link href="/kalender" className="block px-4 py-2 text-sm hover:bg-pasir hover:text-kombu dark:hover:bg-[#2e2820]">
                    📅 Kalender Adat
                  </Link>
                  <Link href="/peta" className="block px-4 py-2 text-sm hover:bg-pasir hover:text-kombu dark:hover:bg-[#2e2820]">
                    📍 Peta Destinasi
                  </Link>
                </div>
              </li>
            ) : dropdown === "budaya" ? (
              <li key={href} className="group relative">
                <Link href={href} className={`cursor-pointer ${desktopLinkClass(href)}`}>
                  {label} ▾
                </Link>
                <div className="invisible absolute left-0 top-full w-56 rounded-xl border border-indigo2/10 bg-white py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 dark:bg-[#252019] dark:border-white/10">
                  <Link href="/budaya" className="block px-4 py-2 text-sm hover:bg-pasir hover:text-kombu dark:hover:bg-[#2e2820]">
                    Artikel Budaya & Marapu
                  </Link>
                  <Link href="/pengrajin" className="block px-4 py-2 text-sm hover:bg-pasir hover:text-kombu dark:hover:bg-[#2e2820]">
                    Pengrajin Lokal
                  </Link>
                  <Link href="/pemandu" className="block px-4 py-2 text-sm hover:bg-pasir hover:text-kombu dark:hover:bg-[#2e2820]">
                    Pemandu Lokal
                  </Link>
                  <Link href="/glosarium" className="block px-4 py-2 text-sm hover:bg-pasir hover:text-kombu dark:hover:bg-[#2e2820]">
                    Glosarium Istilah
                  </Link>
                  <Link href="/etika" className="block px-4 py-2 text-sm hover:bg-pasir hover:text-kombu dark:hover:bg-[#2e2820]">
                    Etika Berkunjung
                  </Link>
                </div>
              </li>
            ) : (
              <li key={href}>
                <Link href={href} className={desktopLinkClass(href)}>{label}</Link>
              </li>
            )
          )}
        </ul>

        {/* KANAN DESKTOP */}
        <div className="hidden items-center gap-3 md:flex">
          <form onSubmit={submitCari}>
            <input
              type="search"
              value={cari}
              onChange={(e) => setCari(e.target.value)}
              placeholder="Cari destinasi…"
              className="w-40 rounded-full border border-indigo2/20 bg-white px-4 py-1.5 text-xs outline-none focus:border-kombu transition dark:bg-[#252019] dark:text-[#f0e8da] dark:border-white/10 dark:placeholder:text-[#8a7e70]"
            />
          </form>

          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo2/20 text-sm transition hover:border-kombu dark:border-white/10 dark:text-[#f0e8da]"
          >
            {dark ? "☀️" : "🌙"}
          </button>

          <a href="https://wa.me/6281319634257?text=Halo,%20saya%20mau%20rencanakan%20trip%20Sumba"
            target="_blank" rel="noopener"
            className="rounded-full bg-indigo2 px-4 py-2 text-xs font-bold text-pasir hover:bg-kombu transition dark:bg-kombu dark:hover:bg-[#b04636]">
            Rencanakan Trip
          </a>
        </div>

        {/* HAMBURGER */}
        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setBuka(!buka)}
          aria-label="Buka menu"
          aria-expanded={buka}
        >
          <span className={`h-0.5 w-6 bg-indigo2 transition duration-300 dark:bg-[#f0e8da] ${buka ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-indigo2 transition duration-300 dark:bg-[#f0e8da] ${buka ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-indigo2 transition duration-300 dark:bg-[#f0e8da] ${buka ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* DRAWER MOBILE */}
      <div className={`overflow-hidden border-t border-indigo2/10 bg-pasir transition-all duration-300 md:hidden dark:border-white/5 dark:bg-[#1a1612] ${
        buka ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="px-5 py-4">
          <form onSubmit={submitCari}>
            <input
              type="search"
              value={cari}
              onChange={(e) => setCari(e.target.value)}
              placeholder="Cari destinasi… (tekan Enter)"
              className="mb-4 w-full rounded-full border border-indigo2/20 bg-white px-4 py-2 text-sm outline-none focus:border-kombu dark:bg-[#252019] dark:text-[#f0e8da] dark:border-white/10"
            />
          </form>
          <ul className="space-y-3 text-sm font-semibold dark:text-[#f0e8da]">
            <li>
              <Link href="/destinasi" onClick={() => setBuka(false)} className={mobileLinkClass("/destinasi")}>
                Semua Destinasi
              </Link>
            </li>
            {WILAYAH.map((w) => (
              <li key={w} className="ml-3">
                <Link href={`/destinasi?wilayah=${encodeURIComponent(w)}`}
                  onClick={() => setBuka(false)}
                  className="text-[#5a5347] text-xs hover:text-kombu transition dark:text-[#8a7e70]">
                  {w}
                </Link>
              </li>
            ))}
            <li className="ml-3">
              <Link href="/itinerary" onClick={() => setBuka(false)}
                className={`text-xs transition ${isActive("/itinerary") ? "text-kombu font-bold" : "text-[#5a5347] hover:text-kombu dark:text-[#8a7e70]"}`}>
                🗺 Itinerary Siap Pakai
              </Link>
            </li>
            <li className="ml-3">
              <Link href="/kalender" onClick={() => setBuka(false)}
                className={`text-xs transition ${isActive("/kalender") ? "text-kombu font-bold" : "text-[#5a5347] hover:text-kombu dark:text-[#8a7e70]"}`}>
                📅 Kalender Adat
              </Link>
            </li>
            <li className="ml-3">
              <Link href="/peta" onClick={() => setBuka(false)}
                className={`text-xs transition ${isActive("/peta") ? "text-kombu font-bold" : "text-[#5a5347] hover:text-kombu dark:text-[#8a7e70]"}`}>
                📍 Peta Destinasi
              </Link>
            </li>

            <li className="pt-2 border-t border-indigo2/10 dark:border-white/10">
              <Link href="/budaya" onClick={() => setBuka(false)} className={mobileLinkClass("/budaya")}>
                Artikel Budaya & Marapu
              </Link>
            </li>
            <li className="ml-3">
              <Link href="/pengrajin" onClick={() => setBuka(false)}
                className={`text-xs transition ${isActive("/pengrajin") ? "text-kombu font-bold" : "text-[#5a5347] hover:text-kombu dark:text-[#8a7e70]"}`}>
                Pengrajin Lokal
              </Link>
            </li>
            <li className="ml-3">
              <Link href="/pemandu" onClick={() => setBuka(false)}
                className={`text-xs transition ${isActive("/pemandu") ? "text-kombu font-bold" : "text-[#5a5347] hover:text-kombu dark:text-[#8a7e70]"}`}>
                Pemandu Lokal
              </Link>
            </li>
            <li className="ml-3">
              <Link href="/glosarium" onClick={() => setBuka(false)}
                className={`text-xs transition ${isActive("/glosarium") ? "text-kombu font-bold" : "text-[#5a5347] hover:text-kombu dark:text-[#8a7e70]"}`}>
                Glosarium Istilah
              </Link>
            </li>
            <li className="ml-3">
              <Link href="/etika" onClick={() => setBuka(false)}
                className={`text-xs transition ${isActive("/etika") ? "text-kombu font-bold" : "text-[#5a5347] hover:text-kombu dark:text-[#8a7e70]"}`}>
                Etika Berkunjung
              </Link>
            </li>

            <li className="pt-2 border-t border-indigo2/10 dark:border-white/10">
              <Link href="/stay" onClick={() => setBuka(false)} className={mobileLinkClass("/stay")}>Stay & Guide</Link>
            </li>
            <li><Link href="/tentang" onClick={() => setBuka(false)} className={mobileLinkClass("/tentang")}>Tentang</Link></li>
          </ul>

          <button onClick={toggle}
            className="mt-4 flex w-full items-center justify-between rounded-full border border-indigo2/20 px-5 py-2.5 text-sm font-semibold dark:border-white/10 dark:text-[#f0e8da]">
            <span>{dark ? "Mode Terang" : "Mode Gelap"}</span>
            <span>{dark ? "☀️" : "🌙"}</span>
          </button>

          <a href="https://wa.me/6281319634257?text=Halo,%20saya%20mau%20rencanakan%20trip%20Sumba"
            target="_blank" rel="noopener"
            className="mt-3 block rounded-full bg-indigo2 py-2.5 text-center text-sm font-bold text-pasir hover:bg-kombu transition dark:bg-kombu">
            Rencanakan Trip
          </a>
        </div>
      </div>
    </nav>
  );
}