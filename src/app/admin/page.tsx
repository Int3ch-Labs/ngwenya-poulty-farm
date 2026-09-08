"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Emblem from "@/components/Emblem";

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.get("username"),
          password: formData.get("password"),
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Sign in failed.");
      }

      router.push("/admin/dashboard");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign in failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-[calc(100vh-20rem)] items-center justify-center bg-navy-900 px-4 py-16">
      <div className="w-full max-w-sm rounded-2xl border border-gold-500/20 bg-navy-950 p-8 text-cream-100">
        <div className="flex justify-center">
          <Emblem className="h-14 w-14" />
        </div>
        <h1 className="mt-5 text-center font-display text-xl font-semibold">
          Admin portal
        </h1>
        <p className="mt-1 text-center text-sm text-cream-300/70">
          Sign in to post farm updates
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label htmlFor="username" className="block text-xs font-medium text-cream-300/80">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              autoComplete="username"
              className="mt-1.5 w-full rounded-lg border border-cream-100/20 bg-navy-900 px-4 py-2.5 text-sm text-cream-100 outline-none focus:border-gold-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-xs font-medium text-cream-300/80">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="mt-1.5 w-full rounded-lg border border-cream-100/20 bg-navy-900 px-4 py-2.5 text-sm text-cream-100 outline-none focus:border-gold-500"
            />
          </div>

          {error && (
            <p className="text-sm text-gold-300" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-gold-500 px-6 py-2.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-300 disabled:opacity-60"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-cream-300/50">
          Staff access only. Contact the farm owner if you need credentials.
        </p>
      </div>
    </div>
  );
}
