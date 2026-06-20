import DaftarOrang from "../../components/DaftarOrang";

export const metadata = {
  title: "Pemandu Lokal Sumba",
  description: "Pemandu lokal terpercaya untuk menjelajahi kampung adat dan destinasi Sumba — pesan langsung via WhatsApp.",
};

export default function HalamanPemandu() {
  return (
    <DaftarOrang
      kategori="pemandu"
      judul="Pemandu Lokal Sumba"
      deskripsi="Pemandu yang memahami adat dan medan Sumba — bantu perjalanan Anda lebih bermakna dan hormat pada budaya setempat."
      labelSpesialisasi="spesialisasi"
    />
  );
}