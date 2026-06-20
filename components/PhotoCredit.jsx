// Komponen kecil untuk kredit fotografer — taruh di pojok foto besar (hero, dll)
// Wajib dipakai untuk semua foto dari Unsplash sesuai etika & syarat lisensi mereka.
export default function PhotoCredit({ nama, urlProfil, className = "" }) {
  return (
    <a
      href={`${urlProfil}?utm_source=jelajah_sumba&utm_medium=referral`}
      target="_blank"
      rel="noopener"
      className={`absolute bottom-3 right-3 z-10 rounded-full bg-black/40 px-2.5 py-1 text-[10px] text-white backdrop-blur-sm transition hover:bg-black/60 ${className}`}
    >
      📷 {nama}
    </a>
  );
}