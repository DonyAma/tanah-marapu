"use client";
import { useState } from "react";
import Link from "next/link";
import FadeIn from "../../components/FadeIn";
import DividerTenun from "../../components/DividerTenun";

const JENIS_KONTRIBUSI = [
  { id: "foto", icon: "📷", label: "Foto Sumba", desc: "Foto destinasi, budaya, atau keseharian warga" },
  { id: "artikel", icon: "✍️", label: "Artikel Budaya", desc: "Tulisan tentang adat, tradisi, atau sejarah Sumba" },
  { id: "pengrajin", icon: "🧵", label: "Profil Pengrajin/Pemandu", desc: "Kenalkan pengrajin atau pemandu lokal yang kamu tahu" },
  { id: "destinasi", icon: "🗺", label: "Destinasi Baru", desc: "Spot wisata yang belum ada di website ini" },
  { id: "koreksi", icon: "✏️", label: "Koreksi Info", desc: "Ada info yang salah atau perlu diperbarui?" },
  { id: "lainnya", icon: "💬", label: "Lainnya", desc: "Ide, saran, atau apapun yang ingin kamu sampaikan" },
];

// GANTI INI dengan link Google Form kamu setelah dibuat
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/GANTI_DENGAN_ID_FORM_KAMU/viewform?embedded=true";
const GOOGLE_FORM_SUDAH_ADA = false; // Ganti jadi true setelah Google Form dibuat

export default function HalamanKontribusi() {
  const [jenis, setJenis] = useState("");
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");
  const [tab, setTab] = useState("wa"); // "wa" atau "form"

  function buildWAMessage() {
    const jenisLabel = JENIS_KONTRIBUSI.find((j) => j.id === jenis)?.label || jenis;
    return encodeURIComponent(
      `Halo Jelajah Sumba! 👋\n\nSaya ingin berkontribusi:\n\n` +
      `*Nama:* ${nama || "(tidak diisi)"}\n` +
      `*Jenis:* ${jenisLabel || "(belum dipilih)"}\n` +
      `*Pesan:*\n${pesan || "(kosong)"}\n\n` +
      `Terima kasih!`
    );
  }

  const waLink = `https://wa.me/6281319634257?text=${buildWAMessage()}`;

  return (
    <>
      {/* HERO */}
      <div className="mx-auto max-w-3xl px-5 pt-10 pb-6">
        <FadeIn>
          <nav className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#8a8273]">
              <li><Link href="/" className="hover:text-kombu transition">Beranda</Link></li>
              <li className="opacity-40">/</li>
              <li className="font-semibold text-kombu">Kontribusi</li>
            </ol>
          </nav>
          <span className="rounded-md bg-lumut/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-lumut">
            🤝 Ikut Berkontribusi
          </span>
          <h1 className="mt-4 font-display text-[clamp(2rem,6vw,3rem)] font-extrabold leading-tight text-indigo2 dark:text-[#f0e8da]">
            Bantu Kami Ceritakan Sumba
          </h1>
          <p className="mt-3 font-serif2 italic text-[#4d463c] dark:text-[#c4b8a8]">
            Jelajah Sumba dibangun dari cerita nyata. Kalau kamu punya foto, tulisan,
            atau kenalan warga lokal yang layak dikenal dunia — kami ingin mendengarnya.
          </p>
        </FadeIn>
      </div>

      <DividerTenun />

      {/* JENIS KONTRIBUSI */}
      <div className="mx-auto max-w-3xl px-5 py-10">
        <FadeIn>
          <h2 className="font-display text-xl font-bold text-indigo2 dark:text-[#f0e8da] mb-4">
            Apa yang ingin kamu kontribusikan?
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {JENIS_KONTRIBUSI.map((j) => (
              <button key={j.id} onClick={() => setJenis(j.id)}
                className={`flex gap-3 rounded-xl border-2 p-4 text-left transition ${
                  jenis === j.id
                    ? "border-kombu bg-kombu/5 dark:bg-kombu/10"
                    : "border-indigo2/15 bg-white hover:border-kombu/40 dark:bg-[#252019] dark:border-white/10"
                }`}>
                <span className="text-xl shrink-0">{j.icon}</span>
                <div>
                  <p className="font-display text-sm font-bold text-indigo2 dark:text-[#f0e8da]">{j.label}</p>
                  <p className="mt-0.5 text-xs text-[#5a5347] dark:text-[#c4b8a8]">{j.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </FadeIn>

        <DividerTenun className="my-10" />

        {/* TAB WA vs GOOGLE FORM */}
        <FadeIn delay={100}>
          <h2 className="font-display text-xl font-bold text-indigo2 dark:text-[#f0e8da] mb-4">
            Kirim via
          </h2>
          <div className="flex gap-2 mb-6">
            <button onClick={() => setTab("wa")}
              className={`rounded-full px-5 py-2 text-sm font-bold transition ${
                tab === "wa"
                  ? "bg-[#1f8a4c] text-white"
                  : "border-2 border-indigo2/20 text-indigo2 hover:border-[#1f8a4c] dark:text-[#f0e8da] dark:border-white/10"
              }`}>
              💬 WhatsApp
            </button>
            <button onClick={() => setTab("form")}
              className={`rounded-full px-5 py-2 text-sm font-bold transition ${
                tab === "form"
                  ? "bg-nila text-white"
                  : "border-2 border-indigo2/20 text-indigo2 hover:border-nila dark:text-[#f0e8da] dark:border-white/10"
              }`}>
              📋 Google Form
            </button>
          </div>

          {/* TAB: WHATSAPP */}
          {tab === "wa" && (
            <div className="rounded-2xl border border-indigo2/15 bg-white p-6 dark:bg-[#252019] dark:border-white/10">
              <p className="font-sans text-sm text-[#5a5347] dark:text-[#c4b8a8] mb-5">
                Isi form di bawah — klik tombol untuk langsung membuka WhatsApp dengan pesan yang sudah terisi otomatis.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="font-sans text-xs font-bold uppercase tracking-wider text-[#8a8273]">
                    Nama kamu
                  </label>
                  <input
                    type="text"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Nama lengkap atau panggilan"
                    className="mt-1.5 w-full rounded-xl border border-indigo2/20 bg-pasir px-4 py-2.5 text-sm outline-none focus:border-kombu transition dark:bg-[#1a1612] dark:border-white/10 dark:text-[#f0e8da] dark:placeholder:text-[#8a7e70]"
                  />
                </div>
                <div>
                  <label className="font-sans text-xs font-bold uppercase tracking-wider text-[#8a8273]">
                    Ceritakan lebih lanjut
                  </label>
                  <textarea
                    value={pesan}
                    onChange={(e) => setPesan(e.target.value)}
                    placeholder="Jelaskan kontribusi yang ingin kamu berikan — foto apa, tulisan tentang apa, atau siapa yang ingin kamu perkenalkan..."
                    rows={4}
                    className="mt-1.5 w-full rounded-xl border border-indigo2/20 bg-pasir px-4 py-2.5 text-sm outline-none focus:border-kombu transition resize-none dark:bg-[#1a1612] dark:border-white/10 dark:text-[#f0e8da] dark:placeholder:text-[#8a7e70]"
                  />
                </div>
              </div>
              <a href={waLink} target="_blank" rel="noopener"
                className="mt-5 block rounded-full bg-[#1f8a4c] py-3 text-center text-sm font-bold text-white hover:bg-[#27a25b] transition">
                💬 Kirim via WhatsApp →
              </a>
              <p className="mt-3 text-center font-sans text-xs text-[#8a8273]">
                Kamu akan diarahkan ke WhatsApp dengan pesan yang sudah terisi otomatis
              </p>
            </div>
          )}

          {/* TAB: GOOGLE FORM */}
          {tab === "form" && (
            <div className="rounded-2xl border border-indigo2/15 bg-white p-6 dark:bg-[#252019] dark:border-white/10">
              {GOOGLE_FORM_SUDAH_ADA ? (
                <iframe
                  src={GOOGLE_FORM_URL}
                  width="100%"
                  height="600"
                  className="rounded-xl border-0"
                  title="Form Kontribusi Jelajah Sumba"
                >
                  Loading…
                </iframe>
              ) : (
                <div className="py-10 text-center">
                  <p className="text-3xl mb-3">📋</p>
                  <p className="font-display text-lg font-bold text-indigo2 dark:text-[#f0e8da]">
                    Google Form segera hadir
                  </p>
                  <p className="mt-2 text-sm text-[#5a5347] dark:text-[#c4b8a8]">
                    Sementara gunakan WhatsApp untuk mengirim kontribusi — kami akan membalas dalam 1–2 hari kerja.
                  </p>
                  <button onClick={() => setTab("wa")}
                    className="mt-4 rounded-full bg-[#1f8a4c] px-6 py-2.5 text-sm font-bold text-white hover:bg-[#27a25b] transition">
                    Kirim via WhatsApp →
                  </button>
                </div>
              )}
            </div>
          )}
        </FadeIn>
      </div>

      <DividerTenun />

      {/* PANDUAN KONTRIBUSI */}
      <FadeIn className="mx-auto max-w-3xl px-5 py-10">
        <h2 className="font-display text-xl font-bold text-indigo2 dark:text-[#f0e8da] mb-5">
          Panduan Kontribusi
        </h2>
        <div className="space-y-3">
          {[
            { icon: "📷", judul: "Foto", isi: "Resolusi minimal 1200px lebar. Format JPG atau PNG. Sertakan nama fotografer dan lokasi foto. Pastikan kamu punya hak atas foto tersebut." },
            { icon: "✍️", judul: "Artikel", isi: "Panjang minimal 300 kata. Fokus pada fakta dan pengalaman nyata — bukan promosi. Kami akan edit untuk konsistensi gaya, tapi isinya tetap milikmu." },
            { icon: "🧵", judul: "Profil Pengrajin/Pemandu", isi: "Pastikan kamu sudah mendapat izin dari yang bersangkutan untuk menampilkan nama, foto, dan kontak mereka secara publik." },
            { icon: "🗺", judul: "Destinasi Baru", isi: "Sertakan nama lokasi, koordinat kalau ada, cara akses, dan minimal satu foto. Kami akan verifikasi sebelum menampilkan." },
          ].map((p) => (
            <div key={p.judul} className="flex gap-3 rounded-xl border border-indigo2/15 bg-white p-4 dark:bg-[#252019] dark:border-white/10">
              <span className="text-lg shrink-0">{p.icon}</span>
              <div>
                <p className="font-display text-sm font-bold text-indigo2 dark:text-[#f0e8da]">{p.judul}</p>
                <p className="mt-1 text-xs leading-relaxed text-[#5a5347] dark:text-[#c4b8a8]">{p.isi}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border-l-[3px] border-nila bg-[#fbf6ec] p-5 dark:bg-[#1a1612]">
          <p className="font-serif2 italic text-sm leading-relaxed text-[#2d3b4f] dark:text-[#c4b8a8]">
            Semua kontribusi yang diterima akan dicantumkan kreditnya secara jelas.
            Jelajah Sumba adalah platform non-profit — tidak ada kompensasi finansial,
            tapi kontribusimu akan membantu ribuan orang mengenal Sumba lebih dalam.
          </p>
        </div>
      </FadeIn>
    </>
  );
}