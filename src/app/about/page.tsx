import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "An execution-first agency built for creators operating at serious scale.",
};

export default function AboutPage() {
  return (
    <main className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="About" title="Built for creators who operate at scale.">
          Leeos Merch partners with creators and teams who need commerce execution that holds up—systems, discretion, and reliable delivery under pressure.
        </SectionHeading>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-12">
          <div className="rounded-2xl border border-black/5 p-6 sm:col-span-5 sm:p-8">
            <div className="text-sm font-medium">Our focus</div>
            <p className="mt-3 text-sm leading-relaxed text-black/65">
              Execution excellence over hype. Clear structure, modern UX, and operational durability.
            </p>
          </div>

          <div className="rounded-2xl border border-black/5 p-6 sm:col-span-7 sm:p-8">
            <div className="text-sm font-medium">How we work</div>
            <p className="mt-3 text-sm leading-relaxed text-black/65">
              We keep communication direct, deliver consistently, and build scalable foundations for future launches and collections.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-black/65">
              Trust matters at scale—so we prioritize discretion and clean execution.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
