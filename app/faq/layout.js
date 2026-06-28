export const metadata = {
  title: "FAQ — Pertanyaan Umum Perjalanan Sumba",
  description:
    "Jawaban jujur untuk pertanyaan paling umum tentang Sumba: keamanan, transportasi, akomodasi, budaya, budget, dan tips praktis lainnya.",
  openGraph: {
    title: "FAQ Perjalanan Sumba | Jelajah Sumba",
    description: "Semua pertanyaan umum tentang wisata Sumba dijawab jujur berdasarkan kondisi nyata.",
    images: [{ url: "/kuda-sumba-full.jpg", width: 1200, height: 630 }],
  },
};

export default function FAQLayout({ children }) {
  return <>{children}</>;
}