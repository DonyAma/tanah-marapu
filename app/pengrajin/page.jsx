import DaftarOrang from "../../components/DaftarOrang";

export const metadata = {
  title: "Pengrajin Lokal Sumba",
  description: "Temukan pengrajin tenun ikat dan kerajinan tradisional Sumba — terhubung langsung tanpa perantara.",
};

export default function HalamanPengrajin() {
  return (
    <DaftarOrang
      kategori="pengrajin"
      judul="Pengrajin Lokal Sumba"
      deskripsi="Di balik setiap helai tenun ikat ada tangan dan cerita pengrajin. Hubungi langsung, tanpa perantara."
      labelSpesialisasi="spesialisasi"
    />
  );
}