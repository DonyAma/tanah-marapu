export const metadata = {
  title: "Kuliner Lokal Sumba — Cita Rasa Tanah Marapu",
  description:
    "Panduan kuliner lokal Sumba: jagung bose, kolo, manggulu, se'i sapi, ikan asar, tuak lontar — makanan yang bercerita tentang tanah dan tradisi Sumba.",
  openGraph: {
    title: "Kuliner Lokal Sumba | Jelajah Sumba",
    description: "Dari jagung bose hingga tuak lontar — panduan lengkap kuliner otentik Sumba.",
    images: [{ url: "/kuda-sumba-full.jpg", width: 1200, height: 630 }],
  },
};

export default function KulinerLayout({ children }) {
  return <>{children}</>;
}