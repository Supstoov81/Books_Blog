import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import GoogleAnalytics from "@/components/GoogleAnalytics";
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
  title: "Book Blog - Personal Development Books & Quotes",
  description: "Discover the best personal development books with curated quotes and insights. Explore Atomic Habits, Power, and The Subtle Art of Not Giving a F*ck.",
  keywords: "books, personal development, quotes, Atomic Habits, Power, Mark Manson, James Clear, Robert Greene",
  authors: [{ name: "Book Blog" }],
  openGraph: {
    title: "Book Blog - Personal Development Books & Quotes",
    description: "Discover the best personal development books with curated quotes and insights.",
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
        <GoogleAnalytics />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
