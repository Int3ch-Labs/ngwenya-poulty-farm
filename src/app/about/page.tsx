import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Ngwenyama Poultry Farm, our values, and how we raise healthy hens to deliver fresh eggs.",
};

const values = [
  {
    title: "Patience",
    copy: "Good things come with patience. We don't rush the hens, and we don't cut corners on care.",
  },
  {
    title: "Cleanliness",
    copy: "Clean coops and clean hands, every day. It's the quiet work that keeps our eggs safe to eat.",
  },
  {
    title: "Honesty",
    copy: "What we tell you about our eggs is what you'll find in the tray — nothing dressed up.",
  },
  {
    title: "Community",
    copy: "We're part of the neighbourhood we serve, and we treat every customer like a neighbour.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Stop thinking and start doing — remember, good things come with patience."
        description="That's the motto stitched into everything we do at Ngwenyama Poultry Farm, from how we raise our hens to how a tray of eggs reaches your door."
      />

      <section className="py-16">
        <div className="container-farm grid gap-12 md:grid-cols-2">
          <div className="prose-farm max-w-lg text-ink-700">
            <h2 className="font-display text-2xl font-semibold text-navy-900">
              How we started
            </h2>
            <p>
              Ngwenyama Poultry Farm began as a small family operation with a
              simple goal: give local families access to genuinely fresh
              eggs, raised without shortcuts. Over time, that goal hasn&apos;t
              changed — only the number of families we&apos;re able to serve.
            </p>
            <p>
              Every hen on our farm is looked after daily. Feed, water, and
              coop conditions are checked morning and evening, because a
              healthy hen is the only way to a genuinely good egg.
            </p>
          </div>
          <div className="prose-farm max-w-lg text-ink-700">
            <h2 className="font-display text-2xl font-semibold text-navy-900">
              How we work today
            </h2>
            <p>
              Eggs are collected daily, checked by hand for size and quality,
              and stored properly before they&apos;re made available to
              customers. We keep our operation small enough that we can still
              vouch personally for every tray that leaves the farm.
            </p>
            <p>
              We don&apos;t currently sell online — instead, we keep our
              customers updated through this website and our social pages,
              and we&apos;re always a phone call away.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream-200 py-16">
        <div className="container-farm">
          <span className="text-sm font-medium text-rust-600">What guides us</span>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-navy-900">
            Our values
          </h2>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="border-l-2 border-gold-500 pl-5">
                <h3 className="font-display text-lg font-semibold text-navy-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">
                  {value.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
