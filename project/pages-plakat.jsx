// PLAKAT — QR kod poster za vrata škole (A4 uspravno, bez broja stranice)

function PagePlakat() {
  return (
    <div className="mag-page" style={{ '--accent': 'var(--teal)' }}>

      {/* Isti running header kao ostale stranice */}
      <div className="run-head">
        <div>ШКОЛСКИ ГЛАС <span style={{ opacity: 0.4, margin: '0 6px' }}>·</span> ЈУ ОШ „МАЈКА КНЕЖОПОЉКА" КНЕЖИЦА <span style={{ opacity: 0.4, margin: '0 6px' }}>·</span> БРОЈ 18</div>
      </div>

      {/* Dekorativni akcentni bar ispod headera */}
      <div style={{
        position: 'absolute', top: 68, left: 50, right: 50,
        height: 3, background: 'linear-gradient(90deg, var(--teal) 0%, var(--teal-deep) 60%, transparent 100%)',
        borderRadius: 2,
      }} />

      {/* Sadržaj */}
      <div style={{
        position: 'absolute', top: 84, bottom: 70, left: 60, right: 60,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'space-between',
      }}>

        {/* Gornji dio — H1 naslov */}
        <div style={{ textAlign: 'center', paddingTop: 18 }}>
          <div style={{
            fontFamily: 'var(--sans)', fontSize: 11, fontWeight: 800,
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: 'var(--teal-deep)', marginBottom: 20,
          }}>
            Школска 2025 / 26.
          </div>
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
            display: 'flex', alignItems: 'center', gap: 12,
            background: 'var(--teal)', borderRadius: 6,
            padding: '12px 28px',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 7V5a2 2 0 0 1 2-2h2"/>
              <path d="M17 3h2a2 2 0 0 1 2 2v2"/>
              <path d="M21 17v2a2 2 0 0 1-2 2h-2"/>
              <path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
              <rect x="7" y="7" width="4" height="4"/>
              <rect x="13" y="7" width="4" height="4"/>
              <rect x="7" y="13" width="4" height="4"/>
              <path d="M13 13h4v4"/>
            </svg>
            <span style={{
              fontFamily: 'var(--sans)', fontWeight: 800, fontSize: 15,
              letterSpacing: '0.22em', textTransform: 'uppercase', color: 'white',
            }}>
              Скенирај и читај!
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
