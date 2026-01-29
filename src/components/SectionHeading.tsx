import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="max-w-[760px]">
      {eyebrow ? (
        <div className="mb-3 text-xs tracking-wide text-black/50">
          {eyebrow.toUpperCase()}
        </div>
      ) : null}
      <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
        {title}
      </h2>
      {children ? (
        <p className="mt-4 text-base leading-relaxed text-black/65 sm:text-lg">
          {children}
        </p>
      ) : null}
    </div>
  );
}
