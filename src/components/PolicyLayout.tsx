import Link from "next/link";

const policyLinks = [
  { href: "/policies/privacy-policy", label: "Privacy policy" },
  { href: "/policies/terms-of-service", label: "Terms of service" },
  { href: "/policies/cookie-policy", label: "Cookie policy" },
  { href: "/policies/food-safety-policy", label: "Food safety & quality" },
];

export default function PolicyLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-cream-100 py-16">
      <div className="container-farm grid gap-12 lg:grid-cols-[15rem_1fr]">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-medium uppercase tracking-wide text-rust-600">
            Policies
          </p>
          <nav className="mt-4 flex flex-col gap-1">
            {policyLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-ink-700 hover:bg-cream-200 hover:text-navy-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </aside>

        <article className="max-w-2xl">
          <h1 className="font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 text-sm text-ink-500">Last updated: {lastUpdated}</p>
          <div className="feather-divider mt-6" />
          <div className="prose-farm mt-8 space-y-8 text-sm leading-relaxed text-ink-700 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-navy-900 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_li]:leading-relaxed">
            {children}
          </div>
        </article>
      </div>
    </div>
  );
}
