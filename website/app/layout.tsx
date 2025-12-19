import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CrisisBanner from "@/components/CrisisBanner";

export const metadata: Metadata = {
  title: "Melksham Mental Health | Real Struggles. Real Support",
  description: "Mental health support for Melksham, Wiltshire and beyond. Access resources, download our free app, and find real support.",
  keywords: ["mental health", "Melksham", "Wiltshire", "support", "resources", "crisis help"],
  authors: [{ name: "Melksham Mental Health" }],
  openGraph: {
    title: "Melksham Mental Health",
    description: "Real Struggles. Real Support.",
    type: "website",
    locale: "en_GB",
    siteName: "Melksham Mental Health",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <CrisisBanner />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
