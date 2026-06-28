import Link from "next/link";
import DividerTenun from "../components/DividerTenun";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 text-center">
      <p className="font-display text-[clamp(5rem,20vw,10rem)] font-extrabold leading-none text-indigo2/10 dark:text-white/5 select-none">
        404
      </p>
      <div className="-mt-6 relative z-10">
        <h1 className="font-display text-3xl font-extrabold text-indigo2 dark:text-[#f0e8da]">
          Halaman Tidak Ditemukan
        </h1>
        <p className="mt-3 font-serif2 italic text-[#4d463c] dark:text-[#c4b8a8]">
          Seperti jalan tanah di Sumba yang tiba-tiba habis — halaman ini tidak ada,
          atau mungkin sudah dipindahkan.
        </p>
      </div>

      <DividerTenun className="my-10" />

      <p className="font-sans text-sm font-bold uppercase tracking-wider text-[#8a8273] mb-5">
        Mungkin kamu mencari salah satu ini?
      </p>

      <div className="grid gap-3 sm:grid-cols-2 text-left">
        {[
          { href: "/destinasi", icon: "🗺", label: "Semua Destinasi" },
          { href: "/budaya", icon: "📖", label: "Budaya & Tradisi" },
          { href: "/pengrajin", icon: "🧵", label: "Pengrajin Lokal" },
          { href: "/itinerary", icon: "📋", label: "Itinerary Sumba" },
          { href: "/kalender", icon: "📅", label: "Kalender Adat" },
          { href: "/etika", icon: "🤝", label: "Etika Berkunjung" },
        ].map((item) => (
          <Link key={item.href} href={item.href}
            className="flex items-center gap-3 rounded-xl border border-indigo2/15 bg-white px-4 py-3 text-sm font-bold text-indigo2 transition hover:border-kombu hover:text-kombu dark:bg-[#252019] dark:border-white/10 dark:text-[#f0e8da]">
            <span className="text-lg">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </div>

      <Link href="/"
        className="mt-8 inline-block rounded-full bg-kombu px-8 py-3 font-bold text-pasir hover:bg-[#b04636] transition">
        ← Kembali ke Beranda
      </Link>
    </div>
  );
}