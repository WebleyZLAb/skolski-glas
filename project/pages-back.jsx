// BACK PAGES — Шах, Стручна усавршавања, Међународни дани, Занимљивости, Закључак

// 24 — ШАХ У НАШОЈ ШКОЛИ
function PageSah() {
  const body = `Од почетка ове школске године у нашој школи, сваке сриједе, 6. час, одржава се шаховска секција, коју води наставник математике Борис Крчковски.

Секција је, званично, почела ове школске године, након већ традиционалних турнира у шаху, на полугодишту и крају године, који се дешавају више од 10 година.

Ученици су ове године учествовали на Општинском екипном такмичењу у шаху, Кадетском првенству Општине (до 18 година), Републичком кадетском првенству (до 18 година) и Међународном турниру у шаху.

Међу најуспјешнијим ученицима, у шаху, су Гаврило и Михаило Тешинић, Јован Чубриловић, Марко Тешинић, Срђан Њежић и Лазар Станивуковић.

Шах није само игра, већ и начин развијања логичког размишљања, стрпљења и концентрације. Управо зато шаховска секција има важну улогу у животу наше школе, а интересовање ученика показује да ће ова традиција наставити да расте и у годинама које долазе.`;

  const clanovi = [
    { r: 'I разред',    n: 'Никола Бабић' },
    { r: 'III разред',  n: 'Дејана Вукмирица, Марко Мијаљевић, Михајло Раниловић, Гаврило Тешинић, Јован Чубриловић' },
    { r: 'IV разред',   n: 'Александра Сантрач, Жељко Тубић' },
    { r: 'V разред',    n: 'Јана Бера, Ивана Ђенадија, Стојан Шарац, Тамара Шормаз' },
    { r: 'VII разред',  n: 'Анђела Слијепац' },
    { r: 'VIII разред', n: 'Анђела Сантрач, Марко Тешинић' },
  ];

  return (
    <PageShell accent="var(--navy)" section="ШАХ · АКТИВНОСТИ" page="20" side="right">
      <div style={{ padding: '90px 50px 60px' }}>
        <SectionMarker>04 · Активности</SectionMarker>
        <div className="headline" style={{ marginTop: 12, fontSize: 56, lineHeight: 0.94 }}>
          Шах у нашој <em>школи</em>.
        </div>
        <div className="deck" style={{ marginTop: 10 }}>
          Секција, такмичења и ученици који стрпљиво уче
          најстарију игру стратегије на свијету.
        </div>

        <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '1.45fr 1fr', gap: 24, alignItems: 'start' }}>

          {/* lijeva kolona — tekst */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <ArticleBody text={body} dropcap style={{ fontSize: '11.5px' }} />

            {/* lista članova */}
            <div style={{
              borderTop: '2px solid var(--navy)',
              paddingTop: 10,
            }}>
              <div style={{ fontFamily: 'var(--sans)', fontSize: 9.5, fontWeight: 800,
                letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--navy)',
                marginBottom: 8 }}>
                Чланови секције
              </div>
              {clanovi.map((c, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '82px 1fr',
                  gap: 10, padding: '5px 0',
                  borderTop: '1px solid var(--line)',
                  fontFamily: 'var(--sans)', fontSize: 10.5,
                }}>
                  <span style={{ fontWeight: 800, color: 'var(--navy)', whiteSpace: 'nowrap' }}>{c.r}</span>
                  <span style={{ color: 'var(--ink-soft)', lineHeight: 1.4 }}>{c.n}</span>
                </div>
              ))}
            </div>
          </div>

          {/* desna kolona — tabla + foto + info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {/* šahovska tabla */}
            <div>
              <div style={{
                width: '100%', aspectRatio: '1',
                display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)',
                border: '2px solid var(--navy)',
              }}>
                {Array.from({ length: 64 }).map((_, i) => {
                  const dark = (Math.floor(i / 8) + i % 8) % 2 === 1;
                  return <div key={i} style={{ background: dark ? 'var(--navy)' : 'var(--cream)', aspectRatio: '1' }} />;
                })}
              </div>
            </div>

            {/* foto placeholder sa natpisom */}
            <div>
              <Photo src="assets/sah.png" label="ТУРНИР · МЉЕЧАНИЦА" height={140}
                caption="Међународни турнир, Мљечаница." />
            </div>

            <InfoBox label="Водитељ секције">
              <div style={{ fontFamily: 'var(--sans)', fontWeight: 800, color: 'var(--ink)', fontSize: 12, marginTop: 2 }}>
                Борис Крчковски
              </div>
              <div style={{ marginTop: 3 }}>
                наставник математике<br/>
                <strong>сриједом, 6. час</strong>
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

Педагог и психолог наше школе, Божана Вукић и Младен Топић, учествовали су на стручном скупу „Снага тима у васпитно-образовном систему", одржаном 3. априла у Бијељини.

У организацији Републичког педагошког завода Републике Српске, од 3. до 5. марта 2026. године, реализована је 17. школа директора под називом „Школа у времену промјена — одговорност савременог директора". Директор наше школе, Бојана Крњајић, је на овом скупу учествовала и остварила активно учешће у програму.

Учитељице наше школе Бојана Згоњанин и Милена Мандић учествовале су на дводневном савјетовању-стручном предавању за учитеље, које је одржано у Теслићу, а организовало га је Друштво учитеља Републике Српске.

Важно је споменути и процес вредновања квалитета васпитно-образовног рада школе, који смо ове школске године успјешно завршили. Процес вредновања извршили су представници РПЗ-а, просвјетни инспектори-савјетници Дајана Латиновић Петровић и Бојана Сучевић.

Наставници наше школе учествовали су на вебинарима и семинарима који су планирани у овој школској години.`;

  return (
    <PageShell accent="var(--purple)" section="СТРУЧНА УСАВРШАВАЊА" page="21" side="left">
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
            <Photo src="assets/sajam.jpg" label="САЈАМ КЊИГА · БЕОГРАД" height={170}
              caption="Наставници на 68. Међународном сајму књига." />

            <Photo src="assets/zezelj.jpg" height={170}
              caption={'Зоран Синкић, предсједник СПКД „Просвјета", додјељује плакету нашем наставнику.'} />

            <div style={{ background: 'var(--cream)', padding: '12px 16px',
              borderLeft: '3px solid var(--purple)', marginTop: 0 }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 12, lineHeight: 1.55,
                color: 'var(--ink)', fontStyle: 'italic' }}>
                „На Светосавском балу, наставнику наше школе Жељку Жежељу додијељена је плакета за изузетан допринос образовању и васпитању."
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
    { d: '15. септ.',  t: 'Дан српског јединства' },
    { d: '26. септ.',  t: 'Дан европских језика' },
    { d: 'I сед. окт.', t: 'Дјечија недјеља' },
    { d: '4. окт.',    t: 'Дан заштите животиња' },
    { d: '4–10. окт.', t: 'Недјеља свемира' },
    { d: '16. окт.',   t: 'Дан здраве хране' },
    { d: '6. нов.',    t: 'Дан рођења Вука С. Караџића' },
    { d: '20. нов.',   t: 'Дан дјетета' },
    { d: '21. феб.',   t: 'Дан матерњег језика' },
    { d: 'пос. сри. феб.', t: 'Дан розих мајица' },
    { d: '26. феб.',   t: 'Дан читања бајки' },
    { d: '21. март',   t: 'Дан шума' },
    { d: '22. март',   t: 'Дан вода' },
    { d: '2. апр.',    t: 'Дан дјечије књиге' },
    { d: '22. апр.',   t: 'Дан планете Земље' },
  ];

  const colors = ['var(--orange)', 'var(--blue)', 'var(--pink)', 'var(--teal-deep)',
    'var(--purple)', 'var(--orange-deep)', 'var(--blue-bright)', 'var(--pink)',
    'var(--purple)', 'var(--pink-hot)', 'var(--teal)', 'var(--teal-deep)',
    'var(--blue)', 'var(--orange)', 'var(--teal-deep)'];

  return (
    <PageShell accent="var(--blue-bright)" section="МЕЂУНАРОДНИ ДАНИ" page="22" side="right">
      <div style={{ padding: '90px 50px 60px' }}>
        <SectionMarker>06 · Обиљежавања</SectionMarker>
        <div className="headline" style={{ marginTop: 14, fontSize: 50, lineHeight: 0.95 }}>
          Календар који<br/>
          учи о <em>вриједностима</em>.
        </div>
        <div className="deck" style={{ marginTop: 14 }}>
          Једна школска година испричана кроз обиљежавања међународних дана —
          од Дана српског јединства до Дана планете Земље.
        </div>

        <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 26, alignItems: 'start' }}>
          <ArticleBody text={body} dropcap />

          <div>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 10, letterSpacing: '0.24em',
              fontWeight: 800, color: 'var(--blue-bright)', textTransform: 'uppercase',
              marginBottom: 6 }}>
              Календар обиљежавања
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {dates.map((d, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '72px 1fr',
                  alignItems: 'baseline', gap: 8,
                  padding: '5px 0', borderTop: '1px solid var(--line)',
                }}>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: 9, letterSpacing: '0.12em',
                    fontWeight: 800, color: colors[i], textTransform: 'uppercase', lineHeight: 1.3 }}>
                    {d.d}
                  </div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 11, color: 'var(--ink)',
                    fontStyle: 'italic', lineHeight: 1.3 }}>
                    {d.t}
                  </div>
                </div>
              ))}
              <div style={{ borderTop: '1px solid var(--line)' }} />
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

// 28 — ВЕСЕЛА СТРАНИЦА
function PageZanimljivosti() {
  const jokes = [
    [
      { t: 'Докторе, имам проблем са памћењем.' },
      { t: '– Од када?' },
      { t: '– Од када шта?' },
    ],
    [
      { role: 'УЧИТЕЉИЦА', t: '– Перице, наброј пет животиња које живе у Африци.' },
      { role: 'ПЕРИЦА',    t: '– Три слона и двије жирафе.' },
    ],
    [
      { t: 'Комшија, ваш пас јури човјека на бициклу!' },
      { t: '– Нема шансе, наш пас не зна да вози бицикл.' },
    ],
    [
      { role: 'МАМА', t: 'Како је било у школи?' },
      { role: 'СИН',  t: 'Било је добро.' },
      { role: 'МАМА', t: 'Јеси ли нешто одговарао?' },
      { role: 'СИН',  t: 'Јесам?' },
      { role: 'МАМА', t: 'Шта је учитељица питала?' },
      { role: 'СИН',  t: 'Ко није урадио задаћу.' },
    ],
    [
      { t: '– Мој пријатељ је написао књигу: „Како постати богат" само још увијек нема новца да ју објави.' },
      { t: '– Кажи му да прочита књигу.' },
    ],
    [
      { t: '– Мама, зашто ми искључујеш интернет?' },
      { t: '– Да би се укључио у стварни живот.' },
    ],
  ];

  return (
    <PageShell accent="var(--orange-deep)" section="ВЕСЕЛА СТРАНИЦА" page="23" side="left">
      <div style={{ padding: '90px 50px 60px' }}>
        <SectionMarker>07 · За крај</SectionMarker>
        <div className="headline" style={{ marginTop: 14, fontSize: 64, lineHeight: 0.94 }}>
          Весела<br/>
          <em style={{ fontFamily: 'var(--script)', fontSize: 72, fontWeight: 700,
            color: 'var(--orange-deep)' }}>страница</em>.
        </div>
        <div className="deck" style={{ marginTop: 14 }}>
          Шест школских вицева за крај — јер без смијеха није ни школа.
        </div>

        <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 32px' }}>
          {[jokes.slice(0, 3), jokes.slice(3)].map((col, ci) => (
            <div key={ci}>
              {col.map((lines, i) => (
                <div key={i} style={{ borderTop: '1px solid var(--line)', paddingTop: 12, marginBottom: 16 }}>
                  {lines.map((line, j) => (
                    <div key={j} style={{ marginBottom: 3 }}>
                      {line.role && (
                        <span style={{ fontFamily: 'var(--sans)', fontSize: 10, fontWeight: 800,
                          letterSpacing: '0.18em', color: 'var(--orange-deep)',
                          textTransform: 'uppercase', marginRight: 5, display: 'block' }}>
                          {line.role}:
                        </span>
                      )}
                      <span style={{ fontFamily: 'var(--serif)', fontSize: 13.5, color: 'var(--ink)',
                        lineHeight: 1.55, fontStyle: 'italic' }}>
                        {line.t}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

// 29 — ЗАНИМЉИВОСТИ
function PageZanimljivosti2() {
  const facts = [
    'Мед не може да се поквари. Археолози су у египатским гробницама пронашли посуде меда старе више хиљада година које су и даље биле јестиве.',
    'Хоботница има три срца и плаву крв.',
    'На Венери један дан траје дуже него једна година.',
    'Банане су природно благо радиоактивне јер садрже калијум.',
    'Срце плавог кита толико је велико да човјек може да прође кроз његове артерије.',
    'Муња је топлија од површине Сунца — температура муње може достићи и до 30.000°C.',
    'Пуж може спавати и до три године без прекида.',
    'Најкраћи рат у историји трајао је само 38 минута — водио се 1896. године између Британије и Занзибара.',
    'Људски мозак има више веза (синапси) него што у Млијечном путу има звијезда.',
    'Ајкула је старија врста од диносауруса — прве ајкуле постојале су прије више од 400 милиона година.',
    'Када би се ДНК из једне људске ћелије размотала, била би дугачка око два метра.',
    'Поларни медвједи имају црну кожу, а њихово крзно је заправо провидно.',
    'Звук се у води креће око четири пута брже него кроз ваздух.',
    'На Сатурну и Јупитеру могу падати „кише" од дијаманата.',
  ];

  return (
    <PageShell accent="var(--teal)" section="ЗАНИМЉИВОСТИ" page="24" side="right">
      <div style={{ padding: '90px 50px 60px' }}>
        <SectionMarker>07 · За крај</SectionMarker>
        <div className="headline" style={{ marginTop: 14, fontSize: 64, lineHeight: 0.94 }}>
          Да ли сте<br/>
          <em style={{ fontFamily: 'var(--script)', fontSize: 72, fontWeight: 700,
            color: 'var(--teal)' }}>знали</em>?
        </div>
        <div className="deck" style={{ marginTop: 14 }}>
          Четрнаест занимљивости о свијету у коме живимо — нека те изненаде.
        </div>

        <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 28px' }}>
          {[facts.slice(0, 7), facts.slice(7)].map((col, ci) => (
            <div key={ci}>
              {col.map((fact, i) => (
                <div key={i} style={{ borderTop: '1px solid var(--line)', paddingTop: 9,
                  marginBottom: 4, display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--teal)', fontWeight: 800, fontFamily: 'var(--sans)',
                    fontSize: 14, lineHeight: 1, flexShrink: 0, marginTop: 1 }}>·</span>
                  <span style={{ fontFamily: 'var(--serif)', fontSize: 13, color: 'var(--ink)',
                    lineHeight: 1.5 }}>{fact}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

// 30 — ЗАКЉУЧАК
function PageZakljucak() {
  return (
    <PageShell accent="var(--navy)" section="ЗАКЉУЧАК" page="25" side="right" bg="mag-page--cream">
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
            <div style={{ marginTop: 0 }}>
              <div className="byline">Наши партнери и сарадници</div>
              <div style={{ marginTop: 8, fontFamily: 'var(--serif)', fontSize: 12.5,
                lineHeight: 1.7, color: 'var(--ink-soft)', fontStyle: 'italic' }}>
                Општина Козарска Дубица · СПКД „Просвјета" · Народна библиотека ·
                Полицијска станица · Центар за социјални рад · Дом културе ·
                Удружење младих „Фокус" · Мото клуб „Чопор" · Породица Јањош ·
                Спомен-подручје Доња Градина · Борачка организација ·
                Дом здравља Козарска Дубица · СПЦО Кнежица · ОСЦК Козарска Дубица ·
                АМД Козара · ТВЈ Козарска Дубица · и многи други добри људи.
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
                ЈУ ОШ „МАЈКА КНЕЖОПОЉКА"<br/>
                Кнежица<br/><br/>

                <strong style={{ opacity: 0.7 }}>Директор</strong><br/>
                Бојана Крњајић<br/><br/>

                <strong style={{ opacity: 0.7 }}>Редакција</strong><br/>
                Никица Вујиновић · Јелена Дрљић<br/>
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
  PageZanimljivosti, PageZanimljivosti2, PageZakljucak,
});
