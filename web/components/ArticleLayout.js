/**
 * ArticleLayout
 * Props:
 *   children  {ReactNode}
 *   accent    {string}  – CSS colour for decorative accents (default teal)
 */
export default function ArticleLayout({ children, accent = "#2BB8BC" }) {
  return (
    <article
      className="max-w-3xl mx-auto px-4 sm:px-6 py-12"
      style={{
        "--article-accent": accent,
      }}
    >
      {/* Decorative top bar */}
      <div
        className="h-1 w-full rounded-full mb-10 opacity-30"
        style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
      />

      <div className="prose-magazine">{children}</div>

      {/* Decorative bottom bar */}
      <div
        className="h-px w-full mt-10 opacity-20"
        style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
      />
    </article>
  );
}
