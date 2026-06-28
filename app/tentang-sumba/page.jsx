import Link from "next/link";
import FadeIn from "../../components/FadeIn";
import DividerTenun from "../../components/DividerTenun";

export const metadata = {
  title: "Tentang Sumba — Fakta, Akses & Panduan Dasar",
  description:
    "Panduan lengkap untuk first-timer ke Sumba: fakta pulau, cara akses, 4 kabupaten, kapan waktu terbaik, sinyal, mata uang, dan hal-hal praktis lainnya.",
  openGraph: {
    title: "Tentang Pulau Sumba | Jelajah Sumba",
    description: "Semua yang perlu kamu tahu sebelum pertama kali ke Sumba.",
    images: [{ url: "/kuda-sumba-full.jpg", width: 1200, height: 630 }],
  },
};

const FAKTA = [
  { angka: "11.153", satuan: "km²", label: "Luas pulau", konteks: "Lebih besar dari Bali + Lombok digabung" },
  { angka: "±750rb", satuan: "jiwa", label: "Populasi", konteks: "Tersebar di 4 kabupaten" },
  { angka: "4", satuan: "kab.", label: "Kabupaten", konteks: "Sumba Barat Daya, Barat, Tengah, Timur" },
  { angka: "2", satuan: "bandara", label: "Akses udara", konteks: "Tambolaka (SBD) & Waingapu (STE)" },
  { angka: "±500km", satuan: "panjang", label: "Jarak ujung ke ujung", konteks: "Rencanakan perjalanan dengan cermat" },
  { angka: "Mei–Sep", satuan: "", label: "Musim terbaik", konteks: "Kemarau, langit cerah, sabana emas" },
];

const KABUPATEN = [
  {
    nama: "Sumba Barat Daya",
    ibu: "Tambolaka",
    bandara: "Bandara Tambolaka (TMC)",
    karakter: "Pintu masuk utama wisatawan, laguna & kampung adat ikonik",
    icon: "🏖",
    highlight: ["Laguna Weekuri", "Kampung Ratenggaro", "Pantai Mandorak"],
    warna: "border-kombu",
  },
  {
    nama: "Sumba Barat",
    ibu: "Waikabubak",
    bandara: "Via Tambolaka (±1 jam darat)",
    karakter: "Pusat budaya adat, kampung megalitik, pengrajin tenun terbaik",
    icon: "🏛",
    highlight: ["Kampung Praijing", "Bukit Lendongara", "Pengrajin Tenun"],
    warna: "border-lumut",
  },
  {
    nama: "Sumba Tengah",
    ibu: "Waibakul",
    bandara: "Via Tambolaka atau Waingapu",
    karakter: "Wilayah paling sepi wisatawan — potensi hidden gem besar",
    icon: "🌿",
    highlight: ["Masih banyak belum terpetakan"],
    warna: "border-nila",
  },
  {
    nama: "Sumba Timur",
    ibu: "Waingapu",
    bandara: "Bandara Umbu Mehang Kunda (WGP)",
    karakter: "Sabana emas, bukit berlapis, pusat tenun ikat tradisional",
    icon: "🌾",
    highlight: ["Bukit Tanarara", "Bukit Wairinding", "Pantai Walakiri", "Puru Kambera"],
    warna: "border-emas",
  },
];

const AKSES = [
  {
    dari: "Bali (Denpasar)",
    durasi: "±1 jam",
    maskapai: "Garuda, Wings Air, TransNusa",
    tujuan: "Tambolaka atau Waingapu",
    icon: "✈️",
  },
  {
    dari: "Jakarta",
    durasi: "±2,5 jam (transit)",
    maskapai: "Garuda, Lion Air (via Bali/Surabaya)",
    tujuan: "Tambolaka atau Waingapu",
    icon: "✈️",
  },
  {
    dari: "Surabaya",
    durasi: "±1,5 jam (transit)",
    maskapai: "Wings Air, TransNusa",
    tujuan: "Tambolaka atau Waingapu",
    icon: "✈️",
  },
  {
    dari: "Kapal Laut (PELNI)",
    durasi: "Bervariasi (2–3 hari dari Jawa)",
    maskapai: "PELNI — jadwal tidak selalu reguler",
    tujuan: "Pelabuhan Waingapu",
    icon: "🚢",
  },
];

const PRAKTIS = [
  { icon: "💵", judul: "Mata Uang", isi: "Rupiah (IDR). ATM tersedia di Tambolaka dan Waingapu — bawa cash cukup sebelum ke lokasi terpencil." },
  { icon: "📶", judul: "Sinyal", isi: "Telkomsel paling luas jangkauannya di Sumba. Di kampung adat terpencil sering tidak ada sinyal sama sekali." },
  { icon: "🛣", judul: "Transportasi Darat", isi: "Sewa mobil dengan sopir lokal adalah cara paling nyaman. Motor bisa disewa di kota, tapi jalan ke lokasi terpencil sering tidak beraspal." },
  { icon: "🏥", judul: "Kesehatan", isi: "Bawa obat-obatan pribadi. RSUD tersedia di Waingapu dan Waikabubak. Untuk kondisi darurat serius, evakuasi ke Bali atau Kupang mungkin diperlukan." },
  { icon: "🌡", judul: "Cuaca", isi: "Tropis. Musim kemarau (Mei–Oktober) panas dan kering. Musim hujan (November–April) curah hujan tinggi, beberapa jalan tanah bisa tidak bisa dilalui." },
  { icon: "🔌", judul: "Listrik", isi: "PLN tersedia di kota dan sebagian desa. Di homestay terpencil, listrik bisa dari genset dengan jam operasional terbatas." },
  { icon: "🗣", judul: "Bahasa", isi: "Bahasa Indonesia dipahami luas. Masing-masing wilayah punya bahasa daerah sendiri (ada beberapa dialek Sumba yang berbeda)." },
  { icon: "📸", judul: "Etika Foto", isi: "Selalu minta izin sebelum memotret orang atau area kampung adat. Beberapa tempat sakral tidak boleh difoto." },
];

export default function HalamanTentangSumba() {
  return (
    <>
      {/* HERO */}
      <div className="mx-auto max-w-5xl px-5 pt-10 pb-6">
        <FadeIn>
          <nav className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#8a8273]">
              <li><Link href="/" className="hover:text-kombu transition">Beranda</Link></li>
              <li className="opacity-40">/</li>
              <li className="font-semibold text-kombu">Tentang Sumba</li>
            </ol>
          </nav>
          <span className="rounded-md bg-indigo2/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-indigo2 dark:text-[#f0e8da]">
            🏝 Panduan First-Timer
          </span>
          <h1 className="mt-4 font-display text-[clamp(2rem,6vw,3.2rem)] font-extrabold leading-tight text-indigo2 dark:text-[#f0e8da]">
            Mengenal Pulau Sumba
          </h1>
          <p className="mt-3 max-w-2xl font-serif2 italic text-[#4d463c] dark:text-[#c4b8a8]">
            Semua yang perlu kamu tahu sebelum pertama kali menginjakkan kaki di Pulau Sumba,
            Nusa Tenggara Timur.
          </p>
        </FadeIn>
      </div>

      <DividerTenun />

      {/* FAKTA ANGKA */}
      <section className="mx-auto max-w-5xl px-5 py-12">
        <FadeIn>
          <h2 className="font-display text-2xl font-bold text-indigo2 dark:text-[#f0e8da] mb-6">
            Sumba dalam Angka
          </h2>
        </FadeIn>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {FAKTA.map((f, i) => (
            <FadeIn key={f.label} delay={i * 60}>
              <div className="rounded-2xl border border-indigo2/15 bg-white p-5 dark:bg-[#252019] dark:border-white/10">
                <p className="font-display text-3xl font-extrabold text-kombu leading-none">
                  {f.angka}
                  {f.satuan && <span className="ml-1 text-base font-bold text-[#8a8273]">{f.satuan}</span>}
                </p>
                <p className="mt-2 font-sans text-sm font-bold text-indigo2 dark:text-[#f0e8da]">{f.label}</p>
                <p className="mt-1 font-sans text-xs text-[#8a8273]">{f.konteks}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <DividerTenun />

      {/* 4 KABUPATEN */}
      <section className="mx-auto max-w-5xl px-5 py-12">
        <FadeIn>
          <h2 className="font-display text-2xl font-bold text-indigo2 dark:text-[#f0e8da] mb-2">
            4 Kabupaten Sumba
          </h2>
          <p className="text-sm text-[#4d463c] dark:text-[#c4b8a8] mb-6">
            Masing-masing punya karakter berbeda — pahami perbedaannya sebelum merencanakan rute.
          </p>
        </FadeIn>
        <div className="grid gap-4 sm:grid-cols-2">
          {KABUPATEN.map((k, i) => (
            <FadeIn key={k.nama} delay={i * 80}>
              <div className={`rounded-2xl border-l-4 ${k.warna} border border-indigo2/10 bg-white p-5 dark:bg-[#252019] dark:border-indigo2/20`}>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{k.icon}</span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-indigo2 dark:text-[#f0e8da]">{k.nama}</h3>
                    <p className="font-sans text-xs text-[#8a8273]">Ibu kota: {k.ibu}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-[#4d463c] dark:text-[#c4b8a8]">{k.karakter}</p>
                <div className="mt-3">
                  <p className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#8a8273] mb-1.5">Bandara terdekat</p>
                  <p className="font-sans text-xs text-indigo2 dark:text-[#f0e8da]">✈️ {k.bandara}</p>
                </div>
                <div className="mt-3">
                  <p className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#8a8273] mb-1.5">Destinasi unggulan</p>
                  <div className="flex flex-wrap gap-1.5">
                    {k.highlight.map((h) => (
                      <span key={h} className="rounded-full bg-pasir px-2.5 py-1 font-sans text-[10px] font-bold text-indigo2 dark:bg-[#2e2820] dark:text-[#f0e8da]">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <DividerTenun />

      {/* CARA AKSES */}
      <section className="mx-auto max-w-5xl px-5 py-12">
        <FadeIn>
          <h2 className="font-display text-2xl font-bold text-indigo2 dark:text-[#f0e8da] mb-2">
            Cara ke Sumba
          </h2>
          <p className="text-sm text-[#4d463c] dark:text-[#c4b8a8] mb-6">
            Pesawat adalah cara tercepat dan paling praktis. Jadwal penerbangan bisa berubah — selalu cek di aplikasi pemesanan tiket.
          </p>
        </FadeIn>
        <div className="grid gap-4 sm:grid-cols-2">
          {AKSES.map((a, i) => (
            <FadeIn key={a.dari} delay={i * 70}>
              <div className="flex gap-4 rounded-2xl border border-indigo2/15 bg-white p-5 dark:bg-[#252019] dark:border-white/10">
                <span className="text-2xl shrink-0">{a.icon}</span>
                <div>
                  <p className="font-display text-base font-bold text-indigo2 dark:text-[#f0e8da]">{a.dari}</p>
                  <p className="font-sans text-xs font-bold text-kombu mt-0.5">{a.durasi}</p>
                  <p className="mt-1.5 font-sans text-xs text-[#5a5347] dark:text-[#c4b8a8]">{a.maskapai}</p>
                  <p className="mt-1 font-sans text-xs text-[#8a8273]">Tujuan: {a.tujuan}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <DividerTenun />

      {/* INFO PRAKTIS */}
      <section className="mx-auto max-w-5xl px-5 py-12">
        <FadeIn>
          <h2 className="font-display text-2xl font-bold text-indigo2 dark:text-[#f0e8da] mb-6">
            Info Praktis
          </h2>
        </FadeIn>
        <div className="grid gap-4 sm:grid-cols-2">
          {PRAKTIS.map((p, i) => (
            <FadeIn key={p.judul} delay={i * 50}>
              <div className="flex gap-3 rounded-2xl border border-indigo2/15 bg-white p-4 dark:bg-[#252019] dark:border-white/10">
                <span className="text-xl shrink-0">{p.icon}</span>
                <div>
                  <p className="font-display text-sm font-bold text-indigo2 dark:text-[#f0e8da]">{p.judul}</p>
                  <p className="mt-1 font-sans text-xs leading-relaxed text-[#5a5347] dark:text-[#c4b8a8]">{p.isi}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <DividerTenun />

      {/* CTA LANJUT */}
      <FadeIn className="mx-auto max-w-5xl px-5 py-12">
        <h2 className="font-display text-2xl font-bold text-indigo2 dark:text-[#f0e8da] mb-4">
          Lanjut ke mana?
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { href: "/destinasi", icon: "🗺", judul: "Destinasi", desc: "Semua spot wisata Sumba" },
            { href: "/itinerary", icon: "📋", judul: "Itinerary", desc: "Rencana perjalanan siap pakai" },
            { href: "/etika", icon: "🤝", judul: "Etika Berkunjung", desc: "Panduan menghormati budaya" },
            { href: "/budaya", icon: "📖", judul: "Budaya", desc: "Ensiklopedia budaya Marapu" },
            { href: "/pengrajin", icon: "🧵", judul: "Pengrajin", desc: "Terhubung langsung ke penenun" },
            { href: "/kalender", icon: "📅", judul: "Kalender Adat", desc: "Kapan waktu terbaik ke Sumba" },
          ].map((item, i) => (
            <FadeIn key={item.href} delay={i * 50}>
              <Link href={item.href}
                className="group flex gap-3 rounded-2xl border border-indigo2/15 bg-white p-4 transition hover:-translate-y-1 hover:shadow-md dark:bg-[#252019] dark:border-white/10">
                <span className="text-xl">{item.icon}</span>
                <div>
                  <p className="font-display text-sm font-bold text-indigo2 group-hover:text-kombu dark:text-[#f0e8da]">{item.judul}</p>
                  <p className="mt-0.5 font-sans text-xs text-[#8a8273]">{item.desc}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </>
  );
}