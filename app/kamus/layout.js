export const metadata = {
  title: "Kamus Bahasa Sumba — Belajar Bahasa Kambera & Wewewa",
  description:
    "Kamus mini bahasa Sumba untuk wisatawan — frasa sapaan, pertanyaan praktis, kata adat, dalam dua dialek utama: Kambera (Sumba Timur) dan Wewewa (Sumba Barat).",
  openGraph: {
    title: "Kamus Bahasa Sumba | Jelajah Sumba",
    description: "Belajar bahasa lokal Sumba sebelum berkunjung — Kambera & Wewewa.",
    images: [{ url: "/kuda-sumba-full.jpg", width: 1200, height: 630 }],
  },
};

export default function KamusLayout({ children }) {
  return <>{children}</>;
}