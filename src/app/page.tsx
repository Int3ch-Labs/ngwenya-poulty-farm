import Link from "next/link";
import Emblem from "@/components/Emblem";
import { getPublishedPosts } from "@/lib/posts";

export default async function HomePage() {
  const posts = (await getPublishedPosts()).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 text-cream-100">
        <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full border border-gold-500/20 md:h-[28rem] md:w-[28rem]" />
        <div className="pointer-events-none absolute -right-6 top-32 h-40 w-40 rounded-full border border-gold-500/30 md:h-64 md:w-64" />

        <div className="container-farm relative grid gap-12 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-24">
          <div>
            <div className="flex items-center gap-3 text-sm text-gold-300">
              <span className="h-px w-8 bg-gold-500" />
              Est. family-run poultry farm
            </div>
            <h1 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-[1.1] text-cream-100 sm:text-5xl">
              Fresh eggs, raised with patience, for your family&apos;s table.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream-200/85">
              Ngwenyama Poultry Farm delivers fresh, healthy eggs for your
              family&apos;s nourishment. Stop thinking and start doing —
              remember, good things come with patience.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <span className="rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-2 text-sm text-gold-200">
                Fresh egg production
              </span>
              <span className="rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-2 text-sm text-gold-200">
                Quality checked daily
              </span>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-300"
              >
                See our eggs
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-cream-100/30 px-6 py-3 text-sm font-medium text-cream-100 transition-colors hover:border-gold-500 hover:text-gold-300"
              >
                Contact the farm
              </Link>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-xs items-center justify-center md:max-w-none">
            <div className="relative aspect-square w-full max-w-sm rounded-full border border-gold-500/30 bg-navy-800/60 p-8">
              <div className="flex h-full w-full items-center justify-center rounded-full border border-gold-500/40 bg-navy-950">
                <Emblem className="h-32 w-32" />
              </div>
              <div className="absolute -bottom-3 left-1/2 w-56 -translate-x-1/2 rounded-2xl border border-gold-500/30 bg-navy-950 px-5 py-3 text-center shadow-xl">
                <p className="font-display text-lg font-semibold text-gold-300">
                  072 662 9295
                </p>
                <p className="text-xs text-cream-300/70">Call or WhatsApp us</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-navy-900/10 bg-cream-200">
        <div className="container-farm grid grid-cols-2 gap-6 py-8 text-center sm:grid-cols-4">
          {[
            { value: "Daily", label: "Egg collection" },
            { value: "Farm-fresh", label: "No middlemen" },
            { value: "Hand-checked", label: "Every tray" },
            { value: "Local", label: "Family owned" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-lg font-semibold text-navy-900">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-ink-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container-farm grid gap-12 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <span className="text-sm font-medium text-rust-600">Our story</span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
              A farm built on patience, care, and consistency.
            </h2>
            <div className="prose-farm mt-5 max-w-md text-ink-700">
              <p>
                Ngwenyama Poultry Farm started with a simple belief: good
                things come with patience. That philosophy shapes how we
                raise our hens, how we collect and check every egg, and how
                we treat every family who trusts us for their groceries.
              </p>
              <p>
                Every tray that leaves our farm has been handled by people who
                live here, work here, and care about getting it right.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-rust-600"
            >
              Read more about our farm
              <span aria-hidden>›</span>
            </Link>
          </div>
          <div className="order-1 flex justify-center md:order-2">
            <div className="relative flex aspect-square w-full max-w-sm items-center justify-center rounded-full bg-gold-100">
              <div className="flex aspect-square w-4/5 items-center justify-center rounded-full border-2 border-dashed border-gold-500/50">
                <p className="max-w-[10rem] text-center font-display text-xl italic text-rust-600">
                  Raised with care, every single day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="bg-navy-950 py-20 text-cream-100">
        <div className="container-farm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-sm font-medium text-gold-300">What we offer</span>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                From our hens to your kitchen.
              </h2>
            </div>
            <Link
              href="/products"
              className="text-sm font-semibold text-gold-300 hover:text-gold-100"
            >
              View all our eggs ›
            </Link>
          </div>

          <div className="mt-12 grid gap-0 md:grid-cols-3">
            {[
              {
                title: "Fresh egg production",
                copy: "Eggs collected daily and checked before they leave the farm.",
              },
              {
                title: "Quality eggs",
                copy: "Firm whites, rich yolks — the difference patience makes.",
              },
              {
                title: "Trusted service",
                copy: "A family farm that answers the phone and stands by its word.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`border-t border-cream-100/15 py-8 pr-8 md:border-t-0 md:border-l md:py-2 md:pl-8 ${
                  i === 0 ? "md:border-l-0 md:pl-0" : ""
                }`}
              >
                <h3 className="font-display text-xl font-semibold text-cream-100">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-300/80">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest updates */}
      {posts.length > 0 && (
        <section className="py-20">
          <div className="container-farm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="text-sm font-medium text-rust-600">From the farm</span>
                <h2 className="mt-3 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
                  Latest updates
                </h2>
              </div>
              <Link
                href="/blog"
                className="text-sm font-semibold text-navy-900 hover:text-rust-600"
              >
                All updates ›
              </Link>
            </div>

            <div className="feather-divider mt-8" />

            <div className="mt-8 grid gap-10 md:grid-cols-2">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <span className="text-xs font-medium uppercase tracking-wide text-rust-600">
                    {post.category}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-navy-900 group-hover:text-rust-600">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-700">
                    {post.excerpt}
                  </p>
                  <p className="mt-4 text-xs text-ink-500">
                    {new Date(post.date).toLocaleDateString("en-ZA", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="bg-rust-600 py-16 text-cream-100">
        <div className="container-farm flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl font-display text-3xl font-semibold sm:text-4xl">
            Have a question about our eggs or the farm?
          </h2>
          <p className="max-w-md text-sm text-cream-100/85">
            Call, WhatsApp, or send us a message — our team is happy to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+27726629295"
              className="rounded-full bg-cream-100 px-6 py-3 text-sm font-semibold text-rust-700 hover:bg-cream-200"
            >
              072 662 9295
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-cream-100/50 px-6 py-3 text-sm font-medium hover:border-cream-100"
            >
              Send a message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
