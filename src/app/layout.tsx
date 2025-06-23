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
  title: "Books Quotes – Personal Development Book Quotes & Summaries",
  description: "Explore curated personal development book quotes and summaries from bestsellers like Atomic Habits, Power, Rich Dad Poor Dad, and more. Transform your mindset with actionable insights from top authors.",
  keywords: "personal development books, book quotes, Atomic Habits, Power, Rich Dad Poor Dad, Can't Hurt Me, Die with Zero, Mark Manson, James Clear, Robert Greene, David Goggins, Bill Perkins, Robert Kiyosaki, self-improvement, motivation, success quotes",
  authors: [{ name: "Books Quotes" }],
  openGraph: {
    title: "Books Quotes – Personal Development Book Quotes & Summaries",
    description: "Explore curated personal development book quotes and summaries from bestsellers. Transform your mindset with actionable insights from top authors.",
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
