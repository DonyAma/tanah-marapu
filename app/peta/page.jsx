"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { destinasi } from "../../data/site";
import FadeIn from "../../components/FadeIn";

const KOORDINAT = {
  "bukit-tanarara": { lat: -9.5826, lng: 120.3512 },
  "pantai-walakiri": { lat: -9.6012, lng: 120.2678 },
  "air-terjun-waimarang": { lat: -9.5234, lng: 120.1456 },
  "laguna-weekuri": { lat: -9.6234, lng: 119.2345 },
  "kampung-ratenggaro": { lat: -9.6456, lng: 119.1234 },
  "bukit-wairinding": { lat: -9.5678, lng: 120.4123 },
  "air-terjun-tanggedu": { lat: -9.4567, lng: 120.5234 },
  "air-terjun-lapopu": { lat: -9.4890, lng: 119.8901 },
  "kampung-praijing": { lat: -9.6123, lng: 119.4567 },
  "puru-kambera": { lat: -9.5345, lng: 120.2890 },
  "bukit-lendongara": { lat: -9.6789, lng: 119.3456 },
  "pantai-mandorak": { lat: -9.7012, lng: 119.1890 },
};

const WILAYAH_WARNA = {
  "Sumba Barat Daya": "#9a3b2e",
  "Sumba Barat": "#5c6b4a",
  "Sumba Tengah": "#2d3b4f",
  "Sumba Timur": "#e0a93e",
};

export default function HalamanPeta() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [aktif, setAktif] = useState(null);
  const [filter, setFilter] = useState("Semua");

  const WILAYAH = ["Semua", "Sumba Barat Daya", "Sumba Barat", "Sumba Tengah", "Sumba Timur"];

  const destinasiFil = destinasi.filter((d) =>
    KOORDINAT[d.slug] && (filter === "Semua" || d.wilayah === filter)
  );

  useEffect(() => {
    if (!mapRef.current) return;

    // Kalau sudah ada instance, hapus dulu sebelum buat baru
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    // Tambahan: bersihkan _leaflet_id dari container supaya tidak konflik
    if (mapRef.current._leaflet_id) {
      delete mapRef.current._leaflet_id;
    }

    let mounted = true;

    import("leaflet").then((L) => {
      if (!mounted || !mapRef.current) return;

      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const map = L.map(mapRef.current, {
        center: [-9.57, 119.9],
        zoom: 9,
        zoomControl: true,
        scrollWheelZoom: false,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
        maxZoom: 18,
      }).addTo(map);

      destinasiFil.forEach((d) => {
        const coord = KOORDINAT[d.slug];
        if (!coord) return;

        const warna = WILAYAH_WARNA[d.wilayah] || "#1d2440";

        const icon = L.divIcon({
          className: "",
          html: `<div style="
            background: ${warna};
            width: 14px; height: 14px;
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 2px 6px rgba(0,0,0,0.35);
            cursor: pointer;
          "></div>`,
          iconSize: [14, 14],
          iconAnchor: [7, 7],
        });

        const marker = L.marker([coord.lat, coord.lng], { icon }).addTo(map);

        marker.on("click", () => {
          setAktif(d.slug);
          map.setView([coord.lat, coord.lng], 11, { animate: true });
        });

        marker.bindTooltip(d.nama, {
          permanent: false,
          direction: "top",
          offset: [0, -8],
          className: "leaflet-tooltip-sumba",
        });
      });

      mapInstanceRef.current = map;
    });

    return () => {
      mounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [filter]);

  const destinasiAktif = aktif ? destinasi.find((d) => d.slug === aktif) : null;

  return (
    <>
      <style>{`
        .leaflet-tooltip-sumba {
          background: #1d2440;
          color: #f5efe4;
          border: none;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 700;
          padding: 4px 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }
        .leaflet-tooltip-sumba::before { border-top-color: #1d2440; }
        .leaflet-container { border-radius: 20px; }
      `}</style>

      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />

      <div className="mx-auto max-w-6xl px-5 pt-10 pb-6">
        <FadeIn>
          <nav className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#8a8273]">
              <li><Link href="/" className="hover:text-kombu transition">Beranda</Link></li>
              <li className="opacity-40">/</li>
              <li className="font-semibold text-kombu">Peta Destinasi</li>
            </ol>
          </nav>
          <span className="rounded-md bg-kombu/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-kombu">
            🗺 Peta Interaktif
          </span>
          <h1 className="mt-4 font-display text-[clamp(2rem,6vw,3.2rem)] font-extrabold leading-tight text-indigo2 dark:text-[#f0e8da]">
            Peta Destinasi Sumba
          </h1>
          <p className="mt-3 max-w-2xl text-[#4d463c] dark:text-[#c4b8a8]">
            Lihat posisi relatif semua destinasi sebelum merencanakan rute —
            jarak antar spot di Sumba bisa sangat jauh.
          </p>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="mt-6 flex flex-wrap gap-2">
            {WILAYAH.map((w) => (
              <button key={w} onClick={() => { setFilter(w); setAktif(null); }}
                className={`rounded-full border-2 px-4 py-1.5 text-xs font-bold transition ${
                  filter === w
                    ? "border-indigo2 bg-indigo2 text-pasir"
                    : "border-indigo2/20 bg-white text-indigo2 hover:border-kombu dark:bg-[#252019] dark:text-[#f0e8da] dark:border-white/10"
                }`}>
                {w === "Semua" ? w : (
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full inline-block" style={{ background: WILAYAH_WARNA[w] }} />
                    {w}
                  </span>
                )}
              </button>
            ))}
          </div>
        </FadeIn>
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-16">
        <div className="grid gap-5 lg:grid-cols-[1fr_300px]">
          <FadeIn>
            <div
              ref={mapRef}
              className="h-[460px] w-full overflow-hidden rounded-2xl border border-indigo2/15 shadow-lg dark:border-white/10"
            />
            <p className="mt-2 text-center font-sans text-xs text-[#8a8273]">
              Klik marker untuk detail destinasi. Scroll map dengan dua jari di mobile.
            </p>
          </FadeIn>

          <FadeIn direction="left" className="flex flex-col gap-4">
            {destinasiAktif ? (
              <div className="rounded-2xl border border-indigo2/15 bg-white p-5 dark:bg-[#252019] dark:border-white/10">
                <div className={`-mx-5 -mt-5 mb-4 h-28 overflow-hidden rounded-t-2xl bg-gradient-to-br ${destinasiAktif.gradien}`}>
                  {destinasiAktif.foto && (
                    <img src={destinasiAktif.foto} alt={destinasiAktif.nama} className="h-full w-full object-cover" />
                  )}
                </div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-wider text-kombu">
                  {destinasiAktif.wilayah}
                </p>
                <h3 className="mt-1 font-display text-lg font-bold text-indigo2 dark:text-[#f0e8da]">
                  {destinasiAktif.nama}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#5a5347] dark:text-[#c4b8a8]">
                  {destinasiAktif.ringkas}
                </p>
                <Link href={`/destinasi/${destinasiAktif.slug}`}
                  className="mt-4 block rounded-full bg-kombu py-2.5 text-center text-sm font-bold text-pasir hover:bg-[#b04636] transition">
                  Lihat detail →
                </Link>
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-indigo2/20 bg-white/50 p-5 text-center dark:bg-[#252019]/50">
                <p className="text-2xl mb-2">📍</p>
                <p className="font-sans text-sm text-[#8a8273]">
                  Klik salah satu marker di peta untuk melihat detail destinasi
                </p>
              </div>
            )}

            <div className="rounded-2xl border border-indigo2/15 bg-white p-4 dark:bg-[#252019] dark:border-white/10">
              <p className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#8a8273] mb-3">Wilayah</p>
              {Object.entries(WILAYAH_WARNA).map(([nama, warna]) => (
                <div key={nama} className="flex items-center gap-2 py-1">
                  <span className="h-3 w-3 rounded-full shrink-0" style={{ background: warna }} />
                  <span className="font-sans text-xs text-[#4d463c] dark:text-[#c4b8a8]">{nama}</span>
                </div>
              ))}
            </div>

            <Link href="/itinerary"
              className="block rounded-2xl bg-gradient-to-br from-nila to-indigo2 p-4 text-pasir hover:opacity-90 transition">
              <p className="font-display text-sm font-bold">Rencanakan rute perjalanan</p>
              <p className="mt-1 text-xs opacity-85">Lihat itinerary siap pakai →</p>
            </Link>
          </FadeIn>
        </div>

        <FadeIn className="mt-8">
          <h2 className="font-display text-xl font-bold text-indigo2 dark:text-[#f0e8da] mb-4">
            Semua Destinasi ({destinasiFil.length})
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {destinasiFil.map((d) => (
              <button key={d.slug} onClick={() => setAktif(d.slug)}
                className={`flex items-center gap-3 rounded-xl border p-3 text-left transition hover:shadow-md ${
                  aktif === d.slug
                    ? "border-kombu bg-kombu/5 dark:bg-kombu/10"
                    : "border-indigo2/15 bg-white dark:bg-[#252019] dark:border-white/10"
                }`}>
                <span className="h-3 w-3 shrink-0 rounded-full" style={{ background: WILAYAH_WARNA[d.wilayah] || "#1d2440" }} />
                <div className="min-w-0">
                  <p className="font-display text-sm font-bold text-indigo2 dark:text-[#f0e8da] truncate">{d.nama}</p>
                  <p className="text-xs text-[#8a8273] truncate">{d.wilayah}</p>
                </div>
              </button>
            ))}
          </div>
        </FadeIn>
      </div>
    </>
  );
}