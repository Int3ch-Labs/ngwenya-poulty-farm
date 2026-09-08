"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          contact: formData.get("contact"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-gold-500/40 bg-gold-100 p-8 text-center">
        <p className="font-display text-xl font-semibold text-navy-900">
          Message sent.
        </p>
        <p className="mt-2 text-sm text-ink-700">
          Thank you for reaching out — our team will get back to you soon.
          For anything urgent, call us on 072 662 9295.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-semibold text-rust-600 hover:text-rust-700"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink-900">
          Your name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1.5 w-full rounded-lg border border-ink-500/25 bg-cream-100 px-4 py-2.5 text-sm text-ink-900 outline-none focus:border-gold-500"
          placeholder="e.g. Thabo Mokoena"
        />
      </div>

      <div>
        <label htmlFor="contact" className="block text-sm font-medium text-ink-900">
          Phone or email
        </label>
        <input
          id="contact"
          name="contact"
          type="text"
          required
          className="mt-1.5 w-full rounded-lg border border-ink-500/25 bg-cream-100 px-4 py-2.5 text-sm text-ink-900 outline-none focus:border-gold-500"
          placeholder="How should we reach you?"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink-900">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1.5 w-full rounded-lg border border-ink-500/25 bg-cream-100 px-4 py-2.5 text-sm text-ink-900 outline-none focus:border-gold-500"
          placeholder="Tell us what you need — number of trays, questions about the farm, anything else."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-rust-700" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-rust-600 px-6 py-3 text-sm font-semibold text-cream-100 transition-colors hover:bg-rust-700 disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
