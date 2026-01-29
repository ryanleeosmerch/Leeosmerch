"use client";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { TextArea, TextInput } from "@/components/FormInput";
import { useMemo, useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  // Replace with real endpoint (e.g. /api/contact) later.
  const canSubmit = useMemo(() => status !== "sending", [status]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSubmit) return;

    setStatus("sending");
    // Simulate send; wire to your backend provider later.
    await new Promise((r) => setTimeout(r, 600));
    setStatus("sent");
  }

  return (
    <main className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Contact" title="Serious inquiries only.">
          If you’re operating at real scale and need a partner built for execution, send a note.
        </SectionHeading>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:mt-16 sm:grid-cols-12">
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-black/5 p-6 sm:col-span-7 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs text-black/60">Name</label>
                <TextInput name="name" required placeholder="Your name" />
              </div>
              <div>
                <label className="mb-2 block text-xs text-black/60">Email</label>
                <TextInput name="email" type="email" required placeholder="you@company.com" />
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs text-black/60">Creator / Agency</label>
                <TextInput name="org" placeholder="Creator or agency name" />
              </div>
              <div>
                <label className="mb-2 block text-xs text-black/60">Audience size (optional)</label>
                <TextInput name="audience" placeholder="e.g. 5M on TikTok" />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-xs text-black/60">Message</label>
              <TextArea name="message" required placeholder="Tell us what you're building and what you need help with." />
            </div>

            <button
              type="submit"
              disabled={!canSubmit}
              className={[
                "mt-6 inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-medium",
                "border border-black/10 bg-black text-white transition-opacity",
                "hover:opacity-90 disabled:opacity-50",
              ].join(" ")}
            >
              {status === "idle" && "Get in touch"}
              {status === "sending" && "Sending…"}
              {status === "sent" && "Sent"}
            </button>

            {status === "sent" ? (
              <p className="mt-4 text-sm text-black/60">
                Thanks—your message is in. We review inquiries carefully.
              </p>
            ) : null}
          </form>

          <aside className="sm:col-span-5">
            <div className="rounded-2xl border border-black/5 p-6 sm:p-8">
              <div className="text-sm font-medium">What to include</div>
              <ul className="mt-4 space-y-3 text-sm text-black/65">
                <li>• Platform and audience size</li>
                <li>• Current merch setup (if any)</li>
                <li>• Launch cadence / drop frequency</li>
                <li>• Operational pain points</li>
              </ul>
              <div className="mt-7 text-xs text-black/45">
                We keep conversations direct and discreet.
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}
