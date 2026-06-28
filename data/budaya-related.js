export const destinasiKeBudaya = {
  // Kampung adat → Filosofi Marapu + Rumah Adat
  "kampung-ratenggaro": ["filosofi-marapu", "rumah-adat-kubur-megalitik"],
  "kampung-praijing": ["filosofi-marapu", "rumah-adat-kubur-megalitik"],

  // Bukit sabana → Tenun Ikat (konteks alam Sumba)
  "bukit-tanarara": ["tenun-ikat-filosofi-motif"],
  "bukit-wairinding": ["tenun-ikat-filosofi-motif"],

  // Pantai → Etika Berkunjung
  "pantai-walakiri": ["etika-berkunjung-sumba"],
  "pantai-mandorak": ["etika-berkunjung-sumba"],
  "laguna-weekuri": ["etika-berkunjung-sumba"],

  // Padang savana → Pasola (kuda & tradisi)
  "puru-kambera": ["pasola-ritual-perang-tombak"],
};

export function getBudayaTerkaitDestinasi(slug, dataDestinasi) {
  const fromField = dataDestinasi?.terkaitBudaya;
  if (fromField && fromField.length) return fromField;
  return destinasiKeBudaya[slug] || [];
}

export function getDestinasiTerkaitBudaya(slugArtikel) {
  return Object.entries(destinasiKeBudaya)
    .filter(([, artikelList]) => artikelList.includes(slugArtikel))
    .map(([slugDestinasi]) => slugDestinasi);
}