// PAGES — Пјесме (Николина Тубин, Александра Ритан, Александар Балабан)

// Poem block — vertical layout
function PoemCard({ title, author, grade, accent = 'var(--pink-hot)', text, small = false }) {
  return (
    <div style={{
      padding: '20px 22px',
      background: 'var(--paper)',
      border: '1px solid var(--line)',
      borderTop: `3px solid ${accent}`,
      borderRadius: '0 0 3px 3px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div className="poem-author" style={{ color: accent }}>
        {author} · {grade}
      </div>
      <div className="poem-title" style={{ marginTop: 8, fontSize: small ? 18 : 22 }}>
        „{title}”
      </div>
      <div className="poem" style={{ fontSize: small ? 12.5 : 13.5, lineHeight: 1.7 }}>
        {text}
      </div>
    </div>
  );
}

// 20 — НЕБО + ИЗМЕЂУ НЕБА И СЕЋАЊА
function PagePoemsNikolina1() {
  const nebo = `Гледајући небо схватила сам једно,
А то је, зашто нам је оно толико вредно.
На небу свако од нас има неког кога воли,
Неког због кога се кроз живот бори.

На небу се налазе сви наши снови,
И жеље да нам живот буде бољи.
Ка небу се Богу молимо,
Да нам сачува све које волимо.

Док у небо гледамо,
Схватићемо шта требамо.
Небо ће нам дати смиреност и спокој,
А чуваће нам све који су отишли у покој.`;

  const izmedju = `Године пролазе, празнина остаје,
А бол увек иста је.
Понекад сањам лето и мирис цвећа,
Сањам цркву и хиљаду запаљених свећа.

За све оне који су отишли прерано,
Ја сањам оно давно сањано.
Сваке недеље им палим свећу,
За њихов спокој у пољскоме цвећу.

И сваког Божијега дана,
Они су ту са нама.
Зато им у цркви палим свећу,
И молим се Богу за њихову небеску срећу.`;

  return (
    <PageShell accent="var(--pink-hot)" section="ПЈЕСМЕ · НИКОЛИНА ТУБИН" page="20" side="left">
      <div style={{ padding: '90px 50px 60px' }}>
        <SectionMarker>Литерарни радови</SectionMarker>
        <div className="headline" style={{ marginTop: 14, fontSize: 50, lineHeight: 0.95 }}>
          Стихови<br/>
          <em style={{ fontFamily: 'var(--script)', fontSize: 70, fontWeight: 700,
            color: 'var(--pink-hot)' }}>Николине Тубин</em>
        </div>
        <div className="deck" style={{ marginTop: 12 }}>
          Четири пјесме — гласови једне ученице девети разред.
        </div>

        <div style={{ marginTop: 30, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18,
          height: 700 }}>
          <PoemCard
            title="Небо"
            author="Николина Тубин"
            grade="9. разред"
            accent="var(--pink-hot)"
            text={nebo}
          />
          <PoemCard
            title="Између неба и сећања"
            author="Николина Тубин"
            grade="9. разред"
            accent="var(--purple)"
            text={izmedju}
          />
        </div>
      </div>
    </PageShell>
  );
}

// 21 — СВЕ ЈЕ ОВО ПРЕМАЛО ЗА КРАЈ + ВИШЕ МИ НИЈЕ ЖАО
function PagePoemsNikolina2() {
  const premalo = `Ноћас ти поново песму пишем,
Јер без тебе не могу да дишем.
У очима немаш више онај исти сјај,
Све је ово премало за крај!

Теби живот још се радује,
Док са мном ратује.
Све ближи ми је рај,
Све је ово премало за крај!

Да могу бар избрисати све што је било,
И да могу заборавити све што се крило.
Срце би ми тада добило нови сјај,
Све је ово премало за крај!

Знај да не би ноћас душа ова,
Понављала имена твога слова.
Да ти ниси био тај,
Све је ово премало за крај!`;

  const nijezao = `Можда нам се очи поново споје,
Можда се и сретнемо некад нас двоје.
Али знај једино моје,
Да ћу заувек волети само очи твоје.

Можда некад поново и заволи срце моје,
Можда се и мени наклоне дугине боје.
На свету за мене био си све,
Све до тренутка када си ми срушио сне.

Шта према теби осећам сигурна нисам више,
Али знам почињем да те волим све тише.

У мојим очима си пао,
Сад ми те више није жао!`;

  return (
    <PageShell accent="var(--pink-hot)" section="ПЈЕСМЕ · НИКОЛИНА ТУБИН" page="21" side="right">
      <div style={{ padding: '90px 50px 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18,
          height: 880 }}>
          <PoemCard
            title="Све је ово премало за крај"
            author="Николина Тубин"
            grade="9. разред"
            accent="var(--orange)"
            text={premalo}
            small
          />
          <PoemCard
            title="Више ми није жао"
            author="Николина Тубин"
            grade="9. разред"
            accent="var(--blue)"
            text={nijezao}
            small
          />
        </div>
      </div>
    </PageShell>
  );
}

// 22 — ОЧИ × 2 (Aleksandra Ritan + Aleksandar Balaban)
function PagePoemsOci() {
  const ociA = `У бескрају љубави и чежње,
Једне очи зелене, њежне.
Заљубљено гледају те,
Као да вребају те.

Злаћане ко мед,
А опет ледене ко лед.
Сјајне, а зелене,
Бајне, а скривене.

У њима се огледаш,
У њима сањаш,
У њима се замишљаш,
Па се опет премишљаш.

Никад не заборави очи,
Јер због њих срце хоће да искочи.
Оне се никад заборавити неће,
Очи зелене пуне среће.`;

  const ociB = `Твоје очи су као звијезде сјајне,
У мојим мислима изгледају бајне.
Оне гледају цијели свијет,
И онај на ливади најљепши цвијет.

Некада су сретне, некада тужне,
Па моје очи често буду будне.
У њима видим радост и сан,
И чувам их сваки дан.`;

  return (
    <PageShell accent="var(--purple)" section="ПЈЕСМЕ · СЕДМИ РАЗРЕД" page="22" side="left">
      <div style={{ padding: '90px 50px 60px' }}>
        <SectionMarker>Литерарни радови</SectionMarker>
        <div className="headline" style={{ marginTop: 14, fontSize: 56, lineHeight: 0.94 }}>
          Двије пјесме,<br/>
          један <em>наслов</em>.
        </div>
        <div className="deck" style={{ marginTop: 14, maxWidth: 540 }}>
          Поред наше Николине, изузетан таленат за писање пјесама показују и ученици
          VII² одјељења — Александра Ритан и Александар Балабан.
        </div>

        <div style={{ marginTop: 30, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18,
          height: 660 }}>
          <PoemCard
            title="Очи"
            author="Александра Ритан"
            grade="VII² одјељење"
            accent="var(--pink)"
            text={ociA}
          />
          <PoemCard
            title="Очи"
            author="Александар Балабан"
            grade="VII² одјељење"
            accent="var(--teal)"
            text={ociB}
          />
        </div>
      </div>
    </PageShell>
  );
}

Object.assign(window, {
  PagePoemsNikolina1, PagePoemsNikolina2, PagePoemsOci,
});
