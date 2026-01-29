import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/ButtonLink";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Complete creator commerce operations: store UX, fulfillment coordination, and strategy.",
};

const items = [
  {
    title: "End-to-end merch operations",
    desc: "Operational execution designed to stay stable at volume—processes, systems, and ongoing support.",
  },
  {
    title: "Store design & UX",
    desc: "Minimal storefront experiences built for clarity, conversion, and maintainability.",
  },
  {
    title: "Fulfillment & logistics",
    desc: "Sourcing, production, shipping, and customer experience coordination across a reliable pipeline.",
  },
  {
    title: "Creator-focused strategy",
    desc: "Merch programs shaped by audience behavior, release cadence, and brand positioning.",
  },
];

export default function ServicesPage() {
  return (
    <main className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Services" title="Complete creator commerce operations.">
          Everything required to build, run, and scale creator merchandise—without noise.
        </SectionHeading>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl border border-black/5 p-6 sm:p-8">
              <div className="text-base font-medium tracking-tight">{i.title}</div>
              <p className="mt-3 text-sm leading-relaxed text-black/65">{i.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <ButtonLink href="/contact">Start a conversation</ButtonLink>
        </div>
      </Container>
    </main>
  );
}
