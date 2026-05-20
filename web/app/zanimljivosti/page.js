import SectionHeader from "@/components/SectionHeader";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Занимљивости · Школски глас Број 18",
  description:
    "Весела страница са вицевима и занимљивим чињеницама — Школски глас Број 18.",
};

const ACCENT = "#D4611A";

const vicevi = [
  {
    pitanje: "Зашто је математичар тако добар у вожњи?",
    odgovor: "Јер зна све скраћенице!",
  },
  {
    pitanje: 'Учитељ пита Мару: „Mара, шта је пола од осам?“ Мара одговара:',
    odgovor: '„Зависи да ли пишете хоризонтално или вертикално — 0 или 3!“',
  },
  {
    pitanje: "Зашто птице лете на југ зими?",
    odgovor: "Јер је предалеко да иду пјешке!",
  },
  {
    pitanje: "Шта рекла нула јединици?",
    odgovor: '„Ти си тако безначајан без мене!"',
  },
  {
    pitanje: 'Учитељ пита: „Ко може да ми каже гдје живи Колумбо?" Петар диже руку:',
    odgovor: '„У детективским серијама, господине учитељу!"',
  },
  {
    pitanje: "Зашто је скелет увијек сам?",
    odgovor: "Јер нема кога да привуче — нема тијела!",
  },
];

const cinjenice = [
  "Мед не квари се — у египатским пирамидама пронађен је мед стар 3.000 година, и био је јестив!",
  "Октопуси имају три срца и плаву крв.",
  "Просјечан човјек проведе шест мјесеци свог живота чекајући на семафорима.",
  "Лабуди имају парове за цијели живот — ако им партнер умре, неки лабуди умру од туге.",
  "Ајкула је стара врста — ајкуле постоје 450 милиона година, а дино само 230 милиона.",
  "Банане су технички бобице, а јагоде нису!",
  "Никола Тесла могао је да мисли са толико прецизности да је могао да прочита 100 страна у потпуном мраку.",
  "Дактилус (пецање прстом) је у неким земљама забрањено — риба осјети бол слично као и ми.",
  "Новорођена беба препознаје мирис своје мајке само неколико сати након рођења.",
  "Плаво подручје неба изнад тебе је удаљено мање него најближи град од тебе — атмосфера је тенка!",
  "Мачке не могу осјетити слатко — немају рецепторе за слатки укус.",
  "На свијету постоји преко 1.000 врста слијепих мишева — то је четвртина свих врста сисара!",
  "Земља се завртава за 1 степен за свака 4 минута.",
  "Главна тема Баховог Концерта у ди молу честа је у модерним рекламама — не знамо зашто.",
];

export default function ZanimljivostiPage() {
  return (
    <ArticleLayout accent={ACCENT}>
      <SectionHeader
        title="Занимљивости"
        subtitle="Весела страница и чињенице које изненађују"
        accent={ACCENT}
        section="04"
      />

      {/* ── VESELA STRANICA ─────────────────────────────────── */}
      <section className="mt-10">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-3xl">😄</span>
          <h2
            className="text-2xl font-extrabold text-[#1A2851]"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            ВЕСЕЛА СТРАНИЦА
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {vicevi.map((vic, i) => (
            <div
              key={i}
              className="rounded-2xl p-5 border border-black/5 flex flex-col gap-3"
              style={{ backgroundColor: "#FFF3E8" }}
            >
              <p
                className="text-sm text-[#3D4B73] italic leading-relaxed"
                style={{ fontFamily: "var(--font-lora, Georgia, serif)" }}
              >
                {vic.pitanje}
              </p>
              <div
                className="h-px w-full opacity-30"
                style={{ backgroundColor: ACCENT }}
              />
              <p
                className="text-sm font-bold text-[#D4611A]"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {vic.odgovor}
              </p>
              <span
                className="self-end text-2xl"
                role="img"
                aria-label="смије се"
              >
                😄
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div
        className="my-14 h-1 w-full rounded-full opacity-20"
        style={{
          background: `linear-gradient(90deg, ${ACCENT}, transparent)`,
        }}
      />

      {/* ── DA LI STE ZNALI ──────────────────────────────────── */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <span className="text-3xl">🔬</span>
          <h2
            className="text-2xl font-extrabold text-[#1A2851]"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            ДА ЛИ СТЕ ЗНАЛИ?
          </h2>
        </div>

        <div className="space-y-3">
          {cinjenice.map((c, i) => (
            <div
              key={i}
              className="flex gap-4 rounded-xl p-4 border border-black/5"
              style={{ backgroundColor: i % 2 === 0 ? "#FFF3E8" : "#FAF6EF" }}
            >
              <span
                className="text-sm font-extrabold shrink-0 w-6 text-right"
                style={{ color: ACCENT, fontFamily: "var(--font-manrope)" }}
              >
                {i + 1}.
              </span>
              <p
                className="text-sm text-[#3D4B73] leading-relaxed"
                style={{ fontFamily: "var(--font-lora, Georgia, serif)" }}
              >
                {c}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer note */}
      <div
        className="mt-12 p-5 rounded-2xl text-center"
        style={{ backgroundColor: "#FFF3E8" }}
      >
        <p
          className="text-xl"
          style={{
            fontFamily: "var(--font-caveat)",
            color: ACCENT,
          }}
        >
          Знање је моћ — а кад је весело, моћ је двострука!
        </p>
      </div>
    </ArticleLayout>
  );
}
