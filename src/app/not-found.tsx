import Link from "next/link";
import Emblem from "@/components/Emblem";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-20rem)] flex-col items-center justify-center gap-6 bg-cream-100 px-4 py-24 text-center">
      <Emblem className="h-16 w-16" />
      <div>
        <h1 className="font-display text-3xl font-semibold text-navy-900">
          This page has flown the coop.
        </h1>
        <p className="mt-3 max-w-md text-sm text-ink-700">
          We couldn&apos;t find the page you were looking for. It may have moved,
          or the link might be out of date.
        </p>
      </div>
      <Link
        href="/"
        className="rounded-full bg-rust-600 px-6 py-3 text-sm font-semibold text-cream-100 hover:bg-rust-700"
      >
        Back to homepage
      </Link>
    </div>
  );
}
