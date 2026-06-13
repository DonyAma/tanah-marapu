export const metadata = {
  title: "Stay & Guide — Homestay dan Guide Lokal Sumba",
  description:
    "Temukan homestay, guide lokal, dan rental kendaraan di Sumba. Pesan langsung via WhatsApp tanpa perantara, harga jujur langsung dari warga Sumba.",
  openGraph: {
    title: "Stay & Guide — Homestay dan Guide Lokal Sumba",
    description: "Homestay, guide, dan rental terverifikasi di Sumba. Langsung dari warga, tanpa perantara.",
    images: [{ url: "/kuda-sumba-full.jpg", width: 1200, height: 630, alt: "Stay & Guide Sumba" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stay & Guide Sumba",
    images: ["/kuda-sumba-full.jpg"],
  },
};

export default function StayLayout({ children }) {
  return <>{children}</>;
}
