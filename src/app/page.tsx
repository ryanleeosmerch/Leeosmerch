import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeading } from "@/components/SectionHeading";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { caseStudies } from "@/content/caseStudies";

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-white">
        <Container>
          <div className="flex min-h-[88vh] flex-col justify-center py-20 sm:py-28">
            <div className="max-w-[820px]">
              <FadeIn>
                <h1 className="text-4xl font-medium tracking-tight sm:text-6xl">
                  Merchandise at creator scale
                </h1>
              </FadeIn>

              <FadeIn delay={0.08}>
                <p className="mt-6 text-base leading-relaxed text-black/65 sm:text-xl">
                  We manage end-to-end commerce operations for creators operating at serious scale—
                  quietly, professionally, and built to perform under pressure.
                </p>
              </FadeIn>

              <FadeIn delay={0.16}>
                <div className="mt-10">
                  <ButtonLink href="/#case-studies">View our work</ButtonLink>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-24 sm:py-32">
        <Container>
          <div className="flex items-end justify-between gap-10">
            <SectionHeading eyebrow="Proof" title="Case Studies">
              A small selection of creator commerce programs we’ve supported—designed for clarity, scale, and reliability.
            </SectionHeading>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2">
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.slug} cs={cs} />
            ))}
          </div>
        </Container>
      </section>

      {/* Services Preview */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-14 sm:grid-cols-12 sm:items-start">
            <div className="sm:col-span-5">
              <SectionHeading eyebrow="Capabilities" title="Everything required to run creator commerce—properly.">
                End-to-end operations, storefront execution, and fulfillment coordination—built for stability at volume.
              </SectionHeading>
            </div>

            <div className="sm:col-span-7">
              <div className="rounded-2xl border border-black/5 p-6 sm:p-8">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <div className="text-sm font-medium">End-to-end merch operations</div>
                    <div className="mt-2 text-sm text-black/60">
                      Systems and execution that hold up at scale.
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Store design & UX</div>
                    <div className="mt-2 text-sm text-black/60">
                      Minimal, conversion-focused storefronts.
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Fulfillment & logistics</div>
                    <div className="mt-2 text-sm text-black/60">
                      Reliable sourcing, production, and delivery coordination.
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Creator-focused strategy</div>
                    <div className="mt-2 text-sm text-black/60">
                      Merch built around audience behavior—not guesswork.
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <ButtonLink href="/services">Explore services</ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* About Preview */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="rounded-2xl border border-black/5 p-8 sm:p-12">
            <SectionHeading eyebrow="Approach" title="Built for creators who operate at scale.">
              We work behind the scenes with an execution-first mindset—discretion, operational excellence, and systems that stay reliable when demand spikes.
            </SectionHeading>

            <div className="mt-8">
              <ButtonLink href="/about">About Leeos Merch</ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="flex flex-col items-start justify-between gap-10 rounded-2xl border border-black/5 p-8 sm:flex-row sm:items-center sm:p-12">
            <div className="max-w-[680px]">
              <div className="text-xs tracking-wide text-black/50">NEXT</div>
              <div className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">
                Serious inquiries only.
              </div>
              <p className="mt-4 text-base leading-relaxed text-black/65">
                If you’re operating at real scale and need a partner that can execute quietly and consistently, we should talk.
              </p>
            </div>

            <div className="shrink-0">
              <ButtonLink href="/contact">Contact</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
