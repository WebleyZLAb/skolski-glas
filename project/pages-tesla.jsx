// PAGES — Pripremni program, Projekat "Tesla"

// 04 — ПРИПРЕМНИ ПРОГРАМ И УПИС УЧЕНИКА
function PagePripremni() {
  const body = `Већ 15. пут заредом у нашој школи организован је припремни програм за дјецу у години пред полазак у школу. Програм похађа 12 ученика, а водитељ је учитељ Бојан Сантрач. Настава је почела 2. марта 2026. године и трајаће до 29. маја 2026. године.

Полазак у школу представља један од најважнијих корака у животу сваког дјетета. Прелазак из породичног окружења у школски систем доноси бројне промјене, нове обавезе и очекивања. Због тога припремни програм у години пред полазак у школу има изузетан значај.

Циљ овог програма није да научи дијете да чита и пише прије школе, већ да развије спремност за учење, радозналост и љубав према знању, стекне самопоуздање, смањи страх од школе и непознатог — чиме прелазак у први разред постаје лакши и радоснији.

Паралелно са реализацијом наведеног програма, школска комисија за тестирање зрелости дјеце за полазак у школу тестирала је зрелост 13 дјеце, у периоду од 27. априла до 1. маја 2026. године, док је једном дјетету тестирање одгођено због тренутног одсуства. Од дјеце предвиђене за тестирање ове године, 7 припада уписном подручју централне школе у Кнежици и 7 уписном подручју подручне школе у Међувођу.`;

  return (
    <PageShell accent="var(--teal)" section="ПРИПРЕМНИ ПРОГРАМ" page="04" side="right">
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
            { n: '15', l: 'година заредом' },
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
            <Photo src="assets/pripremni-program.jpg" label="ПРИПРЕМНИ ПРОГРАМ" height={185}
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

// 05 — ПРОЈЕКАТ „ТЕСЛА"
function PageProjekatTesla() {
  const body = `Пројекат „Тесла" био је једно од најљепших и најинспиративнијих искустава које смо реализовали у нашој школи током ове школске године. Кроз различите активности ученици су имали прилику да на занимљив и креативан начин упознају живот и дјело великог научника Николе Тесле, али и да покажу своја знања, таленте и машту.

Посебно ми је драго што су ученици са великим ентузијазмом прихватили све задатке и активно учествовали у радионицама, изради паноа, презентација, ликовних и литерарних радова, као и у музичким и сценским активностима. Атмосфера током рада била је испуњена сарадњом, дружењем и жељом да свако да свој допринос пројекту.

Кроз овај пројекат ученици нису само учили о науци и Теслиним открићима, већ су развијали тимски дух, комуникацију, креативност и самопоуздање. Управо то и јесте највећа вриједност оваквих активности — знање које остаје повезано са лијепим успоменама и заједничким радом.

Поносан сам на све ученике који су учествовали у пројекту и вјерујем да смо заједно показали колико школа може бити мјесто стваралаштва, инспирације и лијепе енергије.`;

  return (
    <PageShell accent="var(--blue)" section={'ПРОЈЕКАТ „ТЕСЛА"'} page="05" side="left">
      <div style={{ padding: '90px 50px 60px' }}>
        <SectionMarker>03 · Пројекат школе</SectionMarker>
        <div className="headline" style={{ marginTop: 12, fontSize: 56, lineHeight: 1 }}>
          Пројекат{' '}
          <em style={{ fontFamily: 'var(--script)', fontWeight: 700, fontSize: 74,
            color: 'var(--blue)' }}>„Тесла"</em>
        </div>
        <div className="deck" style={{ marginTop: 12 }}>
          Школски пројекат посвећен лику и дјелу нашег патрона —
          једном од највећих умова свога времена.
        </div>

        {/* watermark T */}
        <svg width="280" height="340" viewBox="0 0 24 24"
          style={{ position: 'absolute', top: 180, right: -30, opacity: 0.04, pointerEvents: 'none' }}>
          <path d="M 5 4 L 19 4 L 16 7 L 13 7 L 13 20 L 11 20 L 11 7 L 8 7 Z" fill="var(--blue)" />
        </svg>

        <div style={{ marginTop: 20 }}>
          <ArticleBody text={body} dropcap columns={2} />

          <div style={{ marginTop: 14, borderTop: '1px solid var(--line)', paddingTop: 10,
            display: 'flex', alignItems: 'baseline', gap: 10 }}>
            <div className="script" style={{ fontSize: 22, color: 'var(--blue)', lineHeight: 1 }}>
              Никица Вујиновић
            </div>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 10, letterSpacing: '0.16em',
              fontWeight: 700, color: 'var(--ink-mute)', textTransform: 'uppercase' }}>
              наставник музичке културе
            </div>
          </div>

          <div style={{ marginTop: 26, display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: 240 }}>
              <Photo src="assets/Tesla.JPG" height={180} />
            </div>
          </div>
        </div>

        {/* Tesla quote bar */}
        <div style={{
          position: 'absolute', bottom: 80, left: 50, right: 50,
          padding: '18px 22px',
          background: 'var(--navy)', color: 'var(--cream)',
          borderRadius: 4,
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 18, alignItems: 'center' }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 80, lineHeight: 0.6,
              color: 'var(--yellow)' }}>„</div>
            <div>
              <div className="script" style={{ fontSize: 24, lineHeight: 1.15 }}>
                Садашњост је њихова — будућност, за коју сам заиста радио, моја је.
              </div>
              <div style={{ marginTop: 6, fontFamily: 'var(--sans)', fontSize: 10,
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
