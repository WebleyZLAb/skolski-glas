// Reusable decorative elements — brush strokes, hearts, music notes, stars, dots
// Matches the playful visual language from the magazine cover.

// Brush stroke — irregular, painterly band
function Brush({ color, w = 180, h = 36, rotate = 0, style = {} }) {
  // a hand-drawn looking brush stroke via SVG
  return (
    <svg width={w} height={h} viewBox="0 0 200 40"
      style={{ position: 'absolute', transform: `rotate(${rotate}deg)`, transformOrigin: 'center', ...style }}>
      <path
        d="M 2 22 C 18 8, 40 4, 70 8 C 100 12, 130 30, 160 26 C 180 24, 192 18, 198 14 L 196 22 C 184 28, 160 36, 130 34 C 100 32, 70 18, 40 22 C 24 24, 10 30, 4 30 Z"
        fill={color}
      />
      <ellipse cx="100" cy="22" rx="98" ry="11" fill={color} opacity="0.55" />
    </svg>
  );
}

// Painted blob — irregular splash
function Blob({ color, size = 100, rotate = 0, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100"
      style={{ position: 'absolute', transform: `rotate(${rotate}deg)`, ...style }}>
      <path
        d="M 48 6 C 70 4, 90 22, 92 44 C 94 64, 80 84, 60 90 C 38 96, 14 86, 8 64 C 2 42, 14 18, 32 10 C 38 7, 44 6, 48 6 Z"
        fill={color}
      />
    </svg>
  );
}

// Heart — flat icon style
function Heart({ color = '#E5217E', size = 24, rotate = 0, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24"
      style={{ position: 'absolute', transform: `rotate(${rotate}deg)`, ...style }}>
      <path
        d="M 12 21 C 12 21, 3 14.5, 3 8.5 C 3 5.5, 5.5 3, 8.5 3 C 10.5 3, 11.5 4, 12 5 C 12.5 4, 13.5 3, 15.5 3 C 18.5 3, 21 5.5, 21 8.5 C 21 14.5, 12 21, 12 21 Z"
        fill={color}
      />
    </svg>
  );
}

// Star — chunky 5-point
function Star({ color = '#FFC93C', size = 28, rotate = 0, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24"
      style={{ position: 'absolute', transform: `rotate(${rotate}deg)`, ...style }}>
      <path
        d="M 12 2 L 14.6 8.6 L 22 9.2 L 16.4 14 L 18 21.2 L 12 17.4 L 6 21.2 L 7.6 14 L 2 9.2 L 9.4 8.6 Z"
        fill={color}
      />
    </svg>
  );
}

// Music note
function Note({ color = '#E5217E', size = 26, rotate = 0, style = {} }) {
  return (
    <svg width={size} height={size * 1.3} viewBox="0 0 20 26"
      style={{ position: 'absolute', transform: `rotate(${rotate}deg)`, ...style }}>
      <path
        d="M 8 2 L 8 18 C 8 20, 6 22, 4 22 C 2 22, 1 20.5, 1 19 C 1 17, 3 16, 5 16 C 6 16, 6.5 16.2, 7 16.4 L 7 6 L 18 4 L 18 14 C 18 16, 16 18, 14 18 C 12 18, 11 16.5, 11 15 C 11 13, 13 12, 15 12 C 16 12, 16.5 12.2, 17 12.4 L 17 6.5 L 8 8 Z"
        fill={color}
      />
    </svg>
  );
}

// Dotted comma strokes (like the curly motifs on the cover)
function CurlMarks({ color = '#FFC93C', count = 4, size = 32, rotate = 0, style = {} }) {
  return (
    <svg width={size * count * 0.6} height={size} viewBox={`0 0 ${count * 14} 32`}
      style={{ position: 'absolute', transform: `rotate(${rotate}deg)`, ...style }}>
      {Array.from({ length: count }).map((_, i) => (
        <path key={i}
          d={`M ${i * 14 + 6} 4 Q ${i * 14 + 4} 14, ${i * 14 + 7} 22 Q ${i * 14 + 9} 26, ${i * 14 + 6} 30`}
          stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
      ))}
    </svg>
  );
}

// Cluster of small dashes (like the dotted bits beside hearts on cover)
function Dashes({ color, count = 6, dir = 'h', size = 4, gap = 6, style = {} }) {
  const items = Array.from({ length: count });
  return (
    <div style={{
      position: 'absolute',
      display: 'flex',
      flexDirection: dir === 'h' ? 'row' : 'column',
      gap,
      ...style
    }}>
      {items.map((_, i) => (
        <span key={i} style={{
          display: 'block',
          width: dir === 'h' ? size * 3 : size,
          height: dir === 'h' ? size : size * 3,
          background: color,
          borderRadius: 1
        }} />
      ))}
    </div>
  );
}

// Underline scribble — wavy hand-drawn line
function Underline({ color = '#FFC93C', w = 160, h = 8, style = {} }) {
  return (
    <svg width={w} height={h} viewBox="0 0 160 8"
      style={{ position: 'absolute', ...style }}>
      <path d="M 2 5 Q 30 1, 60 4 T 120 4 T 158 5"
        stroke={color} strokeWidth="3.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

// Mini icon set — rounded section icons matching cover badge style
function SectionIcon({ kind, size = 22, color = 'white' }) {
  const stroke = color;
  const sw = 2;
  if (kind === 'people') return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="8" r="3" stroke={stroke} strokeWidth={sw}/>
      <circle cx="16" cy="9" r="2.2" stroke={stroke} strokeWidth={sw}/>
      <path d="M 3 19 C 3 15, 6 13, 9 13 C 12 13, 15 15, 15 19" stroke={stroke} strokeWidth={sw} strokeLinecap="round"/>
      <path d="M 14 19 C 14 16.5, 16 15, 18 15 C 20 15, 21 16.5, 21 19" stroke={stroke} strokeWidth={sw} strokeLinecap="round"/>
    </svg>
  );
  if (kind === 'leaf') return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M 20 4 C 20 12, 14 20, 6 20 C 4 14, 8 6, 20 4 Z" stroke={stroke} strokeWidth={sw} strokeLinejoin="round"/>
      <path d="M 6 20 L 14 12" stroke={stroke} strokeWidth={sw} strokeLinecap="round"/>
    </svg>
  );
  if (kind === 'grad') return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M 2 10 L 12 5 L 22 10 L 12 15 Z" stroke={stroke} strokeWidth={sw} strokeLinejoin="round"/>
      <path d="M 6 12 L 6 17 C 6 18, 9 19.5, 12 19.5 C 15 19.5, 18 18, 18 17 L 18 12" stroke={stroke} strokeWidth={sw} strokeLinejoin="round"/>
      <path d="M 22 10 L 22 15" stroke={stroke} strokeWidth={sw} strokeLinecap="round"/>
    </svg>
  );
  if (kind === 'pencil') return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="4" y="3" width="13" height="18" rx="2" stroke={stroke} strokeWidth={sw}/>
      <path d="M 8 7 L 13 7 M 8 11 L 13 11 M 8 15 L 11 15" stroke={stroke} strokeWidth={sw} strokeLinecap="round"/>
      <path d="M 17 5 L 20 8 L 17 11" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" fill={stroke} fillOpacity="0.2"/>
    </svg>
  );
  if (kind === 'smile') return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={stroke} strokeWidth={sw}/>
      <circle cx="9" cy="10" r="1" fill={stroke}/>
      <circle cx="15" cy="10" r="1" fill={stroke}/>
      <path d="M 8 14 C 9.5 16, 14.5 16, 16 14" stroke={stroke} strokeWidth={sw} strokeLinecap="round"/>
    </svg>
  );
  if (kind === 'tesla') return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M 5 4 L 19 4 L 16 7 L 13 7 L 13 20 L 11 20 L 11 7 L 8 7 Z"
        fill={stroke} stroke={stroke} strokeWidth="0.5" strokeLinejoin="round"/>
    </svg>
  );
  if (kind === 'book') return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M 4 5 C 4 4, 5 3, 6 3 L 11 3 L 11 19 L 6 19 C 5 19, 4 18, 4 17 Z" stroke={stroke} strokeWidth={sw} strokeLinejoin="round"/>
      <path d="M 20 5 C 20 4, 19 3, 18 3 L 13 3 L 13 19 L 18 19 C 19 19, 20 18, 20 17 Z" stroke={stroke} strokeWidth={sw} strokeLinejoin="round"/>
    </svg>
  );
  return null;
}

// Pattern stripes background — diagonal pastel
function StripePattern({ colors = ['#2BB8BC', '#E5217E', '#FFC93C'], size = 100, style = {} }) {
  const bands = colors.map((c, i) =>
    `${c} ${(i * 100 / colors.length).toFixed(1)}%, ${c} ${((i + 1) * 100 / colors.length).toFixed(1)}%`
  ).join(', ');
  return (
    <div style={{
      position: 'absolute',
      background: `repeating-linear-gradient(135deg, ${bands})`,
      backgroundSize: `${size}px ${size}px`,
      ...style
    }} />
  );
}

// Vertical color-stack ribbon — references cover's left "filmstrip"
function CoverRibbon({ height = 480, width = 32, style = {} }) {
  const colors = ['#FFC93C', '#F47C2C', '#E5217E', '#8B3F9C', '#2563EB', '#2BB8BC'];
  return (
    <div style={{
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      width,
      height,
      borderRadius: '0 6px 6px 0',
      overflow: 'hidden',
      ...style
    }}>
      {colors.map((c, i) => (
        <div key={i} style={{ flex: 1, background: c }} />
      ))}
    </div>
  );
}

Object.assign(window, {
  Brush, Blob, Heart, Star, Note, CurlMarks, Dashes, Underline,
  SectionIcon, StripePattern, CoverRibbon
});
