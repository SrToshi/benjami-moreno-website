import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Benjamin Moreno Torres - Data Science & AI Lead",
  description:
    "Data scientist and AI leader with 10+ years applying ML to complex R&D problems. Based in Berlin. Background in Mathematics, Architecture, and applied AI.",
  openGraph: {
    title: "Benjamin Moreno Torres - Data Science & AI Lead",
    description: "Mathematician. Architect. Data Scientist. Based in Berlin.",
    url: "https://benjami.dev",
    siteName: "Benjamin Moreno Torres",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
