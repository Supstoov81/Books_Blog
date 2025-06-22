'use client';

import { useEffect } from 'react';
import Script from 'next/script';

// Extend Window interface for Google Analytics
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export default function GoogleAnalytics() {
  useEffect(() => {
    // Ensure gtag is available globally
    if (typeof window !== 'undefined') {
      window.gtag = window.gtag || function (...args: unknown[]) {
        (window.dataLayer = window.dataLayer || []).push(args);
      };
    }
  }, []);

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-RSTPE2680N"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RSTPE2680N');
        `}
      </Script>
    </>
  );
} 