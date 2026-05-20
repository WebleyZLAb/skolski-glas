import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    num: "01",
    href: "/uvodna-rijec",
    title: "Уводна ријеч",
    desc: "Поздравна ријеч редакције — дух наше школе у сваком реду.",
    accent: "#E5217E",
    bg: "#FFF0F6",
  },
  {
    num: "02",
    href: "/projekat-tesla",
    title: 'Пројекат „Тесла"',
    desc: "Живот и дјело великог научника кроз радионице, ликовне и музичке активности.",
    accent: "#2563EB",
    bg: "#EFF4FF",
  },
  {
    num: "03",
    href: "/aktivnosti",
    title: "Активности",
    desc: "Сарадња са заједницом, приредбе, уређење школе, такмичења и шах.",
    accent: "#F47C2C",
    bg: "#FFF5EE",
  },
  {
    num: "04",
    href: "/zanimljivosti",
    title: "Занимљивости",
    desc: "Весела страница и занимљиве чињенице које ће вас изненадити.",
    accent: "#D4611A",
    bg: "#FFF3E8",
  },
  {
    num: "05",
    href: "/zakljucak",
    title: "Закључак",
    desc: "Ријечи захвалности и импресум — до сусрета у 19. броју!",
    accent: "#1A2851",
    bg: "#EDF0F7",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[70vh] flex items-end overflow-hidden bg-black">
        <Image
          src="/assets/skola.jpg"
          alt="ЈУ ОШ Мајка Кнежопољка, Кнежица"
          fill
          className="object-cover opacity-85"
          priority
          sizes="100vw"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Hero content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 pb-14 sm:pb-20">
          {/* Issue badge */}
          <span
            className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest text-white mb-6 uppercase"
            style={{
              backgroundColor: "#2BB8BC",
              fontFamily: "var(--font-manrope)",
            }}
          >
            Мај 2026.
          </span>

          {/* Magazine title */}
          <h1
            className="text-5xl sm:text-7xl md:text-8xl font-extrabold text-white leading-none tracking-tight"
            style={{ fontFamily: "var(--font-manrope)", textShadow: "0 2px 16px rgba(0,0,0,0.5)" }}
          >
            ШКОЛСКИ
            <br />
            <span style={{ color: "#2BB8BC" }}>ГЛАС</span>
          </h1>

          {/* Issue line */}
          <p
            className="mt-4 text-xl sm:text-2xl font-bold text-white/70"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Број 18 · Мај 2026.
          </p>

          {/* School name */}
          <p
            className="mt-2 text-base sm:text-lg text-white/50 italic"
            style={{ fontFamily: "var(--font-lora, Georgia, serif)" }}
          >
            ЈУ ОШ „МАЈКА КНЕЖОПОЉКА", Кнежица
          </p>
        </div>
      </section>

      {/* ── Intro deck ───────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 py-14 text-center">
        <p
          className="text-xl sm:text-2xl text-[#3D4B73] leading-relaxed"
          style={{ fontFamily: "var(--font-lora, Georgia, serif)" }}
        >
          Добро дошли на дигиталне странице нашег школског часописа — мјеста
          гдје се сусрећу{" "}
          <em style={{ color: "#E5217E" }}>знање, креативност и успјеси</em>{" "}
          наших ученика и наставника.
        </p>
        <div
          className="mt-6 h-1 w-16 rounded-full mx-auto"
          style={{ backgroundColor: "#2BB8BC" }}
        />
      </section>

      {/* ── Sections grid ────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <h2
          className="text-sm font-bold tracking-[0.2em] text-[#7A8499] uppercase mb-8"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          Садржај броја
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="card-hover group relative rounded-2xl overflow-hidden border border-black/5 shadow-sm flex flex-col"
              style={{ backgroundColor: s.bg }}
            >
              {/* Top accent bar */}
              <div
                className="h-1.5 w-full"
                style={{ backgroundColor: s.accent }}
              />

              <div className="p-6 flex flex-col flex-1">
                {/* Number */}
                <span
                  className="text-5xl font-extrabold leading-none mb-3 block"
                  style={{
                    color: s.accent,
                    opacity: 0.15,
                    fontFamily: "var(--font-manrope)",
                  }}
                >
                  {s.num}
                </span>

                {/* Title */}
                <h3
                  className="text-xl font-extrabold text-[#1A2851] group-hover:opacity-80 transition-opacity leading-tight"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {s.title}
                </h3>

                {/* Desc */}
                <p
                  className="mt-3 text-sm text-[#3D4B73] leading-relaxed flex-1"
                  style={{ fontFamily: "var(--font-lora, Georgia, serif)" }}
                >
                  {s.desc}
                </p>

                {/* CTA */}
                <span
                  className="inline-flex items-center gap-1.5 mt-5 text-xs font-bold tracking-wide uppercase transition-all duration-200"
                  style={{
                    color: s.accent,
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

          {/* Decorative card */}
          <div
            className="rounded-2xl border border-black/5 p-6 flex flex-col justify-between"
            style={{ backgroundColor: "#FAF6EF" }}
          >
            <div>
              <p
                className="text-3xl"
                style={{
                  fontFamily: "var(--font-caveat)",
                  color: "#FFC93C",
                }}
              >
                Школска година
              </p>
              <p
                className="text-5xl font-extrabold text-[#1A2851] mt-2 leading-none"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                2025/26.
              </p>
            </div>
            <p
              className="text-sm text-[#7A8499] mt-6 italic"
              style={{ fontFamily: "var(--font-lora, Georgia, serif)" }}
            >
              ЈУ ОШ „Мајка Кнежопољка", Кнежица
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
