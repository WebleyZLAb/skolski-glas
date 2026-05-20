import SectionHeader from "@/components/SectionHeader";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: 'Пројекат „Тесла" · Школски глас Број 18',
  description:
    "Пројекат посвећен животу и дјелу Николе Тесле — радионице, ликовни и литерарни радови, музичке и сценске активности.",
};

const ACCENT = "#2563EB";

export default function ProjekatTesla() {
  return (
    <ArticleLayout accent={ACCENT}>
      <SectionHeader
        title='Пројекат „Тесла"'
        subtitle="Живот и дјело великог научника"
        accent={ACCENT}
        section="02"
      />

      {/* Tesla portrait placeholder */}
      <div className="mt-6 mb-10 rounded-2xl overflow-hidden shadow-md" style={{ aspectRatio: "16/7" }}>
        <img
          src="/assets/Tesla.JPG"
          alt="Пројекат Тесла — илустрација"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose-magazine space-y-6">
        <p>
          Пројекат „Тесла" био је једно од најљепших и најинспиративнијих
          искустава које смо реализовали у нашој школи током ове школске године.
          Кроз различите активности ученици су имали прилику да на занимљив и
          креативан начин упознају живот и дјело великог научника Николе Тесле,
          али и да покажу своја знања, таленте и машту.
        </p>

        <p>
          Посебно ми је драго што су ученици са великим ентузијазмом прихватили
          све задатке и активно учествовали у радионицама, изради паноа,
          презентација, ликовних и литерарних радова, као и у музичким и
          сценским активностима. Атмосфера током рада била је испуњена
          сарадњом, дружењем и жељом да свако да свој допринос пројекту.
        </p>

        <p>
          Кроз овај пројекат ученици нису само учили о науци и Теслиним
          открићима, већ су развијали тимски дух, комуникацију, креативност и
          самопоуздање. Управо то и јесте највећа вриједност оваквих активности
          — знање које остаје повезано са лијепим успоменама и заједничким
          радом.
        </p>

        <p>
          Поносан сам на све ученике који су учествовали у пројекту и вјерујем
          да смо заједно показали колико школа може бити мјесто стваралаштва,
          инспирације и лијепе енергије.
        </p>
      </div>

      {/* Pull quote */}
      <blockquote
        className="pull-quote my-12 text-[#2563EB]"
        style={{ fontFamily: "var(--font-lora, Georgia, serif)" }}
      >
        „Садашњост је њихова — будућност, за коју сам заиста радио, моја је."
        <footer className="mt-3 text-sm text-[#7A8499] not-italic font-bold" style={{ fontFamily: "var(--font-manrope)" }}>
          — Никола Тесла
        </footer>
      </blockquote>

      {/* Signature */}
      <div className="mt-10 pt-8 border-t border-[#2563EB]/20">
        <p
          className="text-2xl"
          style={{ fontFamily: "var(--font-caveat)", color: ACCENT }}
        >
          Никица Вујиновић
        </p>
        <p className="text-sm text-[#7A8499] mt-1 italic">
          Наставник музичке културе · ЈУ ОШ „Мајка Кнежопољка"
        </p>
      </div>

      {/* Activity grid */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-3">
        {[
          "Радионице",
          "Изложба паноа",
          "Презентације",
          "Ликовни радови",
          "Литерарни радови",
          "Музичке активности",
        ].map((act) => (
          <div
            key={act}
            className="rounded-xl px-4 py-3 text-sm font-bold text-[#2563EB] text-center"
            style={{
              backgroundColor: "#EFF4FF",
              fontFamily: "var(--font-manrope)",
            }}
          >
            {act}
          </div>
        ))}
      </div>
    </ArticleLayout>
  );
}
