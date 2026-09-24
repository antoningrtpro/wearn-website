import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SkipLink from "@/components/SkipLink";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wearn — La publicité qui court avec vous",
  description:
    "Wearn transforme chaque dossard en publicité qui se répète pour les marques, et en revenu pour les coureurs qui le portent.",
  openGraph: {
    title: "Wearn — La publicité qui court avec vous",
    description:
      "Wearn transforme chaque dossard en publicité qui se répète pour les marques, et en revenu pour les coureurs qui le portent.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport = {
  themeColor: "#fbf9f6",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
