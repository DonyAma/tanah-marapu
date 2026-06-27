import Link from "next/link";
import DividerTenun from "../../components/DividerTenun";
import FadeIn from "../../components/FadeIn";

export const metadata = {
  title: "Etika Berkunjung ke Sumba",
  description:
    "Panduan praktis untuk wisatawan agar kunjungan ke Sumba tetap menghormati adat, budaya Marapu, dan kehidupan warga setempat.",
  openGraph: {
    title: "Etika Berkunjung ke Sumba — Jelajah Sumba",
    description: "Panduan menghormati budaya lokal saat berkunjung ke kampung adat dan upacara di Sumba.",
    images: [{ url: "/kuda-sumba-full.jpg", width: 1200, height: 630 }],
  },
};

const PANDUAN = [
  {
    icon: "🛶",
    judul: "Sebelum Berangkat",
    poin: [
      "Pelajari dasar budaya Marapu — sedikit pengetahuan mengubah cara kamu melihat Sumba.",
      "Gunakan pemandu lokal — mereka tahu konteks, bukan hanya jalan.",
      "Bawa sirih pinang jika akan bertemu tetua adat sebagai tanda hormat.",
    ],
  },
  {
    icon: "🏛",
    judul: "Di Kampung Adat",
    poin: [
      "Selalu minta izin sebelum masuk — kampung adat bukan museum, itu rumah orang.",
      "Tanyakan sebelum memotret, dan terima dengan lapang kalau tidak diizinkan.",
      "Hormati kubur batu — jangan duduk, berdiri, atau memanjat di atasnya.",
      "Berpakaian sopan — pakaian yang menutupi bahu dan lutut adalah tanda hormat.",
    ],
  },
  {
    icon: "🎭",
    judul: "Saat Upacara Adat",
    poin: [
      "Upacara bukan pertunjukan — hadirlah sebagai tamu yang menghormati.",
      "Jaga jarak aman saat Pasola berlangsung — area arena bisa berbahaya.",
      "Senyapkan ponsel saat ritual berlangsung — flash dan notifikasi sangat mengganggu.",
      "Jangan menerobos atau memotong prosesi adat.",
    ],
  },
  {
    icon: "💰",
    judul: "Soal Uang & Transaksi",
    poin: [
      "Tanyakan harga sebelum menggunakan jasa atau membeli.",
      "Beli tenun langsung dari pengrajin — harga lebih adil, cerita lebih nyata.",
      "Bayar jasa pemandu, pengemudi, dan homestay dengan adil.",
    ],
  },
  {
    icon: "🌿",
    judul: "Soal Lingkungan",
    poin: [
      "Bawa pulang sampahmu — fasilitas pengelolaan sampah masih terbatas.",
      "Jangan ambil apapun dari situs alam atau adat sebagai suvenir.",
      "Hemat air — di beberapa wilayah, air bersih masih sumber daya terbatas.",
    ],
  },
];

export default function HalamanEtika() {
  return (
    <>
      {/* HERO */}
      <div className="mx-auto max-w-3xl px-5 pt-10 pb-6">
        <FadeIn>
          <nav className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#8a8273]">
              <li><Link href="/" className="hover:text-kombu transition">Beranda</Link></li>
              <li className="opacity-40">/</li>
              <li className="font-semibold text-kombu">Etika Berkunjung</li>
            </ol>
          </nav>
          <span className="rounded-md bg-lumut/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-lumut">
            Panduan Wisatawan
          </span>
          <h1 className="mt-4 font-display text-[clamp(2rem,6vw,3.2rem)] font-extrabold leading-tight text-indigo2 dark:text-[#f0e8da]">
            Menjadi Tamu yang Baik di Sumba
          </h1>
          <p className="mt-4 font-serif2 text-lg italic text-[#4d463c] dark:text-[#c4b8a8]">
            Sumba bukan sekadar destinasi foto. Ini panduan untuk datang dengan hormat
            dan pulang dengan pengalaman yang lebih bermakna.
          </p>
        </FadeIn>
      </div>

      <DividerTenun />

      {/* PANDUAN CARDS */}
      <div className="mx-auto max-w-3xl px-5 py-10 space-y-6">
        {PANDUAN.map((p, i) => (
          <FadeIn key={p.judul} delay={i * 80}>
            <div className="rounded-2xl border border-indigo2/15 bg-white p-6 dark:bg-[#252019] dark:border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{p.icon}</span>
                <h2 className="font-display text-xl font-bold text-indigo2 dark:text-[#f0e8da]">
                  {p.judul}
                </h2>
              </div>
              <ul className="space-y-3">
                {p.poin.map((poin, j) => (
                  <li key={j} className="flex gap-3 text-sm leading-relaxed text-[#4d463c] dark:text-[#c4b8a8]">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-kombu" />
                    {poin}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>

      <DividerTenun />

      {/* PENUTUP */}
      <FadeIn className="mx-auto max-w-3xl px-5 py-10">
        <div className="rounded-2xl border-l-[3px] border-nila bg-[#fbf6ec] p-6 dark:bg-[#1a1612]">
          <p className="font-serif2 text-base italic leading-relaxed text-[#2d3b4f] dark:text-[#c4b8a8]">
            "Menjadi tamu yang baik di Sumba bukan tentang mematuhi daftar aturan —
            ini tentang datang dengan pikiran terbuka, rasa ingin tahu yang tulus,
            dan kesadaran bahwa kamu sedang memasuki dunia orang lain."
          </p>
          <p className="mt-3 font-sans text-xs text-[#8a8273]">— Tim Jelajah Sumba</p>
        </div>

        <p className="mt-6 font-sans text-sm text-[#5a5347] dark:text-[#c4b8a8]">
          Panduan ini disusun berdasarkan masukan dari warga dan pemandu lokal Sumba.
          Selalu ikuti arahan pemandu lokalmu sebagai rujukan utama, karena norma adat
          bisa berbeda antar wilayah dan kampung.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/pemandu"
            className="rounded-full bg-lumut px-6 py-3 text-sm font-bold text-pasir hover:opacity-90 transition">
            Cari Pemandu Lokal →
          </Link>
          <Link href="/budaya"
            className="rounded-full border-2 border-indigo2/30 px-6 py-3 text-sm font-bold text-indigo2 hover:border-indigo2 transition dark:text-[#f0e8da]">
            Pelajari Budaya Sumba →
          </Link>
        </div>
      </FadeIn>
    </>
  );
}