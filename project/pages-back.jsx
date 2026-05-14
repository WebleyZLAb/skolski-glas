// BACK PAGES — Шах, Стручна усавршавања, Међународни дани, Занимљивости, Закључак

// 24 — ШАХ У НАШОЈ ШКОЛИ (placeholder)
function PageSah() {
  return (
    <PageShell accent="var(--navy)" section="ШАХ · АКТИВНОСТИ" page="24" side="right">
      <div style={{ padding: '90px 50px 60px' }}>
        <SectionMarker>04 · Активности</SectionMarker>
        <div className="headline" style={{ marginTop: 14, fontSize: 64, lineHeight: 0.94 }}>
          Шах<br/>
          у нашој <em>школи</em>.
        </div>
        <div className="deck" style={{ marginTop: 14 }}>
          О школској шаховској секцији, такмичењима и ученицима који мјесецима
          стрпљиво уче најстарију игру стратегије на свијету.
        </div>

        <div style={{ marginTop: 30, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'start' }}>
          {/* Chessboard graphic */}
          <div>
            <div style={{
              width: '100%', aspectRatio: '1',
              display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)',
              border: '2px solid var(--navy)',
              maxWidth: 280,
            }}>
              {Array.from({ length: 64 }).map((_, i) => {
                const row = Math.floor(i / 8);
                const col = i % 8;
                const dark = (row + col) % 2 === 1;
                return (
                  <div key={i} style={{
                    background: dark ? 'var(--navy)' : 'var(--cream)',
                    aspectRatio: '1',
                  }} />
                );
              })}
            </div>
            <div className="photo-caption" style={{ marginTop: 8 }}>
              Школска шаховска секција, одјељење за чланове од 4. до 9. разреда.
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <PlaceholderPanel>
              Текст о шаховској секцији наше школе биће овдје приказан када га доставите.
              Простор је предвиђен за листу учесника, ментора, резултате са такмичења и
              фотографије са партија.
            </PlaceholderPanel>
            <InfoBox label="Шаховска секција">
              <div style={{ marginTop: 2 }}>
                Дани сусрета: <strong>уторком и четвртком, 13.30 — 15.00</strong><br/>
                Мјесто: учионица бр. 5, централна школа
              </div>
            </InfoBox>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

// 25/26 — СТРУЧНА УСАВРШАВАЊА (2 str)
function PageStrucnaUsavrsavanja() {
  const body = `Наставници наше школе активно су учествовали у процесу стручног усавршавања, посјетивши 68. Међународни сајам књига у Београду, један од најзначајнијих културних догађаја у региону. Том приликом обогаћен је библиотечки фонд школе новим насловима, чиме су створени бољи услови за рад и учење.

Педагог и психолог наше школе, Божана Вукић и Младен Топић, учествовали су на стручном скупу „Снага тима у васпитно-образовном систему”. Скуп је одржан 3. априла 2026. године, у Бијељини, у организацији Друштва психолога Републике Српске.

У организацији Републичког педагошког завода Републике Српске, од 3. до 5. марта 2026. године, реализована је 17. школа директора под називом „Школа у времену промјена — одговорност савременог директора”. Директор наше школе, Бојана Крњајић, је на овом скупу учествовала и остварила активно учешће у програму.

Учитељице наше школе Бојана Згоњанин и Милена Мандић учествовале су на дводневном савјетовању-стручном предавању за учитеље, које је одржано у Теслићу, а организовало га је Друштво учитеља Републике Српске.

Важно је споменути и процес вредновања квалитета васпитно-образовног рада школе, који смо ове школске године успјешно завршили. Процес вредновања извршили су представници РПЗ-а, просвјетни инспектори-савјетници Дајана Латиновић Петровић и Бојана Сучевић.`;

  return (
    <PageShell accent="var(--purple)" section="СТРУЧНА УСАВРШАВАЊА" page="25" side="left">
      <div style={{ padding: '90px 50px 60px' }}>
        <SectionMarker>05 · Радници школе</SectionMarker>
        <div className="headline" style={{ marginTop: 14, fontSize: 54, lineHeight: 0.94 }}>
          Учитељи који<br/>
          и сами не престају<br/>
          да <em>уче</em>.
        </div>
        <div className="deck" style={{ marginTop: 14 }}>
          Сајам књига у Београду, школа директора, скупови психолога и педагога,
          посјета РПЗ-а — година испуњена стручним усавршавањем.
        </div>

        <div style={{ marginTop: 26, display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 26, alignItems: 'start' }}>
          <ArticleBody text={body} dropcap />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Photo label="САЈАМ КЊИГА · БЕОГРАД" height={200}
              caption="Наставници на 68. Међународном сајму књига." />

            <div style={{ background: 'var(--cream)', padding: '14px 16px',
              borderLeft: '3px solid var(--purple)' }}>
              <div style={{ fontFamily: 'var(--sans)', fontSize: 10, letterSpacing: '0.24em',
                fontWeight: 800, color: 'var(--purple)', textTransform: 'uppercase' }}>
                Догађаји · 2025/26.
              </div>
              <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  ['68. сајам књига', 'Београд'],
                  ['Снага тима у В/О систему', 'Бијељина · 3.4.'],
                  ['17. школа директора', 'РПЗ · 3—5.3.'],
                  ['Савјетовање учитеља', 'Теслић'],
                  ['Вредновање квалитета', 'РПЗ инспекција'],
                ].map(([t, sub], i) => (
                  <div key={i} style={{ borderTop: i ? '1px solid var(--line)' : 'none', paddingTop: i ? 8 : 0 }}>
                    <div style={{ fontFamily: 'var(--sans)', fontSize: 11.5, fontWeight: 800, color: 'var(--ink)' }}>
                      {t}
                    </div>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 10.5, fontStyle: 'italic',
                      color: 'var(--ink-soft)', marginTop: 2 }}>
                      {sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

// 27 — ОБИЉЕЖАВАЊЕ МЕЂУНАРОДНИХ ДАНА
function PageMedjunarodniDani() {
  const body = `У савременом образовању школа није само мјесто стицања знања, већ и простор у којем ученици уче о важним вриједностима, развијају емпатију, толеранцију, одговорност и свијест о свијету који их окружује. Управо зато се у нашој школи током цијеле школске године обиљежавају бројни међународни дани, кроз различите активности, радионице, изложбе, презентације и тематске часове.

Обиљежавањем значајних датума ученици имају прилику да се упознају са важним темама као што су заштита животне средине, права дјеце, очување здравља, значај књиге и писмености, толеранција, хуманост и пријатељство. На тај начин школа постаје мјесто у којем се поред образовања развијају и људске вриједности.

Посебну пажњу посвећујемо обиљежавању Међународног дана матерњег језика, када ученици кроз рецитације, литерарне радове и језичке радионице показују љепоту и богатство српског језика и ћириличког писма.

Посебно су значајне и активности поводом Дјечије недјеље, када школа постаје мјесто игре, радости и креативности. Ученици уче о својим правима, али и обавезама, те кроз различите садржаје показују своје таленте и способности.

Обиљежавањем међународних дана наша школа настоји да код ученика развија знање, културу, одговорност и хуманост. Свака активност је прилика за учење, дружење и стицање нових искустава.`;

  const dates = [
    { d: '5. окт.',  t: 'Свјетски дан учитеља',  c: 'var(--orange)' },
    { d: '7. окт.',  t: 'Дјечија недјеља',       c: 'var(--pink)' },
    { d: '20. нов.', t: 'Дан права дјетета',     c: 'var(--blue)' },
    { d: '3. дец.',  t: 'Међ. дан особа са инв.', c: 'var(--teal)' },
    { d: '21. феб.', t: 'Дан матерњег језика',   c: 'var(--purple)' },
    { d: '22. апр.', t: 'Дан планете Земље',     c: 'var(--teal-deep)' },
  ];

  return (
    <PageShell accent="var(--blue-bright)" section="МЕЂУНАРОДНИ ДАНИ" page="27" side="right">
      <div style={{ padding: '90px 50px 60px' }}>
        <SectionMarker>06 · Обиљежавања</SectionMarker>
        <div className="headline" style={{ marginTop: 14, fontSize: 50, lineHeight: 0.95 }}>
          Календар који<br/>
          учи о <em>вриједностима</em>.
        </div>
        <div className="deck" style={{ marginTop: 14 }}>
          Једна школска година испричана кроз обиљежавања међународних дана —
          од Дјечије недјеље до Дана матерњег језика.
        </div>

        <div style={{ marginTop: 26, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 26, alignItems: 'start' }}>
          <ArticleBody text={body} dropcap />

          <div>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 10, letterSpacing: '0.24em',
              fontWeight: 800, color: 'var(--blue-bright)', textTransform: 'uppercase',
              marginBottom: 10 }}>
              Календар обиљежавања
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {dates.map((d, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '64px 1fr',
                  alignItems: 'baseline', gap: 12,
                  padding: '10px 0', borderTop: '1px solid var(--line)',
                }}>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: 11, letterSpacing: '0.16em',
                    fontWeight: 800, color: d.c, textTransform: 'uppercase' }}>
                    {d.d}
                  </div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 13, color: 'var(--ink)',
                    fontStyle: 'italic', lineHeight: 1.3 }}>
                    {d.t}
                  </div>
                </div>
              ))}
              <div style={{ borderTop: '1px solid var(--line)' }} />
            </div>
          </div>
        </div>

        <div style={{
          position: 'absolute', bottom: 78, left: 50, right: 50,
          padding: '16px 22px', background: 'var(--cream)',
          borderTop: '2px solid var(--blue-bright)',
        }}>
          <div className="byline" style={{ marginBottom: 4 }}>Истичемо</div>
          <div style={{ fontFamily: 'var(--serif)', fontSize: 13, fontStyle: 'italic', color: 'var(--ink)' }}>
            Међународни дан матерњег језика — рецитације, литерарни радови и језичке
            радионице које показују љепоту и богатство ћириличког писма.
          </div>
        </div>
      </div>
    </PageShell>
  );
}

// 28 — ЗАНИМЉИВОСТИ И ВЕСЕЛА СТРАНА (placeholder)
function PageZanimljivosti() {
  return (
    <PageShell accent="var(--orange-deep)" section="ВЕСЕЛА СТРАНА" page="28" side="left">
      <div style={{ padding: '90px 50px 60px' }}>
        <SectionMarker>07 · За крај</SectionMarker>
        <div className="headline" style={{ marginTop: 14, fontSize: 64, lineHeight: 0.94 }}>
          Занимљивости<br/>
          и <em style={{ fontFamily: 'var(--script)', fontSize: 78, fontWeight: 700,
            color: 'var(--orange-deep)' }}>весела</em> страна.
        </div>
        <div className="deck" style={{ marginTop: 14 }}>
          Загонетке, питалице, занимљиве чињенице — простор за насмијешити се
          и провјерити шта смо запамтили из ове школске године.
        </div>

        <div style={{ marginTop: 30, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
          <PlaceholderPanel>
            Сегмент са вицевима, питалицама, загонеткама и занимљивим чињеницама
            биће овдје приказан када га доставите. Простор је предвиђен и за
            ученичке доскочице и кратке шале.
          </PlaceholderPanel>
          <PlaceholderPanel>
            Овдје се могу приказати квизови, тестови опште културе, мини-сложалице
            и кратке заналичности на тему школе, природе, историје и науке.
          </PlaceholderPanel>
        </div>

        <div style={{ marginTop: 18, padding: '18px 22px', background: 'var(--cream)',
          borderLeft: '3px solid var(--orange-deep)' }}>
          <div className="byline" style={{ color: 'var(--orange-deep)' }}>Знаш ли да...</div>
          <div style={{ fontFamily: 'var(--serif)', fontSize: 13, fontStyle: 'italic',
            color: 'var(--ink)', marginTop: 6, lineHeight: 1.5 }}>
            ...свјетлости од Сунца до Земље треба тачно <strong>8 минута</strong>,
            а Никола Тесла, наш патрон, говорио је <strong>осам језика</strong>?
          </div>
        </div>
      </div>
    </PageShell>
  );
}

// 30 — ЗАКЉУЧАК
function PageZakljucak() {
  return (
    <PageShell accent="var(--navy)" section="ЗАКЉУЧАК" page="30" side="right" bg="mag-page--cream">
      <div style={{ padding: '90px 50px 60px' }}>
        <SectionMarker>08 · За крај</SectionMarker>
        <div className="headline" style={{ marginTop: 14, fontSize: 70, lineHeight: 0.94 }}>
          Заједно стварамо<br/>
          најљепше <em>успомене</em>.
        </div>
        <div className="deck" style={{ marginTop: 14, maxWidth: 540 }}>
          Једна школска година се завршава — а заједно са њом и осамнаесто издање
          нашег часописа. Хвала свима који су били његов дио.
        </div>

        <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
          <div>
            <PlaceholderPanel>
              Кратки текст-захвалница, имена свих ученика, наставника, родитеља и
              сарадника који су учествовали у изради часописа, биће овдје приказани
              када их доставите.
            </PlaceholderPanel>

            <div style={{ marginTop: 18 }}>
              <div className="byline">Имали смо част сарађивати са</div>
              <div style={{ marginTop: 8, fontFamily: 'var(--serif)', fontSize: 12.5,
                lineHeight: 1.7, color: 'var(--ink-soft)', fontStyle: 'italic' }}>
                Општином Козарска Дубица · СКПД „Просвјета” · Народном библиотеком ·
                Полицијском станицом · Центром за социјални рад · Домом културе ·
                Удружењем младих „Фокус” · Мото клубом „Чопор” · породицом Јањош ·
                Спомен-подручјем Доња Градина · Борачком организацијом · многим другим
                добрим људима.
              </div>
            </div>
          </div>

          <div>
            <div style={{
              padding: '24px 26px', background: 'var(--navy)', color: 'var(--cream)',
              borderRadius: 4,
            }}>
              <div style={{ fontFamily: 'var(--sans)', fontSize: 10, letterSpacing: '0.24em',
                fontWeight: 800, color: 'var(--yellow)', textTransform: 'uppercase' }}>
                Импресум
              </div>
              <div style={{ marginTop: 14, fontFamily: 'var(--sans)', fontSize: 12,
                lineHeight: 1.6, color: 'var(--cream)' }}>
                <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 8 }}>
                  ШКОЛСКИ ГЛАС · бр. 18
                </div>
                <strong style={{ opacity: 0.7 }}>Издавач</strong><br/>
                ОШ „Никола Тесла”, Кнежица<br/>
                Козарска Дубица<br/><br/>

                <strong style={{ opacity: 0.7 }}>Директор</strong><br/>
                Бојана Крњајић<br/><br/>

                <strong style={{ opacity: 0.7 }}>Редакција</strong><br/>
                Јелена Дрљић · Бојана Згоњанин<br/>
                Милена Мандић · Бојан Сантрач<br/>
                Божана Вукић · Младен Топић<br/><br/>

                <strong style={{ opacity: 0.7 }}>Школска година</strong><br/>
                2025/26.
              </div>
            </div>

            <div style={{ marginTop: 18, textAlign: 'right' }}>
              <div className="script" style={{ fontSize: 38, color: 'var(--pink)', lineHeight: 1 }}>
                до сусрета у 19. броју!
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

Object.assign(window, {
  PageSah, PageStrucnaUsavrsavanja, PageMedjunarodniDani,
  PageZanimljivosti, PageZakljucak,
});
