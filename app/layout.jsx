import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Bricolage_Grotesque, Plus_Jakarta_Sans, Source_Serif_4 } from "next/font/google";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-serif2",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://tanahmarapu.example.com"),
  title: {
    default: "Tanah Marapu — Panduan Wisata Pulau Sumba, NTT",
    template: "%s | Tanah Marapu",
  },
  description:
    "Panduan wisata Sumba terlengkap: destinasi klasik & hidden gem terbaru, Pasola, tenun ikat, itinerary, homestay dan guide lokal.",
  openGraph: { type: "website", locale: "id_ID" },
  icons: {
    icon: "/favicon.ico",
    apple: "/kuda-sumba-nav.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${bricolage.variable} ${jakarta.variable} ${sourceSerif.variable}`}>
      <body>
        <Nav />
        <main className="pt-0 md:pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}