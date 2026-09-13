"use client";

import { useRef, useState, FormEvent, ChangeEvent, DragEvent } from "react";
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
  const [showExcerpt, setShowExcerpt] = useState(Boolean(initialPost?.excerpt));
  const [showUrlField, setShowUrlField] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function readFileAsDataUrl(file: File) {
    if (!file.type.startsWith("image/")) {
      setError("That file isn't an image.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError("Images must be under 5MB.");
      return;
    }
    setError("");
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result as string);
    reader.readAsDataURL(file);
  }

  function handleFileInput(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) readFileAsDataUrl(file);
    e.target.value = "";
  }

  function handleDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) readFileAsDataUrl(file);
  }

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
    <form
      onSubmit={handleSubmit}
      className="overflow-hidden rounded-2xl border border-ink-500/15 bg-cream-100 shadow-sm"
    >
      {/* Header: avatar + title + audience */}
      <div className="flex items-center justify-between gap-3 border-b border-ink-500/10 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900 text-sm font-semibold text-cream-100">
            🌾
          </div>
          <div>
            <p className="text-sm font-semibold text-ink-900">
              {isEditing ? "Edit update" : "Share an update"}
            </p>
            <p className="text-xs text-ink-700/70">Posts to the farm feed</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setPublished((p) => !p)}
          className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition ${
            published
              ? "border-gold-500/60 bg-gold-500/10 text-gold-700"
              : "border-ink-500/25 bg-cream-200 text-ink-700"
          }`}
          title={published ? "Visible to site visitors" : "Saved as a draft"}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${published ? "bg-gold-600" : "bg-ink-500/50"}`} />
          {published ? "Public" : "Draft"}
        </button>
      </div>

      <div className="space-y-4 px-5 py-4">
        {/* Title */}
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full border-none bg-transparent text-lg font-semibold text-ink-900 outline-none placeholder:text-ink-700/40"
          placeholder="Give this update a title"
        />

        {/* Category chips */}
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                category === c
                  ? "bg-navy-900 text-cream-100"
                  : "bg-cream-200 text-ink-700 hover:bg-cream-300"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Main "what's on your mind" body */}
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={5}
          className="w-full resize-none border-none bg-transparent text-[15px] leading-relaxed text-ink-900 outline-none placeholder:text-ink-700/40"
          placeholder="What's happening on the farm? Leave a blank line between paragraphs."
        />

        {/* Optional excerpt, tucked away like FB's extra options */}
        {showExcerpt ? (
          <div>
            <div className="mb-1 flex items-center justify-between">
              <label className="text-xs font-medium text-ink-700">Short summary</label>
              <button
                type="button"
                onClick={() => {
                  setShowExcerpt(false);
                  setExcerpt("");
                }}
                className="text-xs text-ink-700/60 hover:text-rust-700"
              >
                Remove
              </button>
            </div>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={2}
              className="w-full rounded-lg border border-ink-500/25 bg-cream-200/60 px-3.5 py-2.5 text-sm outline-none focus:border-gold-500"
              placeholder="Shown in the list and homepage preview instead of the full post."
            />
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setShowExcerpt(true)}
            className="text-xs font-medium text-navy-800 hover:underline"
          >
            + Add a custom summary
          </button>
        )}

        {/* Image upload / preview */}
        {image ? (
          <div className="relative overflow-hidden rounded-xl border border-ink-500/15">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt="Post" className="max-h-80 w-full object-cover" />
            <button
              type="button"
              onClick={() => setImage("")}
              className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-ink-900/70 text-cream-100 hover:bg-ink-900"
              aria-label="Remove image"
            >
              ✕
            </button>
          </div>
        ) : (
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed px-4 py-8 text-center transition ${
              isDragging
                ? "border-gold-500 bg-gold-500/10"
                : "border-ink-500/20 bg-cream-200/50 hover:bg-cream-200"
            }`}
          >
            <span className="text-2xl">📷</span>
            <p className="text-sm font-medium text-ink-700">
              Click to add a photo, or drag one here
            </p>
            <p className="text-xs text-ink-700/60">PNG or JPG, up to 5MB</p>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileInput}
              className="hidden"
            />
          </div>
        )}

        {!image && (
          <div>
            {showUrlField ? (
              <input
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="mt-1 w-full rounded-lg border border-ink-500/25 bg-cream-200/60 px-3.5 py-2 text-sm outline-none focus:border-gold-500"
                placeholder="https://…"
                autoFocus
              />
            ) : (
              <button
                type="button"
                onClick={() => setShowUrlField(true)}
                className="text-xs font-medium text-navy-800 hover:underline"
              >
                or paste an image URL instead
              </button>
            )}
          </div>
        )}

        {error && (
          <p className="text-sm text-rust-700" role="alert">
            {error}
          </p>
        )}
      </div>

      {/* Footer actions */}
      <div className="flex flex-wrap items-center justify-end gap-3 border-t border-ink-500/10 bg-cream-200/40 px-5 py-3">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-full border border-ink-500/30 px-5 py-2.5 text-sm font-medium text-ink-700 hover:bg-cream-200"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          disabled={saving}
          className="rounded-full bg-navy-900 px-6 py-2.5 text-sm font-semibold text-cream-100 hover:bg-navy-800 disabled:opacity-60"
        >
          {saving ? "Saving…" : isEditing ? "Save changes" : "Publish update"}
        </button>
      </div>
    </form>
  );
}