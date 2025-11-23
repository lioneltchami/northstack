import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import StructuredData from '@/components/StructuredData';
import Analytics from '@/components/Analytics';
import ErrorBoundary from '@/components/ErrorBoundary';
import LazyMotionProvider from '@/components/ui/LazyMotion';
import SafariOptimizations from '@/components/SafariOptimizations';

// Optimized font loading with variable fonts and advanced typography
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'sans-serif'],
  weight: ['300', '400', '500', '600', '700'],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  preload: true,
  fallback: ['Inter', 'system-ui', 'sans-serif'],
  weight: ['400', '500', '600', '700', '800'],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://northstack.solutions';
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'NorthStack Solutions';
const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || 'Apoti Tech Inc.';
const businessLocation = process.env.NEXT_PUBLIC_BUSINESS_LOCATION || 'Calgary, Alberta';

export const metadata: Metadata = {
  title: {
    default: `${siteName} | Enterprise DevOps & Automation for Canadian Businesses`,
    template: `%s | ${siteName}`,
  },
  description:
    `Enterprise-grade DevOps, cloud infrastructure, and IT automation services in ${businessLocation}. 7+ years of experience with AWS, Docker, Kubernetes, and modern automation tools.`,
  keywords: [
    'DevSecOps',
    'cloud infrastructure',
    'automation',
    'AWS',
    'Calgary',
    'Canada',
    'IT consulting',
    'Docker',
    'Kubernetes',
    'home server',
    'DevOps',
  ],
  authors: [{ name: companyName }],
  creator: siteName,
  publisher: companyName,
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: siteUrl,
    title: `${siteName} | Enterprise DevOps & Automation`,
    description:
      `Enterprise-grade DevOps, cloud infrastructure, and IT automation services in ${businessLocation}.`,
    siteName,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} | Enterprise DevOps & Automation`,
    description:
      `Enterprise-grade DevOps, cloud infrastructure, and IT automation services in ${businessLocation}.`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        {/* Preconnect to external resources for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        <StructuredData />
        <Analytics />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <LazyMotionProvider>
            <SafariOptimizations />
            <ErrorBoundary>
              <div className="flex flex-col min-h-screen">
                <Navigation />
                <main className="flex-grow pt-20">
                  <ErrorBoundary>
                    {children}
                  </ErrorBoundary>
                </main>
                <Footer />
              </div>
            </ErrorBoundary>
          </LazyMotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
