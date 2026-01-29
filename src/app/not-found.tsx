import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <main className="py-24 sm:py-32">
      <Container>
        <div className="max-w-[640px]">
          <div className="text-xs tracking-wide text-black/50">404</div>
          <h1 className="mt-4 text-3xl font-medium tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-relaxed text-black/65">
            The page you’re looking for doesn’t exist. Head back to the homepage.
          </p>
          <Link
            href="/"
            className="mt-10 inline-flex text-sm font-medium text-black/80 hover:text-black"
          >
            Go home →
          </Link>
        </div>
      </Container>
    </main>
  );
}
