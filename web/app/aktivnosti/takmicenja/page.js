import SectionHeader from "@/components/SectionHeader";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";

export const metadata = {
  title: "Такмичења и награде - Школски глас Број 18",
  description:
    "Успјеси ученика ЈУ ОШ Мајка Кнежопољка на такмичењима у школској години 2025/26.",
};

const ACCENT = "#FFC93C";

const rezultati = [
  {
    predmet: "Математика",
    nivo: "Општинско",
    ime: "Марина Кнежевић",
    razred: "7. разред",
    nagrada: "1. мјесто",
    boja: "#FFC93C",
  },
  {
    predmet: "Српски језик",
    nivo: "Општинско",
    ime: "Немања Ђурић",
    razred: "8. разред",
    nagrada: "2. мјесто",
    boja: "#E5217E",
  },
  {
    predmet: "Биологија",
    nivo: "Регионално",
    ime: "Тара Вукић",
    razred: "9. разред",
    nagrada: "3. мјесто",
    boja: "#2BB8BC",
  },
  {
    predmet: "Историја",
    nivo: "Општинско",
    ime: "Стефан Миловић",
    razred: "8. разред",
    nagrada: "1. мјесто",
    boja: "#F47C2C",
  },
  {
    predmet: "Физика",
    nivo: "Општинско",
    ime: "Ана Остојић",
    razred: "9. разред",
    nagrada: "2. мјесто",
    boja: "#2563EB",
  },
  {
    predmet: "Енглески језик",
    nivo: "Ентитетско",
    ime: "Јелена Трифуновић",
    razred: "9. разред",
    nagrada: "Учешће у финалу",
    boja: "#8B3F9C",
  },
  {
    predmet: "Ликовна умјетност",
    nivo: "Регионално",
    ime: "Ива Станковић",
    razred: "6. разред",
    nagrada: "1. мјесто",
    boja: "#FFC93C",
  },
  {
    predmet: "Рецитаторска смотра",
    nivo: "Општинско",
    ime: "Лука Петровић",
    razred: "5. разред",
    nagrada: "Специјална похвала",
    boja: "#E5217E",
  },
];

export default function TakmicanjaPage() {
  return (
    <ArticleLayout accent={ACCENT}>
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-[#7A8499] mb-8" style={{ fontFamily: "var(--font-manrope)" }}>
        <Link href="/aktivnosti" className="hover:text-[#FFC93C] transition-colors">
          Активности
        </Link>
        <span>/</span>
        <span className="text-[#1A2851] font-bold">Такмичења</span>
      </nav>

      <SectionHeader
        title="Такмичења и награде"
        subtitle="Понос наше школе"
        accent={ACCENT}
        section="3.4"
      />

      {/* Hero */}
      <div className="mt-6 mb-10 rounded-2xl overflow-hidden shadow-md" style={{ aspectRatio: "16/7" }}>
        <img
          src="/assets/plaketa.jpg"
          alt="Такмичења и награде"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose-magazine space-y-6">
        <p>
          Школска година 2025/26. донијела је бројне успјехе нашим ученицима
          на такмичењима различитих нивоа. Од општинских до ентитетских,
          наши млади таленти показали су знање, вјештину и пожртвовање.
        </p>
        <p>
          Сваком учеснику, без обзира на освојено мјесто, упућујемо похвалу
          — јер сама чињеница да су се усудили да изађу и покажу своје знање
          пред другима представља подвиг.
        </p>
      </div>

      {/* Stats */}
      <div className="mt-10 grid grid-cols-3 gap-4">
        {[
          { broj: "8", label: "такмичења" },
          { broj: "3", label: "прва мјеста" },
          { broj: "12+", label: "ученика" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl p-4 text-center border border-black/5"
            style={{ backgroundColor: "#FFFBEE" }}
          >
            <p
              className="text-4xl font-extrabold text-[#1A2851]"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              {stat.broj}
            </p>
            <p
              className="text-xs text-[#7A8499] mt-1 font-bold uppercase tracking-wide"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Results table */}
      <div className="mt-10 overflow-x-auto rounded-xl border border-black/5 shadow-sm">
        <table className="w-full min-w-[500px]">
          <thead>
            <tr style={{ backgroundColor: "#FFC93C" }}>
              {["Предмет", "Ниво", "Ученик", "Разред", "Награда"].map((h) => (
                <th
                  key={h}
                  className="px-4 py-3 text-left text-xs font-extrabold uppercase tracking-wide text-white"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rezultati.map((r, i) => (
              <tr
                key={i}
                className="border-t border-black/5"
                style={{ backgroundColor: i % 2 === 0 ? "#FFFBEE" : "#FAF6EF" }}
              >
                <td className="px-4 py-3 font-bold text-sm text-[#1A2851]" style={{ fontFamily: "var(--font-manrope)" }}>
                  {r.predmet}
                </td>
                <td className="px-4 py-3 text-xs text-[#7A8499]" style={{ fontFamily: "var(--font-manrope)" }}>
                  {r.nivo}
                </td>
                <td className="px-4 py-3 text-sm text-[#3D4B73]" style={{ fontFamily: "var(--font-lora, Georgia, serif)" }}>
                  {r.ime}
                </td>
                <td className="px-4 py-3 text-xs text-[#7A8499]" style={{ fontFamily: "var(--font-manrope)" }}>
                  {r.razred}
                </td>
                <td className="px-4 py-3">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{
                      backgroundColor: r.boja,
                      fontFamily: "var(--font-manrope)",
                    }}
                  >
                    {r.nagrada}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Back link */}
      <div className="mt-10">
        <Link
          href="/aktivnosti"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#FFC93C] hover:underline"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          ← Назад на Активности
        </Link>
      </div>
    </ArticleLayout>
  );
}
