import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  metadataBase: new URL("https://tanahmarapu.example.com"), // ganti domain asli
  title: {
    default: "Tanah Marapu — Panduan Wisata Pulau Sumba, NTT",
    template: "%s | Tanah Marapu",
  },
  description:
    "Panduan wisata Sumba terlengkap: destinasi klasik & hidden gem terbaru, Pasola, tenun ikat, itinerary, homestay dan guide lokal.",
  openGraph: { type: "website", locale: "id_ID" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,700;12..96,800&family=Source+Serif+4:ital,opsz,wght@1,8..60,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        <main className="pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
