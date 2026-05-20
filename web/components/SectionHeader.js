/**
 * SectionHeader
 * Props:
 *   title    {string}  – main section title
 *   subtitle {string}  – optional italic subtitle
 *   accent   {string}  – CSS colour value for the accent
 *   section  {string|number} – large background number/label
 */
export default function SectionHeader({ title, subtitle, accent = "#2BB8BC", section }) {
  return (
    <div className="relative mb-10 overflow-hidden">
      {/* Big background number */}
      {section && (
        <span
          className="section-num absolute -top-4 -left-2 select-none pointer-events-none"
          style={{ color: accent }}
          aria-hidden="true"
        >
          {section}
        </span>
      )}

      <div className="relative z-10 pt-2">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A2851] leading-tight"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          {title}
        </h1>

        {/* Accent rule */}
        <div
          className="mt-4 h-1 w-20 rounded-full"
          style={{ backgroundColor: accent }}
        />

        {/* Optional subtitle */}
        {subtitle && (
          <p
            className="mt-3 text-lg italic text-[#3D4B73]"
            style={{ fontFamily: "var(--font-lora, Georgia, serif)" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
