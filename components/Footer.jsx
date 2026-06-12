import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-indigodeep text-pasir/70">
      <div className="ikat" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-4">
        <div>
          <p className="font-display text-xl font-extrabold text-pasir">
            SUM<span className="text-emas">BA</span>
          </p>
          <p className="mt-3 text-sm">
            Tanah Marapu — panduan independen wisata Pulau Sumba, NTT. Dibuat untuk
            menghubungkan wisatawan langsung dengan warga lokal.
          </p>
          <div className="mt-4 flex gap-3 text-sm font-semibold">
            <a href="#" className="hover:text-emas">Instagram</a>
            <a href="#" className="hover:text-emas">TikTok</a>
            <a href="#" className="hover:text-emas">YouTube</a>
          </div>
        </div>

        <div>
          <p className="mb-3 font-display font-bold text-pasir">Jelajah</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/destinasi" className="hover:text-emas">Semua Destinasi</Link></li>
            <li><Link href="/blog/itinerary-sumba-5-hari" className="hover:text-emas">Itinerary & Blog</Link></li>
            <li><Link href="/stay" className="hover:text-emas">Homestay & Guide</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-3 font-display font-bold text-pasir">Tentang</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/tentang" className="hover:text-emas">Tentang Kami</Link></li>
            <li><a href="#" className="hover:text-emas">Daftarkan Usahamu</a></li>
            <li><a href="#" className="hover:text-emas">Kredit Fotografer</a></li>
            <li><a href="#" className="hover:text-emas">Kebijakan Privasi</a></li>
          </ul>
        </div>

        <div>
          <p className="mb-3 font-display font-bold text-pasir">Itinerary gratis 📩</p>
          <p className="text-sm">Dapatkan PDF "Itinerary Sumba 5 Hari" + tips terbaru langsung ke emailmu.</p>
          {/* nanti dihubungkan ke Supabase / layanan email */}
          <div className="mt-3 flex gap-2">
            <input
              type="email"
              placeholder="Email kamu"
              className="w-full rounded-full bg-pasir/10 px-4 py-2 text-sm text-pasir outline-none placeholder:text-pasir/40 focus:bg-pasir/20"
            />
            <button className="rounded-full bg-emas px-4 py-2 text-sm font-bold text-indigo2">
              Kirim
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-pasir/10 py-5 text-center text-xs">
        © 2026 Tanah Marapu · Foto oleh fotografer lokal Sumba (lihat kredit)
      </div>
    </footer>
  );
}
