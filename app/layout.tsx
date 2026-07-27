import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HashScroll from "@/components/HashScroll";

export const metadata: Metadata = {
  title: "Anthology Solutions Inc. — Technology. Governed. Intelligence. Applied.",
  description:
    "Anthology Solutions Inc. specialises in Product Development, AI Governance, and Staff Augmentation — helping organisations build, govern, and scale intelligent technology.",
  keywords: ["technology", "ai", "governance", "product development", "staff augmentation"],
  authors: [{ name: "Anthology Solutions Inc." }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Anthology Solutions Inc.",
    description:
      "Technology. Governed. Intelligence. Applied.",
    url: "https://www.anthology.ooo",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <HashScroll />
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
