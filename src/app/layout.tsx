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
    default: "Books Quotes – Best Personal Development Books: Quotes, Tips & Summaries",
    template: "%s | Books Quotes",
  },
  description: "Curated quotes, 10 actionable tips and in-depth analysis for the best personal development books: Atomic Habits, Rich Dad Poor Dad, The Daily Stoic, How to Win Friends, Can't Hurt Me, Die with Zero, and more.",
  keywords: "personal development books, book quotes, book summaries, Atomic Habits, The Daily Stoic, How to Win Friends and Influence People, 48 Laws of Power, Can't Hurt Me, Rich Dad Poor Dad, Die with Zero, The Rational Male, Book of Pook, How Bad Do You Want It, self-improvement books, motivation quotes, success mindset, book tips, book analysis, best books to read",
  authors: [{ name: "Books Quotes" }],
  metadataBase: new URL("https://books-quotes.com"),
  alternates: { canonical: "https://books-quotes.com" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
  openGraph: {
    title: "Books Quotes – Best Personal Development Books: Quotes, Tips & Summaries",
    description: "Curated quotes, 10 actionable tips and in-depth analysis for the best personal development books: Atomic Habits, Rich Dad Poor Dad, The Daily Stoic, and more.",
    type: "website",
    url: "https://books-quotes.com",
    siteName: "Books Quotes",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Books Quotes – Best Personal Development Books: Quotes, Tips & Summaries",
    description: "Curated quotes, 10 actionable tips and in-depth analysis for the best personal development books.",
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
