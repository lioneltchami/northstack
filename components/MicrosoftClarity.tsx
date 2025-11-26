'use client';

import Script from 'next/script';

/**
 * Microsoft Clarity Component
 *
 * Loads Microsoft Clarity for heatmaps and session recordings.
 * Only loads in production when NEXT_PUBLIC_CLARITY_ID is configured.
 *
 * @see {@link https://clarity.microsoft.com/ Microsoft Clarity Dashboard}
 *
 * Setup:
 * 1. Create a free account at https://clarity.microsoft.com
 * 2. Add your website and get your Project ID
 * 3. Add to .env.local: NEXT_PUBLIC_CLARITY_ID=your_project_id
 * 4. Deploy and verify tracking in Clarity dashboard
 *
 * Features:
 * - Heatmaps showing where users click and scroll
 * - Session recordings to see actual user behavior
 * - Free and privacy-friendly
 * - No performance impact
 *
 * @example
 * // In your layout.tsx
 * import MicrosoftClarity from '@/components/MicrosoftClarity';
 * export default function RootLayout({ children }) {
 *   return (
 *     <html>
 *       <head>
 *         <MicrosoftClarity />
 *       </head>
 *       <body>{children}</body>
 *     </html>
 *   );
 * }
 */
export default function MicrosoftClarity() {
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  // Don't load in development
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  // Don't load if Clarity ID is not configured
  if (!clarityId) {
    if (typeof window !== 'undefined') {
      console.info(
        'ℹ️ Microsoft Clarity is not configured. Add NEXT_PUBLIC_CLARITY_ID to your environment variables to enable heatmaps and session recordings.'
      );
    }
    return null;
  }

  return (
    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${clarityId}");
      `}
    </Script>
  );
}
