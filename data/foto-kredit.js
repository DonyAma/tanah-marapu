// Data kredit fotografer Unsplash — pasangkan dengan field "foto" di destinasi/artikel.
// Wajib disertakan setiap kali pakai foto dari Unsplash (syarat lisensi mereka,
// meski tidak diwajibkan secara hukum, ini etika yang baik untuk dukung fotografer).
//
// Cara pakai di komponen:
//   import { kreditFoto } from "../data/foto-kredit";
//   const kredit = kreditFoto[d.foto]; // d.foto = path foto yang dipakai
//   {kredit && <PhotoCredit nama={kredit.nama} urlProfil={kredit.url} />}

export const kreditFoto = {
  "/destinasi/kuda-sumba-pantai.jpg": {
    nama: "Deepavali Gaind",
    url: "https://unsplash.com/@deepavalig",
  },
  "/destinasi/sabana-sumba.jpg": {
    nama: "Febiyan",
    url: "https://unsplash.com/@febiyanr",
  },
  "/destinasi/laguna-weekuri.jpg": {
    nama: "Delphine Fant",
    url: "https://unsplash.com/@delo_gypsea",
  },
  "/destinasi/sungai-batu.jpg": {
    nama: "Umbu Tokung",
    url: "https://unsplash.com/@kakikereta_",
  },
  "/destinasi/sawah-hijau.jpg": {
    nama: "Umbu Tokung",
    url: "https://unsplash.com/@kakikereta_",
  },
  "/destinasi/pantai-putih.jpg": {
    nama: "Itchy Feet",
    url: "https://unsplash.com/@boredbanker",
  },
  "/destinasi/pohon-pantai.jpg": {
    nama: "sutirta budiman",
    url: "https://unsplash.com/@sutirtab",
  },
  "/destinasi/pegunungan-aerial.jpg": {
    nama: "Reza Irawan",
    url: "https://unsplash.com/@rezairaws",
  },
  // tambahkan entry baru di sini setiap kali download foto baru dari Unsplash
};