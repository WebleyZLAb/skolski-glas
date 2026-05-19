// PAGES — Активности: opener + 4 podsekcije (saradnja, priredbe, uređenje, sport, konkursi)

// 06 — АКТИВНОСТИ · SECTION OPENER (editorial, narandžasta samo kao akcent)
function PageAktivnostiOpener() {
  const items = [
    { title: 'Сарадња са локалном заједницом',  page: '08' },
    { title: 'Приредбе и манифестације',        page: '11' },
    { title: 'Уређење школског простора',       page: '14' },
    { title: 'Школска такмичења',               page: '16' },
    { title: 'Успјеси на конкурсима',           page: '17' },
    { title: 'Ликовни и литерарни радови',      page: '19' },
    { title: 'Шах у нашој школи',               page: '24' },
  ];

  return (
    <div className="mag-page" style={{ '--accent': 'var(--orange)' }}>
      {/* tanka orange linija na lijevoj ivici */}
      <div style={{
        position: 'absolute', top: 0, bottom: 0, left: 0,
        width: 6, background: 'var(--orange)',
      }} />

      {/* gornji running head — diskretan */}
      <div className="run-head" style={{ left: 70 }}>
        <div>ШКОЛСКИ ГЛАС <span className="divider-dot">·</span> ЈУ ОШ „МАЈКА КНЕЖОПОЉКА" КНЕЖИЦА <span className="divider-dot">·</span> БРОЈ 18</div>
      </div>

      {/* big "04" akcent */}
      <div style={{
        position: 'absolute',
        top: 130, left: 70,
        fontFamily: 'var(--sans)',
        fontSize: 18, fontWeight: 800,
        letterSpacing: '0.32em',
        color: 'var(--orange)',
      }}>
        П О Г Л А В Љ Е &nbsp;&nbsp;04
      </div>

      {/* hero typography */}
      <div style={{ position: 'absolute', top: 170, left: 70, right: 70 }}>
        <div className="headline" style={{ fontSize: 88, lineHeight: 0.9, color: 'var(--navy)', textAlign: 'center' }}>
          Активности.
        </div>
        <div style={{
          marginTop: 20,
          fontFamily: 'var(--script)',
          fontSize: 42,
          color: 'var(--ink)',
          lineHeight: 1,
          position: 'relative',
          display: 'inline-block',
        }}>
          срце школског живота
          {/* hand underline */}
          <svg width="300" height="10" viewBox="0 0 300 10"
            style={{ position: 'absolute', bottom: -8, left: 0 }}>
            <path d="M 4 5 Q 60 1, 120 4 T 250 4 T 296 5"
              stroke="var(--orange)" strokeWidth="3" strokeLinecap="round" fill="none" />
          </svg>
        </div>
      </div>

      {/* sublist — sasvim editorial, tabela poglavlja */}
      <div style={{
        position: 'absolute',
        bottom: 90, left: 70, right: 70,
      }}>
        <div style={{
          fontFamily: 'var(--sans)', fontSize: 10, letterSpacing: '0.26em',
          fontWeight: 800, color: 'var(--ink-mute)', textTransform: 'uppercase',
          paddingBottom: 10, borderBottom: '1px solid var(--line)',
          display: 'flex', justifyContent: 'space-between',
        }}>
          <span>У овом поглављу</span>
          <span>7 рубрика</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {items.map((it, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '36px 1fr 44px',
              gap: 14, alignItems: 'baseline',
              padding: '11px 0',
              borderBottom: i < items.length - 1 ? '1px solid var(--line)' : 'none',
            }}>
              <span style={{
                fontFamily: 'var(--sans)', fontWeight: 800, fontSize: 11,
                color: 'var(--orange)', letterSpacing: '0.06em',
              }}>
                — {String(i + 1).padStart(2, '0')}
              </span>
              <span style={{
                fontFamily: 'var(--sans)', fontSize: 17, fontWeight: 700,
                color: 'var(--ink)', letterSpacing: '-0.005em',
              }}>
                {it.title}
              </span>
              <span style={{
                fontFamily: 'var(--sans)', fontSize: 16, fontWeight: 800,
                color: 'var(--ink)', textAlign: 'right',
                fontVariantNumeric: 'tabular-nums',
              }}>
                {it.page}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="folio">
        <span className="num">07</span>
        <span>АКТИВНОСТИ · ПОГЛАВЉЕ 04</span>
      </div>
    </div>
  );
}

// 07/08 — САРАДЊА СА ЛОКАЛНОМ ЗАЈЕДНИЦОМ (2 страна)
function PageSaradnja1() {
  const part1 = `Током школске 2025/26. године, остварили смо бројне сарадње са локалном заједницом и њеним представницима.

Одличну сарадњу остварујемо са Општином Козарска Дубица, са којима смо у току године имали више заједничких активности, пројеката и успјешних реализација. Ове школске године општина је обезбиједила бесплатне уџбенике за све ученике од 5. до 9. разреда.

Поводом побједе ученика наше школе (Лука Тица, ученик 1. разреда) на Међуопштинском такмичењу „Звончица са Уне", уприличен је пријем код начелника за Луку и његовог учитеља/ментора Бојана Сантрача.

Ученицима четвртих разреда уручене су едукативне бојанке, припремљене поводом Дана општине. Бојанке су ученицима уручили начелник општине Игор Савковић, предсједник Српског културног и просвјетног друштва „Просвјета" Зоран Синкић, које је уједно и издавач овог издања, те просвјетни радници који су учествовали у изради ове бојанке.

Нашој установи додијељена је Плакета општине Козарска Дубица, поводом обиљежавања Дана општине — 27. априла.`;

  return (
    <PageShell accent="var(--orange)" section="САРАДЊА · АКТИВНОСТИ" page="08" side="left">
      <div style={{ padding: '90px 50px 60px' }}>
        <SectionMarker>04 · Активности</SectionMarker>
        <div className="headline" style={{ marginTop: 14, fontSize: 56, lineHeight: 0.94 }}>
          Изван школских клупа<br/>
          — сарадња са<br/>
          <em>локалном заједницом</em>.
        </div>
        <div className="deck" style={{ marginTop: 14 }}>
          Општина, библиотека, полиција, центар за социјални рад, културне установе —
          све оно што је ове године било „проширена учионица" наше школе.
        </div>

        <div style={{ marginTop: 30, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 26, alignItems: 'start' }}>
          <ArticleBody text={part1} dropcap />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Photo label="ОПШТИНА · 27. АПРИЛ" height={210}
              caption="Додјела Плакете општине Козарска Дубица нашој установи." />
            <InfoBox label="Партнери ове године">
              <div style={{ fontFamily: 'var(--sans)', fontWeight: 700, fontSize: 11.5,
                lineHeight: 1.7, color: 'var(--ink)' }}>
                Општина Козарска Дубица<br/>
                СКПД „Просвјета"<br/>
                Народна библиотека<br/>
                Полицијска станица<br/>
                Центар за социјални рад<br/>
                Дом културе<br/>
                Удружење младих „Фокус"<br/>
                Мото клуб „Чопор"
              </div>
            </InfoBox>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 78, left: 50, right: 50,
          fontFamily: 'var(--sans)', fontSize: 11, color: 'var(--ink-mute)',
          letterSpacing: '0.16em', fontWeight: 700, textTransform: 'uppercase' }}>
          наставак на сљедећој страни →
        </div>
      </div>
    </PageShell>
  );
}

function PageSaradnja2() {
  const part2 = `Удружење младих „Фокус" нас је, као и сваке школске године, посјетило први школски дан и торбама пуних материјала за рад обрадовало наше првачиће. Мото клуб „Чопор" је пакетићима обрадовао ученике првих и других разреда, док је породица Јањош пакетиће поклонила ученицима првог, другог и трећег разреда у Кнежици.

Најмлађи ученици су, у оквиру обиљежавања Дјечије недјеље, посјетили Полицијску станицу Козарска Дубица, гдје су се упознали са свакодневним пословима полицијских службеника, као и значајем поштовања саобраћајних правила и личне безбједности. Истог дана посјетили су и ЈУ „Народна библиотека" Козарска Дубица, гдје их је библиотекарка Бојана упознала са богатим фондом дјечије литературе, сликовницама и значајем читања од најранијег узраста.

Школу су посјетили и представници ЈУ Центар за социјални рад Козарска Дубица — Сања Топић и Николина Душанић Поповић, који су одржали предавања за родитеље и ученике на тему „Здрави стилови васпитања" и „Рјешавање конфликта без насиља".

Посебан доживљај за ученике представљало је дружење са познатим књижевником Урошем Петровићем, одржано у Великој сали Скупштине општине Козарска Дубица. Кроз интерактиван разговор, занимљиве загонетке и приче, ученици су имали прилику да на креативан начин развијају машту и логичко размишљање. Такође, ученици су присуствовали и промоцији књиге „Месечеве маказице" књижевнице Весне Алексић, у оквиру манифестације „Дани Рајка Лукача".

Посебно значајна била је и посјета Спомен-подручју Доња Градина, гдје су ученици виших разреда присуствовали обиљежавању Дана сјећања на жртве концентрационог логора Јасеновац. Ова посјета имала је снажан васпитни карактер, подстичући развој свијести о значају очувања историјског памћења.

Све реализоване посјете показују да учење не мора бити ограничено учионицом.`;

  return (
    <PageShell accent="var(--orange)" section="САРАДЊА · НАСТАВАК" page="09" side="right">
      <div style={{ padding: '90px 50px 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 26, alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <SectionMarker>наставак</SectionMarker>
            <div className="headline" style={{ marginTop: 12, fontSize: 36, lineHeight: 1 }}>
              Учење које<br/>излази из <em>учионице</em>.
            </div>
            <PullQuote
              text="Кроз сарадњу са институцијама ученици стичу практична знања, развијају критичко мишљење и граде важне животне вјештине."
            />
            <Photo label="ФОТОГРАФИЈА 1" height={130}
              caption="Активности у оквиру сарадње са локалном заједницом." />
            <Photo label="ФОТОГРАФИЈА 2" height={130}
              caption="Активности у оквиру сарадње са локалном заједницом." />
            <Photo label="ФОТОГРАФИЈА 3" height={130}
              caption="Активности у оквиру сарадње са локалном заједницом." />
          </div>

          <ArticleBody text={part2} style={{ fontSize: 11.5, lineHeight: 1.55 }} />
        </div>
      </div>
    </PageShell>
  );
}

// 11/12 — ПРИРЕДБЕ И МАНИФЕСТАЦИЈЕ (2 страна)
function PagePriredbe1() {
  const body = `Током школске 2025/26. године, наша школа била је мјесто богатог културног, васпитног и друштвеног живота, испуњеног бројним приредбама и манифестацијама које су окупиле ученике, наставнике, родитеље и ширу заједницу.

Посебно мјесто у школском календару заузеле су свечане приредбе, које су ученици с великом љубављу и трудом припремали. Поводом Светог Николе, у централној и подручној школи приређени су програми испуњени игром, пјесмом, рецитацијама и игроказима, доносећи радост и празничну атмосферу свима присутнима.

Једнако свечано обиљежена је и школска слава — Свети Сава, када су ученици кроз богат културно-умјетнички програм показали поштовање према лику и дјелу првог српског просвјетитеља.

Посебну топлину донијеле су приредбе поводом 8. марта, када су најмлађи ученици својим мамама, бакама и учитељицама поклонили искрене емоције кроз пјесму, плес и рецитације.`;

  return (
    <PageShell accent="var(--pink)" section="ПРИРЕДБЕ · АКТИВНОСТИ" page="11" side="left">
      <div style={{ padding: '90px 50px 60px' }}>
        <SectionMarker>04 · Активности</SectionMarker>
        <div className="headline" style={{ marginTop: 14, fontSize: 56, lineHeight: 0.94 }}>
          Приредбе<br/>
          и манифестације<br/>
          — <em>срце</em> школског<br/>живота.
        </div>
        <div className="deck" style={{ marginTop: 14 }}>
          Свети Никола, школска слава, Дан жена, Васкрс, Дјечија Нова година — школска
          година испричана кроз приредбе и наступе наших ученика.
        </div>

        <div style={{ marginTop: 26, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 26, alignItems: 'start' }}>
          <ArticleBody text={body} dropcap />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Photo label="СВЕТИ САВА · ШКОЛСКА СЛАВА" height={210}
              caption="Свечани програм поводом обиљежавања школске славе." />
            <Photo label="8. МАРТ" height={160}
              caption="Приредба најмлађих ученика поводом Дана жена." />
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 78, left: 50, right: 50,
          fontFamily: 'var(--sans)', fontSize: 11, color: 'var(--ink-mute)',
          letterSpacing: '0.16em', fontWeight: 700, textTransform: 'uppercase' }}>
          наставак на сљедећој страни →
        </div>
      </div>
    </PageShell>
  );
}

function PagePriredbe2() {
  const body = `Ученици су активно учествовали и у ширим друштвеним манифестацијама. Поводом Међународног дана особа са инвалидитетом, својим наступима у Дому културе послали су снажну поруку подршке, толеранције и заједништва.

Учествовањем у манифестацији „У сусрет Васкрсу", као и традиционалном васкршњем украшавању јаја, ученици су његовали дух традиције и заједништва.

Свечаности поводом Дјечије Нове године донијеле су радост најмлађима кроз музику, игру и дружење на градском тргу, док су бројне културне активности, попут позоришних представа и књижевних сусрета, додатно обогатиле школски живот.

Не треба изоставити ни значајне академске и културне догађаје као што је Светосавска академија, на којој су ове године учествовали и ученици наше школе, и Светосавски бал којем је присуствовао велики број наших наставника.

Све ове активности показују да школа није само мјесто учења, већ и простор гдје се развијају таленти, његује култура, граде пријатељства и стварају незаборавне успомене.`;

  return (
    <PageShell accent="var(--pink)" section="ПРИРЕДБЕ · НАСТАВАК" page="12" side="right">
      <div style={{ padding: '90px 50px 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 26, alignItems: 'start' }}>
          <div>
            <SectionMarker>наставак</SectionMarker>
            <div className="headline" style={{ marginTop: 12, fontSize: 30, lineHeight: 1.05 }}>
              Гдје се његују<br/>традиција и <em>заједништво</em>.
            </div>
            <Photo label="У СУСРЕТ ВАСКРСУ" height={170} style={{ marginTop: 18 }}
              caption="Традиционално украшавање васкршњих јаја." />
            <PullQuote
              text="Приредбе и манифестације остају трајан подсјетник на љепоту школског живота и значај заједништва у одрастању сваког ученика."
            />
          </div>

          <ArticleBody text={body} />
        </div>

        <div style={{
          position: 'absolute', bottom: 78, left: 50, right: 50,
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10,
        }}>
          <Photo label="ФОТОГРАФИЈА 3" height={110}
            caption="Приредба ученика наше школе." />
          <Photo label="ФОТОГРАФИЈА 4" height={110}
            caption="Приредба ученика наше школе." />
          <Photo label="ФОТОГРАФИЈА 5" height={110}
            caption="Приредба ученика наше школе." />
          <Photo label="ФОТОГРАФИЈА 6" height={110}
            caption="Приредба ученика наше школе." />
        </div>
      </div>
    </PageShell>
  );
}

// 10 — САРАДЊА (3) · Тениски терен
function PageSaradnja3() {
  const body = `Захваљујући замјенику начелника општине Козарска Дубица, Марку Танкосићу, Тениском клубу „Младен Стојановић" из Приједора и нашем учитељу Бојану Сантрачу наш тениски терен је спреман за кориштење.

Учитељ Бојан је заједно са ученицима уредио терен, док су материјал и техничку подршку за уређење обезбиједили замјеник начелника Марко Танкосић и Тениски клуб „Младен Стојановић".

Уређен тениски терен отвара нове могућности за физичко васпитање и слободне активности ученика, а истовремено је лијеп примјер како заједничким ангажовањем локалне заједнице, спортских организација и школе можемо створити боље услове за дјецу.`;

  return (
    <PageShell accent="var(--orange)" section="САРАДЊА · НАСТАВАК" page="10" side="left">
      <div style={{ padding: '90px 50px 60px' }}>
        <SectionMarker>наставак</SectionMarker>
        <div className="headline" style={{ marginTop: 12, fontSize: 42, lineHeight: 0.96 }}>
          Тениски терен<br/>
          спреман за <em>игру</em>.
        </div>
        <div className="deck" style={{ marginTop: 12 }}>
          Локална заједница, спортски клуб и школа заједно уредили терен
          за ученике Кнежице.
        </div>

        <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <ArticleBody text={body} dropcap style={{ fontSize: 12, lineHeight: 1.6 }} />

            <div style={{ padding: '14px 16px', background: 'var(--cream)', borderLeft: '3px solid var(--orange)' }}>
              <div style={{ fontFamily: 'var(--sans)', fontSize: 10, letterSpacing: '0.22em',
                fontWeight: 800, textTransform: 'uppercase', color: 'var(--orange-deep)', marginBottom: 8 }}>
                Захваљујемо
              </div>
              {[
                'Марко Танкосић, замјеник начелника општине Козарска Дубица',
                'Тениски клуб „Младен Стојановић", Приједор',
                'учитељ Бојан Сантрач и ученици школе',
              ].map((name, i) => (
                <div key={i} style={{ fontFamily: 'var(--sans)', fontSize: 11, fontWeight: 700,
                  color: 'var(--ink)', padding: '5px 0',
                  borderTop: i ? '1px solid var(--line)' : 'none' }}>
                  {name}
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Photo label="ТЕНИСКИ ТЕРЕН · КНЕЖИЦА" height={220}
              caption="Уређени тениски терен школе у Кнежици, прољеће 2026." />
            <Photo label="УРЕЂЕЊЕ ТЕРЕНА" height={200}
              caption="Ученици и учитељ Бојан током уређења тениског терена." />
          </div>
        </div>
      </div>
    </PageShell>
  );
}

Object.assign(window, {
  PageAktivnostiOpener, PageSaradnja1, PageSaradnja2, PageSaradnja3,
  PagePriredbe1, PagePriredbe2,
});
