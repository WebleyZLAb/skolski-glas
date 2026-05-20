import SectionHeader from "@/components/SectionHeader";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";

export const metadata = {
  title: "Сарадња са локалном заједницом - Школски глас Број 18",
  description:
    "Преглед сарадње ЈУ ОШ Мајка Кнежопољка са локалном заједницом, општином, библиотеком и другим партнерима.",
};

const ACCENT = "#F47C2C";

const partners = [
  { name: "Општина Козарска Дубица", icon: "🏛️", desc: "Подршка и плакета за рад школе" },
  { name: "Народна библиотека", icon: "📚", desc: "Заједничке читалачке активности" },
  { name: "МУП — Полицијска станица", icon: "🚔", desc: "Едукација о безбједности у саобраћају" },
  { name: "Уроша Петровић", icon: "🎭", desc: "Сарадња на умјетничким пројектима" },
  { name: "Мјесна заједница Кнежица", icon: "🏘️", desc: "Уређење јавног простора и дружења" },
  { name: "Локалне спортске клубови", icon: "⚽", desc: "Заједничке спортске активности" },
];

export default function SaradnjaPage() {
  return (
    <ArticleLayout accent={ACCENT}>
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-[#7A8499] mb-8" style={{ fontFamily: "var(--font-manrope)" }}>
        <Link href="/aktivnosti" className="hover:text-[#F47C2C] transition-colors">
          Активности
        </Link>
        <span>/</span>
        <span className="text-[#1A2851] font-bold">Сарадња</span>
      </nav>

      <SectionHeader
        title="Сарадња са локалном заједницом"
        subtitle="Партнерства која обогаћују школски живот"
        accent={ACCENT}
        section="3.1"
      />

      <div className="prose-magazine mt-8 space-y-6">
        <p>
          Наша школа с поносом може рећи да је у протеклој школској години
          изградила бројна и вриједна партнерства са локалном заједницом.
          Сарадња са различитим институцијама и појединцима омогућила је
          нашим ученицима да своје учење прошире изван учионичних зидова и
          да постану активни дио заједнице у којој живе.
        </p>

        <p>
          Општина Козарска Дубица препознала је рад наше школе и додијелила
          нам плакету за допринос васпитно-образовном животу општине. Ово
          признање огроман је подстицај за цијелу школску породицу — ученике,
          наставнике, стручне сараднике и родитеље.
        </p>

        <p>
          Народна библиотека у Козарској Дубици постала је вриједан партнер у
          реализацији читалачких програма. Ученици су редовно посјећивали
          библиотеку, учествовали у читалачким клубовима и упознали вриједне
          фондове нашег локалног читалишта.
        </p>

        <p>
          Полицијска станица у Козарској Дубици организовала је едукативне
          посјете нашим ученицима, прије свега посвећене безбједности у
          саобраћају и превенцији насиља. Ови садржаји нашли су одличан
          одзив међу децом свих узраста.
        </p>

        <p>
          Сарадња са умјетником Урошем Петровићем обогатила је наш рад на
          пројекту „Тесла" и другим умјетничким иницијативама. Ученици су
          имали прилику да раде са правим умјетником и да сазнају о
          умјетничком изразу из прве руке.
        </p>

        <p>
          Свим нашим партнерима упућујемо искрену захвалност на подршци,
          разумијевању и жељи да заједно са нама градимо бољу будућност за
          нашу дјецу.
        </p>
      </div>

      {/* Partners grid */}
      <div className="mt-12">
        <h2
          className="text-lg font-extrabold text-[#1A2851] mb-6"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          Наши партнери
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {partners.map((p) => (
            <div
              key={p.name}
              className="rounded-xl p-4 flex items-start gap-4 border border-black/5"
              style={{ backgroundColor: "#FFF5EE" }}
            >
              <span className="text-2xl shrink-0 mt-0.5">{p.icon}</span>
              <div>
                <p
                  className="font-extrabold text-[#1A2851] text-sm"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {p.name}
                </p>
                <p
                  className="text-xs text-[#7A8499] mt-0.5"
                  style={{ fontFamily: "var(--font-lora, Georgia, serif)" }}
                >
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back link */}
      <div className="mt-12">
        <Link
          href="/aktivnosti"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#F47C2C] hover:underline"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          ← Назад на Активности
        </Link>
      </div>
    </ArticleLayout>
  );
}
