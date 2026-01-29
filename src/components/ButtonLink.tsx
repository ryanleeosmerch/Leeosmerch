import Link from "next/link";
import { ReactNode } from "react";

export function ButtonLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm font-medium text-black/80 transition-colors hover:text-black"
    >
      {children}
      <span aria-hidden className="translate-y-[1px]">→</span>
    </Link>
  );
}
