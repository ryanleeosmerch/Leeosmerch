export type Platform = "YouTube" | "TikTok";

export type CaseStudy = {
  slug: string;
  creatorName: string;
  storeName: string;
  storeUrl: string;
  platform: Platform;
  audienceApprox: string; // keep qualitative
  summary: string;

  overview: string;
  challenge: string;
  solution: string[];
  outcome: string[];

  // optional extras for richer pages later
  productTypes?: string[];
  audienceFocus?: string;
  visualIdentityNotes?: string;
  leeoContributions?: string[];
  statusNote?: string; // e.g. offline
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "rubius-madkat",
    creatorName: "Rubius",
    storeName: "Madkat.store",
    storeUrl: "https://madkat.store",
    platform: "YouTube",
    audienceApprox: "~40M subscribers",
    summary:
      "High-volume merch operations built for one of the largest audiences on YouTube—clean UX and reliable fulfillment at scale.",
    overview:
      "Madkat supports a global creator audience with merch that needs to stay consistent across launches, restocks, and high-traffic moments.",
    challenge:
      "Maintain brand consistency and operational reliability while supporting large demand spikes and ongoing releases.",
    solution: [
      "Store setup and optimization for clarity and conversion",
      "Merch sourcing and fulfillment coordination",
      "Operational systems to support peak traffic and sustained volume",
      "Ongoing iteration and maintenance for stability and performance",
    ],
    outcome: [
      "A stable storefront experience designed for large audiences",
      "Operational confidence during high-demand release windows",
      "A scalable foundation for future drops and expansions",
    ],
    productTypes: ["Apparel", "Accessories", "Limited drops"],
    audienceFocus: "Global YouTube audience",
    visualIdentityNotes:
      "Bold merch feel with creator-aligned graphics, optimized to remain legible and recognizable across product categories.",
  },
  {
    slug: "vegetta777-shop",
    creatorName: "Vegetta777",
    storeName: "Vegetta777.shop",
    storeUrl: "https://vegetta777.shop",
    platform: "YouTube",
    audienceApprox: "~35M subscribers",
    summary:
      "Scalable commerce systems supporting a long-running creator brand—built for longevity, not trends.",
    overview:
      "A creator brand with a multi-year relationship to its audience requires reliable execution and consistent presentation.",
    challenge:
      "Balance brand continuity with a store experience that remains modern, fast, and operationally dependable.",
    solution: [
      "Store UX structure designed for ease and speed",
      "Merch execution support across product and logistics",
      "Systems and routines that reduce operational friction",
      "Ongoing refinements to keep the experience current",
    ],
    outcome: [
      "A dependable merch operation aligned to a long-term brand",
      "Cleaner navigation and product presentation",
      "Operational readiness for launches and restocks",
    ],
    productTypes: ["Apparel", "Collectibles", "Bundles"],
    audienceFocus: "YouTube community built over years",
  },
  {
    slug: "adri-contreras-el-barrio",
    creatorName: "Adri Contreras",
    storeName: "El Barrio",
    storeUrl: "https://elbarrioklk.com",
    platform: "TikTok",
    audienceApprox: "~5M followers",
    summary:
      "Streetwear-driven drops designed for a fast-moving social audience—tight UX, drop-ready structure, clean presentation.",
    overview:
      "El Barrio is positioned around a streetwear sensibility and social-first launch moments where speed and clarity matter.",
    challenge:
      "Move quickly across drops while keeping the store cohesive and the operation dependable.",
    solution: [
      "Brand-aligned store design for a premium streetwear feel",
      "Drop-ready product organization and merchandising patterns",
      "Fulfillment coordination to maintain a consistent experience",
      "Lightweight iteration cadence aligned with social cycles",
    ],
    outcome: [
      "A storefront built to support rapid drop cycles",
      "Clear product hierarchy that matches audience behavior",
      "A scalable setup for future collections",
    ],
    productTypes: ["Streetwear apparel", "Caps", "Limited releases"],
    audienceFocus: "Social-first TikTok audience",
  },
  {
    slug: "auronplay-auronhouse",
    creatorName: "Auronplay",
    storeName: "Auronhouse.com",
    storeUrl: "https://auronhouse.com",
    platform: "YouTube",
    audienceApprox: "~29M subscribers",
    summary:
      "Large-scale merch execution built to handle peak demand moments—systems designed for performance and reliability.",
    overview:
      "A creator operating at massive scale requires infrastructure that performs under pressure and stays maintainable long-term.",
    challenge:
      "Prepare for extreme traffic and operational load during release windows while keeping the experience minimal and fast.",
    solution: [
      "Commerce infrastructure planning and implementation",
      "Operational scalability considerations for launch peaks",
      "Fulfillment and logistics planning to reduce failure points",
      "Quality control routines to maintain consistency",
    ],
    outcome: [
      "A launch-ready commerce setup designed for reliability",
      "Reduced operational risk during peak traffic moments",
      "Clear foundation for future merch programs",
    ],
    statusNote: "Store currently offline (at time of writing).",
    productTypes: ["Apparel", "Accessories"],
    audienceFocus: "High-volume YouTube audience",
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
