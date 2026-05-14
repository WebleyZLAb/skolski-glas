// PAGES — Uređenje, Sport, Konkursi, Literarni intro

// 14 — УРЕЂЕЊЕ ШКОЛСКОГ ПРОСТОРА
function PageUredjenje() {
  const body = `Током школске 2025/26. године, у нашој школи посебна пажња посвећена је уређењу школског простора, како би ученици боравили у љепшем, здравијем и подстицајнијем окружењу.

Једна од значајнијих активности реализована је 9. априла, када су ученици и наставници заједно учествовали у сађењу украсних садница у парковима централне школе у Кнежици и подручне школе у Међувођу. Овом акцијом школско двориште је обогаћено новим биљкама, а простор је постао уређенији и пријатнији за боравак. Кроз заједнички рад ученици су учили о значају очувања природе, развијали еколошку свијест и навике одговорног понашања према животној средини.

Унутрашњи простор школе такође је унапријеђен кроз бројне активности. Ученици су у оквиру различитих школских кампања и пројеката уређивали учионице и ходнике. Посебно се истиче активност у оквиру кампање „Школа која чује” (4. новембар), када су ученици израђивали пано са порукама о толеранцији, емпатији и међусобном поштовању, чиме је школски простор обогаћен и едукативним садржајима.

Кроз читаву школску годину, ученички радови, цртежи, литерарни и ликовни радови красили су учионице и школске ходнике, дајући простору посебну топлину и аутентичност. Заједничким ангажовањем ученика и наставника развијен је осјећај одговорности према школском окружењу и свијест о значају очувања простора у којем учимо и растемо.`;

  return (
    <PageShell accent="var(--teal)" section="УРЕЂЕЊЕ · АКТИВНОСТИ" page="14" side="left">
      <div style={{ padding: '90px 50px 60px' }}>
        <SectionMarker>04 · Активности</SectionMarker>
        <div className="headline" style={{ marginTop: 12, fontSize: 44, lineHeight: 0.96 }}>
          Школа као пријатно<br/>
          мјесто за учење<br/>
          и <em>одрастање</em>.
        </div>
        <div className="deck" style={{ marginTop: 14 }}>
          О сађењу садница, кампањама и томе како се простор у којем учимо
          претвара у мјесто у којем се осјећамо као код куће.
        </div>

        <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, alignItems: 'start' }}>
          <Photo label="ПРИЈЕ · ПАРК ШКОЛЕ" height={140}
            caption="Школско двориште прије акције сађења, март 2026." />
          <Photo label="ПОСЛИЈЕ · 9. АПРИЛ" height={140}
            caption="Двориште након посађених украсних садница." />
        </div>

        <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 22 }}>
          <ArticleBody text={body} dropcap columns={1} style={{ fontSize: 11.5, lineHeight: 1.55 }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <InfoBox label={'Кампања „Школа која чује”'}>
              <div style={{ marginTop: 2 }}>
                Реализована 4. новембра 2025. Ученици су израђивали пано са порукама о
                <strong> толеранцији, емпатији</strong> и међусобном поштовању.
              </div>
            </InfoBox>
            <PullQuote
              text="Уређена школа је огледало заједништва — мјесто гдје се љепота простора гради заједничким трудом и љубављу."
            />
          </div>
        </div>
      </div>
    </PageShell>
  );
}

// 16 — СПОРТСКА ТАКМИЧЕЊА (placeholder)
function PageSport() {
  return (
    <PageShell accent="var(--blue)" section="СПОРТ · АКТИВНОСТИ" page="16" side="right">
      <div style={{ padding: '90px 50px 60px' }}>
        <SectionMarker>04 · Активности · такмичења</SectionMarker>
        <div className="headline" style={{ marginTop: 14, fontSize: 60, lineHeight: 0.94 }}>
          Спортска<br/>
          такмичења<br/>
          — <em>тимски дух</em>.
        </div>
        <div className="deck" style={{ marginTop: 14 }}>
          Школска година у бројевима, побједама и ученицима који су своје школе
          представљали на спортским теренима.
        </div>

        <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, alignItems: 'start' }}>
          <Photo label="СПОРТСКИ ДАН" height={280}
            caption="Финална утакмица турнира у малом фудбалу, мај 2026." />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <PlaceholderPanel>
              Текст о спортским такмичењима наше школе биће овдје приказан када га
              доставите. Простор је предвиђен за резултате, имена награђених ученика,
              менторе и фотографије са терена.
            </PlaceholderPanel>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {['Атлетика', 'Фудбал', 'Кошарка', 'Рукомет'].map((s, i) => (
                <div key={i} style={{
                  background: 'var(--cream)', padding: '12px 14px',
                  borderTop: '2px solid var(--blue)',
                }}>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 800, color: 'var(--ink)' }}>
                    {s}
                  </div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: 9.5, letterSpacing: '0.18em',
                    fontWeight: 700, color: 'var(--ink-mute)', marginTop: 4 }}>
                    — резултати —
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

// 17 — УСПЈЕСИ НА КОНКУРСИМА
function PageKonkursi() {
  const body = `Током школске 2025/26. године, наши ученици су кроз различите конкурсе имали прилику да покажу своју креативност, маштовитост и љубав према језику и умјетности. Њихови радови свједоче о таленту, али и о преданом раду уз подршку наставника.

Писали смо писма Дједу Мразу, који је прочитао сва наша писма и наградио најљепша од њих. Ове године, као најбоље, одабрао је и пакетићима наградио: Теодору Петрић, Тубић Жељка и Ритан Александра.

На конкурсу „Ћирилица у цвијету маште”, који је организовала ЈУ ОШ „Свети Сава” из Козарске Дубице, ученици наше школе учествовали су са великим бројем радова, показујући колико његују љепоту ћириличног писма и изражавања кроз умјетност.

Поводом обиљежавања Међународног дана матерњег језика, реализован је и школски конкурс „Говори српски, пиши ћирилицом”, на који су пристигла 24 рада. Стручна комисија одабрала је и наградила најуспјешније ученике: Сару Мандић, Лану Беру, Александра Балабана и Александру Ритан.

Посебно запажен успјех остварен је и на конкурсу „Моја рука бира како изгледа лектира”, такође у организацији ОШ „Свети Сава”. Наши ученици освојили су више награда у различитим категоријама. Међу награђенима су Миа Стојаковић, Александар Ритан, Марија Слијепац, Милица Цвијић и Марија Бабић.

На шестој међуопштинској смотри рецитатора „Звончица са Уне 2026”, ученици наше школе остварили су одличне резултате. У категорији 1. разреда, прво мјесто освојио је Лука Тица, у категорији 4. разреда прво мјесто освојила је Маша Ступар.`;

  const awards = [
    { konkurs: 'Звончица са Уне 2026',          ucenik: 'Лука Тица',          razred: '1. разред', mjesto: '1. мјесто' },
    { konkurs: 'Звончица са Уне 2026',          ucenik: 'Маша Ступар',        razred: '4. разред', mjesto: '1. мјесто' },
    { konkurs: 'Говори српски, пиши ћирилицом', ucenik: 'Сара Мандић',        razred: '—',         mjesto: 'награда' },
    { konkurs: 'Говори српски, пиши ћирилицом', ucenik: 'Лана Бера',          razred: '—',         mjesto: 'награда' },
    { konkurs: 'Говори српски, пиши ћирилицом', ucenik: 'Александар Балабан', razred: 'VII²',      mjesto: 'награда' },
    { konkurs: 'Говори српски, пиши ћирилицом', ucenik: 'Александра Ритан',   razred: 'VII²',      mjesto: 'награда' },
    { konkurs: 'Моја рука бира лектиру',        ucenik: 'Миа Стојаковић',     razred: '—',         mjesto: 'награда' },
    { konkurs: 'Моја рука бира лектиру',        ucenik: 'Марија Слијепац',    razred: '—',         mjesto: 'награда' },
  ];

  return (
    <PageShell accent="var(--purple)" section="КОНКУРСИ · АКТИВНОСТИ" page="17" side="left">
      <div style={{ padding: '90px 50px 60px' }}>
        <SectionMarker>04 · Активности · конкурси</SectionMarker>
        <div className="headline" style={{ marginTop: 12, fontSize: 46, lineHeight: 0.96 }}>
          Успјеси<br/>
          на <em>конкурсима</em>
          — труд који се види.
        </div>
        <div className="deck" style={{ marginTop: 10 }}>
          Ћирилица, рецитације, лектира и писма Дједу Мразу — низ конкурса на којима
          су наши ученици ове године показали изузетну креативност.
        </div>

        <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, alignItems: 'start' }}>
          <ArticleBody text={body} dropcap style={{ fontSize: 11, lineHeight: 1.5 }} />

          <div>
            <div style={{
              fontFamily: 'var(--sans)', fontSize: 10, letterSpacing: '0.24em',
              fontWeight: 800, color: 'var(--purple)', textTransform: 'uppercase',
              marginBottom: 10,
            }}>
              Награђени ученици · 2025/26.
            </div>
            <div style={{ border: '1px solid var(--line)', borderRadius: 4, overflow: 'hidden' }}>
              {awards.map((a, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '1.4fr auto', gap: 8,
                  padding: '7px 11px', alignItems: 'baseline',
                  borderTop: i ? '1px solid var(--line)' : 'none',
                  background: i % 2 ? 'var(--cream)' : 'white',
                }}>
                  <div>
                    <div style={{ fontFamily: 'var(--sans)', fontSize: 10.5, fontWeight: 800, color: 'var(--ink)',
                      lineHeight: 1.2 }}>
                      {a.ucenik} <span style={{ color: 'var(--ink-mute)', fontWeight: 600 }}>· {a.razred}</span>
                    </div>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 9.5, fontStyle: 'italic',
                      color: 'var(--ink-soft)', marginTop: 1 }}>
                      „{a.konkurs}”
                    </div>
                  </div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: 10, letterSpacing: '0.14em',
                    fontWeight: 800, color: 'var(--purple)', textTransform: 'uppercase' }}>
                    {a.mjesto}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

// 19 — ЛИКОВНИ И ЛИТЕРАРНИ РАДОВИ · ИНТРО (Таленат који се пише срцем)
function PageLiterarnIntro() {
  const body = `У нашој школи посебно мјесто заузимају ученици који својим талентом и креативношћу обогаћују школски живот. Једна од њих је и ученица Николина Тубин, која своје мисли и осјећања претаче у стихове, стварајући пјесме које никога не остављају равнодушним.

Њене пјесме настају тихо, између школских обавеза и свакодневних тренутака, али у њима се крије богат унутрашњи свијет. Њени стихови су искрени, емотивни и често носе поруку која подстиче на размишљање.

Оно што је посебно у њеном писању јесте способност да на једноставан начин изрази дубока осјећања. Читајући њене пјесме, лако се можемо пронаћи у њеним ријечима и осјетити снагу младалачке искрености.

Поред талента, красе је упорност и љубав према писању. Она не одустаје од свог сна, већ свакодневно ради на томе да буде све боља. Њен примјер показује да је важно вјеровати у себе и његовати дар који имамо.

Поносни смо што у нашој школи имамо овакве ученике, јер управо они чине да школа буде мјесто гдје се таленти откривају и развијају. Са нестрпљењем очекујемо њене нове пјесме и сигурни смо да је ово тек почетак једне лијепе приче.`;

  return (
    <PageShell accent="var(--pink-hot)" section="ЛИКОВНИ И ЛИТЕРАРНИ РАДОВИ" page="19" side="right">
      <div style={{ padding: '90px 50px 60px' }}>
        <SectionMarker>04 · Активности</SectionMarker>
        <div className="headline" style={{ marginTop: 12, fontSize: 50, lineHeight: 0.96 }}>
          Талент који се<br/>
          пише <em style={{ fontFamily: 'var(--script)', fontSize: 68,
            fontWeight: 700, color: 'var(--pink-hot)' }}>срцем</em>.
        </div>
        <div className="deck" style={{ marginTop: 10 }}>
          О ученици Николини Тубин — и о томе како се у тишини, између часова и обавеза,
          рађају стихови.
        </div>

        <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 22, alignItems: 'start' }}>
          <div>
            <Photo label="НИКОЛИНА ТУБИН · 9. РАЗРЕД" height={260}
              caption="Николина у школској библиотеци, мај 2026." />
            <div style={{ marginTop: 12, padding: '12px 14px', background: 'var(--cream)',
              borderLeft: '3px solid var(--pink-hot)' }}>
              <div className="byline">Аутор приче</div>
              <div style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: 13, color: 'var(--ink)', marginTop: 4 }}>
                Јелена Дрљић
              </div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 11, color: 'var(--ink-soft)',
                fontStyle: 'italic', marginTop: 2 }}>
                професорка српског језика
              </div>
            </div>
          </div>

          <div>
            <ArticleBody text={body} dropcap style={{ fontSize: 11.5, lineHeight: 1.55 }} />
            <div style={{ marginTop: 14 }}>
              <PullQuote
                text="Њени стихови су искрени, емотивни и често носе поруку која подстиче на размишљање."
              />
            </div>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 78, left: 50, right: 50,
          fontFamily: 'var(--sans)', fontSize: 11, color: 'var(--ink-mute)',
          letterSpacing: '0.16em', fontWeight: 700, textTransform: 'uppercase' }}>
          пјесме Николине Тубин на наредним странама →
        </div>
      </div>
    </PageShell>
  );
}

Object.assign(window, {
  PageUredjenje, PageSport, PageKonkursi, PageLiterarnIntro,
});
