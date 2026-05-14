// PAGES — Pripremni program, Projekat "Tesla"

// 04 — ПРИПРЕМНИ ПРОГРАМ И УПИС УЧЕНИКА
function PagePripremni() {
  const body = `Већ 15. пут заредом у нашој школи организован је припремни програм за дјецу у години пред полазак у школу. Програм похађа 12 ученика, а водитељ је учитељ Бојан Сантрач. Настава је почела 2. марта 2026. године и трајаће до 29. маја 2026. године.

Полазак у школу представља један од најважнијих корака у животу сваког дјетета. Прелазак из породичног окружења у школски систем доноси бројне промјене, нове обавезе и очекивања. Због тога припремни програм у години пред полазак у школу има изузетан значај.

Циљ овог програма није да научи дијете да чита и пише прије школе, већ да развије спремност за учење, радозналост и љубав према знању, стекне самопоуздање, смањи страх од школе и непознатог — чиме прелазак у први разред постаје лакши и радоснији.

Паралелно са реализацијом наведеног програма, школска комисија за тестирање зрелости дјеце за полазак у школу тестирала је зрелост 13 дјеце, у периоду од 27. априла до 1. маја 2026. године, док је једном дјетету тестирање одгођено због тренутног одсуства. Од дјеце предвиђене за тестирање ове године, 7 припада уписном подручју централне школе у Кнежици и 7 уписном подручју подручне школе у Међувођу.`;

  return (
    <PageShell accent="var(--teal)" section="ПРИПРЕМНИ ПРОГРАМ" page="05" side="right">
      <div style={{ padding: '90px 50px 60px' }}>
        <SectionMarker>02 · Припрема за школу</SectionMarker>
        <div className="headline headline-lg" style={{ marginTop: 14, fontSize: 56 }}>
          Прије првог<br/>
          школског <em>звона</em>.
        </div>
        <div className="deck" style={{ marginTop: 14 }}>
          Петнаесту годину заредом, наша школа отвара врата дјеци која се припремају
          за полазак у први разред.
        </div>

        {/* stat row */}
        <div style={{ marginTop: 26, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
          borderTop: '2px solid var(--teal)', borderBottom: '1px solid var(--line)' }}>
          {[
            { n: '15.', l: 'година заредом' },
            { n: '12', l: 'полазника' },
            { n: '13', l: 'тестираних' },
            { n: '2', l: 'школска подручја' },
          ].map((s, i) => (
            <div key={i} style={{
              padding: '14px 14px',
              borderRight: i < 3 ? '1px solid var(--line)' : 'none',
            }}>
              <div style={{ fontFamily: 'var(--sans)', fontWeight: 900, fontSize: 38,
                color: 'var(--teal-deep)', lineHeight: 1, letterSpacing: '-0.02em' }}>
                {s.n}
              </div>
              <div style={{ marginTop: 6, fontFamily: 'var(--sans)', fontSize: 10,
                letterSpacing: '0.16em', fontWeight: 700, color: 'var(--ink-mute)',
                textTransform: 'uppercase' }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 26, alignItems: 'start' }}>
          <ArticleBody text={body} dropcap columns={1} style={{ '--accent': 'var(--teal-deep)' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Photo label="ПРИПРЕМНИ ПРОГРАМ" height={210}
              caption="Радионица у припремној групи, март 2026." />
            <InfoBox label="Водитељ програма">
              <div style={{ fontFamily: 'var(--sans)', fontWeight: 800, color: 'var(--ink)', fontSize: 13, marginTop: 2 }}>
                учитељ Бојан Сантрач
              </div>
              <div style={{ marginTop: 4 }}>
                Период: <strong>2. март — 29. мај 2026.</strong>
              </div>
            </InfoBox>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

// 05 — ПРОЈЕКАТ „ТЕСЛА” (placeholder content)
function PageProjekatTesla() {
  return (
    <PageShell accent="var(--blue)" section={'ПРОЈЕКАТ „ТЕСЛА”'} page="06" side="left">
      <div style={{ padding: '90px 50px 60px' }}>
        <SectionMarker>03 · Пројекат школе</SectionMarker>
        <div className="headline" style={{ marginTop: 14, fontSize: 70, lineHeight: 0.94 }}>
          Пројекат<br/>
          <em style={{ fontFamily: 'var(--script)', fontWeight: 700, fontSize: 90,
            color: 'var(--blue)', display: 'inline-block', marginTop: 4 }}>„Тесла”</em>
        </div>
        <div className="deck" style={{ marginTop: 14 }}>
          Школски пројекат посвећен лику и дјелу нашег патрона —
          једном од највећих умова свога времена.
        </div>

        {/* big T mark watermark */}
        <svg width="320" height="380" viewBox="0 0 24 24"
          style={{ position: 'absolute', top: 220, right: -40, opacity: 0.05 }}>
          <path d="M 5 4 L 19 4 L 16 7 L 13 7 L 13 20 L 11 20 L 11 7 L 8 7 Z" fill="var(--blue)" />
        </svg>

        <div style={{ marginTop: 30, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <Photo label="ПРОЈЕКАТ · ТЕСЛА" height={260}
            caption={'Изложба ученичких радова у оквиру пројекта „Тесла”.'} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <PlaceholderPanel>
              Текст о пројекту „Тесла” биће овдје приказан када га доставите. Простор је
              предвиђен за опис активности, циљева пројекта, учесника и постигнутих резултата
              током школске 2025/26. године.
            </PlaceholderPanel>
            <InfoBox label="Покровитељ">
              <div style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: 13, color: 'var(--ink)' }}>
                Општина Козарска Дубица
              </div>
              <div style={{ marginTop: 4 }}>
                Реализација у школској <strong>2025/26.</strong> години.
              </div>
            </InfoBox>
          </div>
        </div>

        {/* Tesla quote */}
        <div style={{
          position: 'absolute', bottom: 80, left: 50, right: 50,
          padding: '22px 26px',
          background: 'var(--navy)', color: 'var(--cream)',
          borderRadius: 4,
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 22, alignItems: 'center' }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 96, lineHeight: 0.6,
              color: 'var(--yellow)' }}>„</div>
            <div>
              <div className="script" style={{ fontSize: 28, lineHeight: 1.15 }}>
                Садашњост је њихова — будућност, за коју сам заиста радио, моја је.
              </div>
              <div style={{ marginTop: 8, fontFamily: 'var(--sans)', fontSize: 10,
                letterSpacing: '0.22em', fontWeight: 700, color: 'var(--yellow)',
                textTransform: 'uppercase' }}>
                — Никола Тесла
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

Object.assign(window, { PagePripremni, PageProjekatTesla });
