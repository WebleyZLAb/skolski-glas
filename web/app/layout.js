import { Manrope, Lora, Caveat } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

export const metadata = {
  title: "Школски глас - Број 18",
  description:
    "Школски часопис ЈУ ОШ Мајка Кнежопољка, Кнежица, школска година 2025/26, број 18, мај 2026.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="sr"
      className={`${manrope.variable} ${lora.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF6EF]">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="bg-[#1A2851] text-white py-10 px-6 mt-16">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="text-center md:text-left">
              <p className="font-bold text-base tracking-wide">
                ЈУ ОШ „МАЈКА КНЕЖОПОЉКА"
              </p>
              <p className="text-white/60 mt-1">Кнежица · Козарска Дубица</p>
            </div>
            <div className="text-center">
              <p
                className="script text-2xl text-[#FFC93C]"
                style={{ fontFamily: "var(--font-caveat)" }}
              >
                Школски глас
              </p>
              <p className="text-white/50 text-xs mt-1">
                Број 18 · Мај 2026. · Школска година 2025/26.
              </p>
            </div>
            <div className="text-center md:text-right text-white/50">
              <p>Редакција часописа</p>
              <p className="mt-1">Никица Вујиновић · Јелена Дрљић</p>
              <p>Божана Вукић · Младен Топић</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
