// PLAKAT — QR kod poster za vrata škole (A4 uspravno, bez broja stranice)

function PagePlakat() {
  return (
    <div className="mag-page" style={{ '--accent': 'var(--teal)' }}>

      {/* Isti running header kao ostale stranice */}
      <div className="run-head">
        <div>ШКОЛСКИ ГЛАС <span style={{ opacity: 0.4, margin: '0 6px' }}>·</span> ЈУ ОШ „МАЈКА КНЕЖОПОЉКА" КНЕЖИЦА <span style={{ opacity: 0.4, margin: '0 6px' }}>·</span> БРОЈ 18</div>
      </div>

      {/* Sadržaj */}
      <div style={{
        position: 'absolute', top: 68, bottom: 70, left: 60, right: 60,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'space-between',
      }}>

        {/* Gornji dio — H1 naslov */}
        <div style={{ textAlign: 'center', paddingTop: 18 }}>
          <div className="headline" style={{
            fontSize: 72, lineHeight: 0.91, textAlign: 'center',
            color: 'var(--ink)',
          }}>
            Желиш знати<br />
            шта се<br />
            дешавало<br />
            у школи<br />
            цијеле <em>године</em>?
          </div>
        </div>

        {/* Centralni dio — QR kod */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
          {/* Okvir oko QR koda */}
          <div style={{
            padding: 18,
            background: 'var(--cream)',
            border: '2px solid var(--line)',
            borderRadius: 10,
            boxShadow: '0 8px 32px rgba(26,40,81,0.10)',
          }}>
            <img src="assets/qr.png" alt="QR код" style={{ width: 230, height: 230, display: 'block' }} />
          </div>

          {/* CTA ispod QR */}
          <div style={{
            background: 'var(--teal)', borderRadius: 6,
            padding: '12px 28px',
          }}>
            <span style={{
              fontFamily: 'var(--sans)', fontWeight: 800, fontSize: 15,
              letterSpacing: '0.22em', textTransform: 'uppercase', color: 'white',
            }}>
              Скенирај и читај
            </span>
          </div>
        </div>

        {/* Donji dio — kratki opis */}
        <div style={{ textAlign: 'center', paddingBottom: 8 }}>
          <div style={{
            fontFamily: 'var(--serif)', fontSize: 13.5, fontStyle: 'italic',
            color: 'var(--ink-soft)', lineHeight: 1.6, maxWidth: 460,
          }}>
            Такмичења, приредбе, пројекти, пјесме<br />
            и ликовни радови — све на једном мјесту.
          </div>
        </div>

      </div>

      {/* Footer bez broja stranice */}
      <div style={{
        position: 'absolute', bottom: 28, left: 50, right: 50,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--sans)', fontSize: 10, letterSpacing: '0.22em',
        fontWeight: 700, textTransform: 'uppercase', color: 'var(--ink-mute)',
        borderTop: '1px solid var(--line)', paddingTop: 12,
      }}>
        ЈУ ОШ „МАЈКА КНЕЖОПОЉКА" КНЕЖИЦА · ШКОЛСКА 2025/26.
      </div>

    </div>
  );
}

Object.assign(window, { PagePlakat });
