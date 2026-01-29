import Link from "next/link";
import { CaseStudy } from "@/content/caseStudies";

export function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${cs.slug}`}
      className={[
        "group block rounded-2xl border border-black/5 bg-white p-6",
        "transition-all hover:-translate-y-0.5 hover:border-black/10 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]",
        "focus:outline-none focus:ring-2 focus:ring-black/10",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <div className="text-lg font-medium tracking-tight">
            {cs.creatorName}
          </div>
          <div className="mt-1 text-sm text-black/55">{cs.storeName}</div>
        </div>

        <div className="text-right text-xs text-black/45">
          <div>{cs.platform}</div>
          <div className="mt-1">{cs.audienceApprox}</div>
        </div>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-black/70">
        {cs.summary}
      </p>

      <div className="mt-6 text-sm font-medium text-black/70 transition-colors group-hover:text-black">
        View case study <span aria-hidden>→</span>
      </div>
    </Link>
  );
}
