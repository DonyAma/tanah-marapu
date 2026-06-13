import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ThemeProvider } from "../components/ThemeProvider";
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

const BASE_URL = "https://jelajahsumba.id";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Jelajah Sumba — Panduan Wisata Pulau Sumba, NTT",
    template: "%s | Jelajah Sumba",
  },
  description:
    "Panduan wisata Sumba terlengkap: destinasi klasik & hidden gem terbaru, tradisi Pasola, tenun ikat, itinerary 5 hari, homestay dan guide lokal terpercaya.",
  keywords: ["wisata sumba", "destinasi sumba", "panduan sumba", "pasola", "tenun ikat sumba", "ntt"],
  authors: [{ name: "Tim Jelajah Sumba" }],
  creator: "Jelajah Sumba",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: BASE_URL,
    siteName: "Jelajah Sumba",
    title: "Jelajah Sumba — Panduan Wisata Pulau Sumba, NTT",
    description: "Panduan wisata Sumba terlengkap: destinasi, itinerary, homestay dan guide lokal.",
    images: [{ url: "/kuda-sumba-full.jpg", width: 1200, height: 630, alt: "Kuda Sumba — Jelajah Sumba" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jelajah Sumba — Panduan Wisata Pulau Sumba",
    description: "Destinasi, itinerary, homestay dan guide lokal Sumba.",
    images: ["/kuda-sumba-full.jpg"],
  },
  alternates: { canonical: BASE_URL },
  icons: { icon: "/favicon.ico", apple: "/kuda-sumba-nav.jpg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${bricolage.variable} ${jakarta.variable} ${sourceSerif.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}