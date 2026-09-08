"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Emblem from "./Emblem";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Our Eggs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Farm Updates" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-navy-900/10 bg-cream-100/90 backdrop-blur">
      <div className="container-farm flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Emblem className="h-11 w-11 shrink-0" />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold text-navy-900">
              Ngwenyama
            </span>
            <span className="text-[0.65rem] tracking-wide text-rust-600">
              Poultry Farm
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-8">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  active
                    ? "text-navy-900 font-semibold"
                    : "text-ink-700 hover:text-rust-600"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <a
            href="tel:+27726629295"
            className="rounded-full bg-rust-600 px-5 py-2.5 text-sm font-medium text-cream-100 transition-colors hover:bg-rust-700"
          >
            Call the farm
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-900/20 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-0.5 w-4 bg-navy-900 transition-transform ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-4 bg-navy-900 transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-4 bg-navy-900 transition-transform ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-navy-900/10 bg-cream-100 md:hidden">
          <nav className="container-farm flex flex-col gap-1 py-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm ${
                  pathname === link.href
                    ? "bg-navy-900/5 font-semibold text-navy-900"
                    : "text-ink-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+27726629295"
              className="mt-2 rounded-full bg-rust-600 px-4 py-2.5 text-center text-sm font-medium text-cream-100"
            >
              Call the farm
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
