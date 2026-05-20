import SectionHeader from "@/components/SectionHeader";
import ArticleLayout from "@/components/ArticleLayout";
import Link from "next/link";

export const metadata = {
  title: "Закључак - Школски глас Број 18",
  description:
    "Закључне ријечи и импресум школског часописа Школски глас, број 18, 2025/26.",
};

const ACCENT = "#1A2851";

const redakcija = [
  { ime: "Никица Вујиновић", uloga: "Главни уредник · Наставник музичке културе" },
  { ime: "Јелена Дрљић", uloga: "Уредница · Наставница српског језика" },
  { ime: "Божана Вукић", uloga: "Уредница · Наставница ликовне умјетности" },
  { ime: "Младен Топић", uloga: "Уредник · Наставник историје" },
];

export default function ZakljucakPage() {
  return (
    <ArticleLayout accent={ACCENT}>
      <SectionHeader
        title="Закључак"
        subtitle="Ријечи на крају — и почетак новог"
        accent={ACCENT}
        section="05"
      />

      {/* Closing image */}
      <div className="mt-6 mb-10 rounded-2xl overflow-hidden shadow-md" style={{ aspectRatio: "16/7" }}>
        <img
          src="/assets/skola.jpg"
          alt="Школски глас — закључак"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose-magazine space-y-6">
        <p>
          Дошли смо до краја осамнаестог броја нашег часописа, и срца су нам
          пуна захвалности. Оваj часопис је настао из жеље да забиљежимо све
          оно лијепо, вриједно и незаборавно чиме је обиловала наша школска
          година 2025/26.
        </p>

        <p>
          Свако поглавље ових страница говори о људима — о ученицима чији
          очи светлуцају када упознају нову идеју, о наставницима чија
          страст за знањем никад не јењава, о родитељима чија подршка
          омогућава да сви ти тренуци уопште постоје.
        </p>

        <p>
          Школа је много више од зграде и учионица. Школа је мјесто гдје
          се деца буде. Гдје се уче не само граматика и математика, него и
          пријатељство, одговорност, саосјећање и вјера у себе.
        </p>

        <p>
          Захваљујемо свим ученицима, наставницима и родитељима који су
          допринијели стварању овог броја — свакоме ко је дао идеју, написао
          текст, нацртао слику или просто охрабрио другог да учини то исто.
        </p>

        <p>
          Посебну захвалност упућујемо директорки Бојани Крњајић на
          свесрдној подршци раду редакције и свим активностима које су
          красиле ову школску годину.
        </p>
      </div>

      {/* Decorative closing */}
      <div
        className="my-12 p-8 rounded-2xl text-center"
        style={{ backgroundColor: "#EDF0F7" }}
      >
        <p
          className="text-4xl sm:text-5xl"
          style={{
            fontFamily: "var(--font-caveat)",
            color: "#1A2851",
          }}
        >
          до сусрета у 19. броју!
        </p>
        <p
          className="text-sm text-[#7A8499] mt-4 italic"
          style={{ fontFamily: "var(--font-lora, Georgia, serif)" }}
        >
          Редакција „Школског гласа" · Мај 2026.
        </p>
      </div>

      {/* Impresum */}
      <div className="mt-12 border-t border-[#1A2851]/10 pt-10">
        <h2
          className="text-lg font-extrabold tracking-widest uppercase text-[#7A8499] mb-8"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          Импресум
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Publisher info */}
          <div className="rounded-xl p-5 border border-black/5" style={{ backgroundColor: "#EDF0F7" }}>
            <p
              className="text-xs font-bold tracking-widest uppercase text-[#7A8499] mb-3"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Издавач
            </p>
            <p
              className="font-extrabold text-[#1A2851]"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              ЈУ ОШ „МАЈКА КНЕЖОПОЉКА"
            </p>
            <p className="text-sm text-[#3D4B73] mt-1" style={{ fontFamily: "var(--font-lora, Georgia, serif)" }}>
              Кнежица, Козарска Дубица
            </p>
            <div className="mt-4">
              <p
                className="text-xs font-bold tracking-widest uppercase text-[#7A8499] mb-1"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Директор
              </p>
              <p
                className="font-bold text-[#1A2851]"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Бојана Крњајић
              </p>
            </div>
          </div>

          {/* Issue info */}
          <div className="rounded-xl p-5 border border-black/5" style={{ backgroundColor: "#EDF0F7" }}>
            <p
              className="text-xs font-bold tracking-widest uppercase text-[#7A8499] mb-3"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              О часопису
            </p>
            <div className="space-y-2">
              {[
                ["Часопис", "Школски глас"],
                ["Број", "18"],
                ["Мјесец", "Мај 2026."],
                ["Школска година", "2025/26."],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4">
                  <span
                    className="text-sm text-[#7A8499]"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {k}:
                  </span>
                  <span
                    className="text-sm font-bold text-[#1A2851]"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Editorial team */}
        <div className="mt-6">
          <p
            className="text-xs font-bold tracking-widest uppercase text-[#7A8499] mb-4"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Редакција
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {redakcija.map((r) => (
              <div
                key={r.ime}
                className="flex items-center gap-3 rounded-xl px-4 py-3 border border-black/5"
                style={{ backgroundColor: "#EDF0F7" }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white font-extrabold text-sm shrink-0"
                  style={{ backgroundColor: "#1A2851", fontFamily: "var(--font-manrope)" }}
                >
                  {r.ime.charAt(0)}
                </div>
                <div>
                  <p
                    className="font-extrabold text-[#1A2851] text-sm leading-none"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {r.ime}
                  </p>
                  <p
                    className="text-xs text-[#7A8499] mt-1"
                    style={{ fontFamily: "var(--font-lora, Georgia, serif)" }}
                  >
                    {r.uloga}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Back to home */}
      <div className="mt-12 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white transition-opacity hover:opacity-80"
          style={{
            backgroundColor: "#1A2851",
            fontFamily: "var(--font-manrope)",
          }}
        >
          ← Насловна страна
        </Link>
      </div>
    </ArticleLayout>
  );
}
