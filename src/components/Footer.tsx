import Link from "next/link";
import Emblem from "./Emblem";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-cream-200">
      <div className="container-farm grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Emblem className="h-10 w-10" />
            <span className="font-display text-lg font-semibold text-cream-100">
              Ngwenyama Poultry Farm
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-cream-300/80">
            Stop thinking and start doing — remember, good things come with
            patience. Fresh eggs, raised with care, delivered to your family&apos;s
            table.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://facebook.com"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-100/20 text-sm hover:border-gold-500 hover:text-gold-300"
              aria-label="Ngwenyama Poultry Farm on Facebook"
            >
              f
            </a>
            <a
              href="https://instagram.com"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-100/20 text-sm hover:border-gold-500 hover:text-gold-300"
              aria-label="Ngwenyama Poultry Farm on Instagram"
            >
              ig
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-gold-300">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-cream-300/80">
            <li><Link href="/about" className="hover:text-cream-100">About the farm</Link></li>
            <li><Link href="/products" className="hover:text-cream-100">Our eggs</Link></li>
            <li><Link href="/gallery" className="hover:text-cream-100">Gallery</Link></li>
            <li><Link href="/blog" className="hover:text-cream-100">Farm updates</Link></li>
            <li><Link href="/contact" className="hover:text-cream-100">Contact us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-gold-300">
            Policies
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-cream-300/80">
            <li><Link href="/policies/privacy-policy" className="hover:text-cream-100">Privacy policy</Link></li>
            <li><Link href="/policies/terms-of-service" className="hover:text-cream-100">Terms of service</Link></li>
            <li><Link href="/policies/cookie-policy" className="hover:text-cream-100">Cookie policy</Link></li>
            <li><Link href="/policies/food-safety-policy" className="hover:text-cream-100">Food safety & quality</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-gold-300">
            Contact
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-cream-300/80">
            <li><a href="tel:+27726629295" className="hover:text-cream-100">072 662 9295</a></li>
            <li><a href="tel:+27676156699" className="hover:text-cream-100">067 615 6699</a></li>
            <li className="text-cream-300/60">South Africa</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream-100/10">
        <div className="container-farm flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream-300/60 md:flex-row">
          <p>© {new Date().getFullYear()} Ngwenyama Poultry Farm. All rights reserved.</p>
          <Link href="/admin" className="hover:text-cream-100">
            Admin portal
          </Link>
        </div>
      </div>
    </footer>
  );
}
