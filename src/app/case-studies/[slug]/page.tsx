import { Container } from "@/components/Container";
import { caseStudies, getCaseStudyBySlug } from "@/content/caseStudies";
import { ButtonLink } from "@/components/ButtonLink";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cs = getCaseStudyBySlug(params.slug);
  if (!cs) return { title: "Case Study" };
  return {
    title: `${cs.creatorName} — ${cs.storeName}`,
    description: cs.summary,
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = getCaseStudyBySlug(params.slug);
  if (!cs) return notFound();

  return (
    <main className="py-20 sm:py-28">
      <Container>
        <div className="max-w-[860px]">
          <div className="text-xs tracking-wide text-black/50">CASE STUDY</div>
          <h1 className="mt-4 text-3xl font-medium tracking-tight sm:text-5xl">
            {cs.creatorName}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-black/60">
            <a
              href={cs.storeUrl}
              target="_blank"
              rel="noreferrer"
              className="text-black/70 hover:text-black"
            >
              {cs.storeName}
            </a>
            <span>•</span>
            <span>{cs.platform}</span>
            <span>•</span>
            <span>{cs.audienceApprox}</span>
          </div>

          {cs.statusNote ? (
            <div className="mt-6 rounded-xl border border-black/10 bg-black/[0.02] px-4 py-3 text-sm text-black/60">
              Note: {cs.statusNote}
            </div>
          ) : null}

          <p className="mt-10 text-base leading-relaxed text-black/70 sm:text-lg">
            {cs.summary}
          </p>

          <div className="mt-14 space-y-10">
            <section>
              <div className="text-sm font-medium">Overview</div>
              <p className="mt-3 text-sm leading-relaxed text-black/65">
                {cs.overview}
              </p>
            </section>

            <section>
              <div className="text-sm font-medium">Challenge</div>
              <p className="mt-3 text-sm leading-relaxed text-black/65">
                {cs.challenge}
              </p>
            </section>

            <section>
              <div className="text-sm font-medium">Solution</div>
              <ul className="mt-3 space-y-2 text-sm text-black/65">
                {cs.solution.map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
            </section>

            <section>
              <div className="text-sm font-medium">Outcome</div>
              <ul className="mt-3 space-y-2 text-sm text-black/65">
                {cs.outcome.map((o) => (
                  <li key={o}>• {o}</li>
                ))}
              </ul>
            </section>

            {(cs.productTypes || cs.audienceFocus || cs.visualIdentityNotes) ? (
              <section className="rounded-2xl border border-black/5 p-6 sm:p-8">
                <div className="text-sm font-medium">Notes</div>
                <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {cs.productTypes ? (
                    <div>
                      <div className="text-xs tracking-wide text-black/45">PRODUCT TYPES</div>
                      <div className="mt-2 text-sm text-black/65">
                        {cs.productTypes.join(", ")}
                      </div>
                    </div>
                  ) : null}
                  {cs.audienceFocus ? (
                    <div>
                      <div className="text-xs tracking-wide text-black/45">AUDIENCE</div>
                      <div className="mt-2 text-sm text-black/65">
                        {cs.audienceFocus}
                      </div>
                    </div>
                  ) : null}
                  {cs.visualIdentityNotes ? (
                    <div className="sm:col-span-2">
                      <div className="text-xs tracking-wide text-black/45">VISUAL IDENTITY</div>
                      <div className="mt-2 text-sm leading-relaxed text-black/65">
                        {cs.visualIdentityNotes}
                      </div>
                    </div>
                  ) : null}
                </div>
              </section>
            ) : null}

            <div className="pt-4">
              <ButtonLink href="/#case-studies">Back to case studies</ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
