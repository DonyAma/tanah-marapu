// Data glosarium istilah Sumba — dipakai di sidebar artikel budaya & halaman glosarium
export const glosarium = [
  { istilah: "Marapu", arti: "Sistem kepercayaan leluhur asli masyarakat Sumba, mengatur hubungan manusia, alam, dan arwah leluhur." },
  { istilah: "Rato", arti: "Pemuka adat yang memimpin ritual dan menjadi perantara antara komunitas dengan leluhur." },
  { istilah: "Kabihu", arti: "Klan atau marga dalam struktur sosial masyarakat Sumba." },
  { istilah: "Mahonduku", arti: "Motif tenun ikat berbentuk kuda, melambangkan status dan kehormatan." },
  { istilah: "Andung", arti: "Motif tenun ikat berbentuk pohon kehidupan, melambangkan kesuburan dan keberlangsungan." },
  { istilah: "Pasola", arti: "Ritual perang tombak tradisional yang digelar setiap tahun sebagai bagian dari kalender adat Marapu." },
  { istilah: "Kalimbu", arti: "Sumber mata air yang dianggap sakral dalam tradisi Sumba." },
];

// Helper: cari istilah terkait berdasarkan keyword (dipakai di sidebar artikel)
export function cariIstilahTerkait(keywords = [], maks = 3) {
  if (!keywords.length) return glosarium.slice(0, maks);
  const hasil = glosarium.filter((g) =>
    keywords.some((k) => g.istilah.toLowerCase().includes(k.toLowerCase()))
  );
  return (hasil.length ? hasil : glosarium).slice(0, maks);
}