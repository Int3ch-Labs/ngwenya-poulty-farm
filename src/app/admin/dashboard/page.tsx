"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { Post } from "@/lib/posts";
import AdminPostForm from "@/components/admin/AdminPostForm";

type View = { mode: "list" } | { mode: "create" } | { mode: "edit"; post: Post };

export default function AdminDashboardPage() {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [view, setView] = useState<View>({ mode: "list" });
  const [loadError, setLoadError] = useState("");

  const loadPosts = useCallback(async () => {
    try {
      const response = await fetch("/api/posts");
      if (!response.ok) throw new Error("Could not load posts.");
      const data = await response.json();
      setPosts(data.posts);
    } catch {
      setLoadError("Could not load your farm updates. Try refreshing the page.");
    }
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const response = await fetch("/api/posts");
        if (!response.ok) throw new Error("Could not load posts.");
        const data = await response.json();
        if (!cancelled) setPosts(data.posts);
      } catch {
        if (!cancelled) {
          setLoadError("Could not load your farm updates. Try refreshing the page.");
        }
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  async function handleDelete(id: string) {
    if (!confirm("Delete this update? This can't be undone.")) return;
    const response = await fetch(`/api/posts/${id}`, { method: "DELETE" });
    if (response.ok) {
      setPosts((prev) => prev?.filter((p) => p.id !== id) ?? null);
    }
  }

  async function handleTogglePublish(post: Post) {
    const response = await fetch(`/api/posts/${post.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ published: !post.published }),
    });
    if (response.ok) {
      const data = await response.json();
      setPosts((prev) => prev?.map((p) => (p.id === post.id ? data.post : p)) ?? null);
    }
  }

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin");
    router.refresh();
  }

  return (
    <div className="min-h-[calc(100vh-20rem)] bg-cream-200 py-12">
      <div className="container-farm">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-rust-600">
              Admin portal
            </p>
            <h1 className="mt-1 font-display text-2xl font-semibold text-navy-900 sm:text-3xl">
              Farm updates
            </h1>
          </div>
          <div className="flex gap-3">
            {view.mode === "list" && (
              <button
                onClick={() => setView({ mode: "create" })}
                className="rounded-full bg-rust-600 px-5 py-2.5 text-sm font-semibold text-cream-100 hover:bg-rust-700"
              >
                + New update
              </button>
            )}
            <button
              onClick={handleLogout}
              className="rounded-full border border-navy-900/20 px-5 py-2.5 text-sm font-medium text-ink-700 hover:bg-cream-100"
            >
              Sign out
            </button>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-navy-900/10 bg-cream-100 p-6 sm:p-8">
          {view.mode !== "list" ? (
            <>
              <h2 className="font-display text-lg font-semibold text-navy-900">
                {view.mode === "create" ? "New farm update" : "Edit farm update"}
              </h2>
              <div className="mt-6">
                <AdminPostForm
                  initialPost={view.mode === "edit" ? view.post : undefined}
                  onCancel={() => setView({ mode: "list" })}
                  onSaved={() => {
                    setView({ mode: "list" });
                    loadPosts();
                  }}
                />
              </div>
            </>
          ) : loadError ? (
            <p className="text-sm text-rust-700">{loadError}</p>
          ) : posts === null ? (
            <p className="text-sm text-ink-500">Loading your updates…</p>
          ) : posts.length === 0 ? (
            <div className="py-10 text-center">
              <p className="font-display text-lg font-semibold text-navy-900">
                No updates yet
              </p>
              <p className="mt-2 text-sm text-ink-500">
                Post your first farm update — customers will see it on the
                Farm Updates page as soon as it&apos;s published.
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-navy-900/10">
              {posts.map((post) => (
                <li key={post.id} className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="truncate font-display text-base font-semibold text-navy-900">
                        {post.title}
                      </h3>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          post.published
                            ? "bg-gold-100 text-rust-700"
                            : "bg-ink-500/10 text-ink-500"
                        }`}
                      >
                        {post.published ? "Published" : "Draft"}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-ink-500">
                      {post.category} ·{" "}
                      {new Date(post.date).toLocaleDateString("en-ZA", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="flex flex-shrink-0 flex-wrap gap-2">
                    <button
                      onClick={() => handleTogglePublish(post)}
                      className="rounded-full border border-navy-900/20 px-3.5 py-1.5 text-xs font-medium text-ink-700 hover:bg-cream-200"
                    >
                      {post.published ? "Unpublish" : "Publish"}
                    </button>
                    <button
                      onClick={() => setView({ mode: "edit", post })}
                      className="rounded-full border border-navy-900/20 px-3.5 py-1.5 text-xs font-medium text-ink-700 hover:bg-cream-200"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="rounded-full border border-rust-600/30 px-3.5 py-1.5 text-xs font-medium text-rust-700 hover:bg-rust-600/10"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
