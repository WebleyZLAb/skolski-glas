// Shared shell components for all magazine pages
// Page size: 720 × 1080 (2:3 — matches cover)

const PAGE_W = 720;
const PAGE_H = 1080;

// Wrapper that gives a page a paper-like card on the canvas
function PageWrap({ width = PAGE_W, height = PAGE_H, children }) {
  return (
    <div style={{
      width, height,
      background: 'var(--paper)',
      boxShadow: '0 30px 80px rgba(26,40,81,0.18), 0 8px 24px rgba(26,40,81,0.08)',
      borderRadius: 3,
      overflow: 'hidden',
      position: 'relative'
    }}>
      {children}
    </div>);

}

// Standard page shell — running head + folio
function PageShell({ accent = '#E5217E', section, page, side = 'left', bg, children }) {
  return (
    <div className={'mag-page' + (bg ? ' ' + bg : '')} style={{ '--accent': accent }}>
      <div className="run-head">
        <div>ШКОЛСКИ ГЛАС <span className="divider-dot">·</span> ЈУ ОШ „МАЈКА КНЕЖОПОЉКА” КНЕЖИЦА <span className="divider-dot">·</span> БРОЈ 18</div>
      </div>
      {children}
      <div className="folio">
        {side === 'left' ?
        <>
            <span className="num">{page}</span>
            <span>{section}</span>
          </> :

        <>
            <span>{section}</span>
            <span className="num">{page}</span>
          </>
        }
      </div>
    </div>);

}

// Section marker label (small)
function SectionMarker({ children }) {
  return <div className="section-marker">{children}</div>;
}

// Headline with em color accent
function Headline({ size = 'lg', children }) {
  return <div className={'headline headline-' + size}>{children}</div>;
}

// Deck (subhead)
function Deck({ children }) {
  return <div className="deck">{children}</div>;
}

// Byline
function Byline({ name, role }) {
  return (
    <div className="byline">
      <strong>{name}</strong>{role ? ' · ' + role : ''}
    </div>);

}

// Article body — paragraphs from text
function ArticleBody({ text, dropcap = false, columns = 1, style = {} }) {
  const paragraphs = text.split('\n').map((p) => p.trim()).filter(Boolean);
  return (
    <div
      className={'article-body' + (dropcap ? ' dropcap' : '') + (columns === 2 ? ' cols-2' : '')}
      style={style}>
      
      {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
    </div>);

}

// Photo — shows real image when src provided, placeholder otherwise
function Photo({ src, label, caption, height = 200, style = {} }) {
  return (
    <div>
      {src
        ? <img src={src} alt={label || ''} style={{ width: '100%', height, objectFit: 'cover', display: 'block', borderRadius: 3, ...style }} />
        : <div className="photo" style={{ height, borderRadius: 3, ...style }}>
            {label && <div className="ph-label">{label}</div>}
          </div>
      }
      {caption && <div className="photo-caption">{caption}</div>}
    </div>);
}

// Pull quote
function PullQuote({ text, attr }) {
  return (
    <div className="pull-quote">
      <div className="text">„{text}”</div>
      {attr && <div className="attr">— {attr}</div>}
    </div>);

}

// Info / callout box
function InfoBox({ label, children }) {
  return (
    <div className="info-box">
      <div className="info-label">{label}</div>
      <div className="info-body">{children}</div>
    </div>);

}

// Section opener — full-colored page introducing a major section
function SectionOpener({ accent = 'var(--orange)', num, title, sub, items = [], page }) {
  return (
    <div className="mag-page" style={{ background: accent, '--accent': 'white' }}>
      {/* subtle decoration */}
      <svg width="100%" height="100%" viewBox="0 0 720 1080"
      style={{ position: 'absolute', inset: 0, opacity: 0.08 }}>
        <circle cx="640" cy="80" r="160" stroke="white" strokeWidth="1" fill="none" />
        <circle cx="80" cy="980" r="120" stroke="white" strokeWidth="1" fill="none" />
      </svg>

      <div className="opener">
        <div>
          <div className="o-num">ПОГЛАВЉЕ {num}</div>
          <div className="o-title" style={{ marginTop: 24 }}>{title}</div>
          {sub && <div className="o-sub">{sub}</div>}
        </div>

        {items.length > 0 &&
        <div className="o-list">
            {items.map((it, i) =>
          <div key={i} className="item">
                <span style={{ opacity: 0.6, fontVariantNumeric: 'tabular-nums', minWidth: 28 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{it.title}</span>
                <span className="pg">{it.page}</span>
              </div>
          )}
          </div>
        }
      </div>

      <div style={{
        position: 'absolute', bottom: 30, right: 60,
        fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 800, color: 'white',
        letterSpacing: '0.2em'
      }}>
        стр. {page}
      </div>
    </div>);

}

// Empty placeholder for content not yet provided
function PlaceholderPanel({ children }) {
  return (
    <div style={{
      border: '2px dashed var(--line-strong)',
      borderRadius: 6,
      padding: '24px 28px',
      background: 'var(--cream)',
      fontFamily: 'var(--serif)',
      fontSize: 13,
      lineHeight: 1.55,
      color: 'var(--ink-soft)',
      fontStyle: 'italic'
    }}>
      <div style={{
        fontFamily: 'var(--sans)', fontSize: 10, letterSpacing: '0.2em',
        fontWeight: 800, color: 'var(--ink-mute)', textTransform: 'uppercase',
        marginBottom: 8, fontStyle: 'normal'
      }}>
        Текст у припреми
      </div>
      {children}
    </div>);

}

Object.assign(window, {
  PAGE_W, PAGE_H, PageWrap, PageShell,
  SectionMarker, Headline, Deck, Byline, ArticleBody,
  Photo, PullQuote, InfoBox, SectionOpener, PlaceholderPanel
});