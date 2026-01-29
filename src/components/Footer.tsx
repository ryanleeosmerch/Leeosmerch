import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-black/5 py-10">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-black/60">
            © {new Date().getFullYear()} Leeos Merch
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/#case-studies" className="text-black/60 hover:text-black">
              Case Studies
            </Link>
            <Link href="/services" className="text-black/60 hover:text-black">
              Services
            </Link>
            <Link href="/about" className="text-black/60 hover:text-black">
              About
            </Link>
            <Link href="/contact" className="text-black/60 hover:text-black">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
