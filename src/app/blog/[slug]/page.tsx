import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getPublishedPosts } from "@/lib/posts";

export const dynamic = "force-dynamic";

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Update not found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || !post.published) {
    notFound();
  }

  const related = (await getPublishedPosts())
    .filter((p) => p.id !== post.id)
    .slice(0, 2);

  return (
    <article className="py-16">
      <div className="container-farm max-w-2xl">
        <Link href="/blog" className="text-sm font-semibold text-rust-600 hover:text-rust-700">
          ‹ All farm updates
        </Link>

        <span className="mt-6 block text-xs font-medium uppercase tracking-wide text-rust-600">
          {post.category}
        </span>
        <h1 className="mt-2 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-3 text-sm text-ink-500">
          {new Date(post.date).toLocaleDateString("en-ZA", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}{" "}
          · {post.author}
        </p>

        <div className="feather-divider mt-8" />

        <div className="prose-farm mt-8 text-base leading-relaxed text-ink-700">
          {post.content.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>

      {related.length > 0 && (
        <div className="container-farm mt-16 max-w-2xl border-t border-navy-900/10 pt-10">
          <h2 className="font-display text-lg font-semibold text-navy-900">
            More from the farm
          </h2>
          <div className="mt-5 grid gap-6 sm:grid-cols-2">
            {related.map((item) => (
              <Link
                key={item.id}
                href={`/blog/${item.slug}`}
                className="group block"
              >
                <h3 className="font-display text-base font-semibold text-navy-900 group-hover:text-rust-600">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm text-ink-500 line-clamp-2">
                  {item.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
