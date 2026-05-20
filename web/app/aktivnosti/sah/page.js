import SectionHeader from "@/components/SectionHeader";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";

export const metadata = {
  title: "Шах у нашој школи · Школски глас Број 18",
  description:
    "Школска шах-секција, турнири и резултати наших младих шахиста у школској години 2025/26.",
};

const ACCENT = "#8B3F9C";

const sahisti = [
  { ime: "Немања Ковачевић", razred: "7. razred", rezultat: "1. мјесто на школском турниру" },
  { ime: "Јана Топић", razred: "6. razred", rezultat: "2. мјесто на школском турниру" },
  { ime: "Марко Јовановић", razred: "8. razred", rezultat: "3. мјесто на школском турниру" },
  { ime: "Ива Николић", razred: "5. razred", rezultat: "Учешће на општини" },
  { ime: "Петар Крстић", razred: "9. razred", rezultat: "Учешће на општини" },
];

export default function SahPage() {
  return (
    <ArticleLayout accent={ACCENT}>
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-[#7A8499] mb-8" style={{ fontFamily: "var(--font-manrope)" }}>
        <Link href="/aktivnosti" className="hover:text-[#8B3F9C] transition-colors">
          Активности
        </Link>
        <span>/</span>
        <span className="text-[#1A2851] font-bold">Шах</span>
      </nav>

      <SectionHeader
        title="Шах у нашој школи"
        subtitle="Стрпљење, стратегија, успјех"
        accent={ACCENT}
        section="3.5"
      />

      {/* Chess image */}
      <div className="mt-6 mb-10 rounded-2xl overflow-hidden shadow-md" style={{ aspectRatio: "16/7" }}>
        <img
          src="/assets/sah.png"
          alt="Шах у нашој школи"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose-magazine space-y-6">
        <p>
          Шах секција наше школе окупља ученике свих узраста који дијеле
          страст према овој игри умова. Под вођством наставника и уз подршку
          школе, секција је ове године бројила рекордан број чланова.
        </p>
        <p>
          Шах развија логичко и стратешко размишљање, стрпљење, концентрацију
          и способност предвиђања посљедица. Управо те вјештине наши ученици
          преносе и на наставу и на свакодневни живот.
        </p>
        <p>
          Школски шах-турнир одржан у марту 2026. окупио је велики број
          такмичара. Атмосфера је била одлична — напета, а опет пријатељска.
          Сваки меч доносио је нова изненађења и доказао да имамо истинске
          таленте.
        </p>
        <p>
          Поред школских активности, неколико наших шахиста учествовало је на
          општинском турниру у Козарској Дубици, гдје су показали завидан ниво
          игре и стекли нова искуства.
        </p>
      </div>

      {/* Chess pieces decorative */}
      <div
        className="my-10 p-6 rounded-2xl border border-black/5 flex items-center justify-center gap-6 text-5xl"
        style={{ backgroundColor: "#F8F0FB" }}
      >
        {["♔", "♕", "♖", "♗", "♘", "♙"].map((p, i) => (
          <span key={i} style={{ color: i % 2 === 0 ? "#8B3F9C" : "#3D4B73" }}>
            {p}
          </span>
        ))}
      </div>

      {/* Players list */}
      <div className="mt-6">
        <h2
          className="text-lg font-extrabold text-[#1A2851] mb-5"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          Истакнути шахисти
        </h2>
        <div className="space-y-3">
          {sahisti.map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-xl p-4 border border-black/5"
              style={{ backgroundColor: "#F8F0FB" }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white font-extrabold text-sm shrink-0"
                style={{ backgroundColor: ACCENT, fontFamily: "var(--font-manrope)" }}
              >
                {i + 1}
              </div>
              <div className="flex-1">
                <p
                  className="font-extrabold text-[#1A2851]"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {s.ime}
                </p>
                <p
                  className="text-xs text-[#7A8499]"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {s.razred}
                </p>
              </div>
              <span
                className="text-xs font-bold px-3 py-1 rounded-full text-white"
                style={{ backgroundColor: ACCENT, fontFamily: "var(--font-manrope)" }}
              >
                {s.rezultat}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Quote */}
      <blockquote
        className="pull-quote my-10 text-[#8B3F9C]"
        style={{ fontFamily: "var(--font-lora, Georgia, serif)" }}
      >
        „Шах је игра у којој мозак мора да ради брже него руке."
      </blockquote>

      {/* Back link */}
      <div className="mt-8">
        <Link
          href="/aktivnosti"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#8B3F9C] hover:underline"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          ← Назад на Активности
        </Link>
      </div>
    </ArticleLayout>
  );
}
