// Pemetaan destinasi <-> artikel budaya terkait
// Dipakai untuk hubungkan halaman destinasi dengan ensiklopedia budaya, dan sebaliknya.
//
// Cara pakai: tambahkan field "terkaitBudaya": ["slug-artikel"] di object destinasi
// di data/site.js, ATAU gunakan mapping manual di bawah ini sebagai fallback
// jika field tersebut belum diisi di site.js.

export const destinasiKeBudaya = {
  "kampung-ratenggaro": ["filosofi-marapu", "rumah-adat-kubur-megalitik"],
  "kampung-praijing": ["filosofi-marapu", "rumah-adat-kubur-megalitik"],
  // Pasola digelar di beberapa kampung Sumba Barat/Barat Daya — sesuaikan
  // dengan slug destinasi yang relevan di data/site.js kamu, contoh:
  // "pantai-mandorak": ["pasola-ritual-perang-tombak"],
};

export function getBudayaTerkaitDestinasi(slug, dataDestinasi) {
  // Prioritas: field di data destinasi itu sendiri, fallback ke mapping manual
  const fromField = dataDestinasi?.terkaitBudaya;
  if (fromField && fromField.length) return fromField;
  return destinasiKeBudaya[slug] || [];
}

// Kebalikannya: dari artikel budaya, cari destinasi mana saja yang terkait
export function getDestinasiTerkaitBudaya(slugArtikel) {
  return Object.entries(destinasiKeBudaya)
    .filter(([, artikelList]) => artikelList.includes(slugArtikel))
    .map(([slugDestinasi]) => slugDestinasi);
}