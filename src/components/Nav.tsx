"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { Logo } from "./Logo";

const navLinks = [
  { href: "/#case-studies", label: "Case Studies" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b border-transparent bg-white/80 backdrop-blur",
        scrolled ? "border-black/5 shadow-[0_1px_0_rgba(0,0,0,0.04)]" : "",
      ].join(" ")}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-8 sm:flex">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-black/70 transition-colors hover:text-black"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="sm:hidden">
            <Link
              href="/contact"
              className="text-sm text-black/70 transition-colors hover:text-black"
            >
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
