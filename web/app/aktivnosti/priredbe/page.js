import SectionHeader from "@/components/SectionHeader";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";

export const metadata = {
  title: "Приредбе и манифестације · Школски глас Број 18",
  description:
    "Школске свечаности, јавни наступи и културни програми током школске године 2025/26.",
};

const ACCENT = "#E5217E";

const events = [
  {
    datum: "Септембар 2025.",
    naziv: "Свечани почетак школске године",
    opis: "Прва звона, добродошлица новим ђацима и свечани програм у школском дворишту.",
  },
  {
    datum: "Октобар 2025.",
    naziv: "Дан школе",
    opis: "Прослава рођендана наше школе са богатим програмом ученика свих разреда.",
  },
  {
    datum: "Новембар 2025.",
    naziv: "Дан просвјетних радника",
    opis: "Свечана академија у којој су ученици исказали захвалност наставницима.",
  },
  {
    datum: "Децембар 2025.",
    naziv: "Новогодишња приредба",
    opis: "Новогодишњи концерт, рецитали и поклони за најмлађе ученике.",
  },
  {
    datum: "Фебруар 2026.",
    naziv: 'Пројекат „Тесла" — завршна приредба',
    opis: "Свечана презентација радова у оквиру пројекта, наступи и изложба.",
  },
  {
    datum: "Март 2026.",
    naziv: "Дан жена — програм за мамице",
    opis: "Посебна приредба поводом 8. марта са рецитацијама и пјесмама за мајке.",
  },
  {
    datum: "Април 2026.",
    naziv: "Велика и Мала матура — опроштај",
    opis: "Свечани програм за ученике осмих и деветих разреда.",
  },
  {
    datum: "Мај 2026.",
    naziv: "Крај школске године",
    opis: "Завршна приредба и додјела похвала и признања за успјехе током године.",
  },
];

export default function PriredbePage() {
  return (
    <ArticleLayout accent={ACCENT}>
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-[#7A8499] mb-8" style={{ fontFamily: "var(--font-manrope)" }}>
        <Link href="/aktivnosti" className="hover:text-[#E5217E] transition-colors">
          Активности
        </Link>
        <span>/</span>
        <span className="text-[#1A2851] font-bold">Приредбе</span>
      </nav>

      <SectionHeader
        title="Приредбе и манифестације"
        subtitle="Школске свечаности током 2025/26."
        accent={ACCENT}
        section="3.2"
      />

      {/* Hero image */}
      <div className="mt-6 mb-10 rounded-2xl overflow-hidden shadow-md" style={{ aspectRatio: "16/7" }}>
        <img
          src="/assets/sveti-sava.jpg"
          alt="Приредбе и манифестације"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose-magazine space-y-6">
        <p>
          Школска година 2025/26. обиловала је разноврсним приредбама и
          манифестацијама које су окупљале ученике, наставнике и родитеље.
          Сваки значајан датум и прилика постали су повод за заједничко
          стварање и наступање.
        </p>
        <p>
          Млади талenti наше школе показали су се на сцени у пуном сјају —
          кроз рецитације, пјесме, плесне тачке и драмске наступе. Свака
          приредба носила је посебну атмосферу и непоновљиве тренутке које
          смо дијелили са родитељима и гостима.
        </p>
      </div>

      {/* Timeline */}
      <div className="mt-10 space-y-4">
        <h2
          className="text-lg font-extrabold text-[#1A2851] mb-6"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          Хронологија приредби
        </h2>
        {events.map((ev, i) => (
          <div key={i} className="flex gap-4">
            {/* Timeline dot */}
            <div className="flex flex-col items-center shrink-0">
              <div
                className="w-3 h-3 rounded-full mt-1.5 shrink-0"
                style={{ backgroundColor: ACCENT }}
              />
              {i < events.length - 1 && (
                <div className="w-px flex-1 mt-1" style={{ backgroundColor: "#E5217E", opacity: 0.2 }} />
              )}
            </div>
            {/* Content */}
            <div className="pb-6">
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: ACCENT, fontFamily: "var(--font-manrope)" }}
              >
                {ev.datum}
              </span>
              <h3
                className="font-extrabold text-[#1A2851] mt-1"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {ev.naziv}
              </h3>
              <p
                className="text-sm text-[#3D4B73] mt-1 leading-relaxed"
                style={{ fontFamily: "var(--font-lora, Georgia, serif)" }}
              >
                {ev.opis}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Back link */}
      <div className="mt-8">
        <Link
          href="/aktivnosti"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#E5217E] hover:underline"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          ← Назад на Активности
        </Link>
      </div>
    </ArticleLayout>
  );
}
