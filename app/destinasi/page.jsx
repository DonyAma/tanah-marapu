import Link from "next/link";
import { destinasi } from "../../data/site";

export const metadata = { title: "Semua Destinasi Sumba" };

const WILAYAH = ["Semua", "Sumba Barat Daya", "Sumba Barat", "Sumba Tengah", "Sumba Timur"];

export default function DaftarDestinasi({ searchParams }) {
  const w = searchParams?.wilayah || "Semua";
  const q = (searchParams?.q || "").toLowerCase().trim();

  const data = destinasi.filter((d) => {
    const cocokWilayah = w === "Semua" || d.wilayah === w;
    const cocokCari =
      !q ||
      d.nama.toLowerCase().includes(q) ||
      d.kategori.toLowerCase().includes(q) ||
      d.ringkas.toLowerCase().includes(q);
    return cocokWilayah && cocokCari;
  });

  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <h1 className="font-display text-4xl font-extrabold text-indigo2">Destinasi Sumba</h1>
      <p className="mt-2 max-w-xl text-[#4d463c]">
        Jelajahi per wilayah — jarak antar spot jauh, rencanakan dengan bijak.
      </p>

      {/* filter wilayah */}
      <div className="mt-6 flex flex-wrap gap-2">
        {WILAYAH.map((x) => (
          <Link
            key={x}
            href={x === "Semua" ? "/destinasi" : `/destinasi?wilayah=${encodeURIComponent(x)}`}
            className={`rounded-full border-2 px-4 py-1.5 text-xs font-bold ${
              w === x
                ? "border-indigo2 bg-indigo2 text-pasir"
                : "border-indigo2/30 bg-white text-indigo2 hover:border-kombu"
            }`}
          >
            {x}
          </Link>
        ))}
      </div>

      {q && (
        <p className="mt-4 text-sm text-[#8a8273]">
          Hasil pencarian untuk: <b className="text-kombu">"{searchParams.q}"</b>{" "}
          <Link href="/destinasi" className="underline">hapus</Link>
        </p>
      )}

      {data.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-indigo2/15 bg-white p-10 text-center">
          <p className="font-display text-lg font-bold text-indigo2">Tidak ditemukan</p>
          <p className="mt-1 text-sm text-[#5a5347]">
            Coba kata kunci lain, atau jelajahi semua destinasi.
          </p>
          <Link href="/destinasi" className="mt-4 inline-block rounded-full bg-kombu px-5 py-2 text-sm font-bold text-pasir">
            Lihat semua destinasi
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((d) => (
            <Link key={d.slug} href={`/destinasi/${d.slug}`}
              className="group overflow-hidden rounded-2xl border border-indigo2/15 bg-white transition hover:-translate-y-1 hover:shadow-lg">
              <div className={`relative flex h-40 items-start justify-end overflow-hidden bg-gradient-to-br p-3 ${d.gradien}`}>
                {d.foto && (
                  <img src={d.foto} alt={d.nama} loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover" />
                )}
                <span className={`relative z-10 rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider ${
                  d.badge === "baru" ? "bg-emas text-indigo2" : "bg-pasir/95 text-indigo2"}`}>
                  {d.badge === "baru" ? "Baru Naik Daun" : "Klasik"}
                </span>
              </div>
              <div className="p-4">
                <h2 className="font-display text-lg font-bold text-indigo2 group-hover:text-kombu">{d.nama}</h2>
                <p className="mt-1 text-sm text-[#5a5347]">{d.ringkas}</p>
                <p className="mt-3 text-[11px] font-bold uppercase tracking-wider text-kombu">{d.wilayah}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
