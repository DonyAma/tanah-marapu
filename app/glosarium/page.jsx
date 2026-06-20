import { glosarium } from "../../data/glosarium";
import FadeIn from "../../components/FadeIn";
import DividerTenun from "../../components/DividerTenun";

export const metadata = {
  title: "Glosarium Istilah Sumba",
  description: "Kamus istilah budaya dan adat Sumba — Marapu, Rato, Kabihu, dan lainnya, dijelaskan singkat dan jelas.",
};

export default function HalamanGlosarium() {
  const terurut = [...glosarium].sort((a, b) => a.istilah.localeCompare(b.istilah));

  return (
    <section className="mx-auto max-w-3xl px-5 py-14">
      <FadeIn>
        <span className="rounded-md bg-nila/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-nila">
          Referensi
        </span>
        <h1 className="mt-4 font-display text-[clamp(2rem,6vw,3.2rem)] font-extrabold text-indigo2 dark:text-[#f0e8da]">
          Glosarium Istilah Sumba
        </h1>
        <p className="mt-3 text-[#4d463c] dark:text-[#c4b8a8]">
          Istilah budaya dan adat yang sering muncul saat menjelajahi Sumba — dijelaskan singkat.
        </p>
      </FadeIn>

      <DividerTenun className="my-8" />

      <FadeIn>
        <dl className="divide-y divide-indigo2/10 dark:divide-white/10">
          {terurut.map((g) => (
            <div key={g.istilah} className="py-4">
              <dt className="font-display text-lg font-bold text-indigo2 dark:text-[#f0e8da]">{g.istilah}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-[#5a5347] dark:text-[#c4b8a8]">{g.arti}</dd>
            </div>
          ))}
        </dl>
      </FadeIn>
    </section>
  );
}