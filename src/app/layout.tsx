import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Master Data Automações — Projeto Digital",
  description: "Estratégia digital completa para a Master Data Automações. Site Next.js, Google Ads, Meta Ads e ecossistema de vendas em 60 dias.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-fog text-midnight-ink font-body">
        {children}
      </body>
    </html>
  );
}
