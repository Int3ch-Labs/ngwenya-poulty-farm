import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Ngwenyama Poultry Farm by phone, WhatsApp, or our contact form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="We're a call, message, or visit away."
        description="We don't process orders online, so the fastest way to reach us is by phone or WhatsApp. You can also leave a message below and we'll get back to you."
      />

      <section className="py-16">
        <div className="container-farm grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy-900">
              Reach us directly
            </h2>
            <ul className="mt-6 space-y-5 text-sm text-ink-700">
              <li>
                <span className="block text-xs font-medium uppercase tracking-wide text-rust-600">
                  Phone
                </span>
                <a href="tel:+27726629295" className="mt-1 block font-display text-lg text-navy-900">
                  072 662 9295
                </a>
              </li>
              <li>
                <span className="block text-xs font-medium uppercase tracking-wide text-rust-600">
                  Alternative line
                </span>
                <a href="tel:+27676156699" className="mt-1 block font-display text-lg text-navy-900">
                  067 615 6699
                </a>
              </li>
              <li>
                <span className="block text-xs font-medium uppercase tracking-wide text-rust-600">
                  Social
                </span>
                <p className="mt-1">Facebook: Ngwenyama Poultry Farm</p>
                <p>Instagram: @ngwenyama_poultry_farm</p>
              </li>
            </ul>

            <div className="feather-divider mt-8" />

            <p className="mt-6 text-sm text-ink-500">
              Our team typically responds within one business day. For same-day
              collection enquiries, calling is always fastest.
            </p>
          </div>

          <div className="rounded-2xl border border-navy-900/10 bg-cream-200 p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
