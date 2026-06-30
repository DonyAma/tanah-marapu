import Link from "next/link";
import DividerTenun from "./DividerTenun";

export default function Footer() {
  const tahun = new Date().getFullYear();

  return (
    <footer className="mt-10">
      <DividerTenun />
      <div className="bg-indigo2 text-pasir">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

            {/* KOLOM 1 — Brand */}
            <div>
              <Link href="/" className="flex items-center gap-2 font-display text-xl font-extrabold text-pasir">
                <img src="/kuda-sumba-nav.jpg" alt="Jelajah Sumba"
                  className="h-9 w-9 rounded-full object-cover" />
                <span>SUM<span className="text-emas">BA</span></span>
              </Link>
              <p className="mt-3 text-sm leading-relaxed text-pasir/70">
                Ensiklopedia digital budaya dan panduan wisata Pulau Sumba, NTT.
                Non-profit, gratis, uang langsung ke warga Sumba.
              </p>
              <a
                href="https://wa.me/6281319634257?text=Halo%20Jelajah%20Sumba"
                target="_blank"
                rel="noopener"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1f8a4c] px-4 py-2 text-xs font-bold text-white hover:bg-[#27a25b] transition"
              >
                💬 Hubungi via WhatsApp
              </a>
            </div>

            {/* KOLOM 2 — Destinasi */}
            <div>
              <p className="font-sans text-[11px] font-bold uppercase tracking-widest text-pasir/50 mb-4">
                Destinasi
              </p>
              <ul className="space-y-2.5 text-sm">
                {[
                  { href: "/destinasi", label: "Semua Destinasi" },
                  { href: "/peta", label: "📍 Peta Destinasi" },
                  { href: "/itinerary", label: "🗺 Itinerary" },
                  { href: "/kalender", label: "📅 Kalender Adat" },
                  { href: "/stay", label: "🏠 Stay & Guide" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-pasir/70 hover:text-pasir transition">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* KOLOM 3 — Budaya */}
            <div>
              <p className="font-sans text-[11px] font-bold uppercase tracking-widest text-pasir/50 mb-4">
                Budaya
              </p>
              <ul className="space-y-2.5 text-sm">
                {[
                  { href: "/budaya", label: "📖 Artikel Budaya" },
                  { href: "/pengrajin", label: "🧵 Pengrajin Lokal" },
                  { href: "/pemandu", label: "🧭 Pemandu Lokal" },
                  { href: "/glosarium", label: "Glosarium Istilah" },
                  { href: "/etika", label: "Etika Berkunjung" },
                  { href: "/kuliner", label: "🍽 Kuliner Lokal" },
                  { href: "/kamus", label: "🗣 Kamus Bahasa" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-pasir/70 hover:text-pasir transition">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* KOLOM 4 — Panduan & Tentang */}
            <div>
              <p className="font-sans text-[11px] font-bold uppercase tracking-widest text-pasir/50 mb-4">
                Panduan & Tentang
              </p>
              <ul className="space-y-2.5 text-sm">
                {[
                  { href: "/tentang-sumba", label: "🏝 Tentang Sumba" },
                  { href: "/faq", label: "💡 FAQ Perjalanan" },
                  { href: "/tentang", label: "Tentang Kami" },
                  { href: "/kontribusi", label: "🤝 Kontribusi" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-pasir/70 hover:text-pasir transition">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-pasir/10">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4">
            <p className="text-xs text-pasir/50">
              © {tahun} Jelajah Sumba · Dibuat dengan ❤️ untuk Sumba
            </p>
            <p className="text-xs text-pasir/50">
              Foto oleh fotografer lokal Sumba —{" "}
              <Link href="/kontribusi" className="underline hover:text-pasir transition">
                lihat kredit
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}