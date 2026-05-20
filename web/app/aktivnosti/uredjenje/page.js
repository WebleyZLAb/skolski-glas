import SectionHeader from "@/components/SectionHeader";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";

export const metadata = {
  title: "Уређење школског простора · Школски глас Број 18",
  description:
    "Обнова учионица, украшавање ходника и заједничко уљепшавање школе у школској години 2025/26.",
};

const ACCENT = "#2BB8BC";

const projekti = [
  {
    naziv: "Украшавање ходника",
    opis: "Ученици ликовне секције израдили су велике зидне панеле са мотивима природе и историје, које красе главни ходник школе.",
    boja: "#2BB8BC",
  },
  {
    naziv: "Зелени кутак",
    opis: "У вестибилу је уређен зелени кутак са украсним биљкама. Ученици млађих разреда брину о биљкама у оквиру еколошке секције.",
    boja: "#4CAF50",
  },
  {
    naziv: 'Пано „Наши успјеси"',
    opis: "Посебан пано је посвећен дипломама, захвалницама и медаљама наших ученика са такмичења и смотри.",
    boja: "#FFC93C",
  },
  {
    naziv: "Учионица за природне науке",
    opis: "Набављена је нова опрема за кабинет биологије и хемије, а ученици су помогли у уређењу полица и лабораторијских сталака.",
    boja: "#8B3F9C",
  },
  {
    naziv: "Школска башта",
    opis: "Ученици и наставници заједнички су засадили цвијеће и зачинско биље у школском дворишту, стварајући лијепу башту.",
    boja: "#2BB8BC",
  },
  {
    naziv: "Сала за приредбе",
    opis: "Позорница је обновљена, постављене су нове завјесе и звучна опрема, тако да наше приредбе изгледају још боље.",
    boja: "#E5217E",
  },
];

export default function UredjenjePolje() {
  return (
    <ArticleLayout accent={ACCENT}>
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-[#7A8499] mb-8" style={{ fontFamily: "var(--font-manrope)" }}>
        <Link href="/aktivnosti" className="hover:text-[#2BB8BC] transition-colors">
          Активности
        </Link>
        <span>/</span>
        <span className="text-[#1A2851] font-bold">Уређење школе</span>
      </nav>

      <SectionHeader
        title="Уређење школског простора"
        subtitle="Заједно правимо лијепше мјесто за учење"
        accent={ACCENT}
        section="3.3"
      />

      {/* Hero */}
      <div className="mt-6 mb-10 rounded-2xl overflow-hidden shadow-md" style={{ aspectRatio: "16/7" }}>
        <img
          src="/assets/uredjenje-parka.jpg"
          alt="Уређење школског простора"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose-magazine space-y-6">
        <p>
          Вјерујемо да љепше окружење ствара бољу атмосферу за учење и
          рад. Зато су наставници и ученици ове школске године посебну
          пажњу посветили уређењу и оплемењивању школских простора.
        </p>
        <p>
          Кроз бројне пројекте уређења, школа је добила нов изглед — свјетлији,
          шаренији и инспиративнији. Ученици су са поносом прихватили улогу
          домаћина, а свако кратко одмориште у ходнику сада нуди нешто лијепо
          за погледати или прочитати.
        </p>
      </div>

      {/* Projects */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projekti.map((p) => (
          <div
            key={p.naziv}
            className="rounded-xl p-5 border border-black/5 flex flex-col gap-2"
            style={{ backgroundColor: "#F0FAFA" }}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: p.boja }}
              />
              <h3
                className="font-extrabold text-[#1A2851]"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {p.naziv}
              </h3>
            </div>
            <p
              className="text-sm text-[#3D4B73] leading-relaxed"
              style={{ fontFamily: "var(--font-lora, Georgia, serif)" }}
            >
              {p.opis}
            </p>
          </div>
        ))}
      </div>

      {/* Quote */}
      <blockquote
        className="pull-quote my-10 text-[#2BB8BC]"
        style={{ fontFamily: "var(--font-lora, Georgia, serif)" }}
      >
        „Школа је наш дом — и свако од нас је одговоран за то да тај дом
        буде лијеп."
      </blockquote>

      {/* Back link */}
      <div className="mt-8">
        <Link
          href="/aktivnosti"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#2BB8BC] hover:underline"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          ← Назад на Активности
        </Link>
      </div>
    </ArticleLayout>
  );
}
