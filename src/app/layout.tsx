import type { Metadata } from "next";
import "@/styles/globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Leeos Merch — Merchandise at creator scale",
    template: "%s — Leeos Merch",
  },
  description:
    "End-to-end merchandise operations and storefront execution for creators operating at serious scale.",
  metadataBase: new URL("https://leeosmerch.com"),
  openGraph: {
    title: "Leeos Merch",
    description:
      "Merchandise operations for creators operating at serious scale.",
    url: "https://leeosmerch.com",
    siteName: "Leeos Merch",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
