# Tanah Marapu — Web Wisata Sumba (Next.js)

## Cara menjalankan
```bash
npm install
npm run dev      # buka http://localhost:3000
```

## Struktur
- `app/page.jsx`              → landing
- `app/destinasi/[slug]`      → halaman per destinasi (SEO + maps + FAQ + slot iklan/affiliate)
- `app/blog/[slug]`           → artikel (SEO + AdSense + cross-sell direktori)
- `app/stay`                  → direktori homestay/guide (listing Unggulan = berbayar)
- `data/site.js`              → SEMUA konten ada di sini (nanti diganti Supabase)
- `components/`               → Nav (hamburger mobile + dropdown + search), Footer (newsletter), Blok (FAQ/iklan/affiliate)

## Checklist sebelum launch
- [ ] Ganti nomor WhatsApp placeholder (6281234567890)
- [ ] Ganti domain di app/layout.jsx (metadataBase)
- [ ] Ganti gradien dengan foto asli (simpan di /public, pakai next/image)
- [ ] Hubungkan form newsletter (Supabase table / layanan email)
- [ ] Daftar Google Search Console + sitemap
- [ ] Deploy ke Vercel (gratis): import repo GitHub → otomatis

## Roadmap monetisasi
1. Konten & SEO dulu (bulan 1–6)
2. AdSense + affiliate Traveloka (bulan 6–12) → isi komponen SlotIklan & BoxAffiliate
3. Listing Unggulan direktori (tahun ke-2) → field `premium` di data
