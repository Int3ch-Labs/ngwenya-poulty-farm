import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { getPublishedPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Farm Updates",
  description:
    "News, announcements, and stories from Ngwenyama Poultry Farm, posted by our team.",
};

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <>
      <PageHero
        eyebrow="Farm updates"
        title="News and stories from our team."
        description="Everything here is posted directly by Ngwenyama Poultry Farm from our admin portal — availability notices, farm stories, and announcements."
      />

      <section className="py-16">
        <div className="container-farm">
          {posts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-navy-900/20 py-20 text-center">
              <p className="font-display text-xl font-semibold text-navy-900">
                No updates yet
              </p>
              <p className="mt-2 text-sm text-ink-500">
                Check back soon — our team posts updates here regularly.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-navy-900/10">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group grid gap-3 py-8 first:pt-0 md:grid-cols-[10rem_1fr] md:gap-8"
                >
                  <p className="text-sm text-ink-500">
                    {new Date(post.date).toLocaleDateString("en-ZA", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wide text-rust-600">
                      {post.category}
                    </span>
                    <h2 className="mt-2 font-display text-2xl font-semibold text-navy-900 group-hover:text-rust-600">
                      {post.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-700">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
