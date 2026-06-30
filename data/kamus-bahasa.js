export const kamusData = [
  // SAPAAN
  {
    kategori: "Sapaan",
    icon: "👋",
    kata: [
      { indonesia: "Selamat datang", kambera: "Tama kalai", wewewa: "Panewe", catatan: "Ungkapan penyambutan tamu" },
      { indonesia: "Terima kasih", kambera: "Nggomba", wewewa: "Terima kasih / Nggomba", catatan: "Ucapkan ini setelah menerima bantuan atau makanan" },
      { indonesia: "Selamat pagi", kambera: "Mandara mara", wewewa: "Mandara mara", catatan: null },
      { indonesia: "Selamat sore/malam", kambera: "Mandara aingu", wewewa: "Mandara aingu", catatan: null },
      { indonesia: "Apa kabar?", kambera: "Nda ba hau?", wewewa: "Makada ba hamu?", catatan: "Sapaan ramah untuk memulai percakapan" },
      { indonesia: "Baik / Sehat", kambera: "Nggara", wewewa: "Nggara", catatan: "Jawaban untuk 'apa kabar'" },
      { indonesia: "Sampai jumpa", kambera: "Tama malingu", wewewa: "Tama malingu", catatan: null },
      { indonesia: "Permisi / Maaf", kambera: "Hambu", wewewa: "Hambu", catatan: "Gunakan saat melewati orang atau masuk ke area kampung" },
    ],
  },
  // PERTANYAAN PRAKTIS
  {
    kategori: "Pertanyaan Praktis",
    icon: "🗺",
    kata: [
      { indonesia: "Di mana?", kambera: "Andai?", wewewa: "Piga?", catatan: "Berguna untuk tanya arah" },
      { indonesia: "Berapa harganya?", kambera: "Piga arangu?", wewewa: "Piga arga?", catatan: "Tanya harga di pasar atau warung" },
      { indonesia: "Jauh / Dekat", kambera: "Dawa / Ngabu", wewewa: "Dallu / Ma'oti", catatan: "Tanya jarak ke suatu tempat" },
      { indonesia: "Kanan / Kiri", kambera: "Kawangu / Kairi", wewewa: "Kawangu / Kairi", catatan: "Untuk petunjuk arah" },
      { indonesia: "Saya tidak mengerti", kambera: "Ndaku njaringi", wewewa: "Tana ku ngara", catatan: "Katakan ini jika tidak paham penjelasan warga" },
      { indonesia: "Tolong ulangi", kambera: "Hambu, baliku mena", wewewa: "Hambu, ulangi", catatan: null },
    ],
  },
  // ADAT & BUDAYA
  {
    kategori: "Adat & Budaya",
    icon: "🏛",
    kata: [
      { indonesia: "Rato (pemuka adat)", kambera: "Rato", wewewa: "Rato", catatan: "Pemimpin spiritual dan ritual Marapu — sapa dengan hormat" },
      { indonesia: "Rumah adat", kambera: "Uma bokulu", wewewa: "Uma", catatan: "Rumah tradisional dengan atap menara khas Sumba" },
      { indonesia: "Upacara adat", kambera: "Pesta adat", wewewa: "Pesta adat", catatan: null },
      { indonesia: "Leluhur", kambera: "Marapu", wewewa: "Marapu", catatan: "Inti dari sistem kepercayaan tradisional Sumba" },
      { indonesia: "Tenun ikat", kambera: "Hinggi", wewewa: "Lau / Hinggi", catatan: "Kain tenun tradisional Sumba — berbeda makna di tiap wilayah" },
      { indonesia: "Kubur batu", kambera: "Watu meti", wewewa: "Watu meti", catatan: "Makam megalitik — beri penghormatan saat berkunjung" },
    ],
  },
  // ALAM & TEMPAT
  {
    kategori: "Alam & Tempat",
    icon: "🌿",
    kata: [
      { indonesia: "Gunung / Bukit", kambera: "Wingu", wewewa: "Wingu", catatan: null },
      { indonesia: "Pantai / Laut", kambera: "Tahi", wewewa: "Tahi", catatan: null },
      { indonesia: "Sungai", kambera: "Luku", wewewa: "Luku", catatan: null },
      { indonesia: "Hutan", kambera: "Kamadaka", wewewa: "Uma kayu", catatan: null },
      { indonesia: "Kampung / Desa", kambera: "Paraingu", wewewa: "Paraingu", catatan: "Kata yang sama di kedua dialek — penting untuk diingat" },
      { indonesia: "Jalan", kambera: "Dalan", wewewa: "Dalan", catatan: null },
    ],
  },
  // MAKANAN
  {
    kategori: "Makanan & Minuman",
    icon: "🍽",
    kata: [
      { indonesia: "Makan", kambera: "Koni", wewewa: "Koni", catatan: null },
      { indonesia: "Minum", kambera: "Inu", wewewa: "Inu", catatan: null },
      { indonesia: "Air", kambera: "Wai", wewewa: "Wai", catatan: "Minta air minum: 'Wai inu'" },
      { indonesia: "Nasi", kambera: "Wari", wewewa: "Wari", catatan: null },
      { indonesia: "Enak / Lezat", kambera: "Manggainggu", wewewa: "Manggainggu", catatan: "Puji masakan tuan rumah dengan kata ini" },
      { indonesia: "Kenyang", kambera: "Nggutu", wewewa: "Nggutu", catatan: "Ucapkan ini saat menolak tambahan makanan dengan sopan" },
    ],
  },
  // ANGKA DASAR
  {
    kategori: "Angka Dasar",
    icon: "🔢",
    kata: [
      { indonesia: "Satu", kambera: "Hamba deta", wewewa: "Eha", catatan: null },
      { indonesia: "Dua", kambera: "Rua", wewewa: "Rua", catatan: null },
      { indonesia: "Tiga", kambera: "Telu", wewewa: "Telu", catatan: null },
      { indonesia: "Lima", kambera: "Lima", wewewa: "Lima", catatan: null },
      { indonesia: "Sepuluh", kambera: "Hampuluh", wewewa: "Mpulu", catatan: null },
      { indonesia: "Banyak", kambera: "Dala", wewewa: "Dala", catatan: "Berguna saat tawar-menawar" },
    ],
  },
];

export const KATEGORI_KAMUS = ["Semua", ...kamusData.map((k) => k.kategori)];