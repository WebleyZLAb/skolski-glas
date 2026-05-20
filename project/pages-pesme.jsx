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
    <PageShell accent="var(--pink-hot)" section="ПЈЕСМЕ · НИКОЛИНА ТУБИН" page="16" side="left">
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
    <PageShell accent="var(--pink-hot)" section="ПЈЕСМЕ · НИКОЛИНА ТУБИН" page="17" side="right">
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
    <PageShell accent="var(--purple)" section="ПЈЕСМЕ · СЕДМИ РАЗРЕД" page="18" side="left">
      <div style={{ padding: '90px 50px 60px' }}>
        <SectionMarker>Литерарни радови</SectionMarker>
        <div className="headline" style={{ marginTop: 14, fontSize: 56, lineHeight: 0.94 }}>
          Двије пјесме,<br/>
          један <em>наслов</em>.
        </div>
        <div className="deck" style={{ marginTop: 14, maxWidth: 540 }}>
          Поред наше Николине, изузетан таленат за писање пјесама показују и ученици
          7. разреда — Александра Ритан и Александар Балабан.
        </div>

        <div style={{ marginTop: 30, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18,
          height: 660 }}>
          <PoemCard
            title="Очи"
            author="Александра Ритан"
            grade="7. разред"
            accent="var(--pink)"
            text={ociA}
          />
          <PoemCard
            title="Очи"
            author="Александар Балабан"
            grade="7. разред"
            accent="var(--teal)"
            text={ociB}
          />
        </div>
      </div>
    </PageShell>
  );
}

// Likovna galerija — helper
function LikovnaGrid({ images }) {
  const s = (f) => `assets/likovno/${encodeURIComponent(f)}`;
  return (
    <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 16px' }}>
      {images.map(({ file, name, razred }) => (
        <div key={file}>
          <div style={{ background: '#f0ece4', borderRadius: 3, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', height: 210 }}>
            <img src={s(file)} alt={name}
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }} />
          </div>
          <div style={{ marginTop: 5, textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 10.5, fontWeight: 700,
              color: 'var(--ink)', letterSpacing: '-0.01em' }}>
              {name}
            </div>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 9.5, fontWeight: 600,
              color: 'var(--ink-soft)', marginTop: 1 }}>
              {razred}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// 19 — ЛИКОВНИ РАДОВИ (1)
function PageLikovniRadovi() {
  const images = [
    { file: '1. Уна Ковачић - VII2.jpg',         name: 'Уна Ковачић',         razred: 'VII-2' },
    { file: '2 .Александра Ритан - VIII2.jpg',  name: 'Александра Ритан',    razred: 'VIII-2' },
    { file: '3. Сара Мандић - III1.jpg',        name: 'Сара Мандић',         razred: 'III-1' },
    { file: '4. Николина Раниловић - VIII1.jpg', name: 'Николина Раниловић', razred: 'VIII-1' },
    { file: '5. Дариа Личанин - VII2.jpg',      name: 'Дариа Личанин',       razred: 'VII-2' },
    { file: '6. Анђела Родић - VII1.jpg',       name: 'Анђела Родић',        razred: 'VII-1' },
  ];
  return (
    <PageShell accent="var(--purple)" section="ЛИКОВНИ РАДОВИ" page="19" side="left">
      <div style={{ padding: '90px 50px 60px' }}>
        <SectionMarker>04 · Активности</SectionMarker>
        <div className="headline" style={{ marginTop: 12, fontSize: 56, lineHeight: 0.94 }}>
          Ликовни <em>радови</em>.
        </div>
        <LikovnaGrid images={images} />
      </div>
    </PageShell>
  );
}

// 20 — ЛИКОВНИ РАДОВИ (2)
function PageLikovniRadovi2() {
  const images = [
    { file: '7. Весна Ђенадија - VIII1.jpg',    name: 'Весна Ђенадија',    razred: 'VIII-1' },
    { file: '8. Николина Тубин - IX1.jpg',      name: 'Николина Тубин',    razred: 'IX-1' },
    { file: '9. Дариа Личанин - VII2.jpg',      name: 'Дариа Личанин',     razred: 'VII-2' },
    { file: '10. Кристина Личанин - VI1.jpg',   name: 'Кристина Личанин',  razred: 'VI-1' },
    { file: '11. Лана Милаковић - VI1.jpg',     name: 'Лана Милаковић',    razred: 'VI-1' },
    { file: '12. Анамарија Цвијић - VII1.jpg',  name: 'Анамарија Цвијић',  razred: 'VII-1' },
  ];
  return (
    <PageShell accent="var(--purple)" section="ЛИКОВНИ РАДОВИ" page="20" side="right">
      <div style={{ padding: '90px 50px 60px' }}>
        <SectionMarker>наставак</SectionMarker>
        <div className="headline" style={{ marginTop: 12, fontSize: 56, lineHeight: 0.94 }}>
          Ликовни <em>радови</em>.
        </div>
        <LikovnaGrid images={images} />
      </div>
    </PageShell>
  );
}

Object.assign(window, {
  PagePoemsNikolina1, PagePoemsNikolina2, PagePoemsOci, PageLikovniRadovi, PageLikovniRadovi2,
});
