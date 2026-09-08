"use client";

import { useState, FormEvent } from "react";
import type { Post } from "@/lib/posts";

const categories = ["Announcement", "Farm Life", "Availability", "Community"];

export default function AdminPostForm({
  initialPost,
  onSaved,
  onCancel,
}: {
  initialPost?: Post;
  onSaved: () => void;
  onCancel?: () => void;
}) {
  const isEditing = Boolean(initialPost);
  const [title, setTitle] = useState(initialPost?.title || "");
  const [category, setCategory] = useState(initialPost?.category || categories[0]);
  const [excerpt, setExcerpt] = useState(initialPost?.excerpt || "");
  const [content, setContent] = useState(initialPost?.content || "");
  const [image, setImage] = useState(initialPost?.image || "");
  const [published, setPublished] = useState(initialPost?.published ?? true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setError("");

    const payload = { title, category, excerpt, content, image, published };

    try {
      const url = isEditing ? `/api/posts/${initialPost!.id}` : "/api/posts";
      const method = isEditing ? "PUT" : "POST";
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Could not save the post.");
      }

      onSaved();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not save the post.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-ink-700">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="mt-1.5 w-full rounded-lg border border-ink-500/25 bg-cream-100 px-3.5 py-2.5 text-sm outline-none focus:border-gold-500"
          placeholder="e.g. Fresh trays available this Saturday"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-medium text-ink-700">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-ink-500/25 bg-cream-100 px-3.5 py-2.5 text-sm outline-none focus:border-gold-500"
          >
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-ink-700">
            Image URL (optional)
          </label>
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-ink-500/25 bg-cream-100 px-3.5 py-2.5 text-sm outline-none focus:border-gold-500"
            placeholder="https://…"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-ink-700">
          Short summary
        </label>
        <textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          rows={2}
          className="mt-1.5 w-full rounded-lg border border-ink-500/25 bg-cream-100 px-3.5 py-2.5 text-sm outline-none focus:border-gold-500"
          placeholder="One or two sentences shown in the list and homepage preview. Leave blank to auto-generate from the full post."
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-ink-700">
          Full post
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={8}
          className="mt-1.5 w-full rounded-lg border border-ink-500/25 bg-cream-100 px-3.5 py-2.5 text-sm outline-none focus:border-gold-500"
          placeholder="Write the update here. Leave a blank line between paragraphs."
        />
      </div>

      <label className="flex items-center gap-2.5 text-sm text-ink-700">
        <input
          type="checkbox"
          checked={published}
          onChange={(e) => setPublished(e.target.checked)}
          className="h-4 w-4 rounded border-ink-500/40 accent-rust-600"
        />
        Published (visible to site visitors)
      </label>

      {error && <p className="text-sm text-rust-700" role="alert">{error}</p>}

      <div className="flex flex-wrap gap-3 pt-2">
        <button
          type="submit"
          disabled={saving}
          className="rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-cream-100 hover:bg-navy-800 disabled:opacity-60"
        >
          {saving ? "Saving…" : isEditing ? "Save changes" : "Publish update"}
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-full border border-ink-500/30 px-5 py-2.5 text-sm font-medium text-ink-700 hover:bg-cream-200"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
