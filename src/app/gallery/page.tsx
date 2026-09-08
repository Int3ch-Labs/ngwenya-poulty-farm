import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A look at life on Ngwenyama Poultry Farm.",
};

const gallery = [
  { title: "The coop at sunrise", tone: "bg-gold-100" },
  { title: "Morning feed round", tone: "bg-cream-300" },
  { title: "Fresh from the nest", tone: "bg-gold-100" },
  { title: "Sorting and checking", tone: "bg-cream-300" },
  { title: "Trays ready to go", tone: "bg-gold-100" },
  { title: "The flock at rest", tone: "bg-cream-300" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A look at life on the farm."
        description="Photos are added by our team from the admin portal. Here's a placeholder layout — swap in real farm photography any time from Farm Updates."
      />

      <section className="py-16">
        <div className="container-farm grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <div
              key={item.title}
              className={`flex aspect-[4/3] flex-col justify-end rounded-2xl ${item.tone} p-5`}
            >
              <p className="font-display text-base font-semibold text-navy-900">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
