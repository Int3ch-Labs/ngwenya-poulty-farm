export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-navy-900/10 bg-navy-900 py-16 text-cream-100">
      <div className="container-farm">
        <div className="flex items-center gap-3 text-sm text-gold-300">
          <span className="h-px w-8 bg-gold-500" />
          {eyebrow}
        </div>
        <h1 className="mt-4 max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream-200/85 sm:text-base">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
