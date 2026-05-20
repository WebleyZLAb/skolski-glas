import SectionHeader from "@/components/SectionHeader";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Уводна ријеч · Школски глас Број 18",
  description: "Поздравна ријеч редакције школског часописа Школски глас, број 18.",
};

const ACCENT = "#E5217E";

export default function UvodnaRijec() {
  return (
    <ArticleLayout accent={ACCENT}>
      <SectionHeader
        title="Уводна ријеч"
        subtitle="Ријеч редакције"
        accent={ACCENT}
        section="01"
      />

      <div className="prose-magazine mt-8 space-y-6">
        <p>
          Добро дошли на странице нашег часописа „Школски глас" – мјеста гдје
          се сусрећу знање, креативност и успјеси наших ученика и наставника.
          Овај часопис представља огледало живота наше школе, свих активности
          које нас обогаћују, као и труда који улажемо у стицање нових знања и
          вјештина.
        </p>

        <p>
          Током протеклог периода, наша школа је била испуњена бројним
          догађајима: наставним и ваннаставним активностима, такмичењима,
          пројектима, радионицама и културним дешавањима. Сваки од тих тренутака
          носи посебну вриједност јер показује заједништво, упорност и жељу за
          напретком.
        </p>

        <p>
          Овдје нећете пронаћи само преглед активности, већ и странице у којима
          ученици изражавају своје мишљење, таленат и креативност, јер школа
          није само мјесто учења, већ и мјесто одрастања, стварања
          пријатељстава и успомена.
        </p>

        <p>
          Надамо се да ћете, читајући ове странице, осјетити дух наше школе и
          понос који сви заједно градимо.
        </p>
      </div>

      {/* Signature */}
      <div className="mt-12 pt-8 border-t border-[#E5217E]/20">
        <p
          className="text-2xl"
          style={{ fontFamily: "var(--font-caveat)", color: ACCENT }}
        >
          Редакција школског часописа
        </p>
        <p className="text-sm text-[#7A8499] mt-1 italic">
          ЈУ ОШ „Мајка Кнежопољка", Кнежица · Број 18 · 2025/26.
        </p>
      </div>

      {/* Decorative image placeholder */}
      <div
        className="mt-10 rounded-2xl overflow-hidden"
        style={{ aspectRatio: "16/7" }}
      >
        <img
          src="/assets/skola.jpg"
          alt="Школски глас — илустрација"
          className="w-full h-full object-cover"
        />
      </div>
    </ArticleLayout>
  );
}
