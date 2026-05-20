// FRONT PAGES — Naslovna, Sadržaj, Uvodna riječ

// 01 — NASLOVNA (reuses uploaded image)
function PageCover() {
  return (
    <div className="mag-page" style={{ padding: 0 }}>
      <img src="assets/naslovna.png" alt="Насловна"
      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    </div>);

}

// 02 — САДРЖАЈ
function PageTOC() {
  const sections = [
  { num: '01', t: 'Уводна ријеч', acc: 'var(--pink)', page: '03' },
  { num: '02', t: 'Припремни програм и упис ученика', acc: 'var(--teal)', page: '04' },
  { num: '03', t: 'Пројекат „Тесла”', acc: 'var(--blue)', page: '05' },
  { num: '04', t: 'Активности', acc: 'var(--orange)', page: '06', italic: true, items: [
    { t: 'Сарадња са локалном заједницом', p: '07' },
    { t: 'Приредбе и манифестације', p: '10' },
    { t: 'Уређење школског простора', p: '12' },
    { t: 'Такмичења и награде', p: '13' },
    { t: 'Ликовни и литерарни радови', p: '15' },
    { t: 'Шах у нашој школи', p: '21' }]
  },
  { num: '05', t: 'Стручна усавршавања и посјета РПЗ-а', acc: 'var(--purple)', page: '22' },
  { num: '06', t: 'Обиљежавање међународних дана', acc: 'var(--blue-bright)', page: '23' },
  { num: '07', t: 'Занимљивости и весела страна', acc: 'var(--orange-deep)', page: '24' },
  { num: '08', t: 'Закључак', acc: 'var(--navy)', page: '26' }];


  return (
    <PageShell accent="var(--pink)" section="САДРЖАЈ" page="02" side="right">
      <div style={{ padding: '90px 50px 60px' }}>
        <SectionMarker>Број 18 · мај 2026.</SectionMarker>
        <div className="headline headline-xl" style={{ marginTop: 14, fontSize: 88, lineHeight: 0.92 }}>
          Шта можете<br /><em style={{ fontFamily: 'var(--script)', fontWeight: 700, fontSize: 86 }}>прочитати?</em>
        </div>
        <div className="deck" style={{ marginTop: 14, maxWidth: 540 }}>Школска 2025/26. година — у причама, такмичењима, приредбама, пјесмама и сјећањима која остају у нашим ходницима.


        </div>

        <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 0 }}>
          {sections.map((s, i) =>
          <div key={i}>
              <div style={{
              display: 'grid',
              gridTemplateColumns: '42px 1fr auto',
              alignItems: 'baseline',
              padding: '12px 0',
              borderTop: '1px solid var(--line)',
              gap: 14
            }}>
                <div style={{
                fontFamily: 'var(--sans)', fontSize: 14, fontWeight: 800,
                color: s.acc, letterSpacing: '0.04em'
              }}>{s.num}</div>
                <div>
                  <div style={{
                  fontFamily: 'var(--sans)', fontSize: 17, fontWeight: 800,
                  color: 'var(--ink)', letterSpacing: '-0.01em', lineHeight: 1.2
                }}>
                    {s.t}
                  </div>
                  {s.items &&
                <div style={{ marginTop: 8, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px 24px' }}>
                      {s.items.map((it, j) =>
                  <div key={j} style={{
                    display: 'flex', alignItems: 'baseline', gap: 8,
                    fontFamily: 'var(--serif)', fontSize: 11.5, color: 'var(--ink-soft)',
                    fontStyle: 'italic'
                  }}>
                          <span style={{ color: s.acc, fontFamily: 'var(--sans)', fontWeight: 700, fontStyle: 'normal' }}>·</span>
                          <span style={{ flex: 1 }}>{it.t}</span>
                          <span style={{ fontFamily: 'var(--sans)', fontStyle: 'normal', fontSize: 11,
                      color: 'var(--ink-mute)', fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>
                            {it.p}
                          </span>
                        </div>
                  )}
                    </div>
                }
                </div>
                <div style={{
                fontFamily: 'var(--sans)', fontSize: 22, fontWeight: 900,
                color: 'var(--ink)', fontVariantNumeric: 'tabular-nums', letterSpacing: 0
              }}>{s.page}</div>
              </div>
            </div>
          )}
          <div style={{ borderTop: '1px solid var(--line)' }} />
        </div>
      </div>
    </PageShell>);

}

// 03 — УВОДНА РИЈЕЧ
function PageEditorial() {
  const intro = `Добро дошли на странице нашег часописа „Школски глас” – мјеста гдје се сусрећу знање, креативност и успјеси наших ученика и наставника. Овај часопис представља огледало живота наше школе, свих активности које нас обогаћују, као и труда који улажемо у стицање нових знања и вјештина.

Током протеклог периода, наша школа је била испуњена бројним догађајима: наставним и ваннаставним активностима, такмичењима, пројектима, радионицама и културним дешавањима. Сваки од тих тренутака носи посебну вриједност јер показује заједништво, упорност и жељу за напретком.

Овдје нећете пронаћи само преглед активности, већ и странице у којима ученици изражавају своје мишљење, таленат и креативност, јер школа није само мјесто учења, већ и мјесто одрастања, стварања пријатељстава и успомена.

Надамо се да ћете, читајући ове странице, осјетити дух наше школе и понос који сви заједно градимо.`;

  return (
    <PageShell accent="var(--pink)" section="УВОДНА РИЈЕЧ" page="03" side="left">
      <div style={{ padding: '90px 50px 60px' }}>
        <SectionMarker>Уводник</SectionMarker>
        <div className="headline headline-xl" style={{ marginTop: 16, fontSize: 64 }}>
          Огледало нашег<br />
          школског <em>живота</em>.
        </div>
        <div className="deck" style={{ marginTop: 14 }}>
          О томе шта је школа била ове године — и о свему што ће на њеним
          страницама остати као сјећање.
        </div>

        <div style={{ marginTop: 36, display: 'grid', gridTemplateColumns: '1fr 220px', gap: 28 }}>
          <ArticleBody text={intro} dropcap columns={1} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <Photo src="assets/skola.jpg" label="ШКОЛА · 2025/26." height={165}
            caption="Централна школа у Кнежици, прољеће 2026." />
            <PullQuote
              text="Школа није само мјесто учења, већ и мјесто одрастања, стварања пријатељстава и успомена."
              attr="Редакција" />
            
          </div>
        </div>

        {/* Signature */}
        <div style={{
          position: 'absolute', bottom: 80, left: 50, right: 50,
          padding: '18px 22px',
          background: 'var(--cream)',
          borderLeft: '3px solid var(--pink)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 18
        }}>
          <div>
            <div className="byline">С поштовањем</div>
            <div className="script" style={{ fontSize: 36, color: 'var(--pink)', marginTop: 2 }}>
              Редакција школског часописа
            </div>
          </div>
          <div style={{ textAlign: 'right', fontFamily: 'var(--sans)', fontSize: 11,
            letterSpacing: '0.18em', fontWeight: 700, color: 'var(--ink-mute)', textTransform: 'uppercase',
            whiteSpace: 'nowrap' }}>
            ЈУ ОШ „МАЈКА КНЕЖОПОЉКА”<br />Кнежица
          </div>
        </div>
      </div>
    </PageShell>);

}

Object.assign(window, { PageCover, PageTOC, PageEditorial });