import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Our Eggs",
  description:
    "See what Ngwenyama Poultry Farm produces and how to get in touch to enquire about fresh eggs.",
};

const products = [
  {
    name: "Large brown eggs",
    copy: "Our most popular tray — a steady size for everyday cooking and baking.",
    tags: ["Daily collection", "Hand-sorted"],
  },
  {
    name: "Extra-large eggs",
    copy: "Bigger yolks for bakers and kitchens that go through eggs quickly.",
    tags: ["Hand-sorted", "Limited daily stock"],
  },
  {
    name: "Mixed farm trays",
    copy: "A mix of sizes straight from the coop, at a friendlier price point.",
    tags: ["Best value", "While stocks last"],
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our eggs"
        title="Fresh, healthy eggs for your family's nourishment."
        description="We don't sell online — availability changes daily with what our hens produce. Call or WhatsApp us to check what's ready for collection."
      />

      <section className="py-16">
        <div className="container-farm grid gap-10 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="flex flex-col border-t-2 border-gold-500 pt-6"
            >
              <h2 className="font-display text-xl font-semibold text-navy-900">
                {product.name}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">
                {product.copy}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-cream-200 px-3 py-1 text-xs text-ink-700"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy-900 py-16 text-cream-100">
        <div className="container-farm flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Want to enquire about today&apos;s eggs?
            </h2>
            <p className="mt-3 max-w-md text-sm text-cream-200/85">
              We take enquiries by phone, WhatsApp, or our contact form —
              tell us how many trays you need and we&apos;ll let you know what&apos;s
              available.
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-wrap gap-4">
            <a
              href="tel:+27726629295"
              className="rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 hover:bg-gold-300"
            >
              072 662 9295
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-cream-100/40 px-6 py-3 text-sm font-medium hover:border-gold-500 hover:text-gold-300"
            >
              Contact form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
