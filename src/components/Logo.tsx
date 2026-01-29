import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="Leeos Merch home">
      <Image
        src="/logo.svg"
        alt="Leeos Merch"
        width={120}
        height={24}
        priority
        className="h-6 w-auto"
      />
    </Link>
  );
}
