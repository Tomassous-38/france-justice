import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "France Justice - Le droit français enfin accessible",
  description: "Votre référence pour comprendre le droit français. Des informations juridiques claires, accessibles et à jour. Droit du travail, fiscal, famille, pénal et plus encore.",
  keywords: "droit français, justice, juridique, avocat, loi, code civil, droit du travail, droit fiscal, droit de la famille",
  authors: [{ name: "France Justice" }],
  openGraph: {
    title: "France Justice - Le droit français enfin accessible",
    description: "Comprendre vos droits n'a jamais été aussi simple.",
    url: "https://france-justice.fr",
    siteName: "France Justice",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "France Justice - Le droit français enfin accessible",
    description: "Comprendre vos droits n'a jamais été aussi simple.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
