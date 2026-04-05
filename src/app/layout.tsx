import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import GoogleAnalyticsHead from "@/components/GoogleAnalyticsHead";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Books Quotes – Personal Development Book Quotes & Summaries",
    template: "%s | Books Quotes",
  },
  description: "Discover the most powerful quotes, key lessons, and practical tips from the best personal development books. Atomic Habits, The Daily Stoic, How to Win Friends, and more.",
  keywords: "personal development books, book quotes, book summaries, Atomic Habits, The Daily Stoic, How to Win Friends, Power, Can't Hurt Me, self-improvement, motivation, success mindset, book tips",
  authors: [{ name: "Books Quotes" }],
  metadataBase: new URL("https://books-quotes.com"),
  alternates: { canonical: "https://books-quotes.com" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: "Books Quotes – Personal Development Book Quotes & Summaries",
    description: "Discover the most powerful quotes, key lessons, and practical tips from the best personal development books.",
    type: "website",
    url: "https://books-quotes.com",
    siteName: "Books Quotes",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Books Quotes – Personal Development Book Quotes & Summaries",
    description: "Discover the most powerful quotes and practical tips from the best personal development books.",
    site: "@booksquotes",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Books Quotes",
  "url": "https://books-quotes.com",
  "description": "Curated quotes, analysis and practical tips from the best personal development books.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://books-quotes.com/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google AdSense — remplace ca-pub-XXXXXXXXXX par ton Publisher ID */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX" crossOrigin="anonymous"></script> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalyticsHead />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
