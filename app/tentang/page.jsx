export const metadata = {
  title: "Tentang Kami — Panduan Independen Wisata Sumba",
  description:
    "Jelajah Sumba adalah panduan wisata independen Pulau Sumba yang menghubungkan wisatawan langsung dengan warga lokal. Tanpa perantara, uang langsung ke Sumba.",
  openGraph: {
    title: "Tentang Jelajah Sumba",
    description: "Panduan wisata independen Sumba — menghubungkan wisatawan langsung dengan warga lokal.",
    images: [{ url: "/kuda-sumba-full.jpg", width: 1200, height: 630, alt: "Tentang Jelajah Sumba" }],
  },
};

export default function Tentang() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-14">
      <span className="rounded-md bg-lumut px-3 py-1 text-xs font-bold uppercase tracking-widest text-pasir">
        Tentang kami
      </span>
      <h1 className="mt-4 font-display text-[clamp(2rem,6vw,3.2rem)] font-extrabold leading-tight text-indigo2">
        Panduan Sumba, dari hati untuk Sumba
      </h1>
      <p className="mt-5 font-serif2 text-lg italic text-[#4d463c]">
        Jelajah Sumba adalah panduan wisata independen Pulau Sumba, Nusa Tenggara Timur.
      </p>
      <div className="mt-6 space-y-4 text-[#4d463c]">
        <p>
          Kami percaya Sumba layak dikenal dunia — bukan lewat brosur paket tour yang
          seragam, tapi lewat informasi yang jujur, lengkap, dan selalu diperbarui:
          destinasi klasik maupun yang baru naik daun, budaya yang masih hidup, sampai
          hal-hal praktis seperti ATM dan sinyal.
        </p>
        <p>
          Prinsip kami sederhana: <b>uang wisatawan sebisa mungkin langsung ke warga
          Sumba</b>. Karena itu setiap homestay, guide, dan rental di direktori kami bisa
          dihubungi langsung via WhatsApp — tanpa perantara, tanpa markup.
        </p>
        <p>
          Foto-foto di situs ini adalah karya fotografer lokal Sumba yang kami
          cantumkan kreditnya. Punya masukan, koreksi, atau ingin usahamu tampil di
          direktori? Hubungi kami.
        </p>
      </div>
      <a
        href="https://wa.me/6281319634257?text=Halo%20Jelajah%20Sumba"
        target="_blank"
        rel="noopener"
        className="mt-8 inline-block rounded-full bg-[#1f8a4c] px-7 py-3 font-bold text-white hover:bg-[#27a25b] transition"
      >
        💬 Hubungi kami via WhatsApp
      </a>
    </section>
  );
}