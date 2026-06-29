import Link from "next/link";
import DividerTenun from "../../components/DividerTenun";
import FadeIn from "../../components/FadeIn";

export const metadata = {
  title: "Tentang Jelajah Sumba — Panduan Budaya & Wisata Independen",
  description:
    "Jelajah Sumba adalah platform non-profit yang mendokumentasikan budaya Marapu, wisata, dan manusia di balik Pulau Sumba — gratis, tanpa perantara, uang langsung ke warga.",
  openGraph: {
    title: "Tentang Jelajah Sumba",
    description: "Platform non-profit ensiklopedia digital budaya dan wisata Pulau Sumba.",
    images: [{ url: "/kuda-sumba-full.jpg", width: 1200, height: 630 }],
  },
};

const NILAI = [
  {
    icon: "🏛",
    judul: "Budaya Dulu, Wisata Kemudian",
    isi: "Sumba punya cerita jauh lebih dalam dari sekadar 'destinasi foto'. Kami menempatkan budaya Marapu, tradisi adat, dan manusia di baliknya sebagai inti — bukan pelengkap.",
  },
  {
    icon: "🤝",
    judul: "Langsung ke Warga, Tanpa Perantara",
    isi: "Setiap homestay, pemandu, dan pengrajin di direktori kami bisa dihubungi langsung via WhatsApp. Tidak ada komisi, tidak ada markup. Uang wisatawan sebisa mungkin langsung ke tangan warga Sumba.",
  },
  {
    icon: "📖",
    judul: "Informasi yang Jujur",
    isi: "Kami tulis apa adanya — termasuk hal-hal yang tidak nyaman seperti jalan berlubang, sinyal tidak ada, atau area kampung yang sebaiknya tidak dikunjungi saat Wulla Poddu. Kejujuran lebih berguna dari promosi.",
  },
  {
    icon: "📷",
    judul: "Kredit untuk Fotografer",
    isi: "Semua foto yang kami gunakan disertai kredit fotografernya. Kami percaya karya visual layak dihargai, terutama karya fotografer lokal Sumba yang sering tidak mendapat pengakuan.",
  },
];

const TIMELINE = [
  { tahun: "2025", label: "Awal mula", isi: "Dimulai sebagai platform panduan wisata sederhana untuk Pulau Sumba." },
  { tahun: "2026", label: "Pivot community-first", isi: "Berganti arah menjadi ensiklopedia digital budaya Sumba — non-profit, gratis, fokus pada pelestarian dan koneksi langsung dengan warga lokal." },
  { tahun: "Sekarang", label: "Terus berkembang", isi: "4 artikel budaya, profil pengrajin & pemandu, 12 destinasi, peta interaktif, kalender adat, dan terus bertambah dengan bantuan kontributor." },
];

export default function TentangKami() {
  return (
    <>
      {/* HERO */}
      <div className="mx-auto max-w-3xl px-5 pt-10 pb-6">
        <FadeIn>
          <nav className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#8a8273]">
              <li><Link href="/" className="hover:text-kombu transition">Beranda</Link></li>
              <li className="opacity-40">/</li>
              <li className="font-semibold text-kombu">Tentang Kami</li>
            </ol>
          </nav>
          <span className="rounded-md bg-kombu/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-kombu">
            Tentang Kami
          </span>
          <h1 className="mt-4 font-display text-[clamp(2rem,6vw,3rem)] font-extrabold leading-tight text-indigo2 dark:text-[#f0e8da]">
            Panduan Sumba, dari Hati untuk Sumba
          </h1>
          <p className="mt-4 font-serif2 text-lg italic text-[#4d463c] dark:text-[#c4b8a8]">
            Jelajah Sumba adalah ensiklopedia digital budaya dan panduan wisata Pulau Sumba,
            Nusa Tenggara Timur — dibangun sebagai platform non-profit, gratis untuk semua.
          </p>
        </FadeIn>
      </div>

      <DividerTenun />

      {/* MISI */}
      <div className="mx-auto max-w-3xl px-5 py-10">
        <FadeIn>
          <h2 className="font-display text-2xl font-bold text-indigo2 dark:text-[#f0e8da] mb-4">
            Mengapa Jelajah Sumba Ada
          </h2>
          <div className="space-y-4 text-[#4d463c] dark:text-[#c4b8a8]">
            <p>
              Sumba layak dikenal dunia — bukan lewat brosur paket tour yang seragam,
              tapi lewat informasi yang jujur, lengkap, dan selalu diperbarui: destinasi
              klasik maupun yang baru naik daun, budaya yang masih hidup, sampai hal-hal
              praktis seperti kondisi jalan, sinyal, dan ATM.
            </p>
            <p>
              Kami percaya wisata yang baik dimulai dari pemahaman yang baik. Wisatawan
              yang memahami budaya Marapu sebelum datang akan bersikap lebih hormat,
              menghabiskan waktu lebih bermakna, dan meninggalkan dampak yang lebih positif
              bagi komunitas yang mereka kunjungi.
            </p>
            <p>
              Platform ini dibangun dan dikelola secara independen — tidak ada investor,
              tidak ada agen tour di baliknya. Hanya kecintaan pada Sumba dan keyakinan
              bahwa pulau ini layak mendapat perhatian dunia dengan cara yang benar.
            </p>
          </div>
        </FadeIn>
      </div>

      <DividerTenun />

      {/* NILAI-NILAI */}
      <div className="mx-auto max-w-3xl px-5 py-10">
        <FadeIn>
          <h2 className="font-display text-2xl font-bold text-indigo2 dark:text-[#f0e8da] mb-6">
            Nilai yang Kami Pegang
          </h2>
        </FadeIn>
        <div className="space-y-4">
          {NILAI.map((n, i) => (
            <FadeIn key={n.judul} delay={i * 70}>
              <div className="flex gap-4 rounded-2xl border border-indigo2/15 bg-white p-5 dark:bg-[#252019] dark:border-white/10">
                <span className="text-2xl shrink-0">{n.icon}</span>
                <div>
                  <h3 className="font-display text-base font-bold text-indigo2 dark:text-[#f0e8da]">{n.judul}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#4d463c] dark:text-[#c4b8a8]">{n.isi}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <DividerTenun />

      {/* TIMELINE */}
      <div className="mx-auto max-w-3xl px-5 py-10">
        <FadeIn>
          <h2 className="font-display text-2xl font-bold text-indigo2 dark:text-[#f0e8da] mb-6">
            Perjalanan Singkat
          </h2>
        </FadeIn>
        <div className="relative pl-8 border-l-2 border-indigo2/15 dark:border-white/10 space-y-6">
          {TIMELINE.map((t, i) => (
            <FadeIn key={t.tahun} delay={i * 80}>
              <div className="relative">
                <span className="absolute -left-10 flex h-5 w-5 items-center justify-center rounded-full bg-kombu text-[8px] font-bold text-white">
                  ●
                </span>
                <p className="font-sans text-[10px] font-bold uppercase tracking-wider text-kombu">{t.tahun} — {t.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-[#4d463c] dark:text-[#c4b8a8]">{t.isi}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <DividerTenun />

      {/* CTA */}
      <FadeIn className="mx-auto max-w-3xl px-5 py-10">
        <div className="rounded-2xl border-l-[3px] border-nila bg-[#fbf6ec] p-6 dark:bg-[#1a1612]">
          <p className="font-serif2 italic text-base leading-relaxed text-[#2d3b4f] dark:text-[#c4b8a8]">
            "Punya cerita tentang Sumba? Foto yang layak dikenal dunia? Atau kenalan pengrajin
            dan pemandu yang luar biasa? Kami selalu terbuka untuk kolaborasi."
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/kontribusi"
            className="rounded-full bg-lumut px-7 py-3 text-sm font-bold text-pasir hover:opacity-90 transition">
            🤝 Ikut Berkontribusi
          </Link>
          <a href="https://wa.me/6281319634257?text=Halo%20Jelajah%20Sumba"
            target="_blank" rel="noopener"
            className="rounded-full border-2 border-indigo2/30 px-7 py-3 text-sm font-bold text-indigo2 hover:border-indigo2 transition dark:text-[#f0e8da]">
            💬 Hubungi via WhatsApp
          </a>
        </div>
      </FadeIn>
    </>
  );
}