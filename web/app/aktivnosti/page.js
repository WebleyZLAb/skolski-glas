import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "Активности · Школски глас Број 18",
  description:
    "Преглед свих активности: сарадња са заједницом, приредбе, уређење школе, такмичења и шах.",
};

const ACCENT = "#F47C2C";

const subsections = [
  {
    href: "/aktivnosti/saradnja",
    title: "Сарадња са локалном заједницом",
    desc: "Партнерства са општини, библиотеком, полицијом и другим установама.",
    accent: "#F47C2C",
    bg: "#FFF5EE",
    num: "3.1",
  },
  {
    href: "/aktivnosti/priredbe",
    title: "Приредбе и манифестације",
    desc: "Школске свечаности, јавни наступи и културни програми током године.",
    accent: "#E5217E",
    bg: "#FFF0F6",
    num: "3.2",
  },
  {
    href: "/aktivnosti/uredjenje",
    title: "Уређење школског простора",
    desc: "Обнова учионица, украшавање ходника и заједничко уљепшавање школе.",
    accent: "#2BB8BC",
    bg: "#F0FAFA",
    num: "3.3",
  },
  {
    href: "/aktivnosti/takmicenja",
    title: "Такмичења и награде",
    desc: "Успјеси наших ученика на општинским, регионалним и државним такмичењима.",
    accent: "#FFC93C",
    bg: "#FFFBEE",
    num: "3.4",
  },
  {
    href: "/aktivnosti/sah",
    title: "Шах у нашој школи",
    desc: "Школска шах-секција, турнири и резултати наших младих шахиста.",
    accent: "#8B3F9C",
    bg: "#F8F0FB",
    num: "3.5",
  },
];

export default function AktivnostiPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <SectionHeader
        title="Активности"
        subtitle="Школски живот у пуном сјају"
        accent={ACCENT}
        section="03"
      />

      <p
        className="max-w-2xl text-lg text-[#3D4B73] leading-relaxed mb-12"
        style={{ fontFamily: "var(--font-lora, Georgia, serif)" }}
      >
        Током школске године 2025/26. наша школа је живјела пуним животом.
        Испод можете прочитати о свим активностима које су обиљежиле ову
        годину.
      </p>

      {/* Subsections grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {subsections.map((sub) => (
          <Link
            key={sub.href}
            href={sub.href}
            className="card-hover group rounded-2xl overflow-hidden border border-black/5 shadow-sm flex flex-col"
            style={{ backgroundColor: sub.bg }}
          >
            <div
              className="h-1.5 w-full"
              style={{ backgroundColor: sub.accent }}
            />
            <div className="p-6 flex flex-col flex-1">
              <span
                className="text-xs font-bold tracking-widest uppercase mb-3"
                style={{
                  color: sub.accent,
                  fontFamily: "var(--font-manrope)",
                }}
              >
                {sub.num}
              </span>
              <h2
                className="text-xl font-extrabold text-[#1A2851] leading-tight group-hover:opacity-75 transition-opacity"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {sub.title}
              </h2>
              <p
                className="mt-3 text-sm text-[#3D4B73] leading-relaxed flex-1"
                style={{ fontFamily: "var(--font-lora, Georgia, serif)" }}
              >
                {sub.desc}
              </p>
              <span
                className="inline-flex items-center gap-1.5 mt-5 text-xs font-bold tracking-wide uppercase"
                style={{
                  color: sub.accent,
                  fontFamily: "var(--font-manrope)",
                }}
              >
                Читај
                <svg
                  className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
